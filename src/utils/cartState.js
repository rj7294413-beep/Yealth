/**
 * Yealth Unified Cart & Order Management Module
 * Supports bundling Colleges & Hostels into a single application package.
 */

const CART_STORAGE_KEY = "yealth_cart";
const ORDERS_STORAGE_KEY = "yealth_orders";
export const ADMIN_PHONE = "919110155081";

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return { colleges: [], hostels: [] };
    const parsed = JSON.parse(raw);
    return {
      colleges: Array.isArray(parsed.colleges) ? parsed.colleges : [],
      hostels: Array.isArray(parsed.hostels) ? parsed.hostels : []
    };
  } catch (e) {
    console.error("Failed to read cart from localStorage", e);
    return { colleges: [], hostels: [] };
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("yealth-cart-updated", { detail: cart }));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
}

export function getCartCount() {
  const cart = getCart();
  return (cart.colleges.length || 0) + (cart.hostels.length || 0);
}

export function addToCart(item, type) {
  const cart = getCart();
  if (type === "college") {
    const existing = cart.colleges.find(c => c.id === item.id);
    if (!existing) {
      cart.colleges.push({
        id: item.id,
        name: item.name,
        shortName: item.shortName || item.name,
        type: item.type,
        city: item.city,
        image: item.image,
        fees: item.fees,
        avgPackage: item.avgPackage,
        category: item.category,
        selectedCourse: item.selectedCourse || null,
        addedAt: new Date().toISOString()
      });
      saveCart(cart);
      return { success: true, message: `${item.shortName || item.name} added to your wishlist!` };
    } else {
      if (item.selectedCourse) {
        existing.selectedCourse = item.selectedCourse;
        saveCart(cart);
        return { success: true, message: `Updated ${item.shortName || item.name} with course ${item.selectedCourse}!` };
      }
      return { success: false, message: `${item.shortName || item.name} is already in your wishlist!` };
    }
  } else if (type === "hostel") {
    const exists = cart.hostels.some(h => h.id === item.id);
    if (!exists) {
      cart.hostels.push({
        id: item.id,
        title: item.title,
        city: item.city,
        location: item.location,
        type: item.type,
        price: item.price,
        image: item.image,
        category: item.category,
        addedAt: new Date().toISOString()
      });
      saveCart(cart);
      return { success: true, message: `${item.title} added to your wishlist!` };
    } else {
      return { success: false, message: `${item.title} is already in your wishlist!` };
    }
  }
  return { success: false, message: "Unknown item type" };
}

export function removeFromCart(id, type) {
  const cart = getCart();
  if (type === "college") {
    cart.colleges = cart.colleges.filter(c => c.id !== id);
  } else if (type === "hostel") {
    cart.hostels = cart.hostels.filter(h => h.id !== id);
  }
  saveCart(cart);
  return cart;
}

export function clearCart() {
  const empty = { colleges: [], hostels: [] };
  saveCart(empty);
  return empty;
}

export function getOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to read orders from localStorage", e);
    return [];
  }
}

export function createOrder(applicantInfo) {
  const cart = getCart();
  const orderId = "YTH-" + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();

  const collegeNames = cart.colleges.map(c => `• ${c.name} (${c.type}, Fees: ${c.fees})`).join("\n") || "None selected";
  const hostelNames = cart.hostels.map(h => `• ${h.title} (${h.location}, ₹${h.price}/mo)`).join("\n") || "None selected";

  const isLoanNeeded = Boolean(applicantInfo.loanRequired);
  const loanTypeLabel = applicantInfo.loanType === "collateral_free" 
    ? "Collateral-Free (Unsecured - Up to ₹50 Lakhs)" 
    : applicantInfo.loanType === "with_collateral" 
      ? "With Collateral (Secured - Lowest ROI from 8.2%)" 
      : "Not Required";
  const preferredBank = applicantInfo.preferredBank || "Best Available Banking Partner";

  // Build the WhatsApp message sent to Admin (+91 9110155081)
  const adminMsg = `🚨 *NEW YEALTH APPLICATION DOSSIER EXECUTED*\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `📋 *Tracking ID:* ${orderId}\n` +
    `👤 *Student Name:* ${applicantInfo.name || "Student"}\n` +
    `📞 *WhatsApp Phone:* ${applicantInfo.phone || "Not provided"}\n` +
    `✉️ *Email Address:* ${applicantInfo.email || "Not provided"}\n` +
    `🎯 *Desired Course:* ${applicantInfo.desiredCourse || "UG / Professional"}\n` +
    `📅 *Target Move-in:* ${applicantInfo.moveInMonth || "Upcoming Academic Session"}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `🏛️ *Selected Colleges (${cart.colleges.length}):*\n${collegeNames}\n\n` +
    `🏠 *Selected Hostels/PGs (${cart.hostels.length}):*\n${hostelNames}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *Education Loan Requirement:*\n` +
    `${isLoanNeeded ? `YES - ${loanTypeLabel}\n🏦 Preferred Bank: ${preferredBank}` : "No Loan Assistance Needed"}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `⚡ *Status:* Order Confirmed on Portal. Waiting for counselor WhatsApp confirmation with student.`;

  const adminWhatsAppUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(adminMsg)}`;

  const order = {
    id: orderId,
    createdAt: now.toISOString(),
    displayDate: now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    applicant: {
      name: applicantInfo.name || "Student Applicant",
      phone: applicantInfo.phone || "+91 9110155081",
      email: applicantInfo.email || "student@yealth.in",
      desiredCourse: applicantInfo.desiredCourse || "Undergraduate / Professional Course",
      moveInMonth: applicantInfo.moveInMonth || "Immediate / Academic Session",
      preferredSharing: applicantInfo.preferredSharing || "Twin Sharing / Single"
    },
    loan: {
      required: isLoanNeeded,
      type: applicantInfo.loanType || "none",
      typeLabel: loanTypeLabel,
      preferredBank: preferredBank
    },
    colleges: [...cart.colleges],
    hostels: [...cart.hostels],
    status: "Waiting for Student Confirmation",
    statusBadge: "Pending Confirmation",
    confirmationStatus: "waiting_confirmation",
    adminWhatsAppUrl: adminWhatsAppUrl,
    timeline: [
      {
        milestone: "Application Bundle Submitted",
        description: "Preferences logged. Notification automatically dispatched to Yealth Admin on WhatsApp.",
        status: "completed",
        time: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
      },
      {
        milestone: "Academic & Document Verification",
        description: "Verify Class 10/12 marksheets, entrance scorecard, and room availability.",
        status: "in-progress",
        time: "Waiting for student confirmation"
      },
      {
        milestone: "Personal Academic & Living Advisor Assigned",
        description: "Dedicated Yealth advisor verifies seat matrix and schedules physical room visit.",
        status: "pending",
        time: "Within 2 Hours"
      },
      {
        milestone: "Seat Allotment & Zero-Brokerage Voucher",
        description: "Formal seat reservation and room allotment confirmation voucher.",
        status: "pending",
        time: "Final Step"
      }
    ]
  };

  const existingOrders = getOrders();
  existingOrders.unshift(order);
  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(existingOrders));
    window.dispatchEvent(new CustomEvent("yealth-orders-updated", { detail: existingOrders }));
  } catch (e) {
    console.error("Failed to save order", e);
  }

  // Clear cart after checkout
  clearCart();
  return order;
}

/**
 * Advance order to the next milestone when student confirms
 */
export function confirmOrderNextStep(orderId) {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx === -1) return null;

  const now = new Date();
  orders[idx].confirmationStatus = "confirmed";
  orders[idx].status = "Academic & Document Verification";
  orders[idx].statusBadge = "Under Verification";

  if (orders[idx].timeline && orders[idx].timeline.length >= 2) {
    orders[idx].timeline[0].status = "completed";
    orders[idx].timeline[1].status = "completed";
    orders[idx].timeline[1].time = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
    if (orders[idx].timeline[2]) {
      orders[idx].timeline[2].status = "in-progress";
      orders[idx].timeline[2].time = "Counselor Contacting on WhatsApp";
    }
  }

  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent("yealth-orders-updated", { detail: orders }));
  } catch (e) {
    console.error("Failed to update order", e);
  }

  return orders[idx];
}