import { COLLEGES } from "./data/colleges.js";
import { SITE_CONFIG } from "./config/siteConfig.js";
import { 
  getCart, 
  addToCart, 
  removeFromCart, 
  getCartCount, 
  createOrder, 
  getOrders,
  confirmOrderNextStep,
  ADMIN_PHONE
} from "./utils/cartState.js";
import { 
  getCurrentUser, 
  signIn, 
  signUp, 
  signOut 
} from "./utils/authState.js";

const state = {
  activeCollegeType: "all", // "all" | "Government" | "Private"
  activeStream: "all",      // "all" | "engineering" | "medical" | "management" | "law" | "design"
  searchQuery: ""
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("stream")) state.activeStream = urlParams.get("stream");
  if (urlParams.get("type")) state.activeCollegeType = urlParams.get("type");
  renderStreamFilterTabs();
  renderCollegeFilters();
  renderColleges();
  setupAuthWidget();
  setupCartUI();
  setupOrdersUI();
  setupStreamCardsClick();
  setupLoanCalculator();
  lucide.createIcons();

  window.addEventListener("yealth-cart-updated", () => {
    updateCartBadges();
    renderCartDrawerContent();
  });

  window.addEventListener("yealth-auth-updated", () => {
    setupAuthWidget();
  });
});

/**
 * 1. Stream Filter Tabs (All Streams, Engineering, Medical, Management, Law, Design)
 */
function renderStreamFilterTabs() {
  const container = document.getElementById("college-stream-filters");
  if (!container) return;

  const streamTabs = [
    { id: "all", label: "🌟 All Disciplines", icon: "sparkles" },
    { id: "engineering", label: "⚡ Engineering & Tech", icon: "cpu" },
    { id: "medical", label: "🩺 Medical & Healthcare", icon: "stethoscope" },
    { id: "management", label: "💼 Management & MBA", icon: "briefcase" },
    { id: "law", label: "⚖️ Law & Legal Studies", icon: "scale" },
    { id: "design", label: "🎨 Design & Architecture", icon: "palette" }
  ];

  container.innerHTML = streamTabs.map(t => {
    const isActive = state.activeStream === t.id;
    return `
      <button 
        data-stream="${t.id}"
        class="stream-filter-chip px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-1.5 ${
          isActive 
            ? "bg-[#DFB15B] text-[#071A33] border-[#DFB15B] shadow-md font-black scale-102"
            : "bg-white text-gray-700 hover:bg-slate-100 border-gray-300"
        }">
        <span>${t.label}</span>
      </button>
    `;
  }).join("");

  container.querySelectorAll(".stream-filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeStream = btn.dataset.stream;
      renderStreamFilterTabs();
      renderColleges();
    });
  });
}

/**
 * 2. Type Filter Tabs (All, Government, Private)
 */
function renderCollegeFilters() {
  const container = document.getElementById("college-type-filters");
  if (!container) return;

  const filters = [
    { id: "all", label: "All Institutions" },
    { id: "Government", label: "🏛️ Government Only" },
    { id: "Private", label: "🏫 Top Private Only" }
  ];

  container.innerHTML = filters.map(f => {
    const isActive = state.activeCollegeType === f.id;
    return `
      <button 
        data-type="${f.id}"
        class="college-filter-chip px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
          isActive 
            ? "bg-[#082A50] text-white border-[#082A50] shadow-md"
            : "bg-slate-100 text-gray-700 hover:bg-slate-200 border-slate-200"
        }">
        ${f.label}
      </button>
    `;
  }).join("");

  container.querySelectorAll(".college-filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCollegeType = btn.dataset.type;
      renderCollegeFilters();
      renderColleges();
    });
  });
}

/**
 * Make the 6 Stream Cards at the top clickable to trigger instant filtering & smooth scroll
 */
function setupStreamCardsClick() {
  document.querySelectorAll(".stream-card-clickable").forEach(card => {
    card.addEventListener("click", () => {
      const stream = card.dataset.stream;
      if (stream) {
        state.activeStream = stream;
        renderStreamFilterTabs();
        renderColleges();
        const section = document.getElementById("colleges-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

function getFilteredColleges() {
  return COLLEGES.filter(col => {
    // 1. Check Government vs Private
    if (state.activeCollegeType !== "all" && col.type !== state.activeCollegeType) {
      return false;
    }
    // 2. Check Stream (Engineering, Medical, Management, Law, Design)
    if (state.activeStream !== "all") {
      const target = state.activeStream.toLowerCase();
      const hasDiscipline = (col.disciplines || []).some(d => d.toLowerCase().includes(target));
      const hasCategory = (col.category || "").toLowerCase().includes(target);
      const hasStreamCourse = (col.streams || []).some(s => s.toLowerCase().includes(target));
      if (!hasDiscipline && !hasCategory && !hasStreamCourse) {
        return false;
      }
    }
    // 3. Search query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      const matchName = col.name.toLowerCase().includes(q);
      const matchCity = col.city.toLowerCase().includes(q);
      const matchLoc = col.location.toLowerCase().includes(q);
      const matchStreams = (col.streams || []).some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchCity && !matchLoc && !matchStreams) {
        return false;
      }
    }
    return true;
  });
}

function renderColleges() {
  const container = document.getElementById("colleges-grid");
  const countContainer = document.getElementById("college-results-count");
  if (!container) return;

  const filtered = getFilteredColleges();
  const cart = getCart();

  // Render Status / Results Header
  if (countContainer) {
    const streamNameMap = {
      all: "All Disciplines",
      engineering: "Engineering & Tech",
      medical: "Medical & Healthcare",
      management: "Management & MBA",
      law: "Law & Legal Studies",
      design: "Design & Architecture"
    };
    const activeStreamName = streamNameMap[state.activeStream] || state.activeStream;
    const isFiltered = state.activeStream !== "all" || state.activeCollegeType !== "all";

    countContainer.innerHTML = `
      <div class="flex flex-wrap items-center justify-center gap-3">
        <span class="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-extrabold border border-slate-200">
          <span class="w-2 h-2 rounded-full bg-[#1AB64F]"></span>
          Showing ${filtered.length} verified institution${filtered.length === 1 ? '' : 's'} offering <strong class="text-[#082A50]">${activeStreamName}</strong>
        </span>
        ${isFiltered ? `
          <button id="btn-reset-filters" class="text-xs font-bold text-red-600 hover:text-red-700 underline flex items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            Reset to All Colleges
          </button>
        ` : ''}
      </div>
    `;

    document.getElementById("btn-reset-filters")?.addEventListener("click", () => {
      state.activeStream = "all";
      state.activeCollegeType = "all";
      renderStreamFilterTabs();
      renderCollegeFilters();
      renderColleges();
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-gray-300 p-8">
        <div class="w-14 h-14 rounded-full bg-slate-200 text-gray-400 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="search-x" class="w-7 h-7"></i>
        </div>
        <h4 class="text-base font-bold text-gray-800 mb-1">No Institutions Found for this Criteria</h4>
        <p class="text-xs text-gray-500 max-w-md mx-auto mb-4">Try switching your discipline or selecting 'All Institutions' to see available universities.</p>
        <button id="btn-empty-reset" class="bg-[#082A50] text-white text-xs font-bold py-2.5 px-5 rounded-xl">View All Colleges</button>
      </div>
    `;
    document.getElementById("btn-empty-reset")?.addEventListener("click", () => {
      state.activeStream = "all";
      state.activeCollegeType = "all";
      renderStreamFilterTabs();
      renderCollegeFilters();
      renderColleges();
    });
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(c => {
    const isInCart = cart.colleges.some(item => item.id === c.id);
    const isGovt = c.type === "Government";

    return `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
        <div>
          <!-- Campus Photo with Badges -->
          <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
            <img 
              src="${c.image}" 
              alt="${c.name}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <!-- Type Badge (Govt / Private) -->
            <div class="absolute top-3 left-3 flex items-center gap-1.5">
              <span class="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider ${
                isGovt 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "bg-[#082A50] text-[#DFB15B] border border-[#DFB15B]/40 shadow-sm"
              }">
                ${isGovt ? "🏛️ Government" : "🏫 Private"}
              </span>
            </div>

            <!-- NIRF & Rating -->
            <div class="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 text-white text-[11px] font-bold">
              <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-amber-400"></i>
              <span>${c.rating}</span>
            </div>

            <!-- Bottom of Image: Name & Location -->
            <div class="absolute bottom-3 left-3 right-3 text-white">
              <span class="text-[10px] font-bold text-[#DFB15B] uppercase tracking-wider block">${c.nirfRank || c.accreditation}</span>
              <h3 class="text-base font-extrabold leading-tight text-white drop-shadow-sm">${c.name}</h3>
              <div class="flex items-center gap-1 text-[11px] text-slate-200 mt-0.5">
                <i data-lucide="map-pin" class="w-3 h-3 text-[#DFB15B] shrink-0"></i>
                <span class="truncate">${c.location}</span>
              </div>
            </div>
          </div>

          <!-- Body Specs -->
          <div class="p-4 sm:p-5 space-y-3.5">
            <p class="text-xs text-gray-600 line-clamp-2">${c.description}</p>

            <!-- Metrics Matrix: Fees, Avg Package, Cutoff -->
            <div class="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs">
              <div>
                <div class="text-[10px] uppercase font-bold text-gray-400">Est. Tuition Fee</div>
                <div class="font-extrabold text-[#082A50] truncate">${c.fees}</div>
              </div>
              <div>
                <div class="text-[10px] uppercase font-bold text-gray-400">Avg Placement</div>
                <div class="font-extrabold text-green-700 truncate">${c.avgPackage || 'High ROI'}</div>
              </div>
            </div>

            <!-- Streams & Courses Offered -->
            <div>
              <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Offered Disciplines & Courses:</div>
              <div class="flex flex-wrap gap-1">
                ${(c.streams || []).slice(0, 4).map(st => `
                  <span class="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold border border-slate-200">${st}</span>
                `).join("")}
                ${(c.streams || []).length > 4 ? `
                  <span class="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded-md font-bold border border-amber-200">+${c.streams.length - 4} more</span>
                ` : ''}
              </div>
            </div>

            <!-- Highlights -->
            <div class="space-y-1">
              ${(c.highlights || []).slice(0, 2).map(h => `
                <div class="flex items-center gap-1.5 text-[11px] text-gray-700">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#1AB64F] shrink-0"></i>
                  <span class="truncate">${h}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Footer CTAs -->
        <div class="p-4 sm:p-5 pt-0 border-t border-gray-100 flex items-center gap-2 mt-2">
          <button 
            data-college-id="${c.id}" 
            class="btn-toggle-college-cart flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 ${
              isInCart 
                ? "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100" 
                : "bg-[#082A50] hover:bg-[#051C36] text-white shadow-sm"
            }">
            <i data-lucide="${isInCart ? 'trash-2' : 'shopping-bag'}" class="w-4 h-4"></i>
            <span>${isInCart ? "Remove from Bundle" : "Add to Cart"}</span>
          </button>

          <a 
            href="https://wa.me/919110155081?text=Hi%20Yealth%20Admissions!%20I%20am%20interested%20in%20applying%20to%20${encodeURIComponent(c.name)}%20(${c.type}).%20Please%20guide%20me%20on%20cutoffs%20and%20fees."
            target="_blank"
            class="bg-[#1AB64F] hover:bg-[#159c42] text-white p-2.5 rounded-xl flex items-center justify-center shadow-sm"
            title="Chat about this college on WhatsApp">
            <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
          </a>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".btn-toggle-college-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const colId = btn.dataset.collegeId;
      const col = COLLEGES.find(c => c.id === colId);
      if (!col) return;

      const inCart = getCart().colleges.some(c => c.id === colId);
      if (inCart) {
        removeFromCart(colId, "college");
        showToast(`Removed ${col.shortName || col.name} from bundle`);
      } else {
        addToCart(col, "college");
        showToast(`Added ${col.shortName || col.name} to bundle!`);
      }
      renderColleges();
    });
  });

  lucide.createIcons();
}

/**
 * 3. Setup Interactive Education Loan EMI & Eligibility Calculator
 */
function setupLoanCalculator() {
  const amountSlider = document.getElementById("loan-amount-slider");
  const amountDisplay = document.getElementById("loan-amount-display");
  const tenureSlider = document.getElementById("loan-tenure-slider");
  const tenureDisplay = document.getElementById("loan-tenure-display");
  const rateSelect = document.getElementById("loan-rate-select");
  const emiOutput = document.getElementById("calc-emi-output");
  const interestOutput = document.getElementById("calc-interest-output");
  const totalOutput = document.getElementById("calc-total-output");
  const applyBtn = document.getElementById("btn-apply-loan-calc");

  if (!amountSlider || !tenureSlider) return;

  function calculateLoan() {
    const P = parseFloat(amountSlider.value);
    const years = parseFloat(tenureSlider.value);
    const N = years * 12;
    const annualRate = parseFloat(rateSelect?.value || 9.5);
    const R = (annualRate / 12) / 100;

    // Monthly EMI formula: P * R * (1+R)^N / ((1+R)^N - 1)
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayable = emi * N;
    const totalInterest = totalPayable - P;

    if (amountDisplay) amountDisplay.textContent = `₹${(P / 100000).toFixed(1)} Lakhs`;
    if (tenureDisplay) tenureDisplay.textContent = `${years} Year${years > 1 ? 's' : ''}`;
    if (emiOutput) emiOutput.textContent = `₹${Math.round(emi).toLocaleString("en-IN")}/mo`;
    if (interestOutput) interestOutput.textContent = `₹${Math.round(totalInterest).toLocaleString("en-IN")}`;
    if (totalOutput) totalOutput.textContent = `₹${Math.round(totalPayable).toLocaleString("en-IN")}`;

    if (applyBtn) {
      const msg = `Hi Yealth! I calculated an Education Loan of ₹${(P/100000).toFixed(1)}Lakhs for ${years} years (Est EMI: ₹${Math.round(emi).toLocaleString('en-IN')}/mo). Please guide me on pre-approval and documents.`;
      applyBtn.href = `https://wa.me/919110155081?text=${encodeURIComponent(msg)}`;
    }
  }

  amountSlider.addEventListener("input", calculateLoan);
  tenureSlider.addEventListener("input", calculateLoan);
  rateSelect?.addEventListener("change", calculateLoan);

  calculateLoan();
}

/**
 * 4. Setup Unified Cart UI & Drawer with Auth-Gate & Loan Options
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
        <div class="w-14 h-14 rounded-full bg-slate-100 text-[#082A50] flex items-center justify-center mx-auto mb-3">
          <i data-lucide="shopping-bag" class="w-6 h-6"></i>
        </div>
        <h4 class="font-bold text-gray-800 text-sm mb-1">Your Selection Bundle is Empty</h4>
        <p class="text-xs text-gray-500 max-w-xs mx-auto mb-5">Select a college and hostel to submit your unified zero-brokerage application.</p>
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

  container.querySelectorAll(".btn-cart-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.removeId;
      const type = btn.dataset.type;
      removeFromCart(id, type);
      renderCartDrawerContent();
      renderColleges();
      showToast("Item removed from bundle");
    });
  });

  lucide.createIcons();
}

/**
 * 5. Setup Order Tracking & Interactive Confirmation Progression Modal
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
        <button class="btn-close-modal bg-[#082A50] text-white text-xs font-bold py-2.5 px-4 rounded-xl">Explore Colleges</button>
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
 * 6. Setup Sign In & Sign Out Authentication with STRICT Validation
 */
function setupAuthWidget() {
  const container = document.getElementById("auth-header-widget");
  if (!container) return;

  const user = getCurrentUser();

  if (user) {
    container.innerHTML = `
      <div class="relative group">
        <button id="user-profile-btn" class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 py-1.5 px-3 rounded-full text-xs font-bold text-[#082A50] border border-slate-200 transition-all">
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
      <button id="btn-trigger-signin" class="flex items-center gap-1.5 text-xs lg:text-sm font-bold text-white bg-[#082A50] hover:bg-[#051C36] py-2 px-3.5 rounded-lg shadow-sm transition-all border border-[#082A50]">
        <i data-lucide="user" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
        <span>Sign In</span>
      </button>
    `;

    document.getElementById("btn-trigger-signin")?.addEventListener("click", () => {
      openAuthModal();
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
        showToast("Signed in as Demo Student Aryan Sharma!");
      }
    };
  }

  modal.classList.remove("hidden");
  modal.querySelectorAll(".btn-close-modal").forEach(b => b.onclick = () => modal.classList.add("hidden"));
  lucide.createIcons();
}

function showToast(message, type = "success") {
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