const MEAL_PLAN_TEMPLATE = {
  monday: {
    day: "Monday",
    breakfast: "Aloo Paratha with Curd, Butter & Mint Chutney / Boiled Eggs + Chai / Coffee / Milk",
    lunch: "Rajma Masala (Punjabi Tadka), Steamed Jeera Basmati Rice, Seasonal Veggie, Fresh Salad & Phulkas",
    snacks: "Crispy Veg Pakoras / Samosa with Tangy Tamarind Chutney + Hot Adrak Masala Chai",
    dinner: "Paneer Butter Masala / Chicken Curry (Optional), Dal Tadka, Tandoori Rotis, Gulab Jamun"
  },
  tuesday: {
    day: "Tuesday",
    breakfast: "South Indian Special: Crispy Masala Dosa, Sambhar, Coconut & Tomato Chutney + Filter Coffee",
    lunch: "Kadhi Pakora, Steamed Rice, Aloo Gobhi Dry, Roasted Papad & Fresh Cucumber Salad",
    snacks: "Sweet Corn Chaat / Bun Maska + Herbal Green Tea / Masala Chai",
    dinner: "Mix Vegetable Korma, Yellow Moong Dal Fry, Butter Phulkas, Boondi Raita & Fruit Custard"
  },
  wednesday: {
    day: "Wednesday",
    breakfast: "Poha with Roasted Peanuts, Sev & Lemon / Bread Omelette + Fresh Cut Fruits + Milk/Tea",
    lunch: "Chole Bhature (Special) / Steamed Rice with Punjabi Chole, Boondi Raita & Pickled Onions",
    snacks: "Maggi / Veg Pasta in White Herb Sauce + Iced Lemon Tea / Chai",
    dinner: "Mushroom Masala / Egg Curry, Dal Makhani, Steamed Rice, Tawa Roti & Kheer"
  },
  thursday: {
    day: "Thursday",
    breakfast: "Stuffed Gobhi & Paneer Paratha, Pickle, Amul Butter + Filter Coffee / Chai",
    lunch: "Dal Palak, Dum Aloo Kashmiri, Steamed Jeera Rice, Phulkas & Green Salad",
    snacks: "Pani Puri / Bhel Puri Live Counter + Hot Tea",
    dinner: "Shahi Paneer, Chana Dal Fry, Missi Roti, Steamed Rice & Moong Dal Halwa"
  },
  friday: {
    day: "Friday",
    breakfast: "Idli & Vada combo, Podi Butter, Hot Drumstick Sambhar, 2 Chutneys + Masala Milk",
    lunch: "Dal Fry, Bhindi Masala, Steamed Rice, Curd Rice option & Phulkas",
    snacks: "Veg Cheese Grilled Sandwiches / French Fries + Hot Coffee / Chai",
    dinner: "Hyderabadi Veg Dum Biryani / Chicken Biryani (Special), Mirchi Ka Salan, Raita, Ice Cream"
  },
  saturday: {
    day: "Saturday",
    breakfast: "Bedmi Puri with Aloo Sabzi (Delhi Style) / French Toast + Tea / Coffee",
    lunch: "Panchmel Dal, Baingan Bharta, Steamed Rice, Crispy Papad, Phulkas",
    snacks: "Pav Bhaji with Butter Pav + Masala Buttermilk / Chai",
    dinner: "Malai Kofta, Yellow Dal Tadka, Jeera Rice, Garlic Butter Naan & Rasgulla"
  },
  sunday: {
    day: "Sunday",
    breakfast: "Chef Special: Chole Kulche / Veg Pancakes with Honey + Fresh Orange Juice / Chai",
    lunch: "Sunday Grand Feast: Dal Makhani, Paneer Tikka Masala, Veg Pulao, Butter Naan & Salad",
    snacks: "Assorted Cookies / Cream Rolls + Filter Coffee / Chai",
    dinner: "Light Khichdi / Biryani, Dahi, Aloo Fry, Roasted Papad, Sewaiyan Kheer"
  }
};

const DEFAULT_VIRTUAL_AMENITIES = [
  { name: "200 Mbps Optical Fiber", icon: "wifi", spec: "Dual Band 5GHz, dedicated bandwidth per room, 99.9% uptime" },
  { name: "24/7 Power Backup", icon: "zap", spec: "100% DG genset + silent inverter for AC and study lights" },
  { name: "Biometric & RFID Security", icon: "fingerprint", spec: "Touchless biometric entry gate, 24/7 CCTV & verified security guard" },
  { name: "4-Stage RO Alkaline Water", icon: "droplet", spec: "Kent Commercial RO plant with UV/UF purification & water cooler" },
  { name: "Daily Professional Housekeeping", icon: "sparkles", spec: "Room deep-cleaning, sanitized attached washroom & daily trash disposal" },
  { name: "Fully Automatic Laundry", icon: "shirt", spec: "IFB Front-load commercial washers + steam press area" }
];

export const PROPERTIES = [
  // ==========================================
  // GREATER NOIDA HOSTELS & PGS (NEW)
  // ==========================================
  {
    id: "y-gn-01",
    title: "Yealth Knowledge Park Campus Suites",
    location: "Knowledge Park 2, Greater Noida",
    city: "Greater Noida",
    type: "Boys & Girls (Separate Wings)",
    category: "Co-Living",
    roomOptions: ["Single Private", "Twin Sharing", "Triple Sharing"],
    price: 7999,
    originalPrice: 10500,
    proximityBadge: "Opposite Galgotias & GL Bajaj (KP 2)",
    isVerified: true,
    tags: ["Knowledge Park 2", "200m from KP2 Metro", "All Meals Included", "AC Rooms"],
    amenities: [
      "Attached Washroom",
      "High-speed 200Mbps Wi-Fi",
      "4-Time Buffet Meals",
      "Daikin AC & Geyser",
      "Biometric & RFID Gate",
      "Daily Room Housekeeping",
      "Gym & Gaming Zone",
      "Doctor on Call"
    ],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Twin Bedroom & Study Corner", viewUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80", desc: "Equipped with dual study desks, high-comfort mattresses, and full wardrobes." },
      { name: "Attached Modern Washroom", viewUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", desc: "Ceramic tiling, high-pressure geyser, and anti-skid premium flooring." },
      { name: "Student Dining Hall & Mess", viewUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Air-conditioned 120-seater cafeteria serving fresh 4-time hot meals." },
      { name: "Open Rooftop Chill Lounge", viewUrl: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80", desc: "Sunset viewpoint with outdoor turf, table tennis, and relaxing hammocks." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.9",
    reviewsCount: 312
  },
  {
    id: "y-gn-02",
    title: "Yealth Sharda Scholar Residency",
    location: "Knowledge Park 3, Greater Noida",
    city: "Greater Noida",
    type: "Girls Only",
    category: "Girls Only",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 8499,
    originalPrice: 11000,
    proximityBadge: "Walking to Sharda Univ & Hospital",
    isVerified: true,
    tags: ["Girls Only", "KP 3 Hub", "24/7 Female Warden", "Biometric Access"],
    amenities: [
      "Female Warden 24/7",
      "Attached Western Washroom",
      "High-speed 200Mbps Wi-Fi",
      "Pure Veg 4-Time Meals",
      "Inverter AC",
      "Silent Study Library",
      "CCTV Surveillance",
      "Laundry with Ironing"
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Single Private Room", viewUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", desc: "Private student sanctuary with ergonomic study chair and balcony view." },
      { name: "Library & Quiet Study Hall", viewUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80", desc: "Silent revision room with power sockets, books, and high-speed Wi-Fi." },
      { name: "Dining Hall & Clean Kitchen", viewUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Hygienic kitchen with daily menu inspection by senior warden." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.9",
    reviewsCount: 224
  },
  {
    id: "y-gn-03",
    title: "Yealth Bennett TechZone Stays",
    location: "TechZone 2, Greater Noida",
    city: "Greater Noida",
    type: "Boys Only",
    category: "Boys Only",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 7499,
    originalPrice: 9500,
    proximityBadge: "Near Bennett University Campus",
    isVerified: true,
    tags: ["Near Bennett Univ", "High Speed 300Mbps", "Power Backup", "Gym Included"],
    amenities: [
      "High-speed 300Mbps Dual-band",
      "Gym & Dumbbells Corner",
      "Delicious 4-Time Meals",
      "24x7 Power Backup",
      "Attached Bathroom & Geyser",
      "Daily Cleaning",
      "Table Tennis & PS5 Room"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Spacious Twin Sharing Room", viewUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", desc: "Engineered for coding and late-night study sessions." },
      { name: "Gaming & Fitness Area", viewUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80", desc: "Crossfit equipment, free weights, and esports gaming lounge." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 178
  },
  {
    id: "y-gn-04",
    title: "Yealth Pari Chowk Executive Co-Living",
    location: "Pari Chowk / Alpha 1, Greater Noida",
    city: "Greater Noida",
    type: "Co-Living",
    category: "Co-Living",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 8999,
    originalPrice: 11500,
    proximityBadge: "2 mins to Alpha 1 Metro & Markets",
    isVerified: true,
    tags: ["Pari Chowk Hub", "Alpha 1 Metro", "Zero Brokerage", "Food Included"],
    amenities: [
      "Walking to Alpha 1 Metro",
      "Balcony Rooms with City View",
      "Elevator in Building",
      "Cafeteria 4-time meals",
      "AC & Inverter Backup",
      "Security Guard 24/7"
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Executive Balcony Room", viewUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", desc: "Private balcony with morning sunlight and direct view of Alpha 1 park." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 195
  },
  {
    id: "y-gn-05",
    title: "Yealth NIET & IIMT Tech Haven",
    location: "Plot 19, Knowledge Park 2, Greater Noida",
    city: "Greater Noida",
    type: "Boys & Girls (Separate Wings)",
    category: "Co-Living",
    roomOptions: ["Twin Sharing", "Triple Sharing"],
    price: 6999,
    originalPrice: 8800,
    proximityBadge: "300m from NIET & IIMT Campuses",
    isVerified: true,
    tags: ["Knowledge Park 2", "Affordable Stays", "Healthy Food", "CCTV"],
    amenities: [
      "Right opposite NIET Campus",
      "High-speed Wi-Fi 200Mbps",
      "Home-style Punjabi Mess",
      "Study Desk & Reading Lamps",
      "Biometric Access System",
      "24x7 Power Backup"
    ],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Student Study Suite", viewUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", desc: "Optimized for quiet study hours and group project discussions." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.7",
    reviewsCount: 140
  },

  // ==========================================
  // EXISTING METRO PROPERTIES (ENRICHED)
  // ==========================================
  {
    id: "y-101",
    title: "Yealth Campus Hub Residency",
    location: "North Campus, Delhi University",
    city: "Delhi / NCR",
    type: "Boys & Girls (Separate Wings)",
    category: "Co-Living",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 8500,
    originalPrice: 10500,
    proximityBadge: "Opposite DU North Campus",
    isVerified: true,
    tags: ["Walk to Metro", "Food Included", "Wi-Fi"],
    amenities: ["Attached Washroom", "High-speed Wi-Fi", "4-Time Buffet Meals", "AC / Cooler", "Biometric Entry", "Daily Housekeeping"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "North Campus Deluxe Suite", viewUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80", desc: "Located 5 minutes walk from Vishwavidyalaya Metro." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 142
  },
  {
    id: "y-102",
    title: "Yealth Scholars Haven",
    location: "Indra Vihar, Kota",
    city: "Kota",
    type: "Coaching Special (Quiet Hours)",
    category: "Near Coaching Hubs",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 6500,
    originalPrice: 8000,
    proximityBadge: "500m from Allen Kota",
    isVerified: true,
    tags: ["500m from Allen", "AC Rooms", "Nutritious Meals"],
    amenities: ["Silent Study Hall", "Nutritious Diet", "Doctor on Call", "Daily Linen Wash", "High-speed Wi-Fi", "CCTV Surveillance"],
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Kota Silent Study Room", viewUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", desc: "Zero noise zone tailored for JEE & NEET rank aspirants." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.9",
    reviewsCount: 289
  },
  {
    id: "y-103",
    title: "Yealth Tech City Stays",
    location: "Koramangala 4th Block, Bangalore",
    city: "Bangalore",
    type: "Co-Living",
    category: "Co-Living",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 11000,
    originalPrice: 13500,
    proximityBadge: "Near Christ University & Startups",
    isVerified: true,
    tags: ["High Speed 200Mbps", "Gym", "Gaming Lounge"],
    amenities: ["Gaming PS5 Lounge", "CrossFit Gym", "Power Backup 24x7", "High-speed 200Mbps", "Gourmet Cafe", "Community Terrace"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Koramangala Studio Room", viewUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", desc: "Startup friendly co-living right in Koramangala 4th block." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.7",
    reviewsCount: 98
  },
  {
    id: "y-104",
    title: "Yealth Symphony Suites",
    location: "Kothrud, Pune",
    city: "Pune",
    type: "Girls Only",
    category: "Girls Only",
    roomOptions: ["Single Private", "Twin Sharing", "Triple Sharing"],
    price: 7500,
    originalPrice: 9000,
    proximityBadge: "Near MIT World Peace University",
    isVerified: true,
    tags: ["24/7 Security", "Homestyle Food", "Biometric Access"],
    amenities: ["Female Warden 24/7", "Biometric Entry", "Hot Maharashtrian & North Meals", "Study Lounge", "High-speed Wi-Fi", "Washing Machines"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
    ],
    virtualTour: [
      { name: "Girls Study Suite Kothrud", viewUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", desc: "Safe, secure hostel with full female staff and biometric security." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 176
  },
  {
    id: "y-105",
    title: "Yealth Allen Apex PG",
    location: "Vigyan Nagar, Kota",
    city: "Kota",
    type: "Boys Only",
    category: "Near Coaching Hubs",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 5999,
    originalPrice: 7500,
    proximityBadge: "300m from Resonance & Allen Supath",
    isVerified: true,
    tags: ["Under ₹6,000", "Coaching Special", "Quiet Zone"],
    amenities: ["Zero Distraction Pods", "Pure Veg Unlimited Meals", "RO Mineral Water", "High-speed Wi-Fi", "Daily Room Sanitization"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Single Kota Study Pod", viewUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", desc: "Focused study pod with ergonomic chair and zero sound disturbance." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.9",
    reviewsCount: 215
  },
  {
    id: "y-106",
    title: "Yealth South Campus Hive",
    location: "Satya Niketan, Delhi",
    city: "Delhi / NCR",
    type: "Co-Living",
    category: "Co-Living",
    roomOptions: ["Twin Sharing", "Triple Sharing"],
    price: 9200,
    originalPrice: 11000,
    proximityBadge: "Opposite Venkateswara & ARSD College",
    isVerified: true,
    tags: ["South Campus Hub", "Food Included", "Metro Access"],
    amenities: ["Elevator", "Cafeteria Dining", "Ergonomic Workstations", "24/7 CCTV", "Laundry Service"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Satya Niketan Twin Room", viewUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", desc: "Just across Durgabai Deshmukh South Campus Metro." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.7",
    reviewsCount: 114
  },
  {
    id: "y-107",
    title: "Yealth Silicon Valley Hostel",
    location: "BTM Layout / Silk Board, Bangalore",
    city: "Bangalore",
    type: "Boys Only",
    category: "Boys Only",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 7999,
    originalPrice: 9500,
    proximityBadge: "10 mins to Koramangala & Metro",
    isVerified: true,
    tags: ["High-speed 200Mbps", "Power Backup", "Bicycle Share"],
    amenities: ["High-Speed Wi-Fi", "Dedicated Desk", "North & South Indian Meals", "Biometric Lock", "Roof Chill Zone"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "BTM Silicon Bedroom", viewUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", desc: "Fast Wi-Fi and power backup for tech and engineering students." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 168
  },
  {
    id: "y-108",
    title: "Yealth Symbiosis Haven",
    location: "Viman Nagar, Pune",
    city: "Pune",
    type: "Girls Only",
    category: "Girls Only",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 8400,
    originalPrice: 10200,
    proximityBadge: "Walking distance to Symbiosis Campus",
    isVerified: true,
    tags: ["Prime Location", "24x7 Security", "Modern Kitchen"],
    amenities: ["Biometric Access", "Spacious Balcony", "Home-style Meal Plan", "Study Tables", "High-speed Wi-Fi"],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Viman Nagar Girls Suite", viewUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80", desc: "5 minutes walk from Symbiosis Viman Nagar campus." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.9",
    reviewsCount: 183
  },
  {
    id: "y-109",
    title: "Yealth Doon Valley Stays",
    location: "Rajpur Road, Dehradun",
    city: "Dehradun",
    type: "Girls Only",
    category: "Girls Only",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 6800,
    originalPrice: 8500,
    proximityBadge: "Scenic Mountain View & Near Graphic Era",
    isVerified: true,
    tags: ["Heated Water", "Nutritious Meals", "Mountain Breeze"],
    amenities: ["Geyser in every room", "Fresh Himalayan Meals", "Strict Night Security", "Library Lounge", "High-speed Wi-Fi"],
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Doon Mountain View Room", viewUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", desc: "Panoramic view of Mussoorie foothills with warm heaters." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 92
  },
  {
    id: "y-110",
    title: "Yealth Hitec City Student Residence",
    location: "Madhapur, Hyderabad",
    city: "Hyderabad",
    type: "Co-Living",
    category: "Co-Living",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 8999,
    originalPrice: 11000,
    proximityBadge: "Near IIIT Hyderabad & Cyber Towers",
    isVerified: true,
    tags: ["High-speed 200Mbps", "AC Stays", "Food Included"],
    amenities: ["South & North Cuisine", "Gym & Pool Access", "Power Backup", "Housekeeping", "Fast Internet"],
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Madhapur Tech Suite", viewUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80", desc: "Walking to Cyber Towers and premier tech coaching centres." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.7",
    reviewsCount: 130
  },
  {
    id: "y-111",
    title: "Yealth Coastal Student Stays",
    location: "Bandra / Khar West, Mumbai",
    city: "Mumbai",
    type: "Boys & Girls (Separate Wings)",
    category: "Co-Living",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 13500,
    originalPrice: 16000,
    proximityBadge: "Close to NMIMS & Mithibai College",
    isVerified: true,
    tags: ["Metro Station 200m", "AC", "Laundry Included"],
    amenities: ["Prime Mumbai Hub", "In-house Chef", "Daily Cleaning", "Security Guard 24x7", "High-speed Wi-Fi"],
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Bandra Student Flat Suite", viewUrl: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80", desc: "10 mins from NMIMS Mumbai and Khar station." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.9",
    reviewsCount: 147
  },
  {
    id: "y-112",
    title: "Yealth Panjab University Stays",
    location: "Sector 15-D, Chandigarh",
    city: "Chandigarh",
    type: "Boys Only",
    category: "Boys Only",
    roomOptions: ["Single Private", "Twin Sharing"],
    price: 6400,
    originalPrice: 8000,
    proximityBadge: "5 mins to Panjab University Gate 2",
    isVerified: true,
    tags: ["Walking to PU", "Punjabi Mess", "Zero Brokerage"],
    amenities: ["Pure Desi Ghee Food", "Quiet Study Desks", "Lawn Terrace", "Washing Machines", "High-speed Wi-Fi"],
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80"],
    virtualTour: [
      { name: "Chandigarh Sector 15 Room", viewUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80", desc: "Walking to Panjab University Gate 2 and Sector 15 market." }
    ],
    virtualAmenities: DEFAULT_VIRTUAL_AMENITIES,
    mealPlan: MEAL_PLAN_TEMPLATE,
    rating: "4.8",
    reviewsCount: 88
  }
];

export const CATEGORY_FILTERS = [
  { id: "all", label: "All Accommodations" },
  { id: "Greater Noida Special", label: "Greater Noida (KP 2 & 3)" },
  { id: "Near Coaching Hubs", label: "Near Coaching Hubs" },
  { id: "Girls Only", label: "Girls Only" },
  { id: "Boys Only", label: "Boys Only" },
  { id: "Co-Living", label: "Co-Living" }
];