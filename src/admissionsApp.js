import { COLLEGES } from "./data/colleges.js";
import { RANK_CUTOFFS } from "./data/rankCutoffs.js";
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
  searchQuery: "",
  modalActiveCollegeId: null,
  modalCourseSearch: "",
  modalDegreeFilter: "all",
  // Rank Calculator State
  calcExam: "neet",         // "neet" | "jee"
  calcChanceFilter: "all",  // "all" | "Safe" | "Probable" | "Ambitious"
  calcLastResults: [],
  calcSubmittedQuery: null
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("stream")) state.activeStream = urlParams.get("stream");
  if (urlParams.get("type")) state.activeCollegeType = urlParams.get("type");
  const linkedCollege = urlParams.get("college") || urlParams.get("collegeId");

  renderStreamFilterTabs();
  renderCollegeFilters();
  renderColleges();
  setupAuthWidget();
  setupCartUI();
  setupOrdersUI();
  setupStreamCardsClick();
  setupLoanCalculator();
  setupCollegeDetailsModalEvents();
  setupRankCalculator();

  const calcExamParam = urlParams.get("calcExam");
  const calcRankParam = urlParams.get("calcRank");
  const calcCatParam = urlParams.get("calcCategory");
  const calcQuotaParam = urlParams.get("calcQuota");
  const calcTypeParam = urlParams.get("calcType");

  if (calcExamParam) setCalcExam(calcExamParam);
  if (calcRankParam) {
    const rInput = document.getElementById("calc-rank-input");
    if (rInput) rInput.value = calcRankParam;
    if (calcCatParam) {
      const cSelect = document.getElementById("calc-category-select");
      if (cSelect) cSelect.value = calcCatParam;
    }
    if (calcQuotaParam) {
      const qSelect = document.getElementById("calc-quota-select");
      if (qSelect) qSelect.value = calcQuotaParam;
    }
    if (calcTypeParam) {
      const tSelect = document.getElementById("calc-inst-type-select");
      if (tSelect) tSelect.value = calcTypeParam;
    }
    state.calcSubmittedQuery = {
      rank: parseFloat(calcRankParam),
      category: calcCatParam || "General",
      quota: calcQuotaParam || "all",
      instType: calcTypeParam || "all",
      exam: calcExamParam || state.calcExam
    };
    runRankPrediction();
  }

  if (linkedCollege) {
    openCollegeDetailsModal(linkedCollege);
  }

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
    const courseList = c.courses || [];
    const courseCount = courseList.length > 0 ? courseList.length : (c.streams || []).length;

    return `
      <div 
        data-college-id="${c.id}"
        class="college-card-interactive bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-[#DFB15B]/80 hover:-translate-y-1">
        <div>
          <!-- Campus Photo with Badges (CollegeDekho Style) -->
          <div class="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 group">
            <img 
              src="${c.image}" 
              alt="${c.name}" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onerror="this.src='assets/yealth-logo.png'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none"></div>

            <!-- Top Left: Type Badge (Govt / Private) -->
            <div class="absolute top-3 left-3 flex items-center gap-1.5 z-10">
              <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                isGovt 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "bg-[#082A50] text-[#DFB15B] border border-[#DFB15B]/40 shadow-sm"
              }">
                ${isGovt ? "🏛️ Government" : "🏫 Private"}
              </span>
            </div>

            <!-- Top Right: Rating & Est. Year -->
            <div class="absolute top-3 right-3 flex items-center gap-1.5 z-10">
              <span class="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20 text-white text-[10px] font-bold">
                Est. ${c.established}
              </span>
              <span class="bg-amber-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-xs flex items-center gap-0.5">
                <i data-lucide="star" class="w-3 h-3 text-white fill-white"></i>
                <span>${c.rating}</span>
              </span>
            </div>

            <!-- Floating Highest Package Badge -->
            <div class="absolute top-11 right-3 z-10">
              <span class="bg-white/95 backdrop-blur-md text-[#082A50] font-black text-[10px] px-2 py-0.5 rounded-md shadow-xs border border-slate-200">
                Max ${c.highestPackage}
              </span>
            </div>

            <!-- Bottom of Image: Title, Location & NIRF -->
            <div class="absolute bottom-3 left-3 right-3 text-white z-10">
              <span class="text-[10px] font-bold text-[#DFB15B] uppercase tracking-wider block truncate">${c.nirfRank || c.accreditation}</span>
              <h3 class="text-base font-black leading-tight text-white drop-shadow-sm line-clamp-1">${c.name}</h3>
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
              <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                <span>Offered Disciplines:</span>
                <span class="text-[#082A50] font-black text-[10px] flex items-center gap-0.5 group-hover:text-[#DFB15B]">
                  <span>View Details</span>
                  <i data-lucide="arrow-right" class="w-3 h-3"></i>
                </span>
              </div>
              <div class="flex flex-wrap gap-1">
                ${(c.streams || []).slice(0, 4).map(st => `
                  <button type="button" class="btn-stream-tag-click text-[10px] bg-slate-100 hover:bg-[#082A50] hover:text-[#DFB15B] text-slate-700 px-2 py-0.5 rounded-md font-semibold border border-slate-200 transition-colors" data-college-id="${c.id}" data-stream-name="${st}">${st}</button>
                `).join("")}
                ${(c.streams || []).length > 4 ? `
                  <button type="button" class="btn-stream-more-click text-[10px] bg-amber-50 hover:bg-[#DFB15B] hover:text-[#071A33] text-amber-800 px-1.5 py-0.5 rounded-md font-bold border border-amber-200 transition-colors" data-college-id="${c.id}">+${c.streams.length - 4} more</button>
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

            <!-- Prominent Explore Courses Button -->
            <button 
              type="button" 
              data-college-id="${c.id}" 
              class="btn-view-courses-action w-full py-2.5 px-3 rounded-xl text-xs font-black bg-gradient-to-r from-blue-50/80 via-amber-50/70 to-blue-50/80 hover:from-[#082A50] hover:to-[#051C36] text-[#082A50] hover:text-[#DFB15B] border border-amber-300 hover:border-[#082A50] transition-all flex items-center justify-center gap-1.5 shadow-xs group/btn">
              <i data-lucide="book-open" class="w-4 h-4 text-[#C59943] group-hover/btn:text-[#DFB15B]"></i>
              <span>Explore Courses &amp; Eligibility (${courseCount} Courses) →</span>
            </button>
          </div>
        </div>

        <!-- Footer CTAs -->
        <div class="p-4 sm:p-5 pt-0 border-t border-gray-100 flex flex-wrap items-center gap-2 mt-2">
          <button 
            type="button"
            data-college-id="${c.id}" 
            class="btn-toggle-college-cart flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isInCart 
                ? "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100" 
                : "bg-[#082A50] hover:bg-[#051C36] text-white shadow-sm"
            }">
            <i data-lucide="${isInCart ? 'check' : 'heart'}" class="w-4 h-4 ${isInCart ? 'text-rose-600' : 'text-[#DFB15B]'}"></i>
            <span>${isInCart ? "In Wishlist" : "Add to Wishlist"}</span>
          </button>

          <a 
            href="hostels.html?college=${c.id}" 
            class="btn-card-hostel-link bg-amber-50 hover:bg-amber-100 text-[#082A50] border border-amber-300 py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-xs" 
            title="Explore student hostels and PGs near ${c.shortName || c.name}">
            <i data-lucide="building" class="w-3.5 h-3.5 text-[#C59943]"></i>
            <span>Hostels</span>
          </a>

          <a 
            href="https://wa.me/919110155081?text=Hi%20Yealth%20Admissions!%20I%20am%20interested%20in%20applying%20to%20${encodeURIComponent(c.name)}%20(${c.type}).%20Please%20guide%20me%20on%20cutoffs%20and%20fees."
            target="_blank" 
            class="btn-card-whatsapp-link bg-[#1AB64F] hover:bg-[#159c42] text-white p-2.5 rounded-xl flex items-center justify-center shadow-sm" 
            title="Chat about this college on WhatsApp">
            <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
          </a>
        </div>
      </div>
    `;
  }).join("");

  // Card click -> Open modal
  container.querySelectorAll(".college-card-interactive").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-toggle-college-cart, .btn-card-hostel-link, .btn-card-whatsapp-link")) {
        return;
      }
      const colId = card.dataset.collegeId;
      openCollegeDetailsModal(colId);
    });
  });

  // Action button click
  container.querySelectorAll(".btn-view-courses-action").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const colId = btn.dataset.collegeId;
      openCollegeDetailsModal(colId);
    });
  });

  // Stream pill clicks
  container.querySelectorAll(".btn-stream-tag-click").forEach(tag => {
    tag.addEventListener("click", (e) => {
      e.stopPropagation();
      const colId = tag.dataset.collegeId;
      const streamName = tag.dataset.streamName;
      openCollegeDetailsModal(colId, streamName);
    });
  });

  container.querySelectorAll(".btn-stream-more-click").forEach(tag => {
    tag.addEventListener("click", (e) => {
      e.stopPropagation();
      const colId = tag.dataset.collegeId;
      openCollegeDetailsModal(colId);
    });
  });

  container.querySelectorAll(".btn-toggle-college-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const colId = btn.dataset.collegeId;
      const col = COLLEGES.find(c => c.id === colId);
      if (!col) return;

      const inCart = getCart().colleges.some(c => c.id === colId);
      if (inCart) {
        removeFromCart(colId, "college");
        showToast(`Removed ${col.shortName || col.name} from Wishlist`, "info");
      } else {
        addToCart(col, "college");
        showToast(`Added ${col.shortName || col.name} to Wishlist!`, "success");
      }
      renderColleges();
      renderRankResultsCards();
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
        <a href="hostels.html?college=${cart.colleges[0].id}" class="w-full bg-[#082A50] hover:bg-[#051C36] text-[#DFB15B] text-xs font-extrabold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm">
          <i data-lucide="building" class="w-3.5 h-3.5 text-[#DFB15B]"></i>
          <span>View Hostels Near ${cart.colleges[0].shortName || cart.colleges[0].name} →</span>
        </a>
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

/**
 * 7. College Details, Courses Catalog & Eligibility Modal
 * CollegeDekho Reference Experience & High-Accessibility Course Explorer
 */
export function setupCollegeDetailsModalEvents() {
  const modal = document.getElementById("modal-college-details");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".btn-close-college-modal")) {
      closeCollegeDetailsModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const galleryModal = document.getElementById("modal-campus-gallery");
      if (galleryModal && !galleryModal.classList.contains("hidden")) {
        closeCampusGalleryModal();
        return;
      }
      if (!modal.classList.contains("hidden")) {
        closeCollegeDetailsModal();
      }
    }
  });

  setupCampusGalleryModalEvents();
}

export function closeCollegeDetailsModal() {
  const modal = document.getElementById("modal-college-details");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

export function openCollegeDetailsModal(collegeId, searchKeyword = "") {
  let college = COLLEGES.find(c => c.id === collegeId);
  if (!college) {
    const cutoff = RANK_CUTOFFS.find(r => r.collegeId === collegeId);
    if (cutoff) {
      college = {
        id: cutoff.collegeId,
        name: cutoff.collegeName,
        shortName: cutoff.shortName || cutoff.collegeName,
        type: cutoff.type || "Government",
        category: cutoff.stream === "medical" ? "Medical & Healthcare" : (cutoff.stream === "management" ? "Management & MBA" : "Engineering & Tech"),
        disciplines: [cutoff.stream || "general"],
        city: cutoff.city || "India",
        location: cutoff.location || cutoff.city || "India",
        nirfRank: cutoff.tier || "Verified Premier",
        accreditation: cutoff.highlights || "Recognized Institution",
        rating: "4.8",
        reviewsCount: 850,
        established: "1980",
        avgPackage: cutoff.avgPackage || "₹12.5 LPA",
        highestPackage: cutoff.highestPackage || "₹45 LPA",
        fees: cutoff.fees || "Competitive",
        entranceExams: [cutoff.counselingBoard || cutoff.exam || "Entrance Merit"],
        streams: [cutoff.courseName],
        image: `assets/colleges/${cutoff.collegeId}.jpg`,
        highlights: [cutoff.highlights, cutoff.counselingBoard].filter(Boolean),
        description: `${cutoff.collegeName} is recognized for top-tier academic excellence in ${cutoff.courseName}, featuring accredited faculty, state-of-the-art labs, and strong placement records.`,
        courses: [{
          id: `${cutoff.collegeId}-course`,
          name: cutoff.courseName,
          degree: cutoff.stream === "management" ? "Postgraduate (PG)" : "Undergraduate (UG)",
          duration: cutoff.stream === "medical" ? "5.5 Years (Inc. 1 Yr Internship)" : (cutoff.stream === "management" ? "2 Years (4 Semesters)" : "4 Years (8 Semesters)"),
          fees: cutoff.fees || "Competitive",
          feeBreakdown: `Estimated Annual Fee: ${cutoff.fees || 'Competitive'}`,
          eligibility: `Admission via ${cutoff.counselingBoard || "Central Entrance Counseling"} based on entrance merit.`,
          entranceExam: cutoff.counselingBoard || "Entrance Merit",
          seats: "120 - 180 Seats",
          mode: "Full-Time Regular (On-Campus)",
          specializations: ["Core Curriculum", "Advanced Electives & Practical Labs"],
          careerScope: `Average Package / Outcome: ${cutoff.avgPackage || 'Verified Clinical / Corporate Recruitment'}`
        }]
      };
    }
  }
  if (!college) {
    console.warn("College not found for modal:", collegeId);
    return;
  }

  state.modalActiveCollegeId = collegeId;
  state.modalCourseSearch = searchKeyword || "";
  state.modalDegreeFilter = "all";

  const modal = document.getElementById("modal-college-details");
  const content = document.getElementById("modal-college-details-content");
  if (!modal || !content) {
    console.warn("Modal DOM element not found");
    return;
  }

  try {
    renderCollegeModalContent(college);
  } catch (err) {
    console.error("Error rendering college modal content:", err);
  }

  modal.classList.remove("hidden");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function getFilteredCollegeCourses(college) {
  const allCourses = college.courses || [];
  let filtered = allCourses.filter(course => {
    // Degree level filter
    if (state.modalDegreeFilter !== "all") {
      const deg = (course.degree || "").toLowerCase();
      if (state.modalDegreeFilter === "UG" && !deg.includes("undergraduate") && !deg.includes("ug")) {
        return false;
      }
      if (state.modalDegreeFilter === "PG" && !deg.includes("postgraduate") && !deg.includes("pg")) {
        return false;
      }
      if (state.modalDegreeFilter === "Integrated" && !deg.includes("integrated") && !deg.includes("diploma")) {
        return false;
      }
    }

    // Keyword search filter
    if (state.modalCourseSearch && state.modalCourseSearch.trim()) {
      const q = state.modalCourseSearch.toLowerCase().trim();
      const matchName = (course.name || "").toLowerCase().includes(q);
      const matchSpecialization = (course.specializations || []).some(s => s.toLowerCase().includes(q));
      const matchExam = (course.entranceExam || "").toLowerCase().includes(q);
      const matchElig = (course.eligibility || "").toLowerCase().includes(q);
      if (!matchName && !matchSpecialization && !matchExam && !matchElig) {
        const words = q.split(/[\s,&/()\-]+/).filter(w => w.length > 2 && !["the", "and", "for", "with"].includes(w));
        const hasWordMatch = words.some(w => 
          (course.name || "").toLowerCase().includes(w) ||
          (course.specializations || []).some(s => s.toLowerCase().includes(w))
        );
        if (!hasWordMatch) return false;
      }
    }

    return true;
  });

  if (filtered.length === 0 && allCourses.length > 0) {
    return allCourses;
  }
  return filtered;
}

function renderCollegeModalContent(college) {
  const content = document.getElementById("modal-college-details-content");
  if (!content) return;

  const isGovt = college.type === "Government";
  const coursesCount = (college.courses || []).length;
  const inCart = getCart().colleges.some(c => c.id === college.id);

  // CollegeDekho Reference Editorial Overview
  const streamsText = (college.streams || []).slice(0, 5).join(", ");
  const examsText = (college.entranceExams || []).join(", ") || "Entrance Examination";
  const detailedOverview = `${college.shortName || college.name} is one of India's premier ${(college.category || 'educational').toLowerCase()} institutions, established in ${college.established || '1990'} and located in ${college.location || college.city || 'India'}. Ranked ${college.nirfRank || 'Premier'} nationally, the institution offers ${coursesCount}+ verified degree programs including ${streamsText}. Admissions are governed by national-level merit counseling including ${examsText}. Estimated annual tuition fees start from ${college.fees || 'Competitive'}, with peak placement packages reaching ${college.highestPackage || '₹40+ LPA'} with top corporate and clinical recruiters.`;

  content.innerHTML = `
    <!-- Top Micro Bar (Sticky) -->
    <div class="bg-[#082A50] text-white px-4 sm:px-6 py-2.5 shrink-0 flex items-center justify-between border-b border-[#C59943]/30 z-30 shadow-md">
      <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1 shrink-0 overflow-hidden">
          <img src="${college.image}" alt="${college.shortName}" class="w-full h-full object-cover rounded-md" onerror="this.src='assets/yealth-logo.png'" />
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-black text-xs sm:text-sm text-white truncate">${college.shortName || college.name}</span>
            <span class="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
              isGovt ? "bg-emerald-600 text-white" : "bg-[#DFB15B] text-[#071A33]"
            }">
              ${isGovt ? "🏛️ Government" : "🏫 Private"}
            </span>
          </div>
          <div class="text-[10px] sm:text-[11px] text-[#DFB15B] font-semibold truncate hidden sm:block">
            ${college.nirfRank || college.accreditation} • Est. ${college.established}
          </div>
        </div>
      </div>

      <!-- Quick Action CTAs & Close -->
      <div class="flex items-center gap-2 shrink-0">
        <a 
          href="#modal-courses-section"
          class="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#DFB15B] hover:text-white bg-white/10 hover:bg-white/20 py-1.5 px-3 rounded-lg border border-white/20 transition-all">
          <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
          <span>${coursesCount} Courses</span>
        </a>

        <button 
          type="button"
          class="btn-close-college-modal text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all flex items-center justify-center cursor-pointer"
          title="Close modal (Esc)">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
    </div>

    <!-- Unified Smooth Scroll Body (NO SQUEEZED NESTED SCROLLING!) -->
    <div id="modal-college-scroll-body" class="flex-1 overflow-y-auto bg-white">
      
      <!-- ================================================================= -->
      <!-- COLLEGEDEKHO REFERENCE HERO SECTION (Image 2 Replica)             -->
      <!-- ================================================================= -->
      <div class="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-4 sm:p-6 lg:p-8 border-b border-slate-200">
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          
          <!-- LEFT COLUMN: Profile Info, Badges, Rich Description & Gallery Links -->
          <div class="flex-1 w-full flex flex-col justify-between">
            <div>
              <!-- Logo Emblem & Micro Actions (Info, Heart/Wishlist, Share) -->
              <div class="flex items-center justify-between gap-3 mb-2">
                <div class="flex items-center gap-2.5">
                  <div class="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5 overflow-hidden">
                    <img src="${college.image}" alt="Emblem" class="w-full h-full object-cover rounded-lg" onerror="this.src='assets/yealth-logo.png'" />
                  </div>
                  <div>
                    <span class="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Verified Academic Institution</span>
                    <span class="text-xs font-black text-[#082A50]">${college.accreditation || 'National Accreditation'}</span>
                  </div>
                </div>

                <!-- Interactive Action Icons (Like Image 2!) -->
                <div class="flex items-center gap-1.5">
                  <button 
                    type="button" 
                    id="btn-college-info-help"
                    class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
                    title="Institution Accreditation & Rank Intelligence">
                    <i data-lucide="help-circle" class="w-4 h-4"></i>
                  </button>

                  <button 
                    type="button" 
                    id="btn-college-toggle-wishlist"
                    data-college-id="${college.id}"
                    class="w-9 h-9 rounded-full ${inCart ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-slate-100 hover:bg-rose-50 text-gray-600 hover:text-rose-600'} flex items-center justify-center transition-all cursor-pointer"
                    title="${inCart ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                    <i data-lucide="heart" class="w-4 h-4 ${inCart ? 'fill-rose-600 text-rose-600' : ''}"></i>
                  </button>

                  <button 
                    type="button" 
                    id="btn-college-share-link"
                    data-college-name="${college.name}"
                    data-college-id="${college.id}"
                    class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
                    title="Share / Copy Link">
                    <i data-lucide="share-2" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>

              <!-- High-Impact Title (Exact Image 2 Format) -->
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-black text-[#082A50] leading-tight tracking-tight mt-2">
                ${college.name} (${college.shortName}): Admission 2026, Courses, Fees, Cutoff, Placement, Ranking
              </h2>

              <!-- Rating Badge (Image 2 Style) -->
              <div class="flex items-center gap-2 mt-2.5">
                <div class="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs">
                  <span>${college.rating}</span>
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-white text-white"></i>
                </div>
                <span class="text-xs text-gray-600 font-bold">(${college.reviewsCount} Verified Reviews)</span>
              </div>

              <!-- Rich Editorial Description Paragraph (Image 2 Style) -->
              <p class="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium mt-3.5">
                ${detailedOverview}
              </p>
            </div>

            <!-- Bottom Row: Location Badge & Campus Gallery Preview -->
            <div class="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-slate-200/80">
              <!-- Location Link -->
              <a 
                href="https://maps.google.com/?q=${encodeURIComponent(college.name + ' ' + college.location)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-bold text-[#082A50] bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                title="View Campus on Google Maps">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#C59943]"></i>
                <span>${college.location}</span>
              </a>

              <!-- Gallery Avatar Preview Button (Like Image 2!) -->
              <button 
                type="button" 
                class="btn-open-campus-gallery inline-flex items-center gap-2 text-xs font-extrabold text-[#082A50] hover:text-[#051C36] group bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-300 transition-all cursor-pointer"
                data-college-id="${college.id}"
                title="View Real Campus Photos & Infrastructure">
                <div class="avatar-stack-container">
                  <img src="${college.image}" class="avatar-stack-item" alt="Campus Photo 1" onerror="this.src='assets/yealth-logo.png'" />
                  <img src="${college.image}" class="avatar-stack-item opacity-90" alt="Campus Photo 2" onerror="this.src='assets/yealth-logo.png'" />
                  <img src="${college.image}" class="avatar-stack-item opacity-80" alt="Campus Photo 3" onerror="this.src='assets/yealth-logo.png'" />
                </div>
                <span class="underline underline-offset-2">Campus Gallery (8+ Photos)</span>
                <i data-lucide="external-link" class="w-3 h-3 text-[#C59943] group-hover:translate-x-0.5 transition-transform"></i>
              </button>
            </div>
          </div>

          <!-- RIGHT COLUMN: Real Campus Photo with Curved Cutout, Play Button & 4 Floating Badges -->
          <div class="w-full lg:w-[440px] xl:w-[480px] shrink-0">
            <div class="collegedekho-curve-frame relative aspect-4/3 w-full overflow-hidden bg-slate-900 group shadow-xl">
              <!-- Genuine Real Campus Photo -->
              <img 
                src="${college.image}" 
                alt="${college.name} Real Campus" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onerror="this.src='assets/yealth-logo.png'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

              <!-- Interactive Video Tour Play Button (Image 2 Style) -->
              <button 
                type="button"
                class="btn-play-campus-tour collegedekho-play-btn absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-[#082A50] group-hover:scale-110 transition-transform shadow-2xl cursor-pointer"
                data-college-id="${college.id}"
                title="Explore Campus Virtual Video Tour">
                <i data-lucide="play" class="w-6 h-6 sm:w-7 sm:h-7 fill-[#082A50] text-[#082A50] ml-1"></i>
              </button>

              <!-- 4 FLOATING STAT BADGES OVER PHOTO (Image 2 Replica) -->
              <!-- 1. Top-Left: NIRF Rank -->
              <div class="collegedekho-stat-badge absolute top-3 left-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-left pointer-events-auto">
                <div class="text-[9px] uppercase font-bold text-gray-500 leading-none">NIRF Rank</div>
                <div class="text-xs sm:text-sm font-black text-[#082A50] leading-tight mt-0.5">${college.nirfRank || 'Top Ranked'}</div>
              </div>

              <!-- 2. Top-Right: Year of Establishment -->
              <div class="collegedekho-stat-badge absolute top-3 right-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-right pointer-events-auto">
                <div class="text-[9px] uppercase font-bold text-gray-500 leading-none">Established</div>
                <div class="text-xs sm:text-sm font-black text-[#082A50] leading-tight mt-0.5">${college.established}</div>
              </div>

              <!-- 3. Bottom-Left: Highest Package -->
              <div class="collegedekho-stat-badge absolute bottom-3 left-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-left pointer-events-auto">
                <div class="text-[9px] uppercase font-bold text-gray-500 leading-none">Highest Package</div>
                <div class="text-xs sm:text-sm font-black text-[#082A50] leading-tight mt-0.5">${college.highestPackage || 'Top Tier'}</div>
              </div>

              <!-- 4. Bottom-Right: Institution Type -->
              <div class="collegedekho-stat-badge absolute bottom-3 right-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-right pointer-events-auto">
                <div class="text-[9px] uppercase font-bold text-gray-500 leading-none">Type</div>
                <div class="text-xs sm:text-sm font-black ${isGovt ? 'text-emerald-700' : 'text-[#082A50]'} leading-tight mt-0.5">${college.type}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ================================================================= -->
      <!-- SECTION 2: STICKY SEARCH & FILTER STRIP                           -->
      <!-- ================================================================= -->
      <div id="modal-courses-section" class="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3.5 space-y-2.5 shadow-xs">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <!-- Search input -->
          <div class="relative w-full sm:flex-1">
            <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input 
              type="text" 
              id="modal-courses-search-input" 
              value="${state.modalCourseSearch}" 
              placeholder="Search course by name or branch (e.g. CSE, AI, MBBS, MBA, Law, B.Tech, Nursing)..." 
              class="w-full text-xs sm:text-sm pl-10 pr-9 py-2.5 rounded-xl border border-gray-300 bg-slate-50/50 focus:bg-white focus:border-[#082A50] focus:ring-2 focus:ring-[#082A50]/20 focus:outline-hidden transition-all"
            />
            ${state.modalCourseSearch ? `
              <button id="btn-modal-clear-search" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 cursor-pointer">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
          </div>

          <!-- Degree level filter chips -->
          <div class="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar">
            ${[
              { id: "all", label: "All Programs" },
              { id: "UG", label: "UG (Bachelor)" },
              { id: "PG", label: "PG (Master)" },
              { id: "Integrated", label: "Integrated / Special" }
            ].map(tab => {
              const isActive = state.modalDegreeFilter === tab.id;
              return `
                <button 
                  type="button" 
                  data-degree="${tab.id}" 
                  class="modal-degree-chip px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                    isActive 
                      ? "bg-[#082A50] text-[#DFB15B] border-[#082A50] shadow-xs" 
                      : "bg-white text-gray-700 hover:bg-slate-100 border-gray-300"
                  }">
                  ${tab.label}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Result Counter strip -->
        <div id="modal-courses-counter-bar" class="flex items-center justify-between text-xs text-gray-600">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- ================================================================= -->
      <!-- SECTION 3: SPACIOUS COURSE CARDS CONTAINER                        -->
      <!-- No nested scrolling trap - flows naturally with full height!      -->
      <!-- ================================================================= -->
      <div id="modal-courses-cards-container" class="p-4 sm:p-6 lg:p-8 space-y-6 bg-slate-50/60">
        <!-- Dynamically rendered by renderCollegeModalCoursesList() -->
      </div>

      <!-- ================================================================= -->
      <!-- SECTION 4: NEARBY STUDENT LIVING & HOSTELS TEASER                  -->
      <!-- ================================================================= -->
      <div class="p-4 sm:p-6 lg:p-8 pt-0 bg-slate-50/60">
        <div class="bg-gradient-to-r from-[#082A50] via-[#0b3562] to-[#082A50] rounded-2xl p-5 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-xl bg-[#DFB15B]/20 border border-[#DFB15B]/30 flex items-center justify-center shrink-0">
              <i data-lucide="building" class="w-6 h-6 text-[#DFB15B]"></i>
            </div>
            <div>
              <h4 class="text-base font-black text-white">Looking for Verified Hostels near ${college.shortName || college.name}?</h4>
              <p class="text-xs text-slate-200 mt-0.5">Explore 100% verified student PGs and hostels within 1-3 km of campus with zero brokerage.</p>
            </div>
          </div>
          <a 
            href="hostels.html?college=${college.id}" 
            class="whitespace-nowrap bg-gradient-to-r from-[#DFB15B] to-[#C59943] hover:from-[#C59943] hover:to-[#B08535] text-[#071A33] font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md flex items-center gap-1.5 transition-all">
            <span>Explore Campus Hostels</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>

    </div>

    <!-- Modal Footer Actions Bar (Fixed at bottom of modal) -->
    <div class="bg-white border-t border-gray-200 p-3 sm:p-4 shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-lg z-30">
      <div class="flex items-center gap-2 text-xs text-gray-600">
        <span class="w-2.5 h-2.5 rounded-full bg-[#1AB64F] animate-pulse"></span>
        <span class="font-bold text-gray-700">Admissions Open 2026-27</span>
        <span class="hidden sm:inline text-gray-400">•</span>
        <span class="hidden sm:inline">100% Free Counseling & Zero Brokerage</span>
      </div>

      <div class="flex items-center gap-2 w-full sm:w-auto">
        <a 
          href="hostels.html?college=${college.id}"
          class="flex-1 sm:flex-initial bg-amber-50 hover:bg-amber-100 text-[#082A50] border border-amber-300 font-extrabold text-xs py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs">
          <i data-lucide="building" class="w-3.5 h-3.5 text-[#C59943]"></i>
          <span>Campus Hostels</span>
        </a>

        <a 
          href="https://wa.me/919110155081?text=Hi%20Yealth%20Admissions!%20I%20am%20reviewing%20courses%20at%20${encodeURIComponent(college.name)}.%20Please%20connect%20me%20with%20an%20academic%20advisor."
          target="_blank"
          class="flex-1 sm:flex-initial bg-[#1AB64F] hover:bg-[#159c42] text-white font-extrabold text-xs py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm">
          <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
          <span>Chat with Advisor</span>
        </a>

        <button 
          type="button" 
          class="btn-close-college-modal bg-slate-100 hover:bg-slate-200 text-gray-700 font-bold text-xs py-2.5 px-4 rounded-xl border border-slate-300 transition-all cursor-pointer">
          Close
        </button>
      </div>
    </div>
  `;

  // Attach search and filter events
  const searchInput = document.getElementById("modal-courses-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.modalCourseSearch = e.target.value;
      renderCollegeModalCoursesList(college);
    });
  }

  document.getElementById("btn-modal-clear-search")?.addEventListener("click", () => {
    state.modalCourseSearch = "";
    if (searchInput) searchInput.value = "";
    renderCollegeModalCoursesList(college);
  });

  content.querySelectorAll(".modal-degree-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      state.modalDegreeFilter = chip.dataset.degree;
      content.querySelectorAll(".modal-degree-chip").forEach(c => {
        const isActive = c.dataset.degree === state.modalDegreeFilter;
        c.className = `modal-degree-chip px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
          isActive 
            ? "bg-[#082A50] text-[#DFB15B] border-[#082A50] shadow-xs" 
            : "bg-white text-gray-700 hover:bg-slate-100 border-gray-300"
        }`;
      });
      renderCollegeModalCoursesList(college);
    });
  });

  // Action Icons listeners (Wishlist, Share, Info)
  const wishlistBtn = content.querySelector("#btn-college-toggle-wishlist");
  if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
      const isAlreadyIn = getCart().colleges.some(c => c.id === college.id);
      if (isAlreadyIn) {
        removeFromCart(college.id, "college");
        showToast(`Removed ${college.shortName || college.name} from Wishlist`, "info");
        wishlistBtn.className = "w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-gray-600 hover:text-rose-600 flex items-center justify-center transition-all cursor-pointer";
        wishlistBtn.innerHTML = '<i data-lucide="heart" class="w-4 h-4"></i>';
      } else {
        addToCart(college, "college");
        showToast(`Added ${college.shortName || college.name} to Wishlist!`, "success");
        wishlistBtn.className = "w-9 h-9 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center transition-all cursor-pointer";
        wishlistBtn.innerHTML = '<i data-lucide="heart" class="w-4 h-4 fill-rose-600 text-rose-600"></i>';
      }
      lucide.createIcons();
      renderColleges();
      renderRankResultsCards();
    });
  }

  content.querySelector("#btn-college-share-link")?.addEventListener("click", (e) => {
    const colId = college.id;
    const shareUrl = `${window.location.origin}${window.location.pathname}?college=${colId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("College profile link copied to clipboard!", "success");
      }).catch(() => {
        showToast(`Share link: ${shareUrl}`, "info");
      });
    } else {
      showToast(`Share link: ${shareUrl}`, "info");
    }
  });

  content.querySelector("#btn-college-info-help")?.addEventListener("click", () => {
    showToast(`${college.name}: Officially accredited with ${college.nirfRank || 'recognized national rating'}. Est. ${college.established}.`, "info");
  });

  // Gallery Open Events (Avatars + Play button)
  content.querySelectorAll(".btn-open-campus-gallery, .btn-play-campus-tour").forEach(btn => {
    btn.addEventListener("click", () => {
      openCampusGalleryModal(college.id);
    });
  });

  content.querySelectorAll(".btn-close-college-modal").forEach(btn => {
    btn.addEventListener("click", () => closeCollegeDetailsModal());
  });

  // Render course list
  renderCollegeModalCoursesList(college);
  lucide.createIcons();
}

function renderCollegeModalCoursesList(college) {
  const container = document.getElementById("modal-courses-cards-container");
  const counterBar = document.getElementById("modal-courses-counter-bar");
  if (!container) return;

  const courses = getFilteredCollegeCourses(college);
  const totalCourses = (college.courses || []).length;
  const cart = getCart();

  if (counterBar) {
    counterBar.innerHTML = `
      <span class="text-xs text-gray-600">
        Showing <strong class="text-[#082A50] font-black text-sm">${courses.length}</strong> of ${totalCourses} course${totalCourses === 1 ? '' : 's'} offered by <strong>${college.shortName || college.name}</strong>
      </span>
      ${(state.modalCourseSearch || state.modalDegreeFilter !== 'all') ? `
        <button id="btn-reset-course-search" class="text-xs text-rose-600 hover:text-rose-700 underline font-bold cursor-pointer">
          Reset Filter
        </button>
      ` : ''}
    `;

    document.getElementById("btn-reset-course-search")?.addEventListener("click", () => {
      state.modalCourseSearch = "";
      state.modalDegreeFilter = "all";
      const input = document.getElementById("modal-courses-search-input");
      if (input) input.value = "";
      document.querySelectorAll(".modal-degree-chip").forEach(c => {
        const isActive = c.dataset.degree === "all";
        c.className = `modal-degree-chip px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
          isActive 
            ? "bg-[#082A50] text-[#DFB15B] border-[#082A50] shadow-xs" 
            : "bg-white text-gray-700 hover:bg-slate-100 border-gray-300"
        }`;
      });
      renderCollegeModalCoursesList(college);
    });
  }

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8">
        <div class="w-12 h-12 rounded-full bg-slate-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="book-x" class="w-6 h-6"></i>
        </div>
        <h4 class="text-sm font-bold text-gray-800 mb-1">No Courses Match Your Search</h4>
        <p class="text-xs text-gray-500 max-w-sm mx-auto mb-4">Try adjusting your keyword or reset filters to explore all available verified programs.</p>
        <button id="btn-empty-reset-courses" class="bg-[#082A50] text-white text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer shadow-sm">
          View All ${totalCourses} Programs
        </button>
      </div>
    `;

    document.getElementById("btn-empty-reset-courses")?.addEventListener("click", () => {
      state.modalCourseSearch = "";
      state.modalDegreeFilter = "all";
      const input = document.getElementById("modal-courses-search-input");
      if (input) input.value = "";
      renderCollegeModalCoursesList(college);
    });

    lucide.createIcons();
    return;
  }

  container.innerHTML = courses.map((course) => {
    const isShortlisted = cart.colleges.some(c => c.id === college.id && c.selectedCourse === course.name);

    return `
      <div class="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#082A50] transition-all p-5 sm:p-6 shadow-sm hover:shadow-md space-y-4">
        <!-- Course Header -->
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div class="flex-1 min-w-[240px]">
            <div class="flex items-center gap-2 flex-wrap mb-2">
              <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#082A50] text-[#DFB15B] shadow-xs">
                ${course.degree || 'Degree Program'}
              </span>
              <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <i data-lucide="clock" class="w-3 h-3 text-emerald-600"></i>
                <span>${course.duration}</span>
              </span>
              ${course.seats ? `
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1">
                  <i data-lucide="users" class="w-3 h-3 text-blue-600"></i>
                  <span>${course.seats}</span>
                </span>
              ` : ''}
              ${course.mode ? `
                <span class="text-[10px] font-semibold px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                  ${course.mode}
                </span>
              ` : ''}
            </div>

            <h4 class="text-base sm:text-lg lg:text-xl font-black text-gray-900 leading-snug">
              ${course.name}
            </h4>
          </div>

          <!-- Fees Callout Box -->
          <div class="bg-gradient-to-br from-amber-50 to-amber-100/60 border border-amber-300 rounded-2xl p-3 sm:px-4 text-left md:text-right shrink-0">
            <div class="text-[10px] font-bold uppercase tracking-wider text-[#A47B2E]">Tuition Fee</div>
            <div class="text-base sm:text-lg font-black text-[#082A50] whitespace-nowrap">${course.fees}</div>
            ${course.feeBreakdown ? `<div class="text-[10px] text-gray-600 mt-0.5 max-w-[240px] truncate" title="${course.feeBreakdown}">${course.feeBreakdown}</div>` : ''}
          </div>
        </div>

        <!-- 3-Column Specifications Matrix -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
          <div>
            <div class="text-[10px] uppercase font-bold text-gray-400">Duration & Semesters</div>
            <div class="font-black text-[#082A50] mt-0.5">${course.duration}</div>
          </div>
          <div>
            <div class="text-[10px] uppercase font-bold text-gray-400">Entrance / Selection</div>
            <div class="font-black text-gray-800 mt-0.5 truncate" title="${course.entranceExam}">${course.entranceExam}</div>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <div class="text-[10px] uppercase font-bold text-gray-400">Approved Intake</div>
            <div class="font-black text-[#1AB64F] mt-0.5">${course.seats || 'Merit Counseling'}</div>
          </div>
        </div>

        <!-- ELIGIBILITY CRITERIA HIGHLIGHT CALLOUT BOX -->
        <div class="bg-gradient-to-r from-amber-50/90 via-blue-50/40 to-slate-50 border-2 border-amber-300/80 rounded-xl p-4 shadow-xs">
          <div class="flex items-center gap-2 mb-1.5">
            <div class="w-6 h-6 rounded-full bg-[#082A50] text-[#DFB15B] flex items-center justify-center shrink-0 shadow-xs">
              <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
            </div>
            <span class="text-xs font-black uppercase tracking-wider text-[#082A50]">
              Eligibility Criteria & Admission Requirements:
            </span>
          </div>
          <p class="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium pl-8">
            ${course.eligibility}
          </p>
        </div>

        <!-- Specializations / Streams if present -->
        ${course.specializations && course.specializations.length > 0 ? `
          <div>
            <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Curriculum Tracks & Specializations:</div>
            <div class="flex flex-wrap gap-1.5">
              ${course.specializations.map(s => `
                <span class="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg font-semibold border border-slate-200 transition-colors">${s}</span>
              `).join("")}
            </div>
          </div>
        ` : ''}

        <!-- Placement & Career Highlight -->
        ${course.careerScope ? `
          <div class="flex items-start gap-2 text-xs text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <i data-lucide="trending-up" class="w-4 h-4 text-[#1AB64F] shrink-0 mt-0.5"></i>
            <span><strong>Placement & Careers:</strong> ${course.careerScope}</span>
          </div>
        ` : ''}

        <!-- Course Action CTAs -->
        <div class="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button 
            type="button"
            data-course-name="${course.name}"
            data-college-id="${college.id}"
            class="btn-modal-select-course flex-1 sm:flex-initial py-2.5 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer ${
              isShortlisted 
                ? "bg-rose-50 text-rose-600 border border-rose-200" 
                : "bg-[#082A50] hover:bg-[#051C36] text-[#DFB15B] hover:text-white"
            }">
            <i data-lucide="${isShortlisted ? 'check' : 'heart'}" class="w-4 h-4 ${isShortlisted ? 'text-rose-600' : ''}"></i>
            <span>${isShortlisted ? "In Wishlist" : "Add to Wishlist"}</span>
          </button>

          <a 
            href="https://wa.me/919110155081?text=Hi%20Yealth%20Admissions!%20I%20am%20interested%20in%20applying%20for%20${encodeURIComponent(course.name)}%20at%20${encodeURIComponent(college.name)}.%20Please%20verify%20my%20eligibility%20and%20provide%20cutoff%20details."
            target="_blank" 
            class="flex-1 sm:flex-initial bg-[#1AB64F] hover:bg-[#159c42] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm">
            <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
            <span>Inquire for ${course.shortName || 'Course'} on WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  }).join("");

  // Attach button click listeners inside course cards
  container.querySelectorAll(".btn-modal-select-course").forEach(btn => {
    btn.addEventListener("click", () => {
      const courseName = btn.dataset.courseName;
      const colId = btn.dataset.collegeId;
      let col = COLLEGES.find(c => c.id === colId);
      if (!col) col = college;
      if (!col) return;

      const isShortlisted = cart.colleges.some(c => c.id === col.id && c.selectedCourse === courseName);
      if (isShortlisted) {
        removeFromCart(col.id, "college");
        showToast(`Removed ${courseName} from Wishlist`, "info");
      } else {
        const payload = {
          ...col,
          selectedCourse: courseName
        };
        addToCart(payload, "college");
        showToast(`Added ${courseName} at ${col.shortName || col.name} to Wishlist!`, "success");
      }
      renderCollegeModalCoursesList(college);
      renderColleges();
      renderRankResultsCards();
    });
  });

  lucide.createIcons();
}

/**
 * Campus Photo Gallery Lightbox Viewer
 */
export function openCampusGalleryModal(collegeId) {
  const college = COLLEGES.find(c => c.id === collegeId) || RANK_CUTOFFS.find(r => r.collegeId === collegeId);
  if (!college) return;

  const modal = document.getElementById("modal-campus-gallery");
  const content = document.getElementById("modal-campus-gallery-content");
  if (!modal || !content) return;

  const collegeImg = college.image || `assets/colleges/${college.id}.jpg`;
  const images = [
    { url: collegeImg, title: `Iconic Main Campus Architecture & Entrance - ${college.shortName || college.name}` },
    { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80", title: "Central Library & Digital Academic Research Commons" },
    { url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80", title: "Smart Amphitheatre Lecture Halls & High-Tech Classrooms" },
    { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", title: "Student Living, Hostels & Recreational Sports Facilities" }
  ];

  state.galleryActiveIndex = 0;

  function renderGalleryView() {
    const active = images[state.galleryActiveIndex] || images[0];
    content.innerHTML = `
      <!-- Gallery Header -->
      <div class="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-slate-900 shrink-0">
        <div>
          <div class="text-[10px] font-bold uppercase tracking-wider text-[#DFB15B]">Verified Campus Infrastructure</div>
          <h3 class="text-base sm:text-lg font-black text-white">${college.shortName || college.name} Campus Photography</h3>
        </div>
        <button type="button" class="btn-close-gallery-modal text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Main Photo Viewport -->
      <div class="relative bg-black flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[440px] max-h-[62vh] overflow-hidden">
        <img src="${active.url}" alt="${active.title}" class="max-w-full max-h-full object-contain transition-all duration-300" onerror="this.src='assets/yealth-logo.png'" />
        
        <!-- Left / Right arrows -->
        <button type="button" id="btn-gallery-prev" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer">
          <i data-lucide="chevron-left" class="w-6 h-6"></i>
        </button>
        <button type="button" id="btn-gallery-next" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer">
          <i data-lucide="chevron-right" class="w-6 h-6"></i>
        </button>

        <!-- Caption Strip -->
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 text-center">
          <p class="text-xs sm:text-sm font-bold text-white drop-shadow-sm">${active.title}</p>
          <p class="text-[11px] text-gray-300">Photo ${state.galleryActiveIndex + 1} of ${images.length}</p>
        </div>
      </div>

      <!-- Thumbnail Strip & CTAs -->
      <div class="p-3 sm:p-4 bg-slate-900 border-t border-white/10 shrink-0 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2 overflow-x-auto">
          ${images.map((img, idx) => `
            <button type="button" class="btn-gallery-thumb w-14 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${idx === state.galleryActiveIndex ? 'border-[#DFB15B] scale-105' : 'border-white/20 opacity-60 hover:opacity-100'}" data-index="${idx}">
              <img src="${img.url}" class="w-full h-full object-cover" onerror="this.src='assets/yealth-logo.png'" />
            </button>
          `).join("")}
        </div>

        <div class="flex items-center gap-2">
          <a href="hostels.html?college=${college.id}" class="text-xs font-bold bg-amber-50 hover:bg-amber-100 text-[#082A50] border border-amber-300 py-2 px-3 rounded-xl flex items-center gap-1.5 transition-all">
            <i data-lucide="building" class="w-3.5 h-3.5 text-[#C59943]"></i>
            <span>Hostels Near Campus</span>
          </a>
          <button type="button" class="btn-close-gallery-modal text-xs font-bold bg-white/10 hover:bg-white/20 text-white py-2 px-3.5 rounded-xl border border-white/20 transition-all cursor-pointer">
            Done
          </button>
        </div>
      </div>
    `;

    lucide.createIcons();

    content.querySelectorAll(".btn-close-gallery-modal").forEach(b => b.addEventListener("click", closeCampusGalleryModal));
    content.querySelector("#btn-gallery-prev")?.addEventListener("click", () => {
      state.galleryActiveIndex = (state.galleryActiveIndex - 1 + images.length) % images.length;
      renderGalleryView();
    });
    content.querySelector("#btn-gallery-next")?.addEventListener("click", () => {
      state.galleryActiveIndex = (state.galleryActiveIndex + 1) % images.length;
      renderGalleryView();
    });
    content.querySelectorAll(".btn-gallery-thumb").forEach(tb => {
      tb.addEventListener("click", () => {
        state.galleryActiveIndex = parseInt(tb.dataset.index, 10);
        renderGalleryView();
      });
    });
  }

  renderGalleryView();
  modal.classList.remove("hidden");
}

export function closeCampusGalleryModal() {
  const modal = document.getElementById("modal-campus-gallery");
  if (modal) modal.classList.add("hidden");
}

export function setupCampusGalleryModalEvents() {
  const modal = document.getElementById("modal-campus-gallery");
  if (!modal) return;
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".btn-close-gallery-modal")) {
      closeCampusGalleryModal();
    }
  });
}

/**
 * =========================================================================
 * NEET & JEE COLLEGE RANK CALCULATOR & PREDICTOR
 * Authentic NTA, JoSAA, CSAB, MCC Cutoff Intelligence Engine
 * =========================================================================
 */
function setupRankCalculator() {
  const form = document.getElementById("rank-calculator-form");
  const rankInput = document.getElementById("calc-rank-input");
  const btnNeet = document.getElementById("calc-btn-neet");
  const btnJee = document.getElementById("calc-btn-jee");
  const btnMba = document.getElementById("calc-btn-mba");
  const btnReset = document.getElementById("calc-btn-reset");
  const chanceChips = document.querySelectorAll(".calc-chance-chip");

  if (!form) return;

  // 1. Exam Toggle Buttons
  if (btnNeet) {
    btnNeet.addEventListener("click", () => setCalcExam("neet", true));
  }
  if (btnJee) {
    btnJee.addEventListener("click", () => setCalcExam("jee", true));
  }
  if (btnMba) {
    btnMba.addEventListener("click", () => setCalcExam("mba", true));
  }

  // 2. Form Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    triggerPredictorCalculation(true);
  });

  // 3. Reset Button
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      form.reset();
      state.calcLastResults = [];
      state.calcSubmittedQuery = null;
      state.calcChanceFilter = "all";
      const resultsSection = document.getElementById("rank-calc-results-section");
      if (resultsSection) resultsSection.classList.add("hidden");
      showToast("Rank & percentile predictor reset", "info");
    });
  }

  // 4. Chance Filter Tabs
  chanceChips.forEach(chip => {
    chip.addEventListener("click", () => {
      state.calcChanceFilter = chip.dataset.chance;
      updateChanceChipStyles();
      renderRankResultsCards();
    });
  });

  // 5. Reactive Filter Changes (Category, Quota, Institution Type)
  ["calc-category-select", "calc-quota-select", "calc-inst-type-select"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        if (state.calcSubmittedQuery) {
          triggerPredictorCalculation(false);
        }
      });
    }
  });

  // 6. Initialize presets and auto-run default prediction on load
  updateRankPresetsForExam(state.calcExam || "neet");
  triggerPredictorCalculation(false);
}

function triggerPredictorCalculation(scrollIntoView = true) {
  const rankInput = document.getElementById("calc-rank-input");
  if (!rankInput) return;

  const rawVal = String(rankInput.value || "").trim().replace(/%/g, "").replace(/,/g, "");
  const rankVal = parseFloat(rawVal);

  if (isNaN(rankVal) || rankVal <= 0) {
    showToast(state.calcExam === "mba" ? "Please enter a valid Percentile (e.g. 88.5) or Rank" : "Please enter a valid All India Rank (AIR)", "error");
    rankInput.focus();
    return;
  }

  const category = document.getElementById("calc-category-select")?.value || "General";
  const quota = document.getElementById("calc-quota-select")?.value || "all";
  const instType = document.getElementById("calc-inst-type-select")?.value || "all";

  state.calcSubmittedQuery = {
    rank: rankVal,
    category,
    quota,
    instType,
    exam: state.calcExam
  };

  runRankPrediction(scrollIntoView);
}

function setCalcExam(exam, autoRun = true) {
  state.calcExam = exam;
  const btnNeet = document.getElementById("calc-btn-neet");
  const btnJee = document.getElementById("calc-btn-jee");
  const btnMba = document.getElementById("calc-btn-mba");
  const rankLabel = document.getElementById("calc-rank-label");
  const rankInput = document.getElementById("calc-rank-input");

  const tabs = [
    { id: "neet", el: btnNeet },
    { id: "jee", el: btnJee },
    { id: "mba", el: btnMba }
  ];

  tabs.forEach(t => {
    if (!t.el) return;
    if (t.id === exam) {
      t.el.className = "calc-exam-tab px-3.5 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm bg-[#082A50] text-[#DFB15B]";
    } else {
      t.el.className = "calc-exam-tab px-3.5 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all text-gray-700 hover:text-[#082A50] hover:bg-white";
    }
  });

  // Dynamically update input label, placeholder, and sensible default value
  if (exam === "mba") {
    if (rankLabel) rankLabel.textContent = "Entrance Percentile (%) or Rank";
    if (rankInput) {
      rankInput.placeholder = "e.g. 88.5% (or CAT/CMAT Rank)";
      const currVal = parseFloat(String(rankInput.value || "").replace(/%/g, "").replace(/,/g, ""));
      if (isNaN(currVal) || currVal > 100) {
        rankInput.value = "88.5";
      }
    }
  } else {
    if (rankLabel) rankLabel.textContent = "All India Rank (AIR)";
    if (rankInput) {
      rankInput.placeholder = exam === "neet" ? "e.g. 18500 (NEET AIR)" : "e.g. 18500 (JEE Main AIR)";
      const currVal = parseFloat(String(rankInput.value || "").replace(/%/g, "").replace(/,/g, ""));
      if (isNaN(currVal) || currVal <= 100) {
        rankInput.value = "18500";
      }
    }
  }

  // Update quick preset buttons for this exam
  updateRankPresetsForExam(exam);

  if (autoRun) {
    triggerPredictorCalculation(false);
  }
}

function updateRankPresetsForExam(exam) {
  const presetContainer = document.querySelector("#rank-calculator-form .flex.items-center.gap-1\\.5.mt-2.flex-wrap") 
    || document.querySelector("#rank-calculator-form .flex.items-center.gap-1\\.5");
  if (!presetContainer) return;

  const neetPresets = [
    { label: "4.5k", rank: "4500" },
    { label: "18.5k", rank: "18500" },
    { label: "42k", rank: "42000" },
    { label: "98k", rank: "98000" },
    { label: "240k", rank: "240000" }
  ];

  const jeePresets = [
    { label: "2.5k", rank: "2500" },
    { label: "18k", rank: "18000" },
    { label: "45k", rank: "45000" },
    { label: "95k", rank: "95000" },
    { label: "210k", rank: "210000" }
  ];

  const mbaPresets = [
    { label: "99%", rank: "99" },
    { label: "92%", rank: "92" },
    { label: "82%", rank: "82" },
    { label: "72%", rank: "72" },
    { label: "58%", rank: "58" }
  ];

  let list = neetPresets;
  if (exam === "jee") list = jeePresets;
  if (exam === "mba") list = mbaPresets;

  presetContainer.innerHTML = `
    <span class="text-[10px] text-gray-500 font-bold">Quick:</span>
    ${list.map(p => `
      <button type="button" class="rank-preset-btn text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded font-bold text-slate-700 hover:bg-amber-50 hover:border-amber-300 transition-colors" data-rank="${p.rank}">${p.label}</button>
    `).join("")}
  `;

  const rankInput = document.getElementById("calc-rank-input");
  presetContainer.querySelectorAll(".rank-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.rank;
      if (rankInput && val) {
        rankInput.value = val;
        // Instantly trigger calculation on tap
        triggerPredictorCalculation(false);
      }
    });
  });
}

function runRankPrediction(scrollIntoView = true) {
  if (!state.calcSubmittedQuery) return;
  const { rank, category, quota, instType, exam } = state.calcSubmittedQuery;

  const is_mba = exam === "mba";
  const is_percentile = is_mba && rank <= 100;
  const matches = [];

  for (const item of RANK_CUTOFFS) {
    // 1. Exam filter
    if (exam === "neet") {
      if (item.stream !== "medical" && item.exam !== "neet_ug" && item.exam !== "neet") continue;
    } else if (exam === "jee") {
      if (item.stream !== "engineering" && item.exam !== "jee_main" && item.exam !== "jee_adv") continue;
    } else if (exam === "mba") {
      if (item.stream !== "management" && item.exam !== "cat" && item.exam !== "mba" && item.exam !== "cmat" && item.exam !== "xat") continue;
    }

    // 2. Institution Type filter
    if (instType !== "all" && item.type !== instType) {
      continue;
    }

    // 3. Quota filter
    if (quota !== "all") {
      const q = (item.quota || "").toLowerCase();
      const is_all_india = q.includes("all india") || q.includes("(ai") || q.includes("aiq") || q.includes("josaa") || q.includes("mcc");
      if (quota === "AI") {
        if (!is_all_india) continue;
      } else if (quota === "HS-UP") {
        const is_up = q.includes("up") || q.includes("uttar pradesh") || q.includes("aktu") || q.includes("uptac") || q.includes("updgme") || (item.city && (item.city.includes("Noida") || item.city.includes("Uttar Pradesh") || item.city.includes("Lucknow") || item.city.includes("Kanpur")));
        if (!is_up && !is_all_india) continue;
      } else if (quota === "HS-DL") {
        const is_dl = q.includes("delhi") || q.includes("jac") || q.includes("ipu") || q.includes("du") || (item.city && item.city.includes("Delhi"));
        if (!is_dl && !is_all_india) continue;
      } else if (quota === "HS-KA") {
        const is_ka = q.includes("karnataka") || q.includes("kea") || q.includes("comedk") || (item.city && (item.city.includes("Karnataka") || item.city.includes("Bangalore") || item.city.includes("Mangalore")));
        if (!is_ka && !is_all_india) continue;
      } else if (quota === "Deemed/Mgt") {
        const is_mgt = q.includes("management") || q.includes("direct") || q.includes("deemed") || q.includes("merit") || item.type === "Private";
        if (!is_mgt) continue;
      }
    }

    // 4. Category cutoffs lookup
    const catCutoff = (item.categoryCutoffs && item.categoryCutoffs[category]) 
      || (item.categoryCutoffs && item.categoryCutoffs["General"])
      || { openingRank: 1, closingRank: 100000 };

    let chance = null;
    let probability = 0;
    let badgeText = "";
    let badgeClass = "";
    let probabilityColor = "";

    if (is_percentile) {
      const userPercentile = rank;
      const minP = catCutoff.minPercentile || 50.0;
      const targetP = catCutoff.targetPercentile || (minP + 5.0);

      if (userPercentile >= targetP) {
        chance = "Safe";
        probability = Math.min(99, Math.max(86, Math.round(86 + (userPercentile - targetP) * 2.5)));
        badgeText = "🟢 Safe (Confirmed GD-PI Call)";
        badgeClass = "bg-emerald-50 text-emerald-800 border-emerald-300";
        probabilityColor = "from-emerald-500 to-green-600";
      } else if (userPercentile >= minP) {
        chance = "Probable";
        const progress = (userPercentile - minP) / Math.max(0.5, targetP - minP);
        probability = Math.min(85, Math.max(55, Math.round(55 + progress * 29)));
        badgeText = "🟡 Probable (Competitive Call Range)";
        badgeClass = "bg-amber-50 text-amber-800 border-amber-300";
        probabilityColor = "from-amber-500 to-yellow-600";
      } else if (userPercentile >= (minP - 5.0)) {
        chance = "Ambitious";
        const progress = (userPercentile - (minP - 5.0)) / 5.0;
        probability = Math.min(52, Math.max(25, Math.round(25 + progress * 26)));
        badgeText = "🔴 Ambitious (Spot / Waitlist)";
        badgeClass = "bg-rose-50 text-rose-800 border-rose-300";
        probabilityColor = "from-rose-500 to-pink-600";
      } else {
        continue;
      }
    } else {
      const cRank = catCutoff.closingRank || 100000;
      const oRank = catCutoff.openingRank || 1;

      if (rank <= Math.round(cRank * 0.85)) {
        chance = "Safe";
        probability = Math.min(99, Math.max(86, Math.round(99 - ((rank / cRank) * 14))));
        badgeText = "🟢 Safe (Confirmed Allotment)";
        badgeClass = "bg-emerald-50 text-emerald-800 border-emerald-300";
        probabilityColor = "from-emerald-500 to-green-600";
      } else if (rank <= Math.round(cRank * 1.05)) {
        chance = "Probable";
        const progress = (rank - (cRank * 0.85)) / Math.max(1, cRank * 0.20);
        probability = Math.min(85, Math.max(55, Math.round(85 - (progress * 30))));
        badgeText = "🟡 Probable (High Realistic Zone)";
        badgeClass = "bg-amber-50 text-amber-800 border-amber-300";
        probabilityColor = "from-amber-500 to-yellow-600";
      } else if (rank <= Math.round(cRank * 1.35)) {
        chance = "Ambitious";
        const progress = (rank - (cRank * 1.05)) / Math.max(1, cRank * 0.30);
        probability = Math.min(52, Math.max(25, Math.round(52 - (progress * 25))));
        badgeText = "🔴 Ambitious (Mop-up / Stray Round)";
        badgeClass = "bg-rose-50 text-rose-800 border-rose-300";
        probabilityColor = "from-rose-500 to-pink-600";
      } else {
        continue;
      }
    }

    const tier = item.tier || "";
    const tierWeight = tier.includes("Tier 1") ? 3 : (tier.includes("Tier 2") ? 2 : 1);
    const chanceWeight = chance === "Safe" ? 3 : (chance === "Probable" ? 2 : 1);

    const collegeRef = COLLEGES.find(c => c.id === item.collegeId);

    matches.push({
      ...item,
      collegeRef,
      catCutoff,
      selectedCategory: category,
      chance,
      chanceWeight,
      tierWeight,
      probability,
      badgeText,
      badgeClass,
      probabilityColor,
      isMba: is_mba,
      isPercentileInput: is_percentile
    });
  }

  // Smart Tier & Probability Sorting
  const isElite = (exam === "jee" && rank <= 12000) || (exam === "neet" && rank <= 8000) || (is_percentile && rank >= 94.0);

  matches.sort((a, b) => {
    if (isElite) {
      if (b.tierWeight !== a.tierWeight) return b.tierWeight - a.tierWeight;
      if (b.chanceWeight !== a.chanceWeight) return b.chanceWeight - a.chanceWeight;
      return b.probability - a.probability;
    } else {
      const scoreA = (a.chanceWeight * 25) + (a.tierWeight * 15) + (a.probability * 0.5);
      const scoreB = (b.chanceWeight * 25) + (b.tierWeight * 15) + (b.probability * 0.5);
      return scoreB - scoreA;
    }
  });

  state.calcLastResults = matches;
  state.calcChanceFilter = "all";

  // Reveal results section
  const resultsSection = document.getElementById("rank-calc-results-section");
  if (resultsSection) {
    resultsSection.classList.remove("hidden");
  }

  // Update Summary Header Text
  const summaryText = document.getElementById("calc-results-summary-text");
  if (summaryText) {
    if (exam === "mba") {
      const scoreDisplay = is_percentile ? `${rank}%ile` : `AIR #${rank.toLocaleString()}`;
      summaryText.innerHTML = `Found <span class="text-[#DFB15B] font-black">${matches.length} Verified Institutions</span> for ${scoreDisplay} (${category} • CAT / CMAT / XAT)`;
    } else {
      const examLabel = exam === "neet" ? "NEET-UG" : "JEE Main / Adv";
      summaryText.innerHTML = `Found <span class="text-[#DFB15B] font-black">${matches.length} Verified Institutions</span> for AIR #${rank.toLocaleString()} (${category} • ${examLabel})`;
    }
  }

  // Update counts on filter chips
  updateChanceCounters();
  updateChanceChipStyles();
  renderRankResultsCards();

  // Scroll smoothly to results with sticky navbar offset
  if (scrollIntoView && resultsSection) {
    const navOffset = 90;
    const elementPosition = resultsSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

function updateChanceCounters() {
  const all = state.calcLastResults.length;
  const safe = state.calcLastResults.filter(m => m.chance === "Safe").length;
  const probable = state.calcLastResults.filter(m => m.chance === "Probable").length;
  const ambitious = state.calcLastResults.filter(m => m.chance === "Ambitious").length;

  const countAll = document.getElementById("calc-count-all");
  const countSafe = document.getElementById("calc-count-safe");
  const countProbable = document.getElementById("calc-count-probable");
  const countAmbitious = document.getElementById("calc-count-ambitious");

  if (countAll) countAll.textContent = all;
  if (countSafe) countSafe.textContent = safe;
  if (countProbable) countProbable.textContent = probable;
  if (countAmbitious) countAmbitious.textContent = ambitious;
}

function updateChanceChipStyles() {
  const chips = document.querySelectorAll(".calc-chance-chip");
  chips.forEach(chip => {
    const isSelected = chip.dataset.chance === state.calcChanceFilter;
    if (isSelected) {
      chip.className = "calc-chance-chip px-3 py-1.5 rounded-lg text-xs font-black bg-[#DFB15B] text-[#071A33] border border-[#DFB15B] shadow-sm transition-all";
    } else {
      const chance = chip.dataset.chance;
      if (chance === "Safe") {
        chip.className = "calc-chance-chip px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-1";
      } else if (chance === "Probable") {
        chip.className = "calc-chance-chip px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-500/30 transition-all flex items-center gap-1";
      } else if (chance === "Ambitious") {
        chip.className = "calc-chance-chip px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-rose-300 border border-rose-500/30 transition-all flex items-center gap-1";
      } else {
        chip.className = "calc-chance-chip px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 transition-all";
      }
    }
  });
}

function renderRankResultsCards() {
  const container = document.getElementById("calc-results-cards-grid");
  if (!container) return;

  let results = state.calcLastResults;
  if (state.calcChanceFilter !== "all") {
    results = results.filter(r => r.chance === state.calcChanceFilter);
  }

  if (results.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-gray-300 p-8">
        <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="info" class="w-6 h-6"></i>
        </div>
        <h4 class="text-base font-black text-gray-800 mb-1">No Institutions in This Category Tier</h4>
        <p class="text-xs text-gray-500 max-w-md mx-auto mb-4">
          Try clicking <strong>"All Matches"</strong> above or adjust your score/quota filter to view other admission opportunities.
        </p>
        <button id="btn-calc-show-all" class="bg-[#082A50] text-[#DFB15B] font-bold text-xs py-2 px-4 rounded-xl">
          Show All ${state.calcLastResults.length} Matches
        </button>
      </div>
    `;

    document.getElementById("btn-calc-show-all")?.addEventListener("click", () => {
      state.calcChanceFilter = "all";
      updateChanceChipStyles();
      renderRankResultsCards();
    });

    lucide.createIcons();
    return;
  }

  const { rank, category, exam } = state.calcSubmittedQuery || {};
  const isMba = exam === "mba";
  const isPercentile = isMba && rank <= 100;
  const scoreDisplay = isPercentile ? `${rank}%ile` : `AIR #${rank?.toLocaleString()}`;
  const examLabel = isMba ? "MBA" : (exam === "neet" ? "NEET-UG" : "JEE");

  const cart = getCart();

  container.innerHTML = results.map(item => {
    const isGovt = item.type === "Government";
    const college = item.collegeRef;
    const imgUrl = college?.image || "assets/yealth-logo.png";
    const stars = college?.rating || "4.8";
    const isInWishlist = cart.colleges.some(c => c.id === item.collegeId);

    // Cutoff range display text
    let cutoffDisplay = "";
    if (item.isPercentileInput && item.catCutoff.targetPercentile) {
      cutoffDisplay = `${item.catCutoff.minPercentile}%ile – ${item.catCutoff.targetPercentile}%ile`;
    } else {
      cutoffDisplay = `AIR #${item.catCutoff.openingRank?.toLocaleString() || 1} – #${item.catCutoff.closingRank?.toLocaleString() || 100000}`;
    }

    return `
      <div 
        data-college-id="${item.collegeId}" 
        data-course-name="${item.courseName}"
        class="calc-result-card bg-white rounded-2xl border-2 border-slate-200 hover:border-[#082A50] transition-all shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden group cursor-pointer hover:-translate-y-1">
        <!-- Top Visual & Header -->
        <div>
          <div class="relative h-32 w-full overflow-hidden bg-slate-900">
            <img src="${imgUrl}" alt="${item.collegeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                isGovt 
                  ? "bg-emerald-600 text-white shadow-xs" 
                  : "bg-[#082A50] text-[#DFB15B] border border-[#DFB15B]/40 shadow-xs"
              }">
                ${isGovt ? "🏛️ Government" : "🏫 Top Private"}
              </span>

              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/60 text-amber-300 flex items-center gap-1 backdrop-blur-xs">
                <i data-lucide="star" class="w-3 h-3 fill-amber-300"></i>
                ${stars}
              </span>
            </div>

            <!-- College Name Overlay -->
            <div class="absolute bottom-2 left-2.5 right-2.5">
              <div class="text-[10px] text-[#DFB15B] font-bold flex items-center gap-1 truncate">
                <i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>
                <span>${item.location || item.city}</span>
              </div>
              <h3 class="text-sm font-black text-white leading-snug line-clamp-1">
                ${item.shortName || item.collegeName}
              </h3>
            </div>
          </div>

          <!-- Body Content -->
          <div class="p-4 space-y-3">
            <!-- Program / Branch -->
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Recommended Program</div>
              <div class="text-xs sm:text-sm font-black text-[#082A50] leading-snug">
                ${item.courseName}
              </div>
            </div>

            <!-- Probability & Chance Tier -->
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-xs font-extrabold px-2 py-0.5 rounded-md border ${item.badgeClass}">
                  ${item.badgeText}
                </span>
                <span class="text-xs font-black text-[#082A50]">
                  ${item.probability}% Match
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r ${item.probabilityColor} h-2 rounded-full transition-all duration-500" style="width: ${item.probability}%"></div>
              </div>
            </div>

            <!-- Authentic Cutoffs Box -->
            <div class="bg-blue-50/60 rounded-xl p-2.5 border border-blue-100 text-xs space-y-1.5">
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-gray-500 font-bold">Category:</span>
                <span class="font-extrabold text-[#082A50] bg-white px-1.5 py-0.5 rounded border border-blue-200">${item.selectedCategory}</span>
              </div>
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-gray-500 font-bold">${item.isPercentileInput ? 'Cutoff %ile:' : 'Cutoff Range:'}</span>
                <span class="font-black text-[#082A50]">${cutoffDisplay}</span>
              </div>
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-gray-500 font-bold">Quota:</span>
                <span class="font-semibold text-gray-700 truncate max-w-[150px]">${item.quota}</span>
              </div>
              <div class="text-[10px] text-gray-500 pt-1 border-t border-blue-200/60">
                <i data-lucide="award" class="w-3 h-3 inline text-[#C59943]"></i>
                <span>${item.counselingBoard}</span>
              </div>
            </div>

            <!-- Highlights: Fee & Placement/Beds -->
            <div class="grid grid-cols-2 gap-2 text-xs pt-1">
              <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                <div class="text-[10px] text-gray-400 font-bold uppercase">Est. Fee</div>
                <div class="font-black text-gray-900 truncate">${item.fees}</div>
              </div>
              <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                <div class="text-[10px] text-gray-400 font-bold uppercase">${item.avgPackage ? 'Avg Package' : 'Hospital'}</div>
                <div class="font-black text-emerald-700 truncate">${item.avgPackage || (item.hospitalBeds ? item.hospitalBeds + ' Beds' : 'Verified')}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Footer Actions -->
        <div class="p-4 pt-0 space-y-2">
          <button 
            type="button" 
            data-college-id="${item.collegeId}" 
            data-course-name="${item.courseName}"
            class="btn-calc-explore-course w-full bg-[#082A50] hover:bg-[#051C36] text-[#DFB15B] hover:text-white font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>Explore Course & Eligibility</span>
          </button>

          <button 
            type="button" 
            data-college-id="${item.collegeId}" 
            data-course-name="${item.courseName}"
            class="btn-calc-toggle-wishlist w-full font-extrabold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer ${
              isInWishlist 
                ? 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100' 
                : 'bg-slate-100 hover:bg-rose-50 text-[#082A50] hover:text-rose-600 border border-slate-200 hover:border-rose-300'
            }">
            <i data-lucide="heart" class="w-3.5 h-3.5 ${isInWishlist ? 'fill-rose-600 text-rose-600' : 'text-rose-500'}"></i>
            <span>${isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Card click -> Open details modal (clicking anywhere on the card)
  container.querySelectorAll(".calc-result-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      const colId = card.dataset.collegeId;
      const cName = card.dataset.courseName;
      if (colId) {
        openCollegeDetailsModal(colId, cName);
      }
    });
  });

  // Explore button listener
  container.querySelectorAll(".btn-calc-explore-course").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const colId = btn.dataset.collegeId;
      const cName = btn.dataset.courseName;
      if (colId) {
        openCollegeDetailsModal(colId, cName);
      }
    });
  });

  // Wishlist toggle listener
  container.querySelectorAll(".btn-calc-toggle-wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const colId = btn.dataset.collegeId;
      const cName = btn.dataset.courseName;
      let college = COLLEGES.find(c => c.id === colId);
      if (!college) {
        const cutoff = RANK_CUTOFFS.find(r => r.collegeId === colId);
        if (cutoff) {
          college = {
            id: cutoff.collegeId,
            name: cutoff.collegeName,
            shortName: cutoff.shortName || cutoff.collegeName,
            type: cutoff.type || "Government",
            city: cutoff.city || "India",
            location: cutoff.location || cutoff.city || "India",
            fees: cutoff.fees || "Competitive",
            avgPackage: cutoff.avgPackage,
            image: `assets/colleges/${cutoff.collegeId}.jpg`,
            category: cutoff.stream === "medical" ? "Medical & Healthcare" : (cutoff.stream === "management" ? "Management & MBA" : "Engineering & Tech"),
            selectedCourse: cName || cutoff.courseName
          };
        }
      }
      if (!college) return;

      const inWishlist = getCart().colleges.some(c => c.id === college.id);
      if (inWishlist) {
        removeFromCart(college.id, "college");
        showToast(`Removed ${college.shortName || college.name} from Wishlist`, "info");
      } else {
        addToCart({ ...college, selectedCourse: cName || college.selectedCourse }, "college");
        showToast(`Added ${college.shortName || college.name} to Wishlist!`, "success");
      }
      renderRankResultsCards();
      renderColleges();
    });
  });

  lucide.createIcons();
}


