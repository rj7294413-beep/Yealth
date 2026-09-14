/**
 * NTA, JoSAA, CSAB, MCC & State Counseling Official Cutoff Dataset
 * Covers NEET-UG (Medical) and JEE Main / Advanced (Engineering) across Government and Top Private Colleges.
 * Includes General, OBC-NCL, EWS, SC, and ST category opening and closing ranks.
 */

export const RANK_CUTOFFS = [
  // =========================================================================
  // 1. JEE MAIN & JEE ADVANCED (ENGINEERING & TECH)
  // =========================================================================

  // IIT Delhi
  {
    id: "cut-iitd-cse",
    collegeId: "col-gov-01",
    collegeName: "Indian Institute of Technology (IIT) Delhi",
    shortName: "IIT Delhi",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_adv",
    type: "Government",
    city: "Delhi / NCR",
    location: "Hauz Khas, New Delhi",
    quota: "All India (AI)",
    categoryCutoffs: {
      "General": { openingRank: 25, closingRank: 118 },
      "EWS": { openingRank: 10, closingRank: 35 },
      "OBC-NCL": { openingRank: 20, closingRank: 75 },
      "SC": { openingRank: 8, closingRank: 40 },
      "ST": { openingRank: 5, closingRank: 25 }
    },
    fees: "₹2.2 Lakhs / yr",
    avgPackage: "₹28.5 LPA",
    counselingBoard: "JoSAA Counseling (IIT Admissions)",
    highlights: "Institute of National Importance • Top Global Recruiter Hub"
  },
  {
    id: "cut-iitd-ee",
    collegeId: "col-gov-01",
    collegeName: "Indian Institute of Technology (IIT) Delhi",
    shortName: "IIT Delhi",
    courseName: "B.Tech in Electrical Engineering",
    stream: "engineering",
    exam: "jee_adv",
    type: "Government",
    city: "Delhi / NCR",
    location: "Hauz Khas, New Delhi",
    quota: "All India (AI)",
    categoryCutoffs: {
      "General": { openingRank: 140, closingRank: 620 },
      "EWS": { openingRank: 40, closingRank: 130 },
      "OBC-NCL": { openingRank: 100, closingRank: 350 },
      "SC": { openingRank: 50, closingRank: 210 },
      "ST": { openingRank: 30, closingRank: 120 }
    },
    fees: "₹2.2 Lakhs / yr",
    avgPackage: "₹24.2 LPA",
    counselingBoard: "JoSAA Counseling",
    highlights: "VLSI, Robotics & Microelectronics"
  },

  // DTU Delhi
  {
    id: "cut-dtu-cse",
    collegeId: "col-gov-04",
    collegeName: "Delhi Technological University (DTU / DCE)",
    shortName: "DTU Delhi",
    courseName: "B.Tech in Computer Engineering (COE)",
    stream: "engineering",
    exam: "jee_main",
    type: "Government",
    city: "Delhi / NCR",
    location: "Rohini, Delhi",
    quota: "JAC Delhi (85% Delhi / 15% Outside)",
    categoryCutoffs: {
      "General": { openingRank: 1200, closingRank: 14500 },
      "EWS": { openingRank: 8500, closingRank: 23000 },
      "OBC-NCL": { openingRank: 12000, closingRank: 46000 },
      "SC": { openingRank: 35000, closingRank: 110000 },
      "ST": { openingRank: 80000, closingRank: 240000 }
    },
    fees: "₹1.9 Lakhs / yr",
    avgPackage: "₹21.5 LPA",
    counselingBoard: "JAC Delhi / JoSAA",
    highlights: "Unmatched Coding Culture • Silicon Valley Alumni"
  },
  {
    id: "cut-dtu-it",
    collegeId: "col-gov-04",
    collegeName: "Delhi Technological University (DTU / DCE)",
    shortName: "DTU Delhi",
    courseName: "B.Tech in Information Technology (IT)",
    stream: "engineering",
    exam: "jee_main",
    type: "Government",
    city: "Delhi / NCR",
    location: "Rohini, Delhi",
    quota: "JAC Delhi",
    categoryCutoffs: {
      "General": { openingRank: 8000, closingRank: 19500 },
      "EWS": { openingRank: 16000, closingRank: 29000 },
      "OBC-NCL": { openingRank: 24000, closingRank: 58000 },
      "SC": { openingRank: 65000, closingRank: 140000 },
      "ST": { openingRank: 120000, closingRank: 290000 }
    },
    fees: "₹1.9 Lakhs / yr",
    avgPackage: "₹19.8 LPA",
    counselingBoard: "JAC Delhi",
    highlights: "Top Software MNC Recruiter Hub"
  },

  // BITS Pilani
  {
    id: "cut-bits-cs",
    collegeId: "col-pvt-05",
    collegeName: "Birla Institute of Technology and Science (BITS) Pilani",
    shortName: "BITS Pilani",
    courseName: "B.E. in Computer Science",
    stream: "engineering",
    exam: "jee_main", // Also maps BITSAT equivalent
    type: "Private",
    city: "Rajasthan",
    location: "Vidya Vihar, Pilani",
    quota: "Merit All India (BITSAT / JEE Equiv Rank)",
    categoryCutoffs: {
      "General": { openingRank: 400, closingRank: 4800 },
      "EWS": { openingRank: 600, closingRank: 5500 },
      "OBC-NCL": { openingRank: 800, closingRank: 6500 },
      "SC": { openingRank: 2500, closingRank: 18000 },
      "ST": { openingRank: 5000, closingRank: 28000 }
    },
    fees: "₹5.5 Lakhs / yr",
    avgPackage: "₹27.8 LPA",
    counselingBoard: "BITS Pilani Central Counseling",
    highlights: "Institute of Eminence • Zero Attendance Rule • Top Tier RoI"
  },

  // VIT Vellore
  {
    id: "cut-vit-cse",
    collegeId: "col-pvt-07",
    collegeName: "Vellore Institute of Technology (VIT)",
    shortName: "VIT Vellore",
    courseName: "B.Tech in Computer Science & Engineering (Core)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Tamil Nadu",
    location: "Vellore Campus",
    quota: "VITEEE / JEE Merit All India",
    categoryCutoffs: {
      "General": { openingRank: 1500, closingRank: 22000 },
      "EWS": { openingRank: 3000, closingRank: 28000 },
      "OBC-NCL": { openingRank: 3500, closingRank: 34000 },
      "SC": { openingRank: 12000, closingRank: 65000 },
      "ST": { openingRank: 20000, closingRank: 95000 }
    },
    fees: "₹1.98 Lakhs - ₹3.5 Lakhs / yr",
    avgPackage: "₹9.8 LPA",
    counselingBoard: "VIT Central Counseling",
    highlights: "900+ Recruiter Visits • ABET US Accreditation"
  },

  // Thapar Patiala
  {
    id: "cut-tiet-coe",
    collegeId: "col-pvt-11",
    collegeName: "Thapar Institute of Engineering & Technology (TIET)",
    shortName: "Thapar University Patiala",
    courseName: "B.E. in Computer Engineering (COE)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Punjab",
    location: "Patiala, Punjab",
    quota: "50% JEE Main / 50% Punjab Home State",
    categoryCutoffs: {
      "General": { openingRank: 6500, closingRank: 36000 },
      "EWS": { openingRank: 14000, closingRank: 48000 },
      "OBC-NCL": { openingRank: 18000, closingRank: 62000 },
      "SC": { openingRank: 45000, closingRank: 145000 },
      "ST": { openingRank: 75000, closingRank: 220000 }
    },
    fees: "₹3.8 Lakhs / yr",
    avgPackage: "₹13.2 LPA",
    counselingBoard: "TIET Central Counseling",
    highlights: "Trinity College Dublin Partnership • 68 Years Legacy"
  },

  // Jaypee Institute of Information Technology (JIIT Noida)
  {
    id: "cut-jiit-cse-62",
    collegeId: "col-pvt-17",
    collegeName: "Jaypee Institute of Information Technology (JIIT Noida)",
    shortName: "JIIT Noida Sector 62",
    courseName: "B.Tech in Computer Science & Engineering (Sector 62)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Delhi / NCR",
    location: "Sector 62, Noida",
    quota: "JEE Main All India Merit (Direct Counseling)",
    categoryCutoffs: {
      "General": { openingRank: 14000, closingRank: 58000 },
      "EWS": { openingRank: 28000, closingRank: 72000 },
      "OBC-NCL": { openingRank: 32000, closingRank: 88000 },
      "SC": { openingRank: 75000, closingRank: 195000 },
      "ST": { openingRank: 110000, closingRank: 320000 }
    },
    fees: "₹2.95 Lakhs / yr",
    avgPackage: "₹11.8 LPA",
    counselingBoard: "JIIT Central Counseling",
    highlights: "Ranked Among Top Coding Campuses in NCR • Highest ₹1.15 CPA"
  },
  {
    id: "cut-jiit-cse-128",
    collegeId: "col-pvt-17",
    collegeName: "Jaypee Institute of Information Technology (JIIT Noida)",
    shortName: "JIIT Noida Sector 128",
    courseName: "B.Tech in Computer Science & Engineering (Sector 128)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Delhi / NCR",
    location: "Sector 128, Noida Express Highway",
    quota: "JEE Main All India Merit",
    categoryCutoffs: {
      "General": { openingRank: 38000, closingRank: 78000 },
      "EWS": { openingRank: 48000, closingRank: 95000 },
      "OBC-NCL": { openingRank: 55000, closingRank: 115000 },
      "SC": { openingRank: 110000, closingRank: 240000 },
      "ST": { openingRank: 160000, closingRank: 380000 }
    },
    fees: "₹2.95 Lakhs / yr",
    avgPackage: "₹10.5 LPA",
    counselingBoard: "JIIT Central Counseling",
    highlights: "Express Highway Campus • Unified Placement Cell"
  },

  // Shiv Nadar University (SNU Greater Noida)
  {
    id: "cut-snu-cse",
    collegeId: "col-pvt-10",
    collegeName: "Shiv Nadar University (Institution of Eminence)",
    shortName: "Shiv Nadar University (SNU)",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "NH-91, Greater Noida",
    quota: "JEE Main (>= 80 Percentile) / SNUSAT",
    categoryCutoffs: {
      "General": { openingRank: 18000, closingRank: 72000 },
      "EWS": { openingRank: 32000, closingRank: 90000 },
      "OBC-NCL": { openingRank: 38000, closingRank: 105000 },
      "SC": { openingRank: 85000, closingRank: 220000 },
      "ST": { openingRank: 130000, closingRank: 340000 }
    },
    fees: "₹4.1 Lakhs / yr",
    avgPackage: "₹12.8 LPA",
    counselingBoard: "SNU Admissions Portal",
    highlights: "Institution of Eminence (IoE) • HCL Enterprise Innovation Labs"
  },

  // Bennett University (The Times Group)
  {
    id: "cut-bu-cse",
    collegeId: "col-pvt-03",
    collegeName: "Bennett University (The Times Group, Greater Noida)",
    shortName: "Bennett University",
    courseName: "B.Tech in Computer Science & Engineering (AI/Cloud/Cyber)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "Plot Nos 8-11, TechZone 2, Greater Noida",
    quota: "JEE Main (All India) / SAT / 10+2 Merit",
    categoryCutoffs: {
      "General": { openingRank: 25000, closingRank: 145000 },
      "EWS": { openingRank: 45000, closingRank: 175000 },
      "OBC-NCL": { openingRank: 55000, closingRank: 195000 },
      "SC": { openingRank: 120000, closingRank: 360000 },
      "ST": { openingRank: 180000, closingRank: 480000 }
    },
    fees: "₹3.8 Lakhs / yr",
    avgPackage: "₹11.1 LPA",
    counselingBoard: "Bennett Direct / Counseling",
    highlights: "Times Group Backed • Silicon Valley Connections • Top CxO Mentorship"
  },

  // G.L. Bajaj Institute of Technology & Management (Greater Noida)
  {
    id: "cut-glb-cse",
    collegeId: "col-pvt-04",
    collegeName: "G.L. Bajaj Institute of Technology & Management (Knowledge Park 2)",
    shortName: "GL Bajaj Greater Noida",
    courseName: "B.Tech in Computer Science & Engineering (CSE)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 2, Knowledge Park 2, Greater Noida",
    quota: "UPTAC Counseling (AKTU All India / Home State)",
    categoryCutoffs: {
      "General": { openingRank: 35000, closingRank: 135000 },
      "EWS": { openingRank: 65000, closingRank: 175000 },
      "OBC-NCL": { openingRank: 75000, closingRank: 210000 },
      "SC": { openingRank: 150000, closingRank: 420000 },
      "ST": { openingRank: 220000, closingRank: 580000 }
    },
    fees: "₹1.45 Lakhs / yr",
    avgPackage: "₹8.2 LPA",
    counselingBoard: "UPTAC (AKTU Counseling)",
    highlights: "Top AKTU Placement Record in North India • 400+ IT Recruiters"
  },
  {
    id: "cut-glb-aiml",
    collegeId: "col-pvt-04",
    collegeName: "G.L. Bajaj Institute of Technology & Management (Knowledge Park 2)",
    shortName: "GL Bajaj Greater Noida",
    courseName: "B.Tech in Artificial Intelligence & Data Science",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 2, Knowledge Park 2, Greater Noida",
    quota: "UPTAC Counseling",
    categoryCutoffs: {
      "General": { openingRank: 55000, closingRank: 185000 },
      "EWS": { openingRank: 85000, closingRank: 235000 },
      "OBC-NCL": { openingRank: 98000, closingRank: 275000 },
      "SC": { openingRank: 190000, closingRank: 490000 },
      "ST": { openingRank: 280000, closingRank: 650000 }
    },
    fees: "₹1.45 Lakhs / yr",
    avgPackage: "₹7.8 LPA",
    counselingBoard: "UPTAC Counseling",
    highlights: "Specialized AI/DS Labs • Amazon & Palo Alto Networks Recruits"
  },

  // Galgotias University (Greater Noida)
  {
    id: "cut-gu-cse",
    collegeId: "col-pvt-01",
    collegeName: "Galgotias University (Greater Noida)",
    shortName: "Galgotias University",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "Yamuna Expressway, Greater Noida",
    quota: "JEE Main / CUET / GUMET Direct",
    categoryCutoffs: {
      "General": { openingRank: 48000, closingRank: 220000 },
      "EWS": { openingRank: 75000, closingRank: 270000 },
      "OBC-NCL": { openingRank: 90000, closingRank: 310000 },
      "SC": { openingRank: 180000, closingRank: 520000 },
      "ST": { openingRank: 260000, closingRank: 720000 }
    },
    fees: "₹1.64 Lakhs / yr",
    avgPackage: "₹7.2 LPA",
    counselingBoard: "Galgotias Central Counseling",
    highlights: "850+ Recruiter Visits • 52-Acre Modern Smart Campus"
  },

  // Sharda University (B.Tech CSE)
  {
    id: "cut-su-btech",
    collegeId: "col-pvt-02",
    collegeName: "Sharda University (Knowledge Park 3, Greater Noida)",
    shortName: "Sharda University",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 32-34, Knowledge Park 3, Greater Noida",
    quota: "JEE Main / SUAT / All India Merit",
    categoryCutoffs: {
      "General": { openingRank: 45000, closingRank: 240000 },
      "EWS": { openingRank: 70000, closingRank: 290000 },
      "OBC-NCL": { openingRank: 85000, closingRank: 330000 },
      "SC": { openingRank: 175000, closingRank: 540000 },
      "ST": { openingRank: 250000, closingRank: 750000 }
    },
    fees: "₹2.2 Lakhs / yr",
    avgPackage: "₹7.8 LPA",
    counselingBoard: "Sharda University Admissions",
    highlights: "NAAC A+ Grade • Global Students Community from 85+ Nations"
  },

  // NIET Greater Noida
  {
    id: "cut-niet-cse",
    collegeId: "col-pvt-15",
    collegeName: "Noida Institute of Engineering & Technology (NIET Greater Noida)",
    shortName: "NIET Greater Noida",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 19, Knowledge Park 2, Greater Noida",
    quota: "UPTAC Counseling (AKTU Autonomous)",
    categoryCutoffs: {
      "General": { openingRank: 42000, closingRank: 165000 },
      "EWS": { openingRank: 72000, closingRank: 215000 },
      "OBC-NCL": { openingRank: 85000, closingRank: 250000 },
      "SC": { openingRank: 170000, closingRank: 470000 },
      "ST": { openingRank: 240000, closingRank: 640000 }
    },
    fees: "₹1.42 Lakhs / yr",
    avgPackage: "₹7.1 LPA",
    counselingBoard: "UPTAC (Autonomous Institute)",
    highlights: "First Autonomous Engineering College in Greater Noida • NAAC A Grade"
  },

  // RVCE Bangalore
  {
    id: "cut-rvce-cse",
    collegeId: "col-pvt-22",
    collegeName: "R.V. College of Engineering (RVCE Bangalore)",
    shortName: "RVCE Bangalore",
    courseName: "B.E. in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Bangalore / Karnataka",
    location: "Mysore Road, Bengaluru",
    quota: "COMEDK / KCET / JEE All India Merit",
    categoryCutoffs: {
      "General": { openingRank: 1200, closingRank: 18500 },
      "EWS": { openingRank: 3500, closingRank: 25000 },
      "OBC-NCL": { openingRank: 4500, closingRank: 32000 },
      "SC": { openingRank: 14000, closingRank: 72000 },
      "ST": { openingRank: 22000, closingRank: 110000 }
    },
    fees: "₹2.6 Lakhs - ₹10.0 Lakhs / yr",
    avgPackage: "₹18.2 LPA",
    counselingBoard: "COMEDK / KEA Counseling",
    highlights: "Karnataka's #1 Private Engineering Institution • Highest ₹62 LPA"
  },

  // MSRIT Bangalore
  {
    id: "cut-msrit-cse",
    collegeId: "col-pvt-23",
    collegeName: "M.S. Ramaiah Institute of Technology (MSRIT Bangalore)",
    shortName: "MSRIT Bangalore",
    courseName: "B.E. in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Bangalore / Karnataka",
    location: "MSR Nagar, Bengaluru",
    quota: "COMEDK / KCET / All India",
    categoryCutoffs: {
      "General": { openingRank: 2800, closingRank: 29000 },
      "EWS": { openingRank: 6000, closingRank: 38000 },
      "OBC-NCL": { openingRank: 7500, closingRank: 45000 },
      "SC": { openingRank: 19000, closingRank: 95000 },
      "ST": { openingRank: 30000, closingRank: 145000 }
    },
    fees: "₹2.4 Lakhs - ₹9.0 Lakhs / yr",
    avgPackage: "₹14.5 LPA",
    counselingBoard: "COMEDK / KEA",
    highlights: "Premier Bengaluru Tech Hub • Leading Global Software Recruiters"
  },

  // KIIT Bhubaneswar
  {
    id: "cut-kiit-cse",
    collegeId: "col-pvt-19",
    collegeName: "Kalinga Institute of Industrial Technology (KIIT Bhubaneswar)",
    shortName: "KIIT Bhubaneswar",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Odisha",
    location: "Patia, Bhubaneswar",
    quota: "KIITEE / JEE Main All India",
    categoryCutoffs: {
      "General": { openingRank: 18000, closingRank: 85000 },
      "EWS": { openingRank: 29000, closingRank: 110000 },
      "OBC-NCL": { openingRank: 36000, closingRank: 130000 },
      "SC": { openingRank: 85000, closingRank: 260000 },
      "ST": { openingRank: 130000, closingRank: 380000 }
    },
    fees: "₹3.85 Lakhs / yr",
    avgPackage: "₹8.5 LPA",
    counselingBoard: "KIIT Admissions",
    highlights: "Institution of Eminence • 6000+ Placement Offers Annually"
  },

  // SRMIST
  {
    id: "cut-srm-cse",
    collegeId: "col-pvt-18",
    collegeName: "SRM Institute of Science and Technology (SRMIST)",
    shortName: "SRM University (Delhi NCR / Chennai)",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Delhi / NCR",
    location: "Modinagar, NCR & Kattankulathur",
    quota: "SRMJEEE / JEE Main Merit",
    categoryCutoffs: {
      "General": { openingRank: 22000, closingRank: 115000 },
      "EWS": { openingRank: 38000, closingRank: 145000 },
      "OBC-NCL": { openingRank: 48000, closingRank: 175000 },
      "SC": { openingRank: 110000, closingRank: 320000 },
      "ST": { openingRank: 170000, closingRank: 460000 }
    },
    fees: "₹3.2 Lakhs / yr",
    avgPackage: "₹7.9 LPA",
    counselingBoard: "SRM Central Counseling",
    highlights: "NAAC A++ • Highest Package ₹1.0 CPA"
  },

  // UPES Dehradun
  {
    id: "cut-upes-cse",
    collegeId: "col-pvt-20",
    collegeName: "UPES Dehradun (University of Petroleum & Energy Studies)",
    shortName: "UPES Dehradun",
    courseName: "B.Tech in Computer Science & Engineering (Cloud/Cyber/AI)",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Uttarakhand",
    location: "Bidholi, Dehradun",
    quota: "UPESEAT / JEE Main All India",
    categoryCutoffs: {
      "General": { openingRank: 32000, closingRank: 165000 },
      "EWS": { openingRank: 55000, closingRank: 210000 },
      "OBC-NCL": { openingRank: 65000, closingRank: 245000 },
      "SC": { openingRank: 140000, closingRank: 450000 },
      "ST": { openingRank: 210000, closingRank: 620000 }
    },
    fees: "₹3.9 Lakhs / yr",
    avgPackage: "₹8.7 LPA",
    counselingBoard: "UPES Direct / JEE Counseling",
    highlights: "Scenic Himalayan Campus • High Placement Record in Core Tech & Energy"
  },

  // Chitkara University
  {
    id: "cut-chitkara-cse",
    collegeId: "col-pvt-21",
    collegeName: "Chitkara University (Punjab / Chandigarh NCR)",
    shortName: "Chitkara University",
    courseName: "B.Tech in Computer Science & Engineering",
    stream: "engineering",
    exam: "jee_main",
    type: "Private",
    city: "Punjab / Chandigarh",
    location: "Chandigarh-Patiala National Highway",
    quota: "JEE Main / 10+2 Merit All India",
    categoryCutoffs: {
      "General": { openingRank: 50000, closingRank: 230000 },
      "EWS": { openingRank: 80000, closingRank: 290000 },
      "OBC-NCL": { openingRank: 95000, closingRank: 340000 },
      "SC": { openingRank: 180000, closingRank: 580000 },
      "ST": { openingRank: 260000, closingRank: 780000 }
    },
    fees: "₹1.9 Lakhs / yr",
    avgPackage: "₹8.2 LPA",
    counselingBoard: "Chitkara Admissions",
    highlights: "NAAC A+ Accredited • Apple iOS Development Lab & Microsoft Innovation"
  },

  // =========================================================================
  // 2. NEET UG (MEDICAL & HEALTHCARE) - GOVERNMENT & TOP PRIVATE
  // =========================================================================

  // AIIMS New Delhi
  {
    id: "cut-aiims-delhi",
    collegeId: "col-gov-02",
    collegeName: "All India Institute of Medical Sciences (AIIMS) New Delhi",
    shortName: "AIIMS New Delhi",
    courseName: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
    stream: "medical",
    exam: "neet",
    type: "Government",
    city: "Delhi / NCR",
    location: "Ansari Nagar, New Delhi",
    quota: "All India 100% MCC Central",
    categoryCutoffs: {
      "General": { openingRank: 1, closingRank: 57 },
      "EWS": { openingRank: 60, closingRank: 225 },
      "OBC-NCL": { openingRank: 70, closingRank: 255 },
      "SC": { openingRank: 80, closingRank: 980 },
      "ST": { openingRank: 210, closingRank: 1620 }
    },
    fees: "₹1,628 / yr (Govt Subsidized)",
    avgPackage: "₹18.5 LPA (Resident Stipend ₹1.1L/mo)",
    counselingBoard: "MCC Central Counseling",
    highlights: "Apex Healthcare Institute of National Importance • Super-specialty OPDs"
  },

  // Maulana Azad Medical College (MAMC Delhi)
  {
    id: "cut-mamc-delhi",
    collegeId: "col-gov-06",
    collegeName: "Maulana Azad Medical College (MAMC Delhi)",
    shortName: "MAMC New Delhi",
    courseName: "MBBS",
    stream: "medical",
    exam: "neet",
    type: "Government",
    city: "Delhi / NCR",
    location: "BSZ Marg, New Delhi",
    quota: "Delhi State Quota (85%) / All India (15%)",
    categoryCutoffs: {
      "General": { openingRank: 58, closingRank: 380 },
      "EWS": { openingRank: 300, closingRank: 1100 },
      "OBC-NCL": { openingRank: 350, closingRank: 1450 },
      "SC": { openingRank: 1200, closingRank: 5200 },
      "ST": { openingRank: 3500, closingRank: 14500 }
    },
    fees: "₹4,200 / yr",
    avgPackage: "₹15.0 LPA",
    counselingBoard: "MCC Central / DU Quota",
    highlights: "Lok Nayak & GB Pant Hospitals • Top Clinical Case Diversity"
  },

  // King George's Medical University (KGMU Lucknow)
  {
    id: "cut-kgmu-lucknow",
    collegeId: "col-gov-07",
    collegeName: "King George's Medical University (KGMU Lucknow)",
    shortName: "KGMU Lucknow",
    courseName: "MBBS",
    stream: "medical",
    exam: "neet",
    type: "Government",
    city: "Uttar Pradesh",
    location: "Chowk, Lucknow",
    quota: "UP State Quota (85%) / All India (15%)",
    categoryCutoffs: {
      "General": { openingRank: 400, closingRank: 2800 },
      "EWS": { openingRank: 2500, closingRank: 4200 },
      "OBC-NCL": { openingRank: 2700, closingRank: 4900 },
      "SC": { openingRank: 15000, closingRank: 36000 },
      "ST": { openingRank: 45000, closingRank: 85000 }
    },
    fees: "₹54,000 / yr",
    avgPackage: "₹14.0 LPA",
    counselingBoard: "UPDGME / MCC Counseling",
    highlights: "Historic 4500-Bed Tertiary Hospital • Century of Medical Eminence"
  },

  // Kasturba Medical College (KMC Manipal)
  {
    id: "cut-kmc-manipal",
    collegeId: "col-pvt-08",
    collegeName: "Manipal Academy of Higher Education (MAHE) & KMC",
    shortName: "KMC Manipal",
    courseName: "MBBS (Kasturba Medical College, Manipal Campus)",
    stream: "medical",
    exam: "neet",
    type: "Private",
    city: "Karnataka",
    location: "Tiger Circle, Manipal",
    quota: "Deemed University 100% (MCC Counseling)",
    categoryCutoffs: {
      "General": { openingRank: 12000, closingRank: 52000 },
      "EWS": { openingRank: 15000, closingRank: 58000 },
      "OBC-NCL": { openingRank: 16000, closingRank: 62000 },
      "SC": { openingRank: 45000, closingRank: 140000 },
      "ST": { openingRank: 75000, closingRank: 210000 }
    },
    fees: "₹17.8 Lakhs / yr",
    avgPackage: "₹14.5 LPA",
    counselingBoard: "MCC Deemed Universities Counseling",
    highlights: "Ranked #10 Medical in India by NIRF • Global USMLE/PLAB Pathways"
  },

  // Sharda University (School of Medical Sciences & Sharda Hospital, Greater Noida)
  {
    id: "cut-sharda-mbbs",
    collegeId: "col-pvt-02",
    collegeName: "Sharda University (Knowledge Park 3, Greater Noida)",
    shortName: "Sharda Hospital & Medical College",
    courseName: "MBBS (School of Medical Sciences & Research)",
    stream: "medical",
    exam: "neet",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 32-34, Knowledge Park 3, Greater Noida",
    quota: "UP State Private Medical Counseling (UPDGME)",
    categoryCutoffs: {
      "General": { openingRank: 45000, closingRank: 165000 },
      "EWS": { openingRank: 65000, closingRank: 195000 },
      "OBC-NCL": { openingRank: 75000, closingRank: 225000 },
      "SC": { openingRank: 180000, closingRank: 480000 },
      "ST": { openingRank: 260000, closingRank: 650000 }
    },
    fees: "₹12.69 Lakhs / yr (Govt Fixed)",
    avgPackage: "₹10.5 LPA",
    counselingBoard: "UPDGME (UP Medical Counseling)",
    highlights: "900+ Bed Multi-specialty Hospital in Knowledge Park • NABH Accredited"
  },

  // Santosh Medical College (Ghaziabad / Delhi NCR)
  {
    id: "cut-santosh-mbbs",
    collegeId: "col-pvt-24",
    collegeName: "Santosh Deemed to be University & Hospital (Ghaziabad, NCR)",
    shortName: "Santosh Medical College NCR",
    courseName: "MBBS (Santosh Hospital)",
    stream: "medical",
    exam: "neet",
    type: "Private",
    city: "Delhi / NCR",
    location: "Sector 12, Pratap Vihar, Ghaziabad",
    quota: "Deemed University (MCC Central Counseling)",
    categoryCutoffs: {
      "General": { openingRank: 95000, closingRank: 380000 },
      "EWS": { openingRank: 120000, closingRank: 420000 },
      "OBC-NCL": { openingRank: 130000, closingRank: 450000 },
      "SC": { openingRank: 280000, closingRank: 680000 },
      "ST": { openingRank: 360000, closingRank: 850000 }
    },
    fees: "₹24.0 Lakhs / yr",
    avgPackage: "₹9.5 LPA",
    counselingBoard: "MCC Deemed Medical Counseling",
    highlights: "Proximity to Central Delhi • 800+ Bed Teaching Hospital"
  },

  // Subharti Medical College (Meerut, NCR)
  {
    id: "cut-subharti-mbbs",
    collegeId: "col-pvt-25",
    collegeName: "Subharti Medical College & Hospital (Swami Vivekanand Subharti Univ)",
    shortName: "Subharti Medical College Meerut",
    courseName: "MBBS (Chhatrapati Shivaji Subharti Hospital)",
    stream: "medical",
    exam: "neet",
    type: "Private",
    city: "Delhi / NCR",
    location: "Subhartipuram, NH-58, Meerut, Delhi-NCR",
    quota: "UPDGME State Counseling",
    categoryCutoffs: {
      "General": { openingRank: 65000, closingRank: 215000 },
      "EWS": { openingRank: 90000, closingRank: 260000 },
      "OBC-NCL": { openingRank: 98000, closingRank: 290000 },
      "SC": { openingRank: 220000, closingRank: 520000 },
      "ST": { openingRank: 310000, closingRank: 720000 }
    },
    fees: "₹11.85 Lakhs / yr",
    avgPackage: "₹10.2 LPA",
    counselingBoard: "UPDGME Counseling",
    highlights: "1000+ Bed Super Specialty Hospital • Delhi-Meerut RRTS Rapid Connectivity"
  },

  // Era's Lucknow Medical College (Era University)
  {
    id: "cut-era-mbbs",
    collegeId: "col-pvt-26",
    collegeName: "Era's Lucknow Medical College & Hospital (Era University)",
    shortName: "Era's Medical College Lucknow",
    courseName: "MBBS (Era University)",
    stream: "medical",
    exam: "neet",
    type: "Private",
    city: "Uttar Pradesh",
    location: "Sarfarazganj, Hardoi Road, Lucknow",
    quota: "UPDGME State Private / Minority Counseling",
    categoryCutoffs: {
      "General": { openingRank: 85000, closingRank: 320000 },
      "EWS": { openingRank: 110000, closingRank: 360000 },
      "OBC-NCL": { openingRank: 120000, closingRank: 390000 },
      "SC": { openingRank: 250000, closingRank: 620000 },
      "ST": { openingRank: 340000, closingRank: 800000 }
    },
    fees: "₹16.6 Lakhs / yr",
    avgPackage: "₹10.8 LPA",
    counselingBoard: "UPDGME State Counseling",
    highlights: "950+ Bed Multi-Specialty Hospital • Advanced Simulation & Robotic ICU"
  },

  // Dr. D.Y. Patil Medical College (Pune)
  {
    id: "cut-dyp-mbbs",
    collegeId: "col-pvt-13",
    collegeName: "Dr. D.Y. Patil Medical College, Hospital & Research Centre",
    shortName: "D.Y. Patil Medical College Pune",
    courseName: "MBBS",
    stream: "medical",
    exam: "neet",
    type: "Private",
    city: "Pune / Maharashtra",
    location: "Pimpri, Pune",
    quota: "Deemed University 100% (MCC)",
    categoryCutoffs: {
      "General": { openingRank: 120000, closingRank: 580000 },
      "EWS": { openingRank: 150000, closingRank: 620000 },
      "OBC-NCL": { openingRank: 160000, closingRank: 650000 },
      "SC": { openingRank: 320000, closingRank: 850000 },
      "ST": { openingRank: 420000, closingRank: 990000 }
    },
    fees: "₹25.0 Lakhs / yr",
    avgPackage: "₹14.0 LPA",
    counselingBoard: "MCC Deemed Universities Counseling",
    highlights: "2000+ Bed Super Specialty Hospital • Asia's Largest Robotic Surgery Training Lab"
  },

  // =========================================================================
  // 3. MBA & MANAGEMENT (CAT / XAT / CMAT / MAT / CUET-PG)
  // =========================================================================

  // Faculty of Management Studies (FMS), University of Delhi
  {
    id: "cut-fms-delhi-mba",
    collegeId: "col-gov-08",
    collegeName: "Faculty of Management Studies (FMS), University of Delhi",
    shortName: "FMS Delhi (DU)",
    courseName: "Master of Business Administration (MBA Full-Time)",
    stream: "management",
    exam: "cat",
    type: "Government",
    city: "Delhi / NCR",
    location: "Malka Ganj, North Campus, Delhi",
    quota: "All India (AI / Central University)",
    categoryCutoffs: {
      "General": { minPercentile: 98.5, targetPercentile: 99.2, openingRank: 20, closingRank: 2800 },
      "EWS": { minPercentile: 93.0, targetPercentile: 95.5, openingRank: 80, closingRank: 7000 },
      "OBC-NCL": { minPercentile: 89.0, targetPercentile: 92.0, openingRank: 100, closingRank: 11500 },
      "SC": { minPercentile: 78.0, targetPercentile: 82.0, openingRank: 150, closingRank: 26000 },
      "ST": { minPercentile: 68.0, targetPercentile: 72.0, openingRank: 200, closingRank: 42000 }
    },
    fees: "₹1.0 Lakh / yr (₹2.0 Lakhs Total)",
    avgPackage: "₹34.1 LPA",
    counselingBoard: "FMS Delhi Selection (CAT + Extempore + Personal Interview)",
    highlights: "Highest ROI in Asia • 100% Placements with Top Tier Global Investment Banks"
  },

  // Department of Management Studies (DMS), IIT Delhi
  {
    id: "cut-dms-iitd-mba",
    collegeId: "col-gov-01",
    collegeName: "Department of Management Studies (DMS), IIT Delhi",
    shortName: "DMS IIT Delhi",
    courseName: "Master of Business Administration (MBA General / Telecom)",
    stream: "management",
    exam: "cat",
    type: "Government",
    city: "Delhi / NCR",
    location: "Hauz Khas, New Delhi",
    quota: "All India (AI)",
    categoryCutoffs: {
      "General": { minPercentile: 97.0, targetPercentile: 98.5, openingRank: 50, closingRank: 4800 },
      "EWS": { minPercentile: 90.0, targetPercentile: 93.0, openingRank: 120, closingRank: 12000 },
      "OBC-NCL": { minPercentile: 86.0, targetPercentile: 89.5, openingRank: 180, closingRank: 18000 },
      "SC": { minPercentile: 72.0, targetPercentile: 76.0, openingRank: 250, closingRank: 35000 },
      "ST": { minPercentile: 60.0, targetPercentile: 65.0, openingRank: 300, closingRank: 55000 }
    },
    fees: "₹5.8 Lakhs / yr (₹11.6 Lakhs Total)",
    avgPackage: "₹25.8 LPA",
    counselingBoard: "IIT Delhi CAP & WAT-PI Selection",
    highlights: "NIRF #4 Management in India • Tech-MBA Curriculum & High Growth Leadership"
  },

  // Institute of Management Technology (IMT) Ghaziabad
  {
    id: "cut-imt-ghaziabad-pgdm",
    collegeId: "col-pvt-27",
    collegeName: "Institute of Management Technology (IMT) Ghaziabad",
    shortName: "IMT Ghaziabad",
    courseName: "Post Graduate Diploma in Management (PGDM Core / Marketing / Finance)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Delhi / NCR",
    location: "Raj Nagar, Ghaziabad, Delhi NCR",
    quota: "All India Merit (CAT / XAT)",
    categoryCutoffs: {
      "General": { minPercentile: 88.0, targetPercentile: 91.0, openingRank: 2500, closingRank: 24000 },
      "EWS": { minPercentile: 85.0, targetPercentile: 88.0, openingRank: 3500, closingRank: 28000 },
      "OBC-NCL": { minPercentile: 84.0, targetPercentile: 87.0, openingRank: 4000, closingRank: 30000 },
      "SC": { minPercentile: 75.0, targetPercentile: 80.0, openingRank: 8000, closingRank: 48000 },
      "ST": { minPercentile: 68.0, targetPercentile: 74.0, openingRank: 12000, closingRank: 65000 }
    },
    fees: "₹10.5 Lakhs / yr (₹21.0 Lakhs Total)",
    avgPackage: "₹17.35 LPA",
    counselingBoard: "IMT Selection Process (CAT / XAT + Critical Thinking & PI)",
    highlights: "India's Premier Marketing & Sales Hub • AACSB Accredited • Highest Domestic ₹65.6 LPA"
  },

  // Birla Institute of Management Technology (BIMTECH Greater Noida)
  {
    id: "cut-bimtech-pgdm",
    collegeId: "col-pvt-28",
    collegeName: "Birla Institute of Management Technology (BIMTECH Greater Noida)",
    shortName: "BIMTECH Greater Noida",
    courseName: "PGDM (International Business / Retail / BFSI / AI in Management)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 5, Knowledge Park 2, Greater Noida",
    quota: "All India Merit (CAT / XAT / CMAT / MAT)",
    categoryCutoffs: {
      "General": { minPercentile: 76.0, targetPercentile: 82.0, openingRank: 12000, closingRank: 48000 },
      "EWS": { minPercentile: 72.0, targetPercentile: 78.0, openingRank: 16000, closingRank: 58000 },
      "OBC-NCL": { minPercentile: 70.0, targetPercentile: 76.0, openingRank: 18000, closingRank: 62000 },
      "SC": { minPercentile: 60.0, targetPercentile: 68.0, openingRank: 30000, closingRank: 85000 },
      "ST": { minPercentile: 52.0, targetPercentile: 60.0, openingRank: 45000, closingRank: 110000 }
    },
    fees: "₹7.0 Lakhs / yr (₹14.0 Lakhs Total)",
    avgPackage: "₹11.2 LPA",
    counselingBoard: "BIMTECH Central Admissions (CAT / XAT / CMAT / MAT + PI)",
    highlights: "Prestigious Birla Legacy • AACSB Accredited • 100% Placements with Global Recruiters"
  },

  // School of Management, Bennett University
  {
    id: "cut-bennett-mba",
    collegeId: "col-pvt-04",
    collegeName: "Bennett University (The Times Group, Greater Noida)",
    shortName: "Bennett University",
    courseName: "MBA (FinTech, Business Analytics, Media Management, HR)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Greater Noida",
    location: "TechZone 2, Greater Noida",
    quota: "All India (CAT / XAT / NMAT / MAT / CUET-PG)",
    categoryCutoffs: {
      "General": { minPercentile: 65.0, targetPercentile: 72.0, openingRank: 25000, closingRank: 85000 },
      "EWS": { minPercentile: 62.0, targetPercentile: 68.0, openingRank: 32000, closingRank: 95000 },
      "OBC-NCL": { minPercentile: 60.0, targetPercentile: 66.0, openingRank: 36000, closingRank: 105000 },
      "SC": { minPercentile: 50.0, targetPercentile: 58.0, openingRank: 50000, closingRank: 140000 },
      "ST": { minPercentile: 45.0, targetPercentile: 52.0, openingRank: 65000, closingRank: 170000 }
    },
    fees: "₹4.25 Lakhs / yr (₹8.5 Lakhs Total)",
    avgPackage: "₹8.8 LPA",
    counselingBoard: "Bennett University Management Admissions",
    highlights: "Times Group CXO Mentorship • Global Silicon Valley & NYC Immersion"
  },

  // GL Bajaj Institute of Management & Research (GLBIMR)
  {
    id: "cut-glbajaj-pgdm",
    collegeId: "col-pvt-01",
    collegeName: "GL Bajaj Institute of Technology & Management",
    shortName: "GL Bajaj Greater Noida",
    courseName: "MBA / PGDM (Dual Specialization in Marketing, Finance, HR, IT)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 2, Knowledge Park 2, Greater Noida",
    quota: "UP State / UPTAC & All India",
    categoryCutoffs: {
      "General": { minPercentile: 60.0, targetPercentile: 68.0, openingRank: 30000, closingRank: 95000 },
      "EWS": { minPercentile: 58.0, targetPercentile: 64.0, openingRank: 38000, closingRank: 110000 },
      "OBC-NCL": { minPercentile: 56.0, targetPercentile: 62.0, openingRank: 42000, closingRank: 120000 },
      "SC": { minPercentile: 48.0, targetPercentile: 54.0, openingRank: 60000, closingRank: 155000 },
      "ST": { minPercentile: 42.0, targetPercentile: 48.0, openingRank: 75000, closingRank: 185000 }
    },
    fees: "₹1.45 Lakhs / yr (₹2.9 Lakhs Total)",
    avgPackage: "₹7.8 LPA",
    counselingBoard: "UPTAC MBA Counseling / AKTU & Direct Merit",
    highlights: "AICTE Approved • Prime Knowledge Park Location • 300+ Recruiters"
  },

  // Galgotias University - School of Business
  {
    id: "cut-galgotias-mba",
    collegeId: "col-pvt-02",
    collegeName: "Galgotias University (Greater Noida)",
    shortName: "Galgotias University",
    courseName: "MBA (Logistics & Supply Chain, Aviation, Financial Analytics)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Greater Noida",
    location: "Yamuna Expressway, Greater Noida",
    quota: "All India Merit (CAT / MAT / CMAT / CUET-PG)",
    categoryCutoffs: {
      "General": { minPercentile: 58.0, targetPercentile: 65.0, openingRank: 35000, closingRank: 105000 },
      "EWS": { minPercentile: 55.0, targetPercentile: 62.0, openingRank: 45000, closingRank: 120000 },
      "OBC-NCL": { minPercentile: 54.0, targetPercentile: 60.0, openingRank: 48000, closingRank: 130000 },
      "SC": { minPercentile: 45.0, targetPercentile: 52.0, openingRank: 70000, closingRank: 165000 },
      "ST": { minPercentile: 40.0, targetPercentile: 48.0, openingRank: 85000, closingRank: 195000 }
    },
    fees: "₹1.75 Lakhs / yr (₹3.5 Lakhs Total)",
    avgPackage: "₹6.8 LPA",
    counselingBoard: "Galgotias University Admissions & Counseling",
    highlights: "KPMG Industry Certifications • Top MNC Corporate Recruitment"
  },

  // Sharda School of Business Studies (SSBS)
  {
    id: "cut-sharda-mba",
    collegeId: "col-pvt-03",
    collegeName: "Sharda University (Knowledge Park 3, Greater Noida)",
    shortName: "Sharda University",
    courseName: "MBA in International Business & Marketing Analytics",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Greater Noida",
    location: "Plot No. 32-34, Knowledge Park 3, Greater Noida",
    quota: "All India & International",
    categoryCutoffs: {
      "General": { minPercentile: 55.0, targetPercentile: 62.0, openingRank: 40000, closingRank: 115000 },
      "EWS": { minPercentile: 52.0, targetPercentile: 58.0, openingRank: 50000, closingRank: 130000 },
      "OBC-NCL": { minPercentile: 50.0, targetPercentile: 56.0, openingRank: 55000, closingRank: 140000 },
      "SC": { minPercentile: 42.0, targetPercentile: 50.0, openingRank: 75000, closingRank: 175000 },
      "ST": { minPercentile: 38.0, targetPercentile: 45.0, openingRank: 90000, closingRank: 205000 }
    },
    fees: "₹2.2 Lakhs / yr (₹4.4 Lakhs Total)",
    avgPackage: "₹6.5 LPA",
    counselingBoard: "SUAT / CAT / MAT / CMAT Selection",
    highlights: "Diverse International Cohort from 85+ Countries • Strong Alumni Network"
  },

  // KIIT School of Management (KSOM Bhubaneswar)
  {
    id: "cut-kiit-ksom-mba",
    collegeId: "col-pvt-19",
    collegeName: "Kalinga Institute of Industrial Technology (KIIT Deemed to be University)",
    shortName: "KIIT University",
    courseName: "MBA (Business Analytics, Supply Chain, Healthcare Management)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Bhubaneswar / Odisha",
    location: "Patia, Bhubaneswar",
    quota: "All India Merit (KIITEE / CAT / XAT / CMAT)",
    categoryCutoffs: {
      "General": { minPercentile: 72.0, targetPercentile: 78.0, openingRank: 18000, closingRank: 58000 },
      "EWS": { minPercentile: 68.0, targetPercentile: 74.0, openingRank: 24000, closingRank: 70000 },
      "OBC-NCL": { minPercentile: 66.0, targetPercentile: 72.0, openingRank: 28000, closingRank: 78000 },
      "SC": { minPercentile: 55.0, targetPercentile: 62.0, openingRank: 45000, closingRank: 120000 },
      "ST": { minPercentile: 48.0, targetPercentile: 55.0, openingRank: 60000, closingRank: 150000 }
    },
    fees: "₹8.0 Lakhs / yr (₹16.0 Lakhs Total)",
    avgPackage: "₹9.5 LPA",
    counselingBoard: "KIIT School of Management Admissions",
    highlights: "Institution of Eminence • 100% Placement with Super Dream Offers"
  },

  // UPES School of Business, Dehradun
  {
    id: "cut-upes-mba",
    collegeId: "col-pvt-20",
    collegeName: "UPES Dehradun (University of Petroleum and Energy Studies)",
    shortName: "UPES Dehradun",
    courseName: "MBA (Oil & Gas, Power Management, Logistics & Aviation)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Dehradun / Uttarakhand",
    location: "Bidholi, Dehradun",
    quota: "All India (UPESMET / CAT / MAT / CMAT)",
    categoryCutoffs: {
      "General": { minPercentile: 68.0, targetPercentile: 74.0, openingRank: 22000, closingRank: 68000 },
      "EWS": { minPercentile: 64.0, targetPercentile: 70.0, openingRank: 28000, closingRank: 80000 },
      "OBC-NCL": { minPercentile: 62.0, targetPercentile: 68.0, openingRank: 32000, closingRank: 90000 },
      "SC": { minPercentile: 52.0, targetPercentile: 58.0, openingRank: 52000, closingRank: 135000 },
      "ST": { minPercentile: 45.0, targetPercentile: 52.0, openingRank: 70000, closingRank: 165000 }
    },
    fees: "₹7.6 Lakhs / yr (₹15.2 Lakhs Total)",
    avgPackage: "₹8.8 LPA",
    counselingBoard: "UPES Management Counseling",
    highlights: "Top Domain-Specific Energy & Aviation MBA • Schlumberger, Shell & Boeing Recruiters"
  },

  // Chitkara Business School
  {
    id: "cut-chitkara-mba",
    collegeId: "col-pvt-21",
    collegeName: "Chitkara University (Punjab / Chandigarh)",
    shortName: "Chitkara University",
    courseName: "MBA (Healthcare Management, Business Analytics, Banking & FinTech)",
    stream: "management",
    exam: "cat",
    type: "Private",
    city: "Chandigarh / Punjab",
    location: "Chandigarh-Patiala National Highway",
    quota: "All India Merit",
    categoryCutoffs: {
      "General": { minPercentile: 60.0, targetPercentile: 66.0, openingRank: 32000, closingRank: 95000 },
      "EWS": { minPercentile: 56.0, targetPercentile: 62.0, openingRank: 40000, closingRank: 110000 },
      "OBC-NCL": { minPercentile: 55.0, targetPercentile: 60.0, openingRank: 44000, closingRank: 120000 },
      "SC": { minPercentile: 46.0, targetPercentile: 52.0, openingRank: 68000, closingRank: 160000 },
      "ST": { minPercentile: 40.0, targetPercentile: 46.0, openingRank: 82000, closingRank: 190000 }
    },
    fees: "₹3.3 Lakhs / yr (₹6.6 Lakhs Total)",
    avgPackage: "₹7.2 LPA",
    counselingBoard: "Chitkara Business School Admissions",
    highlights: "AACSB Alliance Member • 100% Placement Assurance with Top BFSI Brands"
  }
];

