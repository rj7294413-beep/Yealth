import { SITE_CONFIG } from "./config/siteConfig.js";
import { PROPERTIES, CATEGORY_FILTERS } from "./data/properties.js";
import { COLLEGES } from "./data/colleges.js";
import { openWhatsAppInquiry, getWhatsAppUrl } from "./utils/whatsapp.js";
import { 
  getCart, 
  addToCart, 
  removeFromCart, 
  getCartCount, 
  createOrder, 
  getOrders, 
  clearCart,
  confirmOrderNextStep,
  ADMIN_PHONE
} from "./utils/cartState.js";
import { 
  getCurrentUser, 
  signIn, 
  signUp, 
  signOut 
} from "./utils/authState.js";

// Helper to load user-submitted properties from localStorage
function getMergedProperties() {
  try {
    const raw = localStorage.getItem("yealth_listed_properties");
    const listed = raw ? JSON.parse(raw) : [];
    return [...listed, ...PROPERTIES];
  } catch (e) {
    return PROPERTIES;
  }
}

// Global Application State
let activePropertyList = getMergedProperties();

const state = {
  activeCity: "All Cities",
  activeCategory: "all",
  searchQuery: {
    location: "",
    moveInMonth: "Immediate",
    roomType: "All Types"
  },
  selectedProperty: null,
  activeModalTab: "photos",
  selectedMealDay: "monday",
  activeCollegeId: null
};

// Initialize App on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Read deep-linked college parameter if provided
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const colParam = urlParams.get("college") || urlParams.get("collegeId");
    if (colParam) {
      state.activeCollegeId = colParam;
    }
  } catch (e) {
    console.error("Failed to parse URL query params", e);
  }

  renderCityFilters();
  renderCategoryTabs();
  renderProperties();
  renderCollegeRecommendations();
  setupSearchForm();
  setupLeadCapture();
  setupModals();
  setupQuickActions();
  setupSEOKeywords();
  setupAuthWidget();
  setupCartUI();
  setupOrdersUI();
  lucide.createIcons();

  // Listen to global events
  window.addEventListener("yealth-cart-updated", () => {
    updateCartBadges();
    renderCartDrawerContent();
    renderProperties();
    renderCollegeRecommendations();
  });

  window.addEventListener("yealth-auth-updated", () => {
    setupAuthWidget();
  });
});

/**
 * Render Horizontal City Strip
 */
function renderCityFilters() {
  const container = document.getElementById("city-filters-container");
  if (!container) return;

  container.innerHTML = SITE_CONFIG.operatingCities
    .map(city => {
      const isActive = state.activeCity === city;
      return `
        <button 
          data-city="${city}" 
          class="city-chip px-4 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
            isActive
              ? "bg-[#082A50] text-white border-[#082A50] shadow-sm"
              : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
          }">
          ${city}
        </button>
      `;
    })
    .join("");

  container.querySelectorAll(".city-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const city = btn.dataset.city;
      state.activeCity = city;
      renderCityFilters();

      const locationInput = document.getElementById("search-location");
      if (locationInput && city !== "All Cities") {
        locationInput.value = city;
        state.searchQuery.location = city;
      } else if (locationInput && city === "All Cities") {
        locationInput.value = "";
        state.searchQuery.location = "";
      }

      renderProperties();
      showToast(`Showing stays in: ${city}`);
    });
  });
}

/**
 * Render Category Filter Tabs
 */
function renderCategoryTabs() {
  const container = document.getElementById("category-tabs-container");
  if (!container) return;

  container.innerHTML = CATEGORY_FILTERS.map(cat => {
    const isActive = state.activeCategory === cat.id;
    return `
      <button 
        data-category="${cat.id}"
        class="category-tab px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-[#082A50] text-white shadow-sm border border-[#082A50]"
            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
        }">
        ${cat.label}
      </button>
    `;
  }).join("");

  container.querySelectorAll(".category-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.dataset.category;
      renderCategoryTabs();
      renderProperties();
    });
  });
}

/**
 * Filter properties based on current state
 */
function getFilteredProperties() {
  return activePropertyList.filter(item => {
    // City filter
    if (state.activeCity !== "All Cities" && item.city !== state.activeCity) {
      return false;
    }

    // Category filter
    if (state.activeCategory !== "all") {
      if (state.activeCategory === "Greater Noida Special") {
        if (item.city !== "Greater Noida" && !item.location.toLowerCase().includes("knowledge park")) {
          return false;
        }
      } else if (state.activeCategory === "Near Coaching Hubs" && item.category !== "Near Coaching Hubs") {
        return false;
      } else if (state.activeCategory === "Girls Only" && item.category !== "Girls Only" && !item.type.includes("Girls Only")) {
        return false;
      } else if (state.activeCategory === "Boys Only" && item.category !== "Boys Only" && !item.type.includes("Boys Only")) {
        return false;
      } else if (state.activeCategory === "Co-Living" && item.category !== "Co-Living") {
        return false;
      }
    }

    // Search query location filter
    if (state.searchQuery.location.trim()) {
      const q = state.searchQuery.location.toLowerCase().trim();
      const matchLoc = item.location.toLowerCase().includes(q);
      const matchCity = item.city.toLowerCase().includes(q);
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchTags = (item.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchLoc && !matchCity && !matchTitle && !matchTags) {
        return false;
      }
    }

    // Room Type filter
    if (state.searchQuery.roomType && state.searchQuery.roomType !== "All Types") {
      if (item.roomOptions && !item.roomOptions.includes(state.searchQuery.roomType)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Render Properties Grid
 */
function renderProperties() {
  const container = document.getElementById("properties-grid");
  const countElement = document.getElementById("properties-count");
  if (!container) return;

  const filtered = getFilteredProperties();
  const cart = getCart();
  const cartColleges = cart.colleges || [];

  // Determine active college for proximity badge display
  let activeCollege = null;
  if (state.activeCollegeId) {
    activeCollege = cartColleges.find(c => c.id === state.activeCollegeId) ||
      COLLEGES.find(c => c.id === state.activeCollegeId);
  }
  if (!activeCollege && cartColleges.length > 0) {
    activeCollege = cartColleges[0];
  }

  if (countElement) {
    countElement.innerHTML = `Showing <span class="font-bold text-[#082A50]">${filtered.length}</span> verified student stays`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-dashed border-gray-300 p-8">
        <div class="w-16 h-16 bg-blue-50 text-[#082A50] rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="building-2" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">No Properties Found</h3>
        <p class="text-gray-500 max-w-md mx-auto mb-6 text-sm">
          We couldn't find an exact match for "${state.searchQuery.location || state.activeCity}". Talk directly with our Student Living Advisor in Knowledge Park 2 to find unlisted or upcoming rooms!
        </p>
        <button 
          id="btn-custom-inquiry-empty"
          class="inline-flex items-center gap-2 bg-[#1AB64F] hover:bg-[#159c42] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition-all">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          Inquire Greater Noida / Custom Location on WhatsApp
        </button>
      </div>
    `;

    const emptyBtn = document.getElementById("btn-custom-inquiry-empty");
    if (emptyBtn) {
      emptyBtn.addEventListener("click", () => {
        openWhatsAppInquiry({
          city: state.activeCity !== "All Cities" ? state.activeCity : "",
          location: state.searchQuery.location,
          roomType: state.searchQuery.roomType
        });
      });
    }

    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered
    .map(property => {
      const discountPercent = property.originalPrice 
        ? Math.round(((property.originalPrice - property.price) / property.originalPrice) * 100)
        : null;

      const isInCart = cart.hostels.some(h => h.id === property.id);

      // Check if property matches active college for proximity highlight
      let collegeMatchBadge = "";
      if (activeCollege) {
        const pProxLower = (property.proximityBadge || "").toLowerCase();
        const pTitleLower = (property.title || "").toLowerCase();
        const pTagsLower = (property.tags || []).map(t => t.toLowerCase()).join(" ");
        const pLocLower = (property.location || "").toLowerCase();
        const cShortLower = (activeCollege.shortName || "").toLowerCase();
        const cLocLower = (activeCollege.location || "").toLowerCase();

        if (cShortLower && (pProxLower.includes(cShortLower) || pTitleLower.includes(cShortLower) || pTagsLower.includes(cShortLower))) {
          collegeMatchBadge = `Walking to ${activeCollege.shortName}`;
        } else if (cLocLower.includes("knowledge park 2") && (pLocLower.includes("knowledge park 2") || pProxLower.includes("kp 2") || pProxLower.includes("kp2"))) {
          collegeMatchBadge = `Campus Zone (${activeCollege.shortName})`;
        } else if (cLocLower.includes("knowledge park 3") && (pLocLower.includes("knowledge park 3") || pProxLower.includes("kp 3") || pProxLower.includes("kp3"))) {
          collegeMatchBadge = `Campus Zone (${activeCollege.shortName})`;
        } else if (cLocLower.includes("techzone") && pLocLower.includes("techzone")) {
          collegeMatchBadge = `Near ${activeCollege.shortName}`;
        } else if (cLocLower.includes("north campus") && (pProxLower.includes("north campus") || pLocLower.includes("north campus"))) {
          collegeMatchBadge = `Walking to ${activeCollege.shortName}`;
        } else if (cLocLower.includes("hauz khas") && (pProxLower.includes("iit") || pProxLower.includes("hauz khas"))) {
          collegeMatchBadge = `Near ${activeCollege.shortName}`;
        } else if (cLocLower.includes("koramangala") && pLocLower.includes("koramangala")) {
          collegeMatchBadge = `Near ${activeCollege.shortName}`;
        } else if (cLocLower.includes("viman nagar") && pLocLower.includes("viman nagar")) {
          collegeMatchBadge = `Near ${activeCollege.shortName}`;
        }
      }

      return `
        <div data-id="${property.id}" class="property-card cursor-pointer oyo-card-shadow bg-white rounded-2xl overflow-hidden border ${collegeMatchBadge ? 'border-[#C59943] ring-2 ring-[#DFB15B]/30' : 'border-gray-200'} hover:border-[#082A50] hover:shadow-2xl transition-all duration-300 flex flex-col group relative">
          <!-- Card Image & Badges -->
          <div class="relative h-52 w-full overflow-hidden bg-gray-100">
            <img 
              src="${property.image}" 
              alt="${property.title}" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            
            <!-- Proximity Badge -->
            <div class="absolute top-3 left-3 max-w-[65%]">
              <span class="bg-[#082A50]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow flex items-center gap-1.5 border border-white/10 truncate">
                <i data-lucide="map-pin" class="w-3 h-3 text-[#DFB15B] shrink-0"></i>
                <span class="truncate">${property.proximityBadge || property.location}</span>
              </span>
            </div>

            <!-- Verified & Rating Badges -->
            <div class="absolute top-3 right-3 flex flex-col items-end gap-1.5">
              ${
                property.isUserListed 
                  ? `<span class="bg-[#C59943] text-white text-[10px] font-black px-2 py-0.5 rounded shadow">Newly Listed</span>`
                  : `<span class="bg-[#1AB64F] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                      <i data-lucide="shield-check" class="w-3 h-3"></i>
                      Verified
                     </span>`
              }
              <span class="bg-white/95 text-gray-900 text-xs font-bold px-2 py-0.5 rounded shadow flex items-center gap-1 border border-amber-200">
                <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                ${property.rating || "4.8"}
              </span>
            </div>

            <!-- Virtual Tour Floating Tag -->
            <button 
              data-id="${property.id}"
              data-tab="tour"
              class="btn-quick-tour absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#082A50] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5 border border-slate-200 transition-all hover:scale-105">
              <i data-lucide="scan" class="w-3.5 h-3.5 text-[#C59943]"></i>
              <span>360° Tour</span>
            </button>

            ${
              collegeMatchBadge
                ? `<div class="absolute bottom-3 left-3 bg-[#082A50]/95 backdrop-blur-xs text-[#DFB15B] border border-[#DFB15B]/60 text-[10px] font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                    <i data-lucide="sparkles" class="w-3 h-3 text-[#DFB15B]"></i>
                    <span class="truncate">${collegeMatchBadge}</span>
                   </div>`
                : discountPercent 
                  ? `<div class="absolute bottom-3 left-3 bg-[#C59943] text-white text-[11px] font-black px-2.5 py-0.5 rounded shadow-sm">
                      ${discountPercent}% OFF
                     </div>`
                  : ""
            }
          </div>

          <!-- Card Content -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <!-- Type & City -->
              <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span class="font-semibold text-gray-700 flex items-center gap-1">
                  <i data-lucide="users" class="w-3 h-3 text-[#082A50]"></i>
                  ${property.type}
                </span>
                <span class="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700">
                  ${property.city}
                </span>
              </div>

              <!-- Property Title -->
              <h3 class="text-base font-bold text-gray-900 hover:text-[#082A50] cursor-pointer transition-colors line-clamp-1 property-title-btn" data-id="${property.id}">
                ${property.title}
              </h3>

              <!-- Exact Location -->
              <p class="text-xs text-gray-500 flex items-center gap-1 mt-1 mb-3">
                <i data-lucide="navigation" class="w-3 h-3 text-gray-400"></i>
                ${property.location}
              </p>

              <!-- Tags / Amenities -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                ${(property.tags || [])
                  .slice(0, 3)
                  .map(tag => `
                    <span class="text-[11px] bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded">
                      ${tag}
                    </span>
                  `)
                  .join("")}
              </div>
            </div>

            <!-- Price & Action CTA -->
            <div class="pt-3 border-t border-gray-100 mt-auto">
              <div class="flex items-baseline justify-between mb-3">
                <div>
                  <span class="text-xs text-gray-500 block">Starting from</span>
                  <div class="flex items-baseline gap-1.5">
                    <span class="text-lg font-black text-gray-900">₹${property.price.toLocaleString("en-IN")}</span>
                    <span class="text-xs text-gray-500">/mo</span>
                    ${
                      property.originalPrice
                        ? `<span class="text-xs text-gray-400 line-through">₹${property.originalPrice.toLocaleString("en-IN")}</span>`
                        : ""
                    }
                  </div>
                </div>
                <span class="text-[11px] font-bold text-[#1AB64F] bg-green-50 px-2 py-0.5 rounded border border-green-200">
                  Zero Brokerage
                </span>
              </div>

              <!-- Dual Action Buttons: Add to Wishlist + WhatsApp -->
              <div class="grid grid-cols-2 gap-2 mb-2">
                <button 
                  data-hostel-id="${property.id}"
                  class="btn-add-hostel-cart text-xs font-extrabold py-2.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isInCart 
                      ? "bg-rose-50 text-rose-600 border border-rose-200"
                      : "bg-[#082A50] hover:bg-[#051C36] text-white"
                  }">
                  <i data-lucide="${isInCart ? 'check' : 'heart'}" class="w-3.5 h-3.5 ${isInCart ? 'text-rose-600' : 'text-[#DFB15B]'}"></i>
                  <span>${isInCart ? 'In Wishlist' : 'Add to Wishlist'}</span>
                </button>
                <button 
                  data-whatsapp-property="${property.title}"
                  class="btn-whatsapp-inquiry bg-[#1AB64F] hover:bg-[#159c42] text-white text-xs font-bold py-2.5 px-2 rounded-lg flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer">
                  <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
                  <span>Book Visit</span>
                </button>
              </div>

              <!-- View Details & Tour Button -->
              <button 
                data-id="${property.id}"
                data-tab="photos"
                class="btn-open-property-details w-full text-center text-xs font-bold text-[#082A50] bg-slate-50 hover:bg-amber-50 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#C59943] cursor-pointer">
                <i data-lucide="eye" class="w-3.5 h-3.5 text-[#C59943]"></i>
                <span>View Full Details, Rooms & 360° Tour</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-400"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  // Attach card-level event handlers
  container.querySelectorAll(".btn-whatsapp-inquiry").forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.whatsappProperty;
      openWhatsAppInquiry({ propertyTitle: title });
    });
  });

  container.querySelectorAll(".btn-add-hostel-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.hostelId;
      const prop = activePropertyList.find(p => p.id === id);
      if (prop) {
        const inCart = getCart().hostels.some(h => h.id === id);
        if (inCart) {
          removeFromCart(id, "hostel");
          showToast(`Removed ${prop.title} from Wishlist`, "info");
        } else {
          const res = addToCart(prop, "hostel");
          showToast(res.message, res.success ? "success" : "info");
        }
        renderProperties();
        renderCollegeRecommendations();
      }
    });
  });

  // Full-Card Click Handler: tapping anywhere on the card opens the complete details interface
  container.querySelectorAll(".property-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Avoid opening modal if user clicked Add to Cart or WhatsApp directly
      if (e.target.closest(".btn-add-hostel-cart") || e.target.closest(".btn-whatsapp-inquiry")) {
        return;
      }
      const id = card.dataset.id;
      const quickTourBtn = e.target.closest(".btn-quick-tour");
      const tab = quickTourBtn ? "tour" : "photos";
      const prop = activePropertyList.find(p => p.id === id);
      if (prop) openPropertyModal(prop, tab);
    });
  });

  lucide.createIcons();
}

/**
 * Setup OYO-Style Search Form
 */
function setupSearchForm() {
  const form = document.getElementById("oyo-search-form");
  const locationInput = document.getElementById("search-location");
  const monthSelect = document.getElementById("search-month");
  const roomTypeSelect = document.getElementById("search-roomtype");
  const whatsappSearchBtn = document.getElementById("btn-search-whatsapp");

  if (!form) return;

  const handleSearchAction = (triggerWhatsApp = false) => {
    const loc = locationInput ? locationInput.value : "";
    const month = monthSelect ? monthSelect.value : "Immediate";
    const room = roomTypeSelect ? roomTypeSelect.value : "All Types";

    state.searchQuery.location = loc;
    state.searchQuery.moveInMonth = month;
    state.searchQuery.roomType = room;

    renderProperties();

    const targetSection = document.getElementById("curated-stays-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    if (triggerWhatsApp) {
      openWhatsAppInquiry({
        location: loc,
        moveInMonth: month,
        roomType: room
      });
    } else {
      showToast(`Filter applied for: ${loc || "All Locations"}`);
    }
  };

  form.addEventListener("submit", e => {
    e.preventDefault();
    handleSearchAction(false);
  });

  if (whatsappSearchBtn) {
    whatsappSearchBtn.addEventListener("click", e => {
      e.preventDefault();
      handleSearchAction(true);
    });
  }

  document.querySelectorAll(".quick-loc-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const loc = pill.dataset.location;
      if (locationInput) {
        locationInput.value = loc;
        state.searchQuery.location = loc;
        renderProperties();
        const targetSection = document.getElementById("curated-stays-section");
        if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * Lead Capture & Newsletter Bar
 */
function setupLeadCapture() {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("newsletter-email");

  if (!form || !emailInput) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    emailInput.value = "";
    showToast("Thanks! You're on the exclusive Yealth student discount list. 🎉");
  });
}

/**
 * Interactive Modals (List PG, Campus Partner, Property Detail, Auth, Cart, Orders)
 */
function setupModals() {
  document.querySelectorAll(".modal-container").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal || e.target.closest(".btn-close-modal")) {
        closeAllModals();
      }
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAllModals();
  });

  // List Property trigger
  document.querySelectorAll(".btn-trigger-list-property").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("modal-list-property");
      if (modal) modal.classList.remove("hidden");
    });
  });

  // Campus Partner trigger
  document.querySelectorAll(".btn-trigger-campus").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("modal-campus");
      if (modal) modal.classList.remove("hidden");
    });
  });

  // Fully Functional List Property Form Submission
  const listForm = document.getElementById("form-list-property");
  if (listForm) {
    listForm.addEventListener("submit", e => {
      e.preventDefault();

      const title = document.getElementById("prop-name")?.value || "Student Living Hub";
      const ownerName = document.getElementById("owner-name")?.value || "Property Owner";
      const ownerPhone = document.getElementById("owner-phone")?.value || "";
      const city = document.getElementById("prop-city")?.value || "Greater Noida";
      const location = document.getElementById("prop-location")?.value || "Knowledge Park 2, Greater Noida";
      const type = document.getElementById("prop-type")?.value || "Co-Living Student PG";
      const rent = parseInt(document.getElementById("prop-rent")?.value || "7500", 10);
      const roomTypes = Array.from(document.querySelectorAll("input[name='room-type']:checked")).map(cb => cb.value);
      const amenities = Array.from(document.querySelectorAll("input[name='prop-amenities']:checked")).map(cb => cb.value);
      const imageUrl = document.getElementById("prop-image-url")?.value || "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80";

      const newProperty = {
        id: "listed-" + Date.now(),
        title: title,
        location: location,
        city: city,
        type: type,
        category: type.includes("Girls") ? "Girls Only" : type.includes("Boys") ? "Boys Only" : "Co-Living",
        roomOptions: roomTypes.length > 0 ? roomTypes : ["Single Private", "Twin Sharing"],
        price: rent,
        originalPrice: Math.round(rent * 1.25),
        proximityBadge: location.includes("Knowledge Park") ? "Knowledge Park 2 Verified" : "Direct Owner Verified",
        isVerified: true,
        isUserListed: true,
        ownerContact: { name: ownerName, phone: ownerPhone },
        tags: ["Newly Listed", "Owner Verified", "Zero Brokerage"],
        amenities: amenities.length > 0 ? amenities : ["Attached Washroom", "High-speed Wi-Fi", "4-Time Buffet Meals", "AC / Inverter"],
        image: imageUrl,
        images: [imageUrl],
        virtualTour: [
          { name: "Main Bedroom View", viewUrl: imageUrl, desc: "Newly onboarded student stay directly from owner." }
        ],
        virtualAmenities: [
          { name: "Wi-Fi & Power", icon: "wifi", spec: "High-speed connection with backup" },
          { name: "Hygienic Meals", icon: "utensils", spec: "Home-style food prepared daily" }
        ],
        mealPlan: {
          monday: { day: "Monday", breakfast: "Stuffed Paratha + Tea", lunch: "Dal, Rice, Roti, Sabzi", snacks: "Pakora + Chai", dinner: "Paneer / Egg Curry, Rice, Roti" }
        },
        rating: "5.0",
        reviewsCount: 1
      };

      // Save to localStorage
      try {
        const raw = localStorage.getItem("yealth_listed_properties");
        const existing = raw ? JSON.parse(raw) : [];
        existing.unshift(newProperty);
        localStorage.setItem("yealth_listed_properties", JSON.stringify(existing));
      } catch (err) {
        console.error("Failed to save property", err);
      }

      // Prepend to active list and re-render
      activePropertyList = [newProperty, ...activePropertyList];
      renderProperties();

      closeAllModals();
      showToast(`🎉 "${title}" in ${city} has been listed live on Yealth!`, "success");

      // Offer WhatsApp verification link to Yealth Team
      const text = `Hi Yealth Team, I have listed my property: "${title}" located at "${location}". Rent: ₹${rent}/mo. Please verify and connect with me (${ownerName}, Phone: ${ownerPhone}).`;
      const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
      setTimeout(() => {
        window.open(url, "_blank");
      }, 800);
    });
  }
}

export function closeAllModals() {
  document.querySelectorAll(".modal-container").forEach(m => m.classList.add("hidden"));
}

/**
 * Open Property Detail Modal with 4 Interactive Tabs:
 * 1. Overview & Photos
 * 2. 360° Virtual Tour Simulator
 * 3. Virtual Amenities Specs
 * 4. 7-Day Meal Plan
 */
export function openPropertyModal(property, defaultTab = "photos") {
  const modal = document.getElementById("modal-property-detail");
  if (!modal) return;

  state.selectedProperty = property;
  state.activeModalTab = defaultTab;

  const content = document.getElementById("modal-property-content");
  if (!content) return;

  const images = property.images && property.images.length > 0 ? property.images : [property.image];
  const tours = property.virtualTour || [
    { name: "Main Bedroom", viewUrl: property.image, desc: "Furnished room with study desk and wardrobe." }
  ];
  const mealPlan = property.mealPlan || {};
  const currentDayPlan = mealPlan[state.selectedMealDay] || mealPlan.monday || {
    day: "Daily",
    breakfast: "Aloo Paratha / Dosa with Chutney + Tea / Coffee",
    lunch: "Dal Makhani, Seasonal Sabzi, Basmati Rice, Roti, Salad",
    snacks: "Samosa / Sandwiches + Masala Chai",
    dinner: "Paneer Butter Masala, Dal Tadka, Phulkas, Rice, Sweet"
  };

  const cart = getCart();
  const isInCart = cart.hostels.some(h => h.id === property.id);

  content.innerHTML = `
    <!-- Modal Top Header -->
    <div class="relative bg-[#071A33] text-white p-5 rounded-t-2xl flex items-start justify-between border-b border-white/10">
      <div>
        <div class="flex items-center gap-2 mb-1.5 flex-wrap">
          <span class="bg-[#1AB64F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <i data-lucide="shield-check" class="w-3 h-3"></i>
            100% Yealth Verified
          </span>
          <span class="bg-white/10 text-slate-200 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/15">
            ${property.type}
          </span>
          <span class="bg-amber-500/20 text-[#DFB15B] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <i data-lucide="star" class="w-3 h-3 fill-[#DFB15B]"></i>
            ${property.rating || '4.8'} (${property.reviewsCount || 120}+ reviews)
          </span>
        </div>
        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white">${property.title}</h2>
        <p class="text-xs text-slate-300 flex items-center gap-1 mt-1">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
          ${property.location}, ${property.city}
        </p>
      </div>

      <button class="btn-close-modal text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- 4-Tab Navigation Bar -->
    <div class="bg-slate-100 border-b border-gray-200 px-4 flex items-center gap-1 overflow-x-auto">
      <button 
        data-tab="photos" 
        class="modal-tab-btn py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
          state.activeModalTab === "photos" ? "border-[#082A50] text-[#082A50] bg-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-900"
        }">
        <i data-lucide="image" class="w-3.5 h-3.5"></i>
        <span>Photos & Rooms</span>
      </button>
      <button 
        data-tab="tour" 
        class="modal-tab-btn py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
          state.activeModalTab === "tour" ? "border-[#082A50] text-[#082A50] bg-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-900"
        }">
        <i data-lucide="scan" class="w-3.5 h-3.5 text-[#C59943]"></i>
        <span>360° Virtual Tour</span>
      </button>
      <button 
        data-tab="amenities" 
        class="modal-tab-btn py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
          state.activeModalTab === "amenities" ? "border-[#082A50] text-[#082A50] bg-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-900"
        }">
        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#1AB64F]"></i>
        <span>Amenities</span>
      </button>
      <button 
        data-tab="meal" 
        class="modal-tab-btn py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
          state.activeModalTab === "meal" ? "border-[#082A50] text-[#082A50] bg-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-900"
        }">
        <i data-lucide="utensils" class="w-3.5 h-3.5 text-amber-500"></i>
        <span>Weekly Meal Plan</span>
      </button>
      <button 
        data-tab="rooms" 
        class="modal-tab-btn py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
          state.activeModalTab === "rooms" ? "border-[#082A50] text-[#082A50] bg-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-900"
        }">
        <i data-lucide="bed-double" class="w-3.5 h-3.5 text-indigo-600"></i>
        <span>Rooms &amp; Policies</span>
      </button>
    </div>

    <!-- Modal Body Content -->
    <div class="p-6 max-h-[60vh] overflow-y-auto">
      <!-- TAB 1: PHOTOS -->
      <div id="tab-content-photos" class="${state.activeModalTab === 'photos' ? '' : 'hidden'}">
        <div class="mb-4">
          <div class="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-900">
            <img id="main-modal-gallery-img" src="${images[0]}" alt="${property.title}" class="w-full h-full object-cover transition-all duration-300" />
            <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-md">
              <span id="gallery-photo-caption">Main Room View</span>
            </div>
          </div>
          <!-- Thumbnail strip -->
          <div class="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
            ${images.map((img, idx) => `
              <img 
                src="${img}" 
                data-idx="${idx}"
                class="modal-thumbnail w-16 h-14 object-cover rounded-lg border-2 cursor-pointer transition-all hover:opacity-90 ${idx === 0 ? 'border-[#082A50] scale-102' : 'border-gray-200'}"
              />
            `).join("")}
          </div>
        </div>

        <!-- Rent Breakdown & Features -->
        <div class="bg-gray-50 p-4 rounded-xl mb-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span class="text-xs text-gray-500">Monthly All-Inclusive Rent</span>
            <div class="text-2xl font-black text-gray-900">₹${property.price.toLocaleString("en-IN")}<span class="text-xs font-normal text-gray-500"> /month</span></div>
            <span class="text-[11px] text-gray-400">Zero brokerage • Includes Wi-Fi & 4-time meals</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${(property.roomOptions || ["Single Private", "Twin Sharing"]).map(opt => `
              <span class="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 font-semibold">${opt}</span>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- TAB 2: 360° VIRTUAL TOUR SIMULATOR -->
      <div id="tab-content-tour" class="${state.activeModalTab === 'tour' ? '' : 'hidden'}">
        <div class="bg-slate-900 text-white rounded-xl p-3 mb-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span class="text-xs font-extrabold uppercase tracking-wider text-slate-200">Interactive 360° Tour Walkthrough</span>
          </div>
          <span class="text-[11px] text-[#DFB15B] font-semibold">Drag & Explore Viewpoints</span>
        </div>

        <div class="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black group border border-slate-700">
          <img 
            id="virtual-tour-viewer" 
            src="${tours[0].viewUrl}" 
            alt="360 View" 
            class="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
          
          <!-- 360 Compass Simulator Overlay -->
          <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-2 border border-white/15">
            <i data-lucide="compass" class="w-4 h-4 text-[#DFB15B] animate-spin"></i>
            <span>360° Panorama Live</span>
          </div>

          <!-- Hotspot 1 -->
          <div class="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-900 text-xs px-2.5 py-1 rounded-full shadow-lg border border-[#082A50]/30 flex items-center gap-1.5 animate-bounce">
            <i data-lucide="info" class="w-3.5 h-3.5 text-[#082A50]"></i>
            <span class="font-bold text-[11px]">Study Desk Area</span>
          </div>

          <!-- Hotspot 2 -->
          <div class="absolute top-2/3 right-1/4 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-900 text-xs px-2.5 py-1 rounded-full shadow-lg border border-[#082A50]/30 flex items-center gap-1.5">
            <i data-lucide="check" class="w-3.5 h-3.5 text-[#1AB64F]"></i>
            <span class="font-bold text-[11px]">Attached Washroom</span>
          </div>

          <!-- Viewpoint Caption -->
          <div class="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3 rounded-xl text-white border border-white/10">
            <div id="tour-view-title" class="font-extrabold text-sm text-[#DFB15B] mb-0.5">${tours[0].name}</div>
            <div id="tour-view-desc" class="text-xs text-slate-300">${tours[0].desc}</div>
          </div>
        </div>

        <!-- Viewpoint switcher buttons -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          ${tours.map((t, idx) => `
            <button 
              data-idx="${idx}"
              class="btn-switch-tour text-left p-2 rounded-lg border text-xs font-bold transition-all ${idx === 0 ? 'bg-[#082A50] text-white border-[#082A50]' : 'bg-white text-gray-700 border-gray-200 hover:bg-slate-50'}">
              <div class="truncate">${t.name}</div>
              <span class="text-[10px] font-normal opacity-75">Click to view</span>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- TAB 3: AMENITIES -->
      <div id="tab-content-amenities" class="${state.activeModalTab === 'amenities' ? '' : 'hidden'}">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <!-- Live Wi-Fi Speed Widget -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-4 rounded-xl border border-blue-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#082A50] flex items-center gap-1.5">
                <i data-lucide="wifi" class="w-4 h-4 text-[#082A50]"></i>
                Live Optical Fiber Bandwidth
              </span>
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <div class="text-3xl font-black text-[#082A50]">218 <span class="text-xs font-semibold text-gray-500">Mbps (Dual Band 5GHz)</span></div>
            <p class="text-[11px] text-gray-500 mt-1">Dedicated bandwidth per student room with zero buffering on Zoom, coding labs, and lectures.</p>
          </div>

          <!-- Biometric & Safety Widget -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50/50 p-4 rounded-xl border border-green-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-green-800 flex items-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4 text-green-600"></i>
                Touchless Biometric Access
              </span>
              <span class="text-[10px] font-bold bg-green-200 text-green-800 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div class="text-sm font-extrabold text-green-900">24/7 CCTV & On-Duty Warden</div>
            <p class="text-[11px] text-gray-600 mt-1">Biometric punch entry log visible to parents on mobile. Strict female security in girls wings.</p>
          </div>
        </div>

        <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2.5">Comprehensive Verified Amenities</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${(property.virtualAmenities || []).map(a => `
            <div class="bg-white p-3 rounded-lg border border-gray-200 flex items-start gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-[#082A50]/10 text-[#082A50] flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="${a.icon || 'check'}" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="text-xs font-bold text-gray-900">${a.name}</div>
                <div class="text-[11px] text-gray-500">${a.spec}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- TAB 4: WEEKLY MEAL PLAN -->
      <div id="tab-content-meal" class="${state.activeModalTab === 'meal' ? '' : 'hidden'}">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h4 class="text-sm font-black text-[#082A50]">Hygienic 4-Time Homestyle Meal Plan</h4>
            <p class="text-xs text-gray-500">Prepared fresh in commercial stainless steel kitchen by verified chefs.</p>
          </div>
          <span class="text-[10px] font-bold bg-amber-50 text-[#C59943] border border-amber-200 px-2.5 py-1 rounded-full">
            Pure Veg & Non-Veg Days
          </span>
        </div>

        <!-- Day Selector Strip -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4">
          ${["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(day => `
            <button 
              data-day="${day}"
              class="btn-select-meal-day px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                state.selectedMealDay === day ? 'bg-[#082A50] text-white' : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
              }">
              ${day.slice(0, 3)}
            </button>
          `).join("")}
        </div>

        <!-- Meal Schedule Cards for Selected Day -->
        <div id="meal-schedule-display" class="space-y-2.5">
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 flex items-start gap-3 shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">B</div>
            <div>
              <div class="text-xs font-black text-gray-900">Breakfast (7:30 AM - 9:30 AM)</div>
              <div class="text-xs text-gray-600 mt-0.5">${currentDayPlan.breakfast}</div>
            </div>
          </div>
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 flex items-start gap-3 shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0">L</div>
            <div>
              <div class="text-xs font-black text-gray-900">Lunch (12:30 PM - 2:30 PM)</div>
              <div class="text-xs text-gray-600 mt-0.5">${currentDayPlan.lunch}</div>
            </div>
          </div>
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 flex items-start gap-3 shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">S</div>
            <div>
              <div class="text-xs font-black text-gray-900">High-Tea & Snacks (5:00 PM - 6:30 PM)</div>
              <div class="text-xs text-gray-600 mt-0.5">${currentDayPlan.snacks}</div>
            </div>
          </div>
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 flex items-start gap-3 shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0">D</div>
            <div>
              <div class="text-xs font-black text-gray-900">Dinner (8:00 PM - 10:00 PM)</div>
              <div class="text-xs text-gray-600 mt-0.5">${currentDayPlan.dinner}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 5: ROOMS, SHARING & POLICIES -->
      <div id="tab-content-rooms" class="${state.activeModalTab === 'rooms' ? '' : 'hidden'} space-y-4">
        <!-- Room Options Comparison Grid -->
        <div>
          <h4 class="text-sm font-black text-[#082A50] mb-2.5 flex items-center gap-1.5">
            <i data-lucide="bed-double" class="w-4 h-4 text-[#C59943]"></i>
            Available Room Sharing Options &amp; Monthly Rent
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <!-- Single Private -->
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-[#C59943] bg-amber-50 px-2 py-0.5 rounded-md">Maximum Privacy</span>
                <h5 class="text-sm font-bold text-gray-900 mt-1">Single Private Room</h5>
                <div class="text-xl font-black text-[#082A50] my-1">₹12,999<span class="text-xs text-gray-500 font-normal">/mo</span></div>
                <ul class="text-[11px] text-gray-600 space-y-1 my-2">
                  <li>✓ Private Attached Washroom</li>
                  <li>✓ Dedicated Study Desk &amp; Ergonomic Chair</li>
                  <li>✓ Split AC &amp; Personal Geyser</li>
                  <li>✓ Double-Door Wooden Wardrobe</li>
                </ul>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded text-center">Zero Brokerage Included</span>
            </div>

            <!-- Twin Sharing (Popular) -->
            <div class="bg-blue-50/50 p-4 rounded-xl border-2 border-[#082A50] shadow-sm flex flex-col justify-between relative">
              <span class="absolute -top-2.5 right-3 bg-[#082A50] text-[#DFB15B] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">Most Popular</span>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">Balanced Living</span>
                <h5 class="text-sm font-bold text-gray-900 mt-1">Twin Sharing Room</h5>
                <div class="text-xl font-black text-[#082A50] my-1">₹${property.price.toLocaleString("en-IN")}<span class="text-xs text-gray-500 font-normal">/mo</span></div>
                <ul class="text-[11px] text-gray-600 space-y-1 my-2">
                  <li>✓ Attached Modern Washroom</li>
                  <li>✓ Individual Study Desks (2 Units)</li>
                  <li>✓ Separate Lockable Wardrobes</li>
                  <li>✓ 4-Time Buffet Meals Included</li>
                </ul>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded text-center">Zero Brokerage Included</span>
            </div>

            <!-- Triple Sharing -->
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-gray-500 bg-slate-100 px-2 py-0.5 rounded-md">Budget Friendly</span>
                <h5 class="text-sm font-bold text-gray-900 mt-1">Triple Sharing Room</h5>
                <div class="text-xl font-black text-[#082A50] my-1">₹${Math.round(property.price * 0.82).toLocaleString("en-IN")}<span class="text-xs text-gray-500 font-normal">/mo</span></div>
                <ul class="text-[11px] text-gray-600 space-y-1 my-2">
                  <li>✓ Attached Spacious Washroom</li>
                  <li>✓ 3 Individual Beds &amp; Bedding</li>
                  <li>✓ Individual Lockers</li>
                  <li>✓ High-speed 200Mbps Wi-Fi</li>
                </ul>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded text-center">Zero Brokerage Included</span>
            </div>
          </div>
        </div>

        <!-- House Rules & Safety Standards -->
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h4 class="text-xs font-black uppercase tracking-wider text-gray-700 mb-2.5 flex items-center gap-1.5">
            <i data-lucide="shield-alert" class="w-4 h-4 text-[#C59943]"></i>
            Living Policies, Safety &amp; Curfew Rules
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
            <div class="bg-white p-3 rounded-lg border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">🕒 Biometric Entry Timings:</span>
              <span class="text-gray-600">Main gate operates 6:00 AM to 10:30 PM. Late entry permitted with prior warden approval &amp; SMS notification to parents.</span>
            </div>
            <div class="bg-white p-3 rounded-lg border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">🛡️ 24/7 Security &amp; Warden:</span>
              <span class="text-gray-600">On-site resident warden, CCTV surveillance in common areas, biometric facial logging, and SOS emergency buttons.</span>
            </div>
            <div class="bg-white p-3 rounded-lg border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">👥 Visitor &amp; Guest Policy:</span>
              <span class="text-gray-600">Parents and guardians are allowed in the ground floor visitor lounge and dining cafeteria from 10:00 AM to 7:00 PM.</span>
            </div>
            <div class="bg-white p-3 rounded-lg border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">💰 Security Deposit Protection:</span>
              <span class="text-gray-600">1 Month security deposit held under Yealth Escrow Guarantee. 100% refundable upon move-out with zero deductions.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="p-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="text-left w-full sm:w-auto">
        <span class="text-xs text-gray-500">Rent starting at</span>
        <div class="text-lg font-black text-[#082A50]">₹${property.price.toLocaleString("en-IN")}/mo</div>
      </div>

      <div class="flex items-center gap-2 w-full sm:w-auto">
        <button 
          id="modal-add-to-cart-btn"
          class="flex-1 sm:flex-none font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
            isInCart ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-[#082A50] hover:bg-[#051C36] text-white'
          }">
          <i data-lucide="${isInCart ? 'check' : 'heart'}" class="w-4 h-4 ${isInCart ? 'text-rose-600' : 'text-[#DFB15B]'}"></i>
          <span>${isInCart ? 'In Wishlist' : 'Add to Wishlist'}</span>
        </button>
        <button 
          id="modal-book-whatsapp-btn"
          class="flex-1 sm:flex-none bg-[#1AB64F] hover:bg-[#159c42] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>Schedule Visit</span>
        </button>
        <a 
          href="tel:${SITE_CONFIG.phoneRaw}"
          class="border border-gray-300 hover:border-[#082A50] hover:bg-white text-gray-700 hover:text-[#082A50] py-3 px-3 rounded-xl flex items-center justify-center transition-colors">
          <i data-lucide="phone" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `;

  // Attach tab switching handlers
  content.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;
      openPropertyModal(property, targetTab);
    });
  });

  // Attach gallery thumbnail clicks
  content.querySelectorAll(".modal-thumbnail").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.dataset.idx, 10);
      const mainImg = document.getElementById("main-modal-gallery-img");
      const caption = document.getElementById("gallery-photo-caption");
      if (mainImg) mainImg.src = images[idx];
      if (caption) caption.textContent = `Room View ${idx + 1} of ${images.length}`;
      content.querySelectorAll(".modal-thumbnail").forEach(t => t.classList.remove("border-[#082A50]", "scale-102"));
      thumb.classList.add("border-[#082A50]", "scale-102");
    });
  });

  // Attach tour viewpoint clicks
  content.querySelectorAll(".btn-switch-tour").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx, 10);
      const tour = tours[idx];
      const viewer = document.getElementById("virtual-tour-viewer");
      const title = document.getElementById("tour-view-title");
      const desc = document.getElementById("tour-view-desc");
      if (viewer && tour) viewer.src = tour.viewUrl;
      if (title && tour) title.textContent = tour.name;
      if (desc && tour) desc.textContent = tour.desc;
      content.querySelectorAll(".btn-switch-tour").forEach(b => {
        b.className = "btn-switch-tour text-left p-2 rounded-lg border text-xs font-bold transition-all bg-white text-gray-700 border-gray-200 hover:bg-slate-50";
      });
      btn.className = "btn-switch-tour text-left p-2 rounded-lg border text-xs font-bold transition-all bg-[#082A50] text-white border-[#082A50]";
    });
  });

  // Attach meal day switcher
  content.querySelectorAll(".btn-select-meal-day").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedMealDay = btn.dataset.day;
      openPropertyModal(property, "meal");
    });
  });

  // Add to wishlist from modal
  document.getElementById("modal-add-to-cart-btn")?.addEventListener("click", () => {
    const inCart = getCart().hostels.some(h => h.id === property.id);
    if (inCart) {
      removeFromCart(property.id, "hostel");
      showToast(`Removed ${property.title} from Wishlist`, "info");
    } else {
      const res = addToCart(property, "hostel");
      showToast(res.message, res.success ? "success" : "info");
    }
    openPropertyModal(property, state.activeModalTab);
    renderProperties();
    renderCollegeRecommendations();
  });

  // WhatsApp visit
  document.getElementById("modal-book-whatsapp-btn")?.addEventListener("click", () => {
    openWhatsAppInquiry({ propertyTitle: property.title });
  });

  modal.classList.remove("hidden");
  lucide.createIcons();
}

/**
 * Setup Unified Cart Drawer & Badges with Auth-Gate & Loan Options
 */
function setupCartUI() {
  updateCartBadges();

  document.querySelectorAll("#btn-open-cart, .btn-trigger-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      openCartDrawer();
    });
  });

  const closeBtn = document.getElementById("btn-close-cart");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const drawer = document.getElementById("modal-cart-drawer");
      if (drawer) drawer.classList.add("hidden");
    });
  }
}

export function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll("#cart-counter-badge, .cart-counter-pill").forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove("hidden");
    }
  });
}

export function openCartDrawer() {
  const drawer = document.getElementById("modal-cart-drawer");
  if (!drawer) return;
  renderCartDrawerContent();
  drawer.classList.remove("hidden");
  lucide.createIcons();
}

function renderCartDrawerContent() {
  const cart = getCart();
  const container = document.getElementById("cart-items-container");
  const summaryBox = document.getElementById("cart-summary-box");
  if (!container) return;

  const totalItems = (cart.colleges.length || 0) + (cart.hostels.length || 0);

  if (totalItems === 0) {
    container.innerHTML = `
      <div class="py-12 text-center">
        <div class="w-14 h-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="heart" class="w-6 h-6"></i>
        </div>
        <h4 class="font-bold text-gray-800 text-sm mb-1">Your Wishlist is Empty</h4>
        <p class="text-xs text-gray-500 max-w-xs mx-auto mb-5">Shortlist your dream colleges and verified student stays to track admission criteria and cutoffs.</p>
        <div class="flex items-center justify-center gap-2">
          <a href="admissions.html" class="bg-[#082A50] text-white text-xs font-bold py-2 px-3 rounded-lg">Explore Colleges</a>
          <a href="hostels.html" class="bg-slate-200 text-gray-800 text-xs font-bold py-2 px-3 rounded-lg">Explore Hostels</a>
        </div>
      </div>
    `;
    if (summaryBox) summaryBox.classList.add("hidden");
    lucide.createIcons();
    return;
  }

  if (summaryBox) summaryBox.classList.remove("hidden");

  let html = "";

  if (cart.colleges.length > 0) {
    html += `
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-black uppercase text-[#082A50] tracking-wide flex items-center gap-1.5">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-[#C59943]"></i>
            Selected Colleges (${cart.colleges.length})
          </span>
        </div>
        <div class="space-y-2">
          ${cart.colleges.map(c => `
            <div class="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between gap-3 shadow-xs">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${c.image}" alt="${c.name}" class="w-12 h-12 rounded-lg object-cover shrink-0" />
                <div class="min-w-0">
                  <h5 class="text-xs font-bold text-gray-900 truncate">${c.shortName || c.name}</h5>
                  <div class="text-[11px] text-gray-500">${c.type} • ${c.city}</div>
                  <div class="text-[11px] font-bold text-[#082A50] mt-0.5">Fees: ${c.fees}</div>
                </div>
              </div>
              <button data-remove-id="${c.id}" data-type="college" class="btn-cart-remove text-gray-400 hover:text-red-600 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (cart.hostels.length > 0) {
    html += `
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-black uppercase text-[#082A50] tracking-wide flex items-center gap-1.5">
            <i data-lucide="building" class="w-4 h-4 text-[#C59943]"></i>
            Selected Hostels / PGs (${cart.hostels.length})
          </span>
        </div>
        <div class="space-y-2">
          ${cart.hostels.map(h => `
            <div class="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between gap-3 shadow-xs">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${h.image}" alt="${h.title}" class="w-12 h-12 rounded-lg object-cover shrink-0" />
                <div class="min-w-0">
                  <h5 class="text-xs font-bold text-gray-900 truncate">${h.title}</h5>
                  <div class="text-[11px] text-gray-500">${h.location}</div>
                  <div class="text-[11px] font-bold text-[#1AB64F] mt-0.5">₹${h.price.toLocaleString("en-IN")}/mo</div>
                </div>
              </div>
              <button data-remove-id="${h.id}" data-type="hostel" class="btn-cart-remove text-gray-400 hover:text-red-600 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  // Checkout Section / Auth Gate in Summary Box
  const user = getCurrentUser();

  if (!user) {
    summaryBox.innerHTML = `
      <div class="bg-amber-50 p-4 rounded-2xl border-2 border-amber-300 text-center space-y-3">
        <div class="w-10 h-10 rounded-full bg-[#082A50] text-[#DFB15B] flex items-center justify-center mx-auto shadow-sm">
          <i data-lucide="lock" class="w-5 h-5"></i>
        </div>
        <div>
          <h4 class="text-xs font-black text-[#082A50] uppercase tracking-wider">Sign In Required to Execute Order</h4>
          <p class="text-xs text-amber-900 mt-1">Please sign in to submit this application bundle so our admin team receives your verified profile on WhatsApp and your live seat status can be tracked.</p>
        </div>
        <button id="btn-cart-auth-signin" class="w-full bg-[#082A50] hover:bg-[#051C36] text-white font-black text-xs py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
          <i data-lucide="user-check" class="w-4 h-4 text-[#DFB15B]"></i>
          Sign In / Register Account to Proceed
        </button>
        <button id="btn-cart-auth-demo" class="w-full bg-white hover:bg-slate-100 text-[#082A50] font-bold text-xs py-2 px-3 rounded-lg border border-slate-300 flex items-center justify-center gap-1.5 transition-colors">
          <i data-lucide="zap" class="w-3.5 h-3.5 text-[#C59943]"></i>
          1-Click Demo Login (Aryan Sharma)
        </button>
      </div>
    `;

    document.getElementById("btn-cart-auth-signin")?.addEventListener("click", () => {
      openAuthModal("signin");
    });

    document.getElementById("btn-cart-auth-demo")?.addEventListener("click", () => {
      signIn("student@yealth.com", "yealth123");
      renderCartDrawerContent();
      showToast("Signed in as Demo Student Aryan Sharma!");
    });

  } else {
    // Authenticated User -> Show Form with Loan Options & Admin WhatsApp Dispatch
    summaryBox.innerHTML = `
      <div class="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-[11px] text-emerald-800 mb-3 flex items-center gap-2">
        <i data-lucide="user-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
        <span>Signed in as <strong>${user.name}</strong> (${user.email})</span>
      </div>

      <form id="cart-checkout-form" class="space-y-3">
        <!-- Applicant Info -->
        <div class="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
          <h5 class="text-[11px] font-black uppercase text-[#082A50] tracking-wide flex items-center gap-1.5">
            <i data-lucide="user" class="w-3.5 h-3.5 text-[#C59943]"></i>
            Applicant Dossier
          </h5>
          <div class="grid grid-cols-2 gap-2">
            <input type="text" id="applicant-name" value="${user.name || ''}" placeholder="Full Legal Name *" required class="text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#082A50] focus:outline-hidden" />
            <input type="tel" id="applicant-phone" value="${user.phone || ''}" placeholder="WhatsApp Phone *" required class="text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#082A50] focus:outline-hidden" />
          </div>
          <div class="grid grid-cols-2 gap-2">
            <input type="email" id="applicant-email" value="${user.email || ''}" placeholder="Email Address *" required class="text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#082A50] focus:outline-hidden" />
            <input type="text" id="applicant-movein" placeholder="Move-in (e.g. Aug 2026)" class="text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#082A50] focus:outline-hidden" />
          </div>
          <input type="text" id="applicant-course" placeholder="Desired Course / Stream (e.g. B.Tech / MBBS / MBA)" class="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#082A50] focus:outline-hidden" />
        </div>

        <!-- Education Loan Assistance Selection -->
        <div class="bg-white p-3 rounded-xl border border-slate-200 space-y-2.5">
          <div class="flex items-center justify-between">
            <h5 class="text-[11px] font-black uppercase text-[#082A50] tracking-wide flex items-center gap-1.5">
              <i data-lucide="landmark" class="w-3.5 h-3.5 text-[#C59943]"></i>
              Education Loan Assistance
            </h5>
            <label class="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-gray-700">
              <input type="checkbox" id="cart-loan-required" class="accent-[#082A50] w-4 h-4 cursor-pointer" />
              <span>I want Loan</span>
            </label>
          </div>

          <div id="cart-loan-details-box" class="space-y-2 hidden pt-1 border-t border-gray-100">
            <div class="text-[11px] font-bold text-gray-700 mb-1">Select Loan Preference:</div>
            <div class="grid grid-cols-2 gap-2">
              <label class="loan-type-label cursor-pointer p-2.5 rounded-lg border-2 border-[#082A50] bg-blue-50/50 flex flex-col justify-between text-left transition-all">
                <input type="radio" name="cart-loan-type" value="collateral_free" checked class="accent-[#082A50] mb-1" />
                <div>
                  <span class="text-[10px] font-black text-[#C59943] block">⚡ UNSECURED</span>
                  <span class="text-xs font-bold text-gray-900 block">Collateral-Free</span>
                  <span class="text-[10px] text-gray-500">Up to ₹50L (Zero Property Mortgage)</span>
                </div>
              </label>

              <label class="loan-type-label cursor-pointer p-2.5 rounded-lg border-2 border-slate-200 hover:border-[#082A50] bg-white flex flex-col justify-between text-left transition-all">
                <input type="radio" name="cart-loan-type" value="with_collateral" class="accent-[#082A50] mb-1" />
                <div>
                  <span class="text-[10px] font-black text-blue-700 block">🏢 SECURED</span>
                  <span class="text-xs font-bold text-gray-900 block">With Collateral</span>
                  <span class="text-[10px] text-gray-500">From 8.2% p.a. (Pledged Property/FD)</span>
                </div>
              </label>
            </div>

            <div>
              <label class="block text-[10px] font-bold text-gray-600 mb-1">Preferred Lending Partner Bank:</label>
              <select id="cart-loan-bank" class="w-full text-xs border border-gray-300 rounded-lg px-2.5 py-2 font-bold text-[#082A50] bg-slate-50">
                <option value="State Bank of India (SBI Scholar - 8.2% p.a.)">State Bank of India (SBI Scholar - 8.2% p.a.)</option>
                <option value="HDFC Credila (Private - 48hr Approval)" selected>HDFC Credila (Fast 48hr Approval)</option>
                <option value="Bank of Baroda (Baroda Scholar)">Bank of Baroda (Baroda Scholar)</option>
                <option value="Punjab National Bank (PNB Saraswati)">Punjab National Bank (PNB Saraswati)</option>
                <option value="ICICI Bank Education Loan">ICICI Bank Education Loan</option>
                <option value="Axis Bank Education Loan">Axis Bank Education Loan</option>
                <option value="Canara Bank (Vidya Turant)">Canara Bank (Vidya Turant)</option>
                <option value="Union Bank of India">Union Bank of India</option>
                <option value="Avanse Financial Services (Customized Non-Collateral)">Avanse Financial Services (Customized Non-Collateral)</option>
                <option value="Auxilo Finserve">Auxilo Finserve</option>
                <option value="InCred Education Loans">InCred Education Loans</option>
                <option value="IDFC First Bank">IDFC First Bank</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" class="w-full bg-[#1AB64F] hover:bg-[#159c42] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all">
          <i data-lucide="send" class="w-4 h-4 fill-white"></i>
          <span>Execute Order &amp; Dispatch to Admin (WhatsApp)</span>
        </button>
      </form>
    `;

    // Toggle loan box
    const loanCheck = document.getElementById("cart-loan-required");
    const loanBox = document.getElementById("cart-loan-details-box");
    if (loanCheck && loanBox) {
      loanCheck.addEventListener("change", () => {
        if (loanCheck.checked) {
          loanBox.classList.remove("hidden");
        } else {
          loanBox.classList.add("hidden");
        }
      });
    }

    // Attach checkout submit
    const checkoutForm = document.getElementById("cart-checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("applicant-name")?.value || "";
        const phone = document.getElementById("applicant-phone")?.value || "";
        const email = document.getElementById("applicant-email")?.value || "";
        const course = document.getElementById("applicant-course")?.value || "";
        const moveIn = document.getElementById("applicant-movein")?.value || "";
        const isLoan = document.getElementById("cart-loan-required")?.checked || false;
        const loanType = document.querySelector("input[name='cart-loan-type']:checked")?.value || "collateral_free";
        const bank = document.getElementById("cart-loan-bank")?.value || "";

        const order = createOrder({
          name,
          phone,
          email,
          desiredCourse: course,
          moveInMonth: moveIn,
          loanRequired: isLoan,
          loanType: isLoan ? loanType : "none",
          preferredBank: isLoan ? bank : ""
        });

        const drawer = document.getElementById("modal-cart-drawer");
        if (drawer) drawer.classList.add("hidden");

        // Automatically launch WhatsApp to Admin (+91 9110155081)
        window.open(order.adminWhatsAppUrl, "_blank");

        showToast(`🎉 Order executed & dispatched to Admin! Tracking ID: ${order.id}`, "success");
        openOrdersModal(order.id);
      });
    }
  }

  if (cart.colleges.length > 0 && cart.hostels.length === 0) {
    html += `
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-3.5 mb-4 text-left shadow-xs">
        <div class="flex items-center gap-1.5 mb-1">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span class="text-xs font-black uppercase tracking-wider text-[#082A50]">Recommended Campus Stays</span>
        </div>
        <p class="text-xs text-amber-900 mb-2.5">
          You have shortlisted <strong>${cart.colleges[0].shortName || cart.colleges[0].name}</strong>! Pair your college with verified walking-distance student stays and zero brokerage.
        </p>
        <button id="btn-cart-explore-nearby" data-college-id="${cart.colleges[0].id}" class="w-full bg-[#082A50] hover:bg-[#051C36] text-[#DFB15B] text-xs font-extrabold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm">
          <i data-lucide="building" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
          <span>View Hostels Near ${cart.colleges[0].shortName || cart.colleges[0].name} →</span>
        </button>
      </div>
    `;
  }

  container.innerHTML = html;

  const nearbyCartBtn = container.querySelector("#btn-cart-explore-nearby");
  if (nearbyCartBtn) {
    nearbyCartBtn.addEventListener("click", () => {
      const colId = nearbyCartBtn.dataset.collegeId;
      state.activeCollegeId = colId;
      const drawer = document.getElementById("modal-cart-drawer");
      if (drawer) drawer.classList.add("hidden");
      renderCollegeRecommendations();
      renderProperties();
      const recSection = document.getElementById("college-recommendations-section");
      if (recSection) recSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  container.querySelectorAll(".btn-cart-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.removeId;
      const type = btn.dataset.type;
      removeFromCart(id, type);
      renderCartDrawerContent();
      renderProperties();
      renderCollegeRecommendations();
      showToast("Item removed from bundle");
    });
  });

  lucide.createIcons();
}

/**
 * Setup Order Tracking & Interactive Confirmation Progression Modal
 */
function setupOrdersUI() {
  document.querySelectorAll("#btn-open-orders, .btn-trigger-orders").forEach(btn => {
    btn.addEventListener("click", () => {
      openOrdersModal();
    });
  });
}

export function openOrdersModal(specificOrderId = null) {
  const modal = document.getElementById("modal-orders-status");
  if (!modal) return;

  const orders = getOrders();
  const activeOrder = specificOrderId 
    ? orders.find(o => o.id === specificOrderId)
    : orders[0];

  const content = document.getElementById("modal-orders-content");
  if (!content) return;

  if (!activeOrder) {
    content.innerHTML = `
      <div class="p-8 text-center">
        <div class="w-14 h-14 rounded-full bg-slate-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="clipboard-list" class="w-6 h-6"></i>
        </div>
        <h4 class="font-bold text-gray-900 text-base mb-1">No Applications Tracked Yet</h4>
        <p class="text-xs text-gray-500 max-w-sm mx-auto mb-5">Select a college and hostel into your bundle to track your application and seat booking in real-time.</p>
        <button class="btn-close-modal bg-[#082A50] text-white text-xs font-bold py-2.5 px-4 rounded-xl">Explore Hostels</button>
      </div>
    `;
    modal.classList.remove("hidden");
    lucide.createIcons();
    return;
  }

  const isWaitingConfirmation = activeOrder.confirmationStatus === "waiting_confirmation";

  content.innerHTML = `
    <!-- Top Bar -->
    <div class="bg-[#071A33] text-white p-5 rounded-t-2xl flex items-center justify-between border-b border-white/10">
      <div>
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#DFB15B]">Live Application Dossier</span>
        <h3 class="text-lg font-black text-white">Tracking ID: ${activeOrder.id}</h3>
        <p class="text-xs text-slate-300">Submitted on: ${activeOrder.displayDate || "Recent"}</p>
      </div>
      <button class="btn-close-modal text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="p-6 max-h-[75vh] overflow-y-auto space-y-5">
      <!-- Confirmation / Progression Action Banner -->
      ${
        isWaitingConfirmation 
          ? `
            <div class="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black uppercase text-amber-900 flex items-center gap-1.5">
                  <i data-lucide="bell-ring" class="w-4 h-4 text-amber-600 animate-bounce"></i>
                  Waiting for Student Confirmation
                </span>
                <span class="text-[10px] font-bold bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full">Step 1 Completed</span>
              </div>
              <p class="text-xs text-amber-900">
                Your application has been registered and dispatched to Yealth Admin on WhatsApp (<strong>+91 9110155081</strong>).
                Please tap below to confirm your preferences and advance to <strong>Academic &amp; Document Verification</strong>.
              </p>
              <button 
                id="btn-confirm-next-step" 
                data-id="${activeOrder.id}" 
                class="w-full bg-[#082A50] hover:bg-[#051C36] text-[#DFB15B] font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-[#1AB64F]"></i>
                <span>Confirm Application &amp; Proceed to Next Process →</span>
              </button>
            </div>
          `
          : `
            <div class="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
                  <i data-lucide="check-check" class="w-4 h-4 text-emerald-600"></i>
                  Application Confirmed &amp; In Verification
                </span>
                <span class="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2.5 py-0.5 rounded-full">Step 2 Active</span>
              </div>
              <p class="text-xs text-emerald-800">
                Your confirmation has been logged! Academic council and stay wardens are cross-verifying your eligibility.
              </p>

              <!-- Verification Checklist -->
              <div class="bg-white p-3 rounded-xl border border-emerald-200 space-y-1.5 text-xs">
                <div class="font-extrabold text-[#082A50] text-[11px] uppercase tracking-wide flex items-center gap-1.5 mb-2">
                  <i data-lucide="file-check-2" class="w-3.5 h-3.5 text-[#1AB64F]"></i>
                  Document Verification Checklist
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span>📄 Class 10 &amp; 12 Marksheets</span>
                    <span class="text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">Queued</span>
                  </div>
                  <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span>🎯 Entrance Scorecard</span>
                    <span class="text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">Queued</span>
                  </div>
                  <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span>🪪 Student ID / Aadhaar</span>
                    <span class="text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">Queued</span>
                  </div>
                  <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span>💰 Education Loan Desk</span>
                    <span class="text-blue-700 font-bold bg-blue-100 px-1.5 py-0.5 rounded">${activeOrder.loan && activeOrder.loan.required ? (activeOrder.loan.type === 'collateral_free' ? 'Collateral-Free' : 'Secured') : 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          `
      }

      <!-- Milestone Timeline Stepper -->
      <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
        <h5 class="text-xs font-black uppercase tracking-wider text-gray-500">Live Milestone Progress</h5>
        ${(activeOrder.timeline || []).map((step, idx) => `
          <div class="flex items-start gap-3 relative">
            <div class="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
              step.status === 'completed'
                ? 'bg-[#1AB64F] text-white shadow-xs'
                : step.status === 'in-progress'
                  ? 'bg-[#082A50] text-[#DFB15B] ring-4 ring-[#DFB15B]/30'
                  : 'bg-gray-100 text-gray-400'
            }">
              ${step.status === 'completed' ? '✓' : idx + 1}
            </div>
            <div class="flex-1 pt-0.5">
              <div class="flex items-center justify-between">
                <h6 class="text-xs font-black ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}">${step.milestone}</h6>
                <span class="text-[10px] text-gray-400 font-semibold">${step.time || ''}</span>
              </div>
              <p class="text-[11px] text-gray-500 mt-0.5">${step.description}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Applicant Dossier & Loan Summary -->
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
        <h5 class="font-bold text-gray-900 uppercase tracking-wide text-[10px]">Student &amp; Loan Specifications</h5>
        <div class="grid grid-cols-2 gap-2 text-[11px]">
          <div><span class="text-gray-500">Student:</span> <strong class="text-gray-800">${activeOrder.applicant.name}</strong></div>
          <div><span class="text-gray-500">WhatsApp:</span> <strong class="text-gray-800">${activeOrder.applicant.phone}</strong></div>
          <div><span class="text-gray-500">Target Course:</span> <strong class="text-gray-800">${activeOrder.applicant.desiredCourse}</strong></div>
          <div><span class="text-gray-500">Move-In Month:</span> <strong class="text-gray-800">${activeOrder.applicant.moveInMonth}</strong></div>
        </div>

        ${activeOrder.loan && activeOrder.loan.required ? `
          <div class="mt-2 pt-2 border-t border-slate-200">
            <span class="text-gray-500">Loan Preference:</span> 
            <span class="font-extrabold text-[#082A50]">${activeOrder.loan.typeLabel}</span>
            <div class="text-gray-600 mt-0.5">Partner Bank: <strong>${activeOrder.loan.preferredBank}</strong></div>
          </div>
        ` : `
          <div class="mt-1 text-gray-400">Loan: Self-funded (No educational loan requested)</div>
        `}
      </div>

      <!-- Dual Action Buttons -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        <a 
          href="${activeOrder.adminWhatsAppUrl || `https://wa.me/${ADMIN_PHONE}`}"
          target="_blank"
          class="bg-[#1AB64F] hover:bg-[#159c42] text-white font-extrabold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
          <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
          <span>Resend to Admin WhatsApp</span>
        </a>
        <a 
          href="https://wa.me/${ADMIN_PHONE}?text=Hi%20Yealth!%20My%20Tracking%20ID%20is%20${activeOrder.id}.%20I%20am%20waiting%20to%20speak%20with%20my%20assigned%20counselor."
          target="_blank"
          class="bg-[#082A50] hover:bg-[#051C36] text-white font-extrabold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
          <i data-lucide="user" class="w-4 h-4 text-[#DFB15B]"></i>
          <span>Chat with Assigned Counselor</span>
        </a>
      </div>
    </div>
  `;

  // Attach confirmation button event
  const confirmBtn = content.querySelector("#btn-confirm-next-step");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      confirmOrderNextStep(activeOrder.id);
      showToast("Application confirmed! Advanced to Document Verification.", "success");
      openOrdersModal(activeOrder.id);
    });
  }

  modal.classList.remove("hidden");
  modal.querySelectorAll(".btn-close-modal").forEach(b => b.onclick = () => modal.classList.add("hidden"));
  lucide.createIcons();
}

/**
 * Setup Quick Actions & Direct Contact Links
 */
function setupQuickActions() {
  const floatBtn = document.getElementById("btn-floating-whatsapp");
  if (floatBtn) {
    floatBtn.addEventListener("click", () => {
      openWhatsAppInquiry({
        customMessage: "Hi Yealth Team, I have a question regarding student hostels and college guidance."
      });
    });
  }

  const promoBtn = document.getElementById("btn-promo-whatsapp");
  if (promoBtn) {
    promoBtn.addEventListener("click", () => {
      openWhatsAppInquiry({
        customMessage: "Hi Yealth, I want to inquire about student PGs in Knowledge Park 2 Greater Noida under ₹7,999/month."
      });
    });
  }

  const visitBtn = document.getElementById("btn-banner-visit");
  if (visitBtn) {
    visitBtn.addEventListener("click", () => {
      openWhatsAppInquiry({
        customMessage: "Hi Yealth! I would like to book a free property visit to Knowledge Park 2."
      });
    });
  }
}

/**
 * Setup SEO Directory keywords to filter stays dynamically
 */
function setupSEOKeywords() {
  document.querySelectorAll(".seo-tag-link").forEach(tag => {
    tag.addEventListener("click", e => {
      e.preventDefault();
      const keyword = tag.dataset.keyword || tag.textContent.trim();
      
      const locationInput = document.getElementById("search-location");
      if (locationInput) {
        locationInput.value = keyword;
      }
      state.searchQuery.location = keyword;
      renderProperties();

      const targetSection = document.getElementById("curated-stays-section");
      if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });

      showToast(`Filtered for: ${keyword}`);
    });
  });
}

/**
 * Toast Notification Utility
 */
export function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-alert flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl text-xs md:text-sm font-semibold transition-all duration-300 pointer-events-auto border ${
    type === "error"
      ? "bg-red-900 text-white border-red-700"
      : type === "info"
        ? "bg-slate-900 text-[#DFB15B] border border-[#DFB15B]/40"
        : "bg-[#082A50] text-white border border-[#C59943]/40"
  }`;

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === "error" ? "bg-red-400" : type === "info" ? "bg-amber-400" : "bg-[#DFB15B]"}"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, -10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Proximity matching algorithm to suggest closest hostels for a given college
 */
export function getNearbyHostelsForCollege(college, allProperties = activePropertyList) {
  if (!college) return [];

  const collegeNameLower = (college.name || "").toLowerCase();
  const collegeShortLower = (college.shortName || "").toLowerCase();
  const collegeLocLower = (college.location || "").toLowerCase();
  const collegeCity = college.city || "";

  // Scoring function
  const scored = allProperties.map(p => {
    let score = 0;
    let matchReason = "";
    let distanceLabel = "";
    const pTitleLower = (p.title || "").toLowerCase();
    const pLocLower = (p.location || "").toLowerCase();
    const pProxLower = (p.proximityBadge || "").toLowerCase();
    const pTagsLower = (p.tags || []).map(t => t.toLowerCase()).join(" ");

    // 1. Direct mention of specific college name / acronym in proximityBadge, title, or tags
    const checkTerms = [
      collegeShortLower,
      ...collegeShortLower.split(" ").filter(t => t.length > 3 && !["university", "institute", "college", "delhi"].includes(t))
    ];

    let directMention = false;
    for (const term of checkTerms) {
      if (term && (pProxLower.includes(term) || pTitleLower.includes(term) || pTagsLower.includes(term) || pLocLower.includes(term))) {
        directMention = true;
        score += 120;
        matchReason = p.proximityBadge || `Near ${college.shortName || college.name}`;
        distanceLabel = "Walking Distance (< 500m)";
        break;
      }
    }

    // 2. Specific campus micro-hub matching (Knowledge Park 2, 3, TechZone 2, North Campus, Hauz Khas, etc.)
    const microHubs = [
      { name: "knowledge park 2", label: "Knowledge Park 2 Campus Zone", dist: "Walking Distance / 350m" },
      { name: "knowledge park 3", label: "Knowledge Park 3 Campus Zone", dist: "Walking Distance / 400m" },
      { name: "techzone 2", label: "TechZone Campus Zone", dist: "5 mins from Campus" },
      { name: "pari chowk", label: "Pari Chowk / Metro Hub", dist: "Quick 5-min Commute" },
      { name: "north campus", label: "DU North Campus Hub", dist: "Walking Distance / 300m" },
      { name: "south campus", label: "South Delhi Student Hub", dist: "10 mins Commute" },
      { name: "hauz khas", label: "Hauz Khas Student Area", dist: "Walking / 500m" },
      { name: "rohini", label: "Rohini Campus Area", dist: "Close to Campus" },
      { name: "dwarka", label: "Dwarka Sector 14 Hub", dist: "Near Campus" },
      { name: "koramangala", label: "Koramangala Student Hub", dist: "Walking Distance" },
      { name: "viman nagar", label: "Viman Nagar Student Hub", dist: "Walking Distance" }
    ];

    for (const hub of microHubs) {
      if (collegeLocLower.includes(hub.name) && (pLocLower.includes(hub.name) || pProxLower.includes(hub.name) || pTagsLower.includes(hub.name))) {
        score += 70;
        if (!matchReason) {
          matchReason = hub.label;
          distanceLabel = hub.dist;
        }
        break;
      }
    }

    // 3. City matching
    if (collegeCity && p.city && p.city.toLowerCase() === collegeCity.toLowerCase()) {
      score += 30;
      if (!matchReason) {
        matchReason = `Located in ${collegeCity}`;
        distanceLabel = `In ${collegeCity}`;
      }
    }

    return {
      property: p,
      score,
      matchReason: matchReason || p.proximityBadge || "Verified Student Residence",
      distanceLabel: distanceLabel || "Nearby Campus",
      isWalkingDistance: score >= 100
    };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

/**
 * Render Smart College-Based Nearby Hostel Recommendations Banner
 */
export function renderCollegeRecommendations() {
  const section = document.getElementById("college-recommendations-section");
  const container = document.getElementById("college-recommendations-container");
  if (!section || !container) return;

  const cart = getCart();
  const cartColleges = cart.colleges || [];

  // Determine active college
  let activeCollege = null;
  if (state.activeCollegeId) {
    activeCollege = cartColleges.find(c => c.id === state.activeCollegeId) ||
      COLLEGES.find(c => c.id === state.activeCollegeId || c.name.toLowerCase().includes(state.activeCollegeId.toLowerCase()) || (c.shortName && c.shortName.toLowerCase().includes(state.activeCollegeId.toLowerCase())));
  }

  // If none explicitly set, default to first college in cart
  if (!activeCollege && cartColleges.length > 0) {
    activeCollege = cartColleges[0];
    state.activeCollegeId = activeCollege.id;
  }

  // Make section visible
  section.classList.remove("hidden");

  // State 1: A college is selected (either from cart, deep link, or dropdown)
  if (activeCollege) {
    const nearby = getNearbyHostelsForCollege(activeCollege, activePropertyList);
    const topStays = nearby.slice(0, 3);

    container.innerHTML = `
      <div class="bg-gradient-to-r from-[#071A33] via-[#082A50] to-[#0E3E74] rounded-3xl p-5 sm:p-7 text-white shadow-2xl border-2 border-[#C59943]/40 relative overflow-hidden">
        <!-- Ambient Background Glow -->
        <div class="absolute -right-16 -top-16 w-60 h-60 bg-[#C59943]/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Top Header Row -->
        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div class="flex items-start sm:items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-[#082A50] text-[#DFB15B] border border-[#DFB15B]/40 flex items-center justify-center shrink-0 shadow-inner">
              <i data-lucide="graduation-cap" class="w-6 h-6 text-[#DFB15B]"></i>
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <span class="inline-flex items-center gap-1 bg-[#C59943]/20 border border-[#C59943]/40 text-[#DFB15B] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
                  Campus Proximity Match
                </span>
                ${cartColleges.some(c => c.id === activeCollege.id) ? `
                  <span class="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i>
                    In Your Selection Bundle
                  </span>
                ` : ''}
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white leading-tight">
                Recommended Hostels Near <span class="text-[#DFB15B]">${activeCollege.shortName || activeCollege.name}</span>
              </h3>
              <p class="text-xs sm:text-sm text-slate-200 mt-1">
                📍 <strong>${activeCollege.location}</strong> • Verified walking-distance student stays with 4-time meals, high-speed Wi-Fi & ₹0 brokerage.
              </p>
            </div>
          </div>

          <!-- College Selector & Switcher -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
            <div class="flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
              <i data-lucide="building" class="w-4 h-4 text-[#DFB15B] ml-2 shrink-0"></i>
              <select id="select-active-college" class="bg-transparent text-white text-xs font-bold py-1.5 px-2 focus:outline-hidden cursor-pointer">
                ${cartColleges.length > 0 ? `
                  <optgroup label="Your Selected Colleges in Cart" class="text-[#082A50] bg-slate-100 font-bold">
                    ${cartColleges.map(c => `
                      <option value="${c.id}" ${c.id === activeCollege.id ? 'selected' : ''}>
                        ⭐ ${c.shortName || c.name} (${c.city})
                      </option>
                    `).join("")}
                  </optgroup>
                ` : ''}
                <optgroup label="All Verified Universities" class="text-[#082A50] bg-white">
                  ${COLLEGES.map(c => `
                    <option value="${c.id}" ${c.id === activeCollege.id ? 'selected' : ''}>
                      ${c.shortName || c.name} (${c.city})
                    </option>
                  `).join("")}
                </optgroup>
              </select>
            </div>

            <a href="admissions.html" class="inline-flex items-center justify-center gap-1 text-xs font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2.5 rounded-xl border border-white/15 transition-colors">
              <i data-lucide="search" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
              <span>Browse Colleges</span>
            </a>
          </div>
        </div>

        <!-- If multiple colleges in bundle, render switcher pills -->
        ${cartColleges.length > 1 ? `
          <div class="relative z-10 flex items-center gap-2 pt-3 overflow-x-auto no-scrollbar">
            <span class="text-xs text-slate-300 font-bold whitespace-nowrap">Your Colleges:</span>
            ${cartColleges.map(c => `
              <button 
                data-college-switch="${c.id}" 
                class="btn-college-switch px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  c.id === activeCollege.id 
                    ? 'bg-[#DFB15B] text-[#082A50] shadow-sm' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }">
                <i data-lucide="check-circle" class="w-3 h-3"></i>
                <span>${c.shortName || c.name}</span>
              </button>
            `).join("")}
          </div>
        ` : ''}

        <!-- Top Nearby Hostels Cards Grid -->
        <div class="relative z-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${topStays.length > 0 ? topStays.map(({ property, matchReason, distanceLabel }) => {
            const isInCart = cart.hostels.some(h => h.id === property.id);
            return `
              <div class="bg-white rounded-2xl p-3.5 sm:p-4 text-gray-900 shadow-lg border border-white/30 flex flex-col justify-between group hover:shadow-2xl transition-all">
                <div>
                  <div class="relative h-44 rounded-xl overflow-hidden bg-slate-100 mb-3">
                    <img 
                      src="${property.image}" 
                      alt="${property.title}" 
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy" 
                    />
                    <!-- Proximity Walking Badge -->
                    <div class="absolute top-2.5 left-2.5">
                      <span class="bg-[#082A50] text-[#DFB15B] text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 border border-[#DFB15B]/30">
                        <i data-lucide="footprints" class="w-3 h-3 text-[#DFB15B]"></i>
                        ${distanceLabel}
                      </span>
                    </div>

                    <div class="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-white text-[10px] font-bold flex items-center gap-1">
                      <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                      ${property.rating || '4.8'}
                    </div>

                    <div class="absolute bottom-2.5 left-2.5 right-2.5">
                      <div class="bg-white/95 backdrop-blur-xs text-[#082A50] text-[11px] font-black px-2 py-1 rounded-md shadow-xs truncate">
                        📍 ${matchReason}
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-[11px] text-gray-500 mb-1">
                    <span class="font-bold text-gray-700">${property.type}</span>
                    <span class="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">Zero Brokerage</span>
                  </div>

                  <h4 class="font-extrabold text-sm text-[#082A50] line-clamp-1 group-hover:text-[#C59943] transition-colors cursor-pointer property-title-btn" data-id="${property.id}">
                    ${property.title}
                  </h4>
                  <p class="text-xs text-gray-500 truncate mt-0.5 mb-2">${property.location}</p>

                  <div class="flex flex-wrap gap-1 mb-3">
                    ${(property.roomOptions || ["Twin Sharing"]).slice(0, 2).map(r => `
                      <span class="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold border border-slate-200">${r}</span>
                    `).join("")}
                    <span class="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold border border-amber-200">4-Time Meals</span>
                  </div>
                </div>

                <div class="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div>
                    <span class="text-[10px] text-gray-400 block font-bold uppercase">Rent Starts</span>
                    <div class="text-base font-black text-[#082A50]">₹${property.price.toLocaleString("en-IN")}<span class="text-xs font-normal text-gray-500">/mo</span></div>
                  </div>

                  <div class="flex items-center gap-1.5">
                    <button 
                      data-hostel-id="${property.id}"
                      class="btn-add-hostel-cart text-xs font-extrabold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isInCart 
                          ? "bg-rose-50 text-rose-600 border border-rose-200" 
                          : "bg-[#082A50] hover:bg-[#051C36] text-white shadow-sm"
                      }">
                      <i data-lucide="${isInCart ? 'check' : 'heart'}" class="w-3.5 h-3.5 ${isInCart ? 'text-rose-600' : 'text-[#DFB15B]'}"></i>
                      <span>${isInCart ? 'In Wishlist' : 'Add to Wishlist'}</span>
                    </button>
                    <button 
                      data-whatsapp-property="${property.title}"
                      class="btn-whatsapp-inquiry bg-[#1AB64F] hover:bg-[#159c42] text-white p-2 rounded-xl shadow-xs transition-all cursor-pointer" 
                      title="Book Visit on WhatsApp">
                      <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join("") : `
            <div class="col-span-full py-8 text-center bg-white/5 rounded-2xl border border-white/10 text-white">
              <p class="text-xs text-slate-300">No immediate walking-distance hostels registered for this exact location yet. Our living advisor can arrange nearby accommodation.</p>
              <button class="mt-3 bg-[#1AB64F] hover:bg-[#159c42] text-white text-xs font-bold py-2 px-4 rounded-xl" onclick="window.open('https://wa.me/919110155081?text=Hi%20Yealth!%20Looking%20for%20hostels%20near%20${encodeURIComponent(activeCollege.name)}', '_blank')">
                Inquire on WhatsApp
              </button>
            </div>
          `}
        </div>
      </div>
    `;

    // Attach college selector change event
    const select = document.getElementById("select-active-college");
    if (select) {
      select.addEventListener("change", (e) => {
        state.activeCollegeId = e.target.value;
        renderCollegeRecommendations();
        renderProperties();
      });
    }

    // Attach college switcher tab clicks
    container.querySelectorAll(".btn-college-switch").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeCollegeId = btn.dataset.collegeSwitch;
        renderCollegeRecommendations();
        renderProperties();
      });
    });

  } else {
    // State 2: No college selected yet -> Provide university discovery widget
    container.innerHTML = `
      <div class="bg-gradient-to-r from-[#071A33] via-[#082A50] to-[#0E3E74] rounded-3xl p-5 sm:p-6 text-white shadow-xl border border-[#C59943]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-[#C59943]/20 border border-[#DFB15B]/40 flex items-center justify-center shrink-0">
            <i data-lucide="compass" class="w-6 h-6 text-[#DFB15B]"></i>
          </div>
          <div>
            <span class="inline-flex items-center gap-1 bg-[#DFB15B]/20 text-[#DFB15B] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
              Campus Proximity Search
            </span>
            <h3 class="text-base sm:text-lg font-black text-white">
              Looking for Stays Near Your Target College?
            </h3>
            <p class="text-xs text-slate-300 mt-0.5">
              Select your university or college below to instantly see verified student hostels within walking distance.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <select id="select-active-college" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold py-2.5 px-3 rounded-xl focus:outline-hidden cursor-pointer">
            <option value="" class="text-[#082A50] bg-white font-bold">-- Select Your College / Campus --</option>
            ${COLLEGES.map(c => `
              <option value="${c.id}" class="text-[#082A50] bg-white">
                ${c.shortName || c.name} (${c.city})
              </option>
            `).join("")}
          </select>
        </div>
      </div>
    `;

    const select = document.getElementById("select-active-college");
    if (select) {
      select.addEventListener("change", (e) => {
        if (e.target.value) {
          state.activeCollegeId = e.target.value;
          renderCollegeRecommendations();
          renderProperties();
          showToast(`Showing hostels near ${select.options[select.selectedIndex].text}`);
        }
      });
    }
  }

  // Re-attach card handlers for recommendation section
  container.querySelectorAll(".btn-add-hostel-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.hostelId;
      const prop = activePropertyList.find(p => p.id === id);
      if (prop) {
        const inCart = getCart().hostels.some(h => h.id === id);
        if (inCart) {
          removeFromCart(id, "hostel");
          showToast(`Removed ${prop.title} from Wishlist`, "info");
        } else {
          const res = addToCart(prop, "hostel");
          showToast(res.message, res.success ? "success" : "info");
        }
        renderCollegeRecommendations();
        renderProperties();
      }
    });
  });

  container.querySelectorAll(".btn-whatsapp-inquiry").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const title = btn.dataset.whatsappProperty;
      openWhatsAppInquiry({ propertyTitle: title });
    });
  });

  container.querySelectorAll(".property-title-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const prop = activePropertyList.find(p => p.id === id);
      if (prop) openPropertyModal(prop, "photos");
    });
  });

  lucide.createIcons();
}

/**
 * Setup Sign In & User Profile Widget
 */
function setupAuthWidget() {
  const container = document.getElementById("auth-header-widget");
  if (!container) return;

  const user = getCurrentUser();

  if (user) {
    container.innerHTML = `
      <div class="relative group">
        <button id="user-profile-btn" class="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 py-1.5 px-2.5 sm:px-3 rounded-full text-xs font-bold text-[#082A50] border border-slate-200 transition-all">
          <span class="w-6 h-6 rounded-full bg-[#082A50] text-[#DFB15B] flex items-center justify-center font-black text-xs">
            ${user.avatar || 'U'}
          </span>
          <span class="hidden md:inline">${user.name}</span>
          <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-gray-400"></i>
        </button>

        <div class="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 hidden group-hover:block z-50">
          <div class="px-4 py-2 border-b border-gray-100">
            <div class="text-xs font-bold text-gray-900">${user.name}</div>
            <div class="text-[11px] text-gray-500 truncate">${user.email}</div>
          </div>
          <button class="btn-trigger-cart w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-slate-50 flex items-center gap-2">
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-[#C59943]"></i>
            My Selection Bundle
          </button>
          <button class="btn-trigger-orders w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-slate-50 flex items-center gap-2">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-[#082A50]"></i>
            Track Applications
          </button>
          <div class="border-t border-gray-100 my-1"></div>
          <button id="btn-user-signout" class="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2 font-bold">
            <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
            Sign Out
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-user-signout")?.addEventListener("click", () => {
      signOut();
      showToast("Signed out successfully");
    });
  } else {
    container.innerHTML = `
      <button id="btn-trigger-signin" class="flex items-center gap-1 text-xs lg:text-sm font-bold text-white bg-[#082A50] hover:bg-[#051C36] py-2 px-2.5 sm:px-3 rounded-lg shadow-sm transition-all border border-[#082A50]">
        <i data-lucide="user" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
        <span>Sign In</span>
      </button>
    `;

    document.getElementById("btn-trigger-signin")?.addEventListener("click", () => {
      openAuthModal("signin");
    });
  }

  lucide.createIcons();
}

function showAuthError(message) {
  const banner = document.getElementById("auth-error-banner");
  const text = document.getElementById("auth-error-text");
  if (banner && text) {
    text.textContent = message;
    banner.classList.remove("hidden");
  } else {
    alert(message);
  }
}

function clearAuthError() {
  const banner = document.getElementById("auth-error-banner");
  if (banner) {
    banner.classList.add("hidden");
  }
}

export function openAuthModal(defaultTab = "signin") {
  const modal = document.getElementById("modal-auth");
  if (!modal) return;

  clearAuthError();

  const signinTab = document.getElementById("tab-auth-signin");
  const signupTab = document.getElementById("tab-auth-signup");
  const signinForm = document.getElementById("form-auth-signin");
  const signupForm = document.getElementById("form-auth-signup");

  if (defaultTab === "signin") {
    signinTab?.classList.add("border-[#082A50]", "text-[#082A50]");
    signinTab?.classList.remove("border-transparent", "text-gray-500");
    signupTab?.classList.remove("border-[#082A50]", "text-[#082A50]");
    signupTab?.classList.add("border-transparent", "text-gray-500");
    signinForm?.classList.remove("hidden");
    signupForm?.classList.add("hidden");
  } else {
    signupTab?.classList.add("border-[#082A50]", "text-[#082A50]");
    signupTab?.classList.remove("border-transparent", "text-gray-500");
    signinTab?.classList.remove("border-[#082A50]", "text-[#082A50]");
    signinTab?.classList.add("border-transparent", "text-gray-500");
    signupForm?.classList.remove("hidden");
    signinForm?.classList.add("hidden");
  }

  if (signinTab) signinTab.onclick = () => { clearAuthError(); openAuthModal("signin"); };
  if (signupTab) signupTab.onclick = () => { clearAuthError(); openAuthModal("signup"); };

  if (signinForm) {
    signinForm.onsubmit = (e) => {
      e.preventDefault();
      clearAuthError();
      const email = document.getElementById("signin-email")?.value || "";
      const pass = document.getElementById("signin-password")?.value || "";
      
      const res = signIn(email, pass);
      if (!res.success) {
        showAuthError(res.error);
        return;
      }
      modal.classList.add("hidden");
      renderCartDrawerContent();
      showToast(`Welcome back, ${res.user.name}!`);
    };
  }

  if (signupForm) {
    signupForm.onsubmit = (e) => {
      e.preventDefault();
      clearAuthError();
      const name = document.getElementById("signup-name")?.value || "";
      const email = document.getElementById("signup-email")?.value || "";
      const phone = document.getElementById("signup-phone")?.value || "";
      const pass = document.getElementById("signup-password")?.value || "";

      const res = signUp(name, email, phone, pass);
      if (!res.success) {
        showAuthError(res.error);
        return;
      }
      modal.classList.add("hidden");
      renderCartDrawerContent();
      showToast(`Account created! Welcome to Yealth, ${res.user.name}!`);
    };
  }

  const demoBtn = document.getElementById("btn-demo-login");
  if (demoBtn) {
    demoBtn.onclick = () => {
      clearAuthError();
      const res = signIn("student@yealth.com", "yealth123");
      if (res.success) {
        modal.classList.add("hidden");
        renderCartDrawerContent();
        showToast("Signed in as Demo Student Aryan Sharma!");
      }
    };
  }

  modal.classList.remove("hidden");
  modal.querySelectorAll(".btn-close-modal").forEach(b => b.onclick = () => modal.classList.add("hidden"));
  lucide.createIcons();
}