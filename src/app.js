import { SITE_CONFIG } from "./config/siteConfig.js";
import { PROPERTIES, CATEGORY_FILTERS } from "./data/properties.js";
import { openWhatsAppInquiry, getWhatsAppUrl } from "./utils/whatsapp.js";

// Global Application State
const state = {
  activeCity: "All Cities",
  activeCategory: "all",
  searchQuery: {
    location: "",
    moveInMonth: "Immediate",
    roomType: "All Types"
  },
  selectedProperty: null
};

// Initialize App on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderCityFilters();
  renderCategoryTabs();
  renderProperties();
  setupSearchForm();
  setupLeadCapture();
  setupModals();
  setupQuickActions();
  setupSEOKeywords();
  lucide.createIcons();
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

  // Add click listeners to city chips
  container.querySelectorAll(".city-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const city = btn.dataset.city;
      state.activeCity = city;
      renderCityFilters();

      // Update search input if applicable
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
  return PROPERTIES.filter(item => {
    // City filter
    if (state.activeCity !== "All Cities" && item.city !== state.activeCity) {
      return false;
    }

    // Category filter
    if (state.activeCategory !== "all") {
      if (state.activeCategory === "Near Coaching Hubs" && item.category !== "Near Coaching Hubs") {
        return false;
      }
      if (state.activeCategory === "Girls Only" && item.category !== "Girls Only" && !item.type.includes("Girls Only")) {
        return false;
      }
      if (state.activeCategory === "Boys Only" && item.category !== "Boys Only" && !item.type.includes("Boys Only")) {
        return false;
      }
      if (state.activeCategory === "Co-Living" && item.category !== "Co-Living") {
        return false;
      }
    }

    // Search query location filter
    if (state.searchQuery.location.trim()) {
      const q = state.searchQuery.location.toLowerCase().trim();
      const matchLoc = item.location.toLowerCase().includes(q);
      const matchCity = item.city.toLowerCase().includes(q);
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
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
          We couldn't find an exact match for "${state.searchQuery.location || state.activeCity}". Talk directly with our Student Living Advisor to find unlisted or upcoming rooms!
        </p>
        <button 
          id="btn-custom-inquiry-empty"
          class="inline-flex items-center gap-2 bg-[#1AB64F] hover:bg-[#159c42] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition-all">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          Inquire Custom Location on WhatsApp
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

      return `
        <div class="oyo-card-shadow bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col group">
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
              <span class="bg-[#1AB64F] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                <i data-lucide="shield-check" class="w-3 h-3"></i>
                Verified
              </span>
              <span class="bg-white/95 text-gray-900 text-xs font-bold px-2 py-0.5 rounded shadow flex items-center gap-1 border border-amber-200">
                <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                ${property.rating}
              </span>
            </div>

            ${
              discountPercent 
                ? `<div class="absolute bottom-2 left-3 bg-[#C59943] text-white text-[11px] font-black px-2.5 py-0.5 rounded shadow-sm">
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
                ${property.tags
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

              <!-- Action Buttons -->
              <div class="grid grid-cols-5 gap-2">
                <button 
                  data-whatsapp-property="${property.title}"
                  class="col-span-4 btn-whatsapp-inquiry bg-[#1AB64F] hover:bg-[#159c42] text-white text-xs md:text-sm font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                  Book Visit via WhatsApp
                </button>
                <a 
                  href="tel:${SITE_CONFIG.phoneRaw}"
                  title="Call Living Advisor"
                  class="col-span-1 border border-gray-200 hover:border-[#082A50] hover:bg-slate-50 text-gray-700 hover:text-[#082A50] rounded-lg flex items-center justify-center transition-colors">
                  <i data-lucide="phone-call" class="w-4 h-4"></i>
                </a>
              </div>

              <!-- Quick View Detail Link -->
              <button 
                data-id="${property.id}"
                class="property-title-btn w-full mt-2 text-center text-xs font-semibold text-gray-500 hover:text-[#082A50] py-1 transition-colors">
                View All Amenities & Meal Plan →
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

  container.querySelectorAll(".property-title-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const prop = PROPERTIES.find(p => p.id === id);
      if (prop) openPropertyModal(prop);
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

    // Scroll to properties section
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

  // Location suggestions quick select
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
 * Interactive Modals (List PG, Campus Partner, Property Detail)
 */
function setupModals() {
  // Close modals on escape or backdrop click
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

  // List Property triggers
  document.querySelectorAll(".btn-trigger-list-property").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("modal-list-property");
      if (modal) modal.classList.remove("hidden");
    });
  });

  // Yealth for Campuses triggers
  document.querySelectorAll(".btn-trigger-campus").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("modal-campus");
      if (modal) modal.classList.remove("hidden");
    });
  });

  // List Property Form submission
  const listForm = document.getElementById("form-list-property");
  if (listForm) {
    listForm.addEventListener("submit", e => {
      e.preventDefault();
      const ownerName = document.getElementById("owner-name")?.value || "";
      const ownerCity = document.getElementById("owner-city")?.value || "";
      const ownerType = document.getElementById("owner-type")?.value || "PG / Hostel";
      const ownerPhone = document.getElementById("owner-phone")?.value || "";

      const text = `Hi Yealth, I want to list my ${ownerType} in ${ownerCity}. My name is ${ownerName}, phone: ${ownerPhone}. Please connect with me to verify and onboard.`;
      const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");

      closeAllModals();
      showToast("Redirecting to WhatsApp to complete your property listing!");
    });
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-container").forEach(m => m.classList.add("hidden"));
}

function openPropertyModal(property) {
  const modal = document.getElementById("modal-property-detail");
  if (!modal) return;

  const content = document.getElementById("modal-property-content");
  if (content) {
    content.innerHTML = `
      <div class="relative">
        <img src="${property.image}" alt="${property.title}" class="w-full h-64 object-cover rounded-t-2xl" />
        <button class="btn-close-modal absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
        <div class="absolute bottom-4 left-4">
          <span class="bg-[#1AB64F] text-white text-xs font-bold px-3 py-1 rounded shadow">
            100% Yealth Verified
          </span>
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between gap-4 mb-2">
          <h2 class="text-xl font-bold text-gray-900">${property.title}</h2>
          <div class="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded text-amber-700 font-bold text-sm">
            <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
            ${property.rating} (${property.reviewsCount || 100}+ reviews)
          </div>
        </div>

        <p class="text-sm text-gray-500 flex items-center gap-1.5 mb-4">
          <i data-lucide="map-pin" class="w-4 h-4 text-[#DFB15B]"></i>
          ${property.location}, ${property.city}
        </p>

        <div class="bg-gray-50 p-3.5 rounded-xl mb-5 flex items-center justify-between border border-gray-100">
          <div>
            <span class="text-xs text-gray-500 block">Monthly Rent</span>
            <div class="text-2xl font-black text-gray-900">₹${property.price.toLocaleString("en-IN")}<span class="text-sm font-normal text-gray-500"> /month</span></div>
          </div>
          <div class="text-right">
            <span class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Zero Deposit / Zero Brokerage</span>
            <span class="text-[11px] text-gray-400 block mt-1">Includes 4-time meals & Wi-Fi</span>
          </div>
        </div>

        <h4 class="font-bold text-sm text-gray-900 mb-2">Verified Student Amenities Included:</h4>
        <div class="grid grid-cols-2 gap-2 mb-6">
          ${property.amenities.map(a => `
            <div class="flex items-center gap-2 text-xs text-gray-700 bg-white p-2 rounded-lg border border-gray-100">
              <i data-lucide="check" class="w-4 h-4 text-[#1AB64F]"></i>
              ${a}
            </div>
          `).join("")}
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button 
            id="modal-book-whatsapp-btn"
            class="bg-[#1AB64F] hover:bg-[#159c42] text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            Schedule Visit on WhatsApp
          </button>
          <a 
            href="tel:${SITE_CONFIG.phoneRaw}"
            class="border border-gray-300 hover:border-[#082A50] hover:bg-slate-50 text-gray-800 hover:text-[#082A50] py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
            <i data-lucide="phone" class="w-4 h-4"></i>
            Call Advisor
          </a>
        </div>
      </div>
    `;

    document.getElementById("modal-book-whatsapp-btn")?.addEventListener("click", () => {
      openWhatsAppInquiry({ propertyTitle: property.title });
    });
  }

  modal.classList.remove("hidden");
  lucide.createIcons();
}

/**
 * Setup Quick Actions & Direct Contact Links
 */
function setupQuickActions() {
  // Floating WhatsApp Button
  const floatBtn = document.getElementById("btn-floating-whatsapp");
  if (floatBtn) {
    floatBtn.addEventListener("click", () => {
      openWhatsAppInquiry({
        customMessage: "Hi Yealth Team, I have a quick question regarding student accommodation."
      });
    });
  }

  // Promo Banner WhatsApp CTA
  const promoBtn = document.getElementById("btn-promo-whatsapp");
  if (promoBtn) {
    promoBtn.addEventListener("click", () => {
      openWhatsAppInquiry({
        customMessage: "Hi Yealth, I want to inquire about the Semester Starter deal for verified PGs under ₹5,999/month."
      });
    });
  }

  // Value Banner Schedule Visit CTA
  const visitBtn = document.getElementById("btn-banner-visit");
  if (visitBtn) {
    visitBtn.addEventListener("click", () => {
      openWhatsAppInquiry({
        customMessage: "Hi Yealth! I would like to book a free property visit to check rooms and food quality."
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
      : "bg-[#082A50] text-white border border-[#C59943]/40"
  }`;

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === "error" ? "bg-red-400" : "bg-[#DFB15B]"}"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, -10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
