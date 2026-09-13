/**
 * Yealth User Authentication & Profile Module
 * Persistent client-side session stored in localStorage with real credential validation.
 */

const AUTH_USER_KEY = "yealth_auth_user";
const ALL_USERS_KEY = "yealth_registered_users";

// Default pre-seeded verified accounts for testing and investor preview
const DEFAULT_ACCOUNTS = [
  {
    id: "usr-1001",
    name: "Aryan Sharma",
    email: "student@yealth.com",
    password: "yealth123",
    phone: "+91 9110155081",
    avatar: "A",
    role: "Student Applicant",
    registeredAt: "2025-01-15T09:00:00Z"
  },
  {
    id: "usr-1002",
    name: "Priya Patel",
    email: "priya@yealth.com",
    password: "yealth123",
    phone: "+91 9876543210",
    avatar: "P",
    role: "Medical Aspirant",
    registeredAt: "2025-02-10T14:30:00Z"
  }
];

export function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(ALL_USERS_KEY);
    if (!raw) {
      localStorage.setItem(ALL_USERS_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
      return DEFAULT_ACCOUNTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(ALL_USERS_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
      return DEFAULT_ACCOUNTS;
    }
    return parsed;
  } catch (e) {
    return DEFAULT_ACCOUNTS;
  }
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Strict Sign In verification.
 * Only succeeds if email exists and password strictly matches.
 * Returns { success: true, user } or { success: false, error: string }
 */
export function signIn(email, password) {
  const cleanEmail = (email || "").trim().toLowerCase();
  const cleanPassword = (password || "").trim();

  if (!cleanEmail) {
    return { success: false, error: "Please enter your registered email address." };
  }
  if (!cleanPassword) {
    return { success: false, error: "Please enter your password." };
  }

  const users = getRegisteredUsers();
  const matchedUser = users.find(u => (u.email || "").toLowerCase() === cleanEmail);

  if (!matchedUser) {
    return { 
      success: false, 
      error: `No account found with '${cleanEmail}'. Please check your email or click 'Create an Account' below.` 
    };
  }

  if (matchedUser.password !== cleanPassword) {
    return { 
      success: false, 
      error: "Incorrect password! Please enter the valid password or use demo login (student@yealth.com / yealth123)." 
    };
  }

  // Sanitized session user object
  const sessionUser = {
    id: matchedUser.id,
    name: matchedUser.name,
    email: matchedUser.email,
    phone: matchedUser.phone || "+91 9110155081",
    avatar: matchedUser.avatar || matchedUser.name.charAt(0).toUpperCase(),
    role: matchedUser.role || "Student Applicant",
    signedInAt: new Date().toISOString()
  };

  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(sessionUser));
  window.dispatchEvent(new CustomEvent("yealth-auth-updated", { detail: sessionUser }));
  return { success: true, user: sessionUser };
}

/**
 * Strict Sign Up registration.
 * Saves user to localStorage["yealth_registered_users"].
 * Returns { success: true, user } or { success: false, error: string }
 */
export function signUp(name, email, phone, password) {
  const cleanName = (name || "").trim();
  const cleanEmail = (email || "").trim().toLowerCase();
  const cleanPhone = (phone || "").trim();
  const cleanPassword = (password || "").trim();

  if (!cleanName || cleanName.length < 2) {
    return { success: false, error: "Please enter your full legal name (at least 2 characters)." };
  }
  if (!cleanEmail || !cleanEmail.includes("@") || !cleanEmail.includes(".")) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!cleanPassword || cleanPassword.length < 6) {
    return { success: false, error: "Password must be at least 6 characters long." };
  }

  const users = getRegisteredUsers();
  const existingUser = users.find(u => (u.email || "").toLowerCase() === cleanEmail);

  if (existingUser) {
    return { 
      success: false, 
      error: `An account with '${cleanEmail}' is already registered. Please Sign In.` 
    };
  }

  const newUser = {
    id: "usr-" + Math.floor(1000 + Math.random() * 9000),
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || "+91 9110155081",
    password: cleanPassword,
    avatar: cleanName.charAt(0).toUpperCase(),
    role: "Student Applicant",
    registeredAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem(ALL_USERS_KEY, JSON.stringify(users));

  const sessionUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    avatar: newUser.avatar,
    role: newUser.role,
    signedInAt: new Date().toISOString()
  };

  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(sessionUser));
  window.dispatchEvent(new CustomEvent("yealth-auth-updated", { detail: sessionUser }));
  return { success: true, user: sessionUser };
}

export function signOut() {
  localStorage.removeItem(AUTH_USER_KEY);
  window.dispatchEvent(new CustomEvent("yealth-auth-updated", { detail: null }));
}