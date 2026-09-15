export const COLLEGES = [
  // ==========================================
  // GOVERNMENT UNIVERSITIES & COLLEGES
  // ==========================================
  {
    id: "col-gov-01",
    name: "Indian Institute of Technology (IIT) Delhi",
    shortName: "IIT Delhi",
    type: "Government",
    category: "Engineering & Tech",
    disciplines: ["engineering", "design", "sciences"],
    city: "Delhi / NCR",
    location: "Hauz Khas, New Delhi",
    nirfRank: "NIRF #2 Engineering",
    accreditation: "Institute of National Importance",
    rating: "4.9",
    reviewsCount: 1420,
    established: "1961",
    avgPackage: "₹25.8 LPA",
    highestPackage: "₹2.4 CPA",
    fees: "₹2.2 Lakhs / yr",
    entranceExams: ["JEE Advanced", "GATE", "CEED"],
    streams: ["Computer Science", "Electrical Engineering", "Mechanical", "AI & Robotics", "Biotechnology", "Industrial Design"],
    image: "assets/colleges/col-gov-01.jpg",
    highlights: ["100% Placement Record", "Global Research Labs", "World-class Incubation Centre"],
    description: "Ranked among India's most prestigious technology institutes, renowned for supreme faculty, cutting-edge research, and top global recruiter networks.",
    courses: [
      {
        id: "iitd-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,20,000 / Year (₹8.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,00,000/yr • Hostel & Campus: ₹20,000/yr (100% tuition waiver for SC/ST/PH)",
        eligibility: "Passed 10+2 with Physics, Chemistry & Mathematics with top 20 percentile or min 75% marks. Must qualify JEE Main and secure top rank in JEE Advanced.",
        entranceExam: "JEE Advanced (JoSAA Counseling)",
        seats: "120 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Algorithms & Complexity", "Artificial Intelligence", "Systems Architecture", "Distributed Networks"],
        careerScope: "Avg Package ₹28.5 LPA. Top Recruiters: Google, Microsoft, Apple, Goldman Sachs, Uber."
      },
      {
        id: "iitd-btech-ee",
        name: "B.Tech in Electrical Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,20,000 / Year (₹8.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,00,000/yr • Hostel & Campus: ₹20,000/yr",
        eligibility: "10+2 with min 75% marks in PCM. Rank in JEE Advanced through JoSAA counseling.",
        entranceExam: "JEE Advanced",
        seats: "140 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["VLSI & Microelectronics", "Signal Processing", "Power Systems", "Control & Automation"],
        careerScope: "Avg Package ₹24.2 LPA. Top Recruiters: Texas Instruments, Qualcomm, Intel, Nvidia."
      },
      {
        id: "iitd-mtech-ai",
        name: "M.Tech in Machine Intelligence & Data Science (MINDS)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹55,000 / Year (₹1.10 Lakhs Total)",
        feeBreakdown: "Tuition: ₹35,000/yr • Institute Amenities: ₹20,000/yr (GATE Stipend ₹12,400/mo provided)",
        eligibility: "B.Tech/BE in CS/IT/ECE/EE or M.Sc in Mathematics/Statistics with min 60% marks (6.0 CGPA) + Valid GATE CS/DA score.",
        entranceExam: "GATE (COAP Counseling)",
        seats: "45 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"],
        careerScope: "Avg Package ₹26.5 LPA. Top Recruiters: Amazon AWS, Meta, Adobe Research, Microsoft Research."
      },
      {
        id: "iitd-bdes",
        name: "Bachelor of Design (B.Des)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,20,000 / Year (₹8.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,00,000/yr • Studio & Lab: ₹20,000/yr",
        eligibility: "10+2 from any stream (Science, Commerce, Arts) with min 60% marks. Must qualify UCEED examination.",
        entranceExam: "UCEED",
        seats: "30 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Industrial Product Design", "UI/UX & Interaction Design", "Visual Communication"],
        careerScope: "Avg Package ₹19.0 LPA. Top Recruiters: Samsung Design, Tata Motors, Google UX."
      },
      {
        id: "iitd-dms-mba",
        name: "Master of Business Administration (MBA General / Telecom)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹5,80,000 / Year (₹11.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹5,40,000/yr • Examination & Amenities: ₹40,000/yr",
        eligibility: "Bachelor's degree in any engineering discipline (B.Tech/BE) or Master's in physical sciences/mathematics with minimum 60% marks (6.0 CGPA). Valid CAT score followed by WAT & Personal Interview.",
        entranceExam: "CAT (Common Admission Test conducted by IIMs)",
        seats: "115 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Finance & FinTech", "Information Technology & Analytics", "Marketing Management", "Operations & Supply Chain", "Telecom Systems"],
        careerScope: "Avg Package ₹25.8 LPA. Highest Package ₹41.1 LPA. Top Recruiters: McKinsey, BCG, Bain, Microsoft, Amazon, Barclays, PwC."
      }
    ]
  },
  {
    id: "col-gov-02",
    name: "All India Institute of Medical Sciences (AIIMS) New Delhi",
    shortName: "AIIMS Delhi",
    type: "Government",
    category: "Medical & Healthcare",
    disciplines: ["medical"],
    city: "Delhi / NCR",
    location: "Ansari Nagar, New Delhi",
    nirfRank: "NIRF #1 Medical in India",
    accreditation: "Autonomous Medical Institute of National Importance",
    rating: "5.0",
    reviewsCount: 2310,
    established: "1956",
    avgPackage: "₹18.5 LPA",
    highestPackage: "₹45 LPA",
    fees: "₹1,628 / yr (Govt Subsidized)",
    entranceExams: ["NEET UG", "INI CET"],
    streams: ["MBBS", "B.Sc Nursing", "MD / MS", "M.Ch Super Speciality", "Paramedical Sciences"],
    image: "assets/colleges/col-gov-02.jpg",
    highlights: ["Super-specialty Hospital", "Subsidized Education", "Global Clinical Rotations"],
    description: "The crown jewel of Indian healthcare education offering unparalleled hands-on clinical exposure, subsidized tuition, and premier healthcare facilities.",
    courses: [
      {
        id: "aiims-mbbs",
        name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Paid Internship)",
        fees: "₹1,628 / Year (₹5,856 Total for Entire 5.5 Years)",
        feeBreakdown: "Subsidized Govt Tuition: ₹1,350 • Hostel & Mess Security: ₹278",
        eligibility: "Passed 10+2 or equivalent with English, Physics, Chemistry and Biology/Biotechnology with min 60% aggregate (50% for SC/ST). Must be at least 17 years of age on Dec 31 of admission year. AIR 1-55 in NEET-UG.",
        entranceExam: "NEET UG (MCC Central All India Counseling)",
        seats: "132 Seats",
        mode: "Full-Time On-Campus (Residential)",
        specializations: ["Clinical Medicine", "General Surgery", "Pediatrics", "Cardiology", "Neurology Rotations"],
        careerScope: "100% placement / residency placement. Avg starting resident stipend ₹1.1 Lakhs/mo at AIIMS."
      },
      {
        id: "aiims-bsc-nursing",
        name: "B.Sc (Hons) Nursing",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,200 / Year (₹4,800 Total)",
        feeBreakdown: "Tuition: ₹600/yr • Clinical Lab & Library: ₹600/yr",
        eligibility: "Female candidates who passed 10+2 with English, Physics, Chemistry, and Biology with minimum 55% aggregate marks (50% for SC/ST).",
        entranceExam: "AIIMS B.Sc Nursing Entrance Exam",
        seats: "96 Seats",
        mode: "Full-Time Residential",
        specializations: ["Critical Care Nursing", "Surgical Nursing", "Pediatric Intensive Care", "Community Health"],
        careerScope: "Direct recruitment as Nursing Officer in central government hospitals with initial salary ₹75,000/mo."
      },
      {
        id: "aiims-md-ms",
        name: "MD / MS Postgraduate Medical Specialization",
        degree: "Postgraduate (PG)",
        duration: "3 Years (6 Semesters)",
        fees: "₹2,027 / Year (₹6,081 Total)",
        feeBreakdown: "Tuition: ₹1,500/yr • Library & Gymkhana: ₹527/yr (Monthly Junior Resident Stipend ₹1,10,000/mo)",
        eligibility: "MBBS Degree recognized by NMC with completion of 1-year rotatory internship + Valid INI-CET score.",
        entranceExam: "INI CET (Institute of National Importance Combined Entrance Test)",
        seats: "180 Seats",
        mode: "Full-Time Hospital Residency",
        specializations: ["Internal Medicine", "General Surgery", "Radiodiagnosis", "Anesthesiology", "Pediatrics"],
        careerScope: "Premier clinical practice in top global hospitals, senior residency, and super-specialty fellowships."
      }
    ]
  },
  {
    id: "col-gov-03",
    name: "Delhi University - Shri Ram College of Commerce (SRCC)",
    shortName: "SRCC, DU",
    type: "Government",
    category: "Management & Commerce",
    disciplines: ["management"],
    city: "Delhi / NCR",
    location: "North Campus, Delhi",
    nirfRank: "NIRF #1 Commerce",
    accreditation: "NAAC A++ Grade",
    rating: "4.9",
    reviewsCount: 980,
    established: "1926",
    avgPackage: "₹13.2 LPA",
    highestPackage: "₹35 LPA",
    fees: "₹32,000 / yr",
    entranceExams: ["CUET UG"],
    streams: ["B.Com (Hons)", "BA (Hons) Economics", "PGD Global Business Ops", "Finance & Analytics"],
    image: "assets/colleges/col-gov-03.jpg",
    highlights: ["Top Investment Banking Recruits", "Century of Alumni Network", "DU North Campus Hub"],
    description: "India's premier commerce institution feeding top global financial institutions, consulting firms, and premier MBA schools worldwide.",
    courses: [
      {
        id: "srcc-bcom-hons",
        name: "B.Com (Honours)",
        degree: "Undergraduate (UG)",
        duration: "3 Years (4th Year Honours with Research optional)",
        fees: "₹32,000 / Year (₹96,000 Total for 3 Years)",
        feeBreakdown: "Tuition: ₹18,000/yr • College Facilities & Society Fund: ₹14,000/yr",
        eligibility: "Passed 10+2 from CBSE or recognized board with Mathematics/Applied Mathematics or Accountancy with min 60% aggregate + High CUET-UG percentile score.",
        entranceExam: "CUET UG (DU CSAS Portal Counseling)",
        seats: "626 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Corporate Accounting", "Financial Markets & Fintech", "Direct & Indirect Taxation", "Investment Banking"],
        careerScope: "Avg Package ₹13.8 LPA. Top Recruiters: McKinsey, BCG, Bain & Co, Goldman Sachs, Morgan Stanley, Deloitte."
      },
      {
        id: "srcc-ba-econ",
        name: "B.A. (Honours) Economics",
        degree: "Undergraduate (UG)",
        duration: "3 Years (4th Year Research optional)",
        fees: "₹32,000 / Year (₹96,000 Total for 3 Years)",
        feeBreakdown: "Tuition: ₹18,000/yr • Amenities & Computer Labs: ₹14,000/yr",
        eligibility: "Passed 10+2 with Mathematics as a compulsory subject with minimum 60% marks + Valid CUET-UG score.",
        entranceExam: "CUET UG",
        seats: "155 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Micro & Macroeconomics", "Econometrics & Quantitative Analysis", "Development Economics", "Monetary Policy"],
        careerScope: "Avg Package ₹14.5 LPA. Feeder program into top IIMs, LSE, Harvard, and global economic think-tanks."
      },
      {
        id: "srcc-pgdgbo",
        name: "Post Graduate Diploma in Global Business Operations (GBO)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,60,000 / Year (₹3.20 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,40,000/yr • Examination & Library: ₹20,000/yr",
        eligibility: "Bachelor's Degree in any discipline from a recognized University with minimum 50% marks (45% for SC/ST/OBC).",
        entranceExam: "SRCC GBO Online Entrance Test + Group Discussion & Personal Interview",
        seats: "90 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["International Trade & Logistics", "Global Financial Management", "Cross-Border Marketing", "Supply Chain Analytics"],
        careerScope: "Avg Package ₹11.2 LPA. Top Recruiters: DHL, Maersk, EY, KPMG, Amazon, HDFC Bank."
      }
    ]
  },
  {
    id: "col-gov-04",
    name: "Delhi Technological University (DTU / DCE)",
    shortName: "DTU Delhi",
    type: "Government",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management"],
    city: "Delhi / NCR",
    location: "Rohini, Delhi",
    nirfRank: "NIRF Top 25 Engineering",
    accreditation: "State Govt University, NAAC A",
    rating: "4.7",
    reviewsCount: 1650,
    established: "1941",
    avgPackage: "₹15.4 LPA",
    highestPackage: "₹1.8 CPA",
    fees: "₹1.9 Lakhs / yr",
    entranceExams: ["JEE Main", "JAC Delhi", "CAT"],
    streams: ["Computer Engineering", "IT", "Software Engg", "ECE", "Mathematics & Computing", "MBA Tech"],
    image: "assets/colleges/col-gov-04.jpg",
    highlights: ["Exceptional Coding Culture", "Sprawling 164-Acre Campus", "Top Tier MNC Recruits"],
    description: "Formerly Delhi College of Engineering, DTU is an engineering powerhouse producing industry leaders, tech founders, and Silicon Valley engineers.",
    courses: [
      {
        id: "dtu-btech-coe",
        name: "B.Tech in Computer Engineering (COE)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,90,000 / Year (₹7.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,50,000/yr • University Amenities & Labs: ₹40,000/yr",
        eligibility: "Passed 10+2 with min 60% aggregate marks in Physics, Chemistry, and Mathematics. 85% seats reserved for Delhi region candidates via JAC Delhi counseling.",
        entranceExam: "JEE Main (JAC Delhi Counseling)",
        seats: "480 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Full Stack Development", "Cloud & High Performance Computing", "Cyber Security", "Machine Learning"],
        careerScope: "Avg Package ₹21.5 LPA. Top Recruiters: Google, Microsoft, Adobe, Atlassian, Uber, Sprinklr."
      },
      {
        id: "dtu-btech-it",
        name: "B.Tech in Information Technology (IT)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,90,000 / Year (₹7.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,50,000/yr • University Amenities & Labs: ₹40,000/yr",
        eligibility: "10+2 with PCM minimum 60% marks from recognized board. Valid JEE Main rank.",
        entranceExam: "JEE Main (JAC Delhi)",
        seats: "180 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Software Engineering", "Big Data Analytics", "Distributed Systems", "Web 3.0"],
        careerScope: "Avg Package ₹19.8 LPA. Top Recruiters: Amazon, Flipkart, Goldman Sachs, Tower Research."
      },
      {
        id: "dtu-mba",
        name: "MBA (Delhi School of Management - DSM)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,65,000 / Year (₹3.30 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,40,000/yr • Examination: ₹25,000/yr",
        eligibility: "Graduation degree with min 60% marks in any discipline from recognized university + CAT or MAT scorecard.",
        entranceExam: "CAT / MAT + Personal Interview",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Information Technology Management", "Supply Chain Management", "Finance", "Marketing"],
        careerScope: "Avg Package ₹10.5 LPA. Top Recruiters: KPMG, EY, Infosys Consulting, ICICI Bank."
      }
    ]
  },
  {
    id: "col-gov-05",
    name: "National Law University (NLU) Delhi",
    shortName: "NLU Delhi",
    type: "Government",
    category: "Law & Legal Studies",
    disciplines: ["law"],
    city: "Delhi / NCR",
    location: "Dwarka, New Delhi",
    nirfRank: "NIRF #2 Law in India",
    accreditation: "State Law University, BCI Approved",
    rating: "4.8",
    reviewsCount: 620,
    established: "2008",
    avgPackage: "₹16.0 LPA",
    highestPackage: "₹28 LPA",
    fees: "₹1.85 Lakhs / yr",
    entranceExams: ["AILET"],
    streams: ["BA LLB (Hons)", "LLM", "Ph.D in Law", "Corporate & Intellectual Property Law"],
    image: "assets/colleges/col-gov-05.jpg",
    highlights: ["Supreme Court Proximity", "Top Magic Circle Firms", "International Moot Courts"],
    description: "A frontrunner in Indian legal education with state-of-the-art moot courts, supreme court clerkship placements, and corporate law recruiters.",
    courses: [
      {
        id: "nlud-ballb-hons",
        name: "B.A. LL.B. (Honours) 5-Year Integrated",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹1,85,000 / Year (₹9.25 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,20,000/yr • Campus Facilities, Library & Moot Court: ₹65,000/yr",
        eligibility: "Senior Secondary (10+2) with not less than 45% aggregate marks (40% for SC/ST/PwD). Selection solely on the basis of AILET merit rank.",
        entranceExam: "AILET (All India Law Entrance Test)",
        seats: "123 Seats",
        mode: "Full-Time Residential (On-Campus)",
        specializations: ["Constitutional Law", "Corporate & M&A Law", "Intellectual Property Rights", "International Human Rights"],
        careerScope: "Avg Package ₹16.5 LPA. Placements at Shardul Amarchand Mangaldas, Trilegal, Cyril Amarchand Mangaldas, AZB & Partners, and Supreme Court Clerkships."
      },
      {
        id: "nlud-llm",
        name: "LL.M. (Master of Laws)",
        degree: "Postgraduate (PG)",
        duration: "1 Year (2 Semesters)",
        fees: "₹1,40,000 / Year",
        feeBreakdown: "Tuition: ₹95,000 • Library & Electronic Databases: ₹45,000",
        eligibility: "LL.B. or equivalent degree with minimum 50% aggregate marks (45% for SC/ST/PwD) + Valid AILET PG score.",
        entranceExam: "AILET PG",
        seats: "80 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Criminal Law & Forensic Justice", "Corporate & Commercial Law", "Intellectual Property & Technology Law"],
        careerScope: "Senior corporate counsel roles, judicial services, think-tanks, and academia."
      }
    ]
  },

  // ==========================================
  // PRIVATE UNIVERSITIES & COLLEGES
  // ==========================================
  {
    id: "col-pvt-01",
    name: "Galgotias University (Greater Noida)",
    shortName: "Galgotias University",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "law"],
    city: "Greater Noida",
    location: "Sector 17A, Yamuna Expressway (near KP 2 & 3)",
    nirfRank: "NAAC A+ Accredited",
    accreditation: "UGC, AICTE, BCI Approved",
    rating: "4.7",
    reviewsCount: 3450,
    established: "2011",
    avgPackage: "₹6.8 LPA",
    highestPackage: "₹1.5 CPA",
    fees: "₹1.6 Lakhs / yr",
    entranceExams: ["JEE Main", "CUET", "GUMET"],
    streams: ["B.Tech CSE / AI / Cloud", "BBA / MBA", "BCA", "B.Pharm", "BA LLB / BBA LLB"],
    image: "assets/colleges/col-pvt-01.jpg",
    highlights: ["850+ Recruiter Visits", "52-Acre Modern Smart Campus", "Proximity to Noida IT Hub"],
    description: "One of North India's fastest-growing private universities with modern innovation labs, top corporate tie-ups, and vibrant campus life.",
    courses: [
      {
        id: "gu-btech-cse",
        name: "B.Tech in Computer Science & Engineering (Core / AI / Cloud)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,64,000 / Year (₹6.56 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,49,000/yr • Exam & Resource Fee: ₹15,000/yr",
        eligibility: "Passed 10+2 with minimum 60% marks in PCM (Physics, Chemistry, Mathematics). Valid score in JEE Main, CUET-UG or Galgotias University Entrance (GUMET).",
        entranceExam: "JEE Main / CUET / GUMET",
        seats: "720 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Cloud Computing & Virtualization", "Data Analytics", "Cyber Security"],
        careerScope: "Avg Package ₹7.2 LPA. Top Recruiters: Infosys, Cognizant, Wipro, Capgemini, TCS Digital."
      },
      {
        id: "gu-bba",
        name: "Bachelor of Business Administration (BBA)",
        degree: "Undergraduate (UG)",
        duration: "3 Years (6 Semesters)",
        fees: "₹1,05,000 / Year (₹3.15 Lakhs Total)",
        feeBreakdown: "Tuition: ₹95,000/yr • Exam Fee: ₹10,000/yr",
        eligibility: "Passed 10+2 from recognized board in any stream with minimum 50% aggregate marks.",
        entranceExam: "CUET / Merit / GUMET",
        seats: "240 Seats",
        mode: "Full-Time Regular",
        specializations: ["Digital Marketing", "Banking & Financial Services", "Human Resource Management"],
        careerScope: "Avg Package ₹5.5 LPA. Recruiters: HDFC Bank, ICICI Bank, Byju's, Naukri.com."
      },
      {
        id: "gu-mba",
        name: "Master of Business Administration (MBA Dual Specialization)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,60,000 / Year (₹3.20 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,45,000/yr • Exam & Amenities: ₹15,000/yr",
        eligibility: "Graduation with minimum 55% marks in any discipline from a recognized University. CAT/MAT/CUET-PG score preferred.",
        entranceExam: "CAT / MAT / CMAT / GUMET",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Finance & Investment Banking", "Logistics & Supply Chain", "Marketing", "Business Analytics"],
        careerScope: "Avg Package ₹7.8 LPA. Top Recruiters: Deloitte, KPMG, Tech Mahindra, Bajaj Finserv."
      },
      {
        id: "gu-ballb",
        name: "B.A. LL.B. (Honours) 5-Year Integrated Law",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹1,20,000 / Year (₹6.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,05,000/yr • Bar Council & Library: ₹15,000/yr",
        eligibility: "Passed 10+2 with min 50% aggregate marks (45% for SC/ST). CLAT/LSAT score or Galgotias Law Entrance.",
        entranceExam: "CLAT / LSAT / GUMET Law",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Corporate Law", "Intellectual Property Law", "Cyber Law", "Constitutional Litigation"],
        careerScope: "Avg Package ₹6.2 LPA. Opportunities in corporate legal cells, law firms, and judicial services."
      }
    ]
  },
  {
    id: "col-pvt-02",
    name: "Sharda University (Knowledge Park 3, Greater Noida)",
    shortName: "Sharda University",
    type: "Private",
    category: "Medical & Healthcare",
    disciplines: ["medical", "engineering", "management", "law", "design"],
    city: "Greater Noida",
    location: "Plot No. 32-34, Knowledge Park 3, Greater Noida",
    nirfRank: "NAAC A+ Grade",
    accreditation: "UGC, NMC, BCI, COA Approved",
    rating: "4.6",
    reviewsCount: 2980,
    established: "2009",
    avgPackage: "₹7.2 LPA",
    highestPackage: "₹1.0 CPA",
    fees: "₹1.8 Lakhs - ₹12 Lakhs / yr",
    entranceExams: ["NEET UG", "JEE Main", "SUAT"],
    streams: ["MBBS (Sharda Hospital)", "B.Tech CSE", "B.Arch / Design", "MBA", "B.Sc Nursing"],
    image: "assets/colleges/col-pvt-02.jpg",
    highlights: ["900+ Bed Multi-specialty Hospital", "Students from 85+ Countries", "In Knowledge Park Hub"],
    description: "A truly global university located in Knowledge Park 3 featuring a 900+ bed teaching hospital, world-class dental, medical, and engineering colleges.",
    courses: [
      {
        id: "su-mbbs",
        name: "MBBS (School of Medical Sciences & Sharda Hospital)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Compulsory Rotating Internship)",
        fees: "₹12,69,319 / Year (Govt Mandated Tuition)",
        feeBreakdown: "Tuition: ₹12.69 Lakhs/yr • Security Deposit: ₹3.0 Lakhs (Refundable) • Hostel & Mess: ₹1.75 Lakhs/yr",
        eligibility: "Passed 10+2 / Intermediate with minimum 50% aggregate marks in Physics, Chemistry & Biology/Biotechnology and English. Must be at least 17 years old on Dec 31 of admission year. Qualified NEET-UG with valid UP DGME counseling rank.",
        entranceExam: "NEET UG (UPDGME State Counseling)",
        seats: "150 Seats",
        mode: "Full-Time Residential (On-Campus Hospital)",
        specializations: ["Clinical Medicine", "General Surgery", "Pediatrics", "Obstetrics & Gynecology", "Orthopedics"],
        careerScope: "100% internship placement at Sharda 900+ bed NABH/NABL hospital with hands-on patient OPD/IPD rotations."
      },
      {
        id: "su-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,20,000 / Year (₹8.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,05,000/yr • Examination & Registration: ₹15,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate marks in Physics, Mathematics as compulsory subjects, and Chemistry/CS. Valid score in JEE Main or Sharda University Admission Test (SUAT).",
        entranceExam: "JEE Main / SUAT / CUET-UG",
        seats: "420 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Cyber Security & Forensics", "Cloud Computing & Virtualization", "Data Science"],
        careerScope: "Avg Package ₹7.8 LPA. Top Recruiters: Amazon, Wipro, TCS, Cognizant, NTT Data, Sleepwell."
      },
      {
        id: "su-btech-aiml",
        name: "B.Tech in Artificial Intelligence & Machine Learning",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,25,000 / Year (₹9.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,10,000/yr • AI Lab & Exam: ₹15,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate in PCM. Valid score in SUAT or JEE Main.",
        entranceExam: "SUAT / JEE Main",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Neural Networks & Deep Learning", "Robotics & Computer Vision", "Natural Language Processing", "Edge AI"],
        careerScope: "Avg Package ₹8.5 LPA. Recruiters: Tech Mahindra, L&T Infotech, IBM, Infosys."
      },
      {
        id: "su-mba",
        name: "Master of Business Administration (MBA Dual Specialization)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹3,75,000 / Year (₹7.50 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,50,000/yr • Industry Immersion & Exam: ₹25,000/yr",
        eligibility: "Bachelor's degree in any discipline with minimum 50% aggregate marks from a recognized university. Valid score in CAT/MAT/XAT/SUAT followed by Group Discussion and Personal Interview.",
        entranceExam: "CAT / MAT / XAT / SUAT + GD-PI",
        seats: "180 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Marketing Management", "Human Resource Management", "Financial Services", "International Business", "Business Analytics"],
        careerScope: "Avg Package ₹8.2 LPA. Top Recruiters: Deloitte, KPMG, ICICI Securities, Byju's, Axis Bank."
      },
      {
        id: "su-barch",
        name: "Bachelor of Architecture (B.Arch - Council of Architecture Approved)",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹2,10,000 / Year (₹10.50 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,95,000/yr • Architectural Studio & Workshops: ₹15,000/yr",
        eligibility: "Passed 10+2 with 50% marks in Physics, Chemistry & Mathematics and also 50% aggregate in 10+2. Must have qualified National Aptitude Test in Architecture (NATA).",
        entranceExam: "NATA (National Aptitude Test in Architecture)",
        seats: "80 Seats",
        mode: "Full-Time Regular",
        specializations: ["Sustainable Architecture", "Urban Planning & Landscape", "Interior Architecture"],
        careerScope: "High placement rate in leading architectural firms, real estate infrastructure developers, and urban planning boards."
      },
      {
        id: "su-bsc-nursing",
        name: "B.Sc Nursing (Sharda School of Nursing Science)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,85,000 / Year (₹7.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,70,000/yr • Clinical Lab & Training: ₹15,000/yr",
        eligibility: "Passed 10+2 with Science (PCB) and English Core/Elective with aggregate of 45% marks from recognized board. Minimum age 17 years.",
        entranceExam: "SUAT / State Nursing Entrance",
        seats: "100 Seats",
        mode: "Full-Time Residential (Hospital Affiliated)",
        specializations: ["Obstetrics & Gynecological Nursing", "Child Health Nursing", "Medical Surgical Care", "Critical ICU Nursing"],
        careerScope: "Direct nursing recruitment at Sharda Hospital, Fortis, Max, Apollo, and NHS UK migration programs."
      }
    ]
  },
  {
    id: "col-pvt-03",
    name: "Bennett University (The Times Group, Greater Noida)",
    shortName: "Bennett University",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "law"],
    city: "Greater Noida",
    location: "Plot Nos 8-11, TechZone 2, Greater Noida",
    nirfRank: "Times Group Backed",
    accreditation: "UGC Recognized, AICTE, BCI Approved",
    rating: "4.8",
    reviewsCount: 1840,
    established: "2016",
    avgPackage: "₹11.1 LPA",
    highestPackage: "₹1.2 CPA",
    fees: "₹3.6 Lakhs / yr",
    entranceExams: ["JEE Main", "SAT", "CUET"],
    streams: ["B.Tech CSE / AI & ML", "BBA (Fintech & Marketing)", "BA Journalism", "BBA LLB (Hons)"],
    image: "assets/colleges/col-pvt-03.jpg",
    highlights: ["Times Group Media Advantage", "Leading CxO Mentorship", "Silicon Valley Internships"],
    description: "Founded by The Times Group, Bennett University delivers Ivy-League inspired curriculum, high average placement packages, and CXO mentorship.",
    courses: [
      {
        id: "bu-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,80,000 / Year (₹15.20 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,50,000/yr • Academic Support & Lab: ₹30,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate marks in Physics & Mathematics as compulsory subjects, plus Chemistry/CS. Valid JEE Main percentile (>= 75 percentile) or SAT score (>= 1200) or Bennett Entrance.",
        entranceExam: "JEE Main / SAT / Bennett Entrance Test",
        seats: "480 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Data Science", "Cloud Computing & DevOps", "Cyber Security", "Blockchain & Web3", "Gaming & Augmented Reality"],
        careerScope: "Avg Package ₹11.1 LPA (Highest ₹1.2 CPA). Top Recruiters: Microsoft, Amazon, Adobe, Google, Cisco, Goldman Sachs."
      },
      {
        id: "bu-bba",
        name: "BBA (FinTech, Business Analytics & Digital Marketing)",
        degree: "Undergraduate (UG)",
        duration: "3 Years (6 Semesters)",
        fees: "₹2,75,000 / Year (₹8.25 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,50,000/yr • Examination & Software Licenses: ₹25,000/yr",
        eligibility: "Passed 10+2 in any stream from recognized board with minimum 60% marks. Personal Interview & CUET/SAT scores considered.",
        entranceExam: "CUET / SAT / Bennett Assessment + Personal Interview",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["FinTech & Financial Engineering", "Business Analytics with Python/R", "Digital Media & Brand Management"],
        careerScope: "Avg Package ₹6.8 LPA. Recruiters: KPMG, EY, Dentsu, Times Internet, Axis Bank."
      },
      {
        id: "bu-mba",
        name: "Master of Business Administration (Times School of Management)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹5,25,000 / Year (₹10.50 Lakhs Total)",
        feeBreakdown: "Tuition: ₹4,85,000/yr • Executive Immersion: ₹40,000/yr",
        eligibility: "Graduation with minimum 50% marks in any discipline. Scorecard of CAT, XAT, NMAT, MAT or Bennett Management Aptitude Test.",
        entranceExam: "CAT / XAT / NMAT / GMAT + GD-PI",
        seats: "120 Seats",
        mode: "Full-Time Residential",
        specializations: ["Media & Entertainment Management", "Banking, Financial Services & Insurance (BFSI)", "Digital Marketing & E-Commerce", "Business Analytics"],
        careerScope: "Avg Package ₹9.5 LPA. High access to Times Group executives, Bloomberg terminal training, and CxO mentorship."
      },
      {
        id: "bu-ba-journalism",
        name: "B.A. in Journalism & Mass Communication (Times School of Media)",
        degree: "Undergraduate (UG)",
        duration: "3 Years (6 Semesters)",
        fees: "₹2,95,000 / Year (₹8.85 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,65,000/yr • Media Studio & Equipment Access: ₹30,000/yr",
        eligibility: "Passed 10+2 from any recognized board with minimum 50% marks + Bennett Media Aptitude Test & Personal Interview.",
        entranceExam: "Bennett Media Test + Personal Interview",
        seats: "90 Seats",
        mode: "Full-Time Regular (Broadcast Studio Campus)",
        specializations: ["Television & Digital Journalism", "Film Making & Production", "Advertising & Public Relations", "Podcast & New Media"],
        careerScope: "Unmatched direct access to Times Now, The Economic Times, Zoom, Mirchi, and Amazon Prime Video productions."
      },
      {
        id: "bu-bballb",
        name: "BBA LL.B. (Honours) 5-Year Integrated Law",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹3,40,000 / Year (₹17.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,10,000/yr • Moot Court & Legal Database: ₹30,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate marks. Valid CLAT or LSAT—India percentile.",
        entranceExam: "CLAT / LSAT—India / Bennett Law Test",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Corporate & Mergers Law", "Intellectual Property & Media Law", "International Commercial Arbitration"],
        careerScope: "Avg Package ₹7.5 LPA. Placements with top corporate firms, in-house media legal cells, and Supreme Court chambers."
      }
    ]
  },
  {
    id: "col-pvt-04",
    name: "G.L. Bajaj Institute of Technology & Management (Knowledge Park 2)",
    shortName: "GL Bajaj Greater Noida",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management"],
    city: "Greater Noida",
    location: "Plot No. 2, Knowledge Park 2, Greater Noida",
    nirfRank: "NIRF Ranked Top 100-150",
    accreditation: "NBA Accredited, AKTU Affiliated",
    rating: "4.7",
    reviewsCount: 2210,
    established: "2005",
    avgPackage: "₹7.5 LPA",
    highestPackage: "₹58 LPA",
    fees: "₹1.45 Lakhs / yr",
    entranceExams: ["JEE Main", "UPTAC"],
    streams: ["B.Tech CSE", "AI & Data Science", "IT & Cybersecurity", "MBA", "MCA"],
    image: "assets/colleges/col-pvt-04.jpg",
    highlights: ["Right at Knowledge Park 2 Metro", "Top AKTU Placement Record", "Over 400+ IT Recruiters"],
    description: "Situated in the heart of Knowledge Park 2, GL Bajaj is renowned for discipline, exceptional placement stats in North India, and tech coding clubs.",
    courses: [
      {
        id: "glb-btech-cse",
        name: "B.Tech in Computer Science & Engineering (CSE)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,45,000 / Year (₹5.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,25,000/yr • AKTU Exam & Tech Society Fee: ₹20,000/yr",
        eligibility: "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with Chemistry/CS with minimum 50% marks (45% for SC/ST candidates). Valid JEE Main rank via UPTAC (Uttar Pradesh Technical Admission Counseling).",
        entranceExam: "JEE Main / UPTAC Counseling / AKTU Merit",
        seats: "300 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Software Engineering", "Full Stack Development", "Cloud Architecture", "Algorithms & Competitive Programming"],
        careerScope: "Avg Package ₹8.2 LPA (Highest ₹58 LPA). Top Recruiters: Amazon, Palo Alto Networks, TCS Digital, Capgemini, Infosys, Wipro."
      },
      {
        id: "glb-btech-aids",
        name: "B.Tech in Artificial Intelligence & Data Science (AI & DS)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,45,000 / Year (₹5.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,25,000/yr • Lab & Exam: ₹20,000/yr",
        eligibility: "Passed 10+2 with minimum 50% marks in PCM. Seat allocation via JEE Main UPTAC counseling and direct merit round.",
        entranceExam: "JEE Main / UPTAC Counseling",
        seats: "180 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Machine Learning & Predictive Modeling", "Big Data Analytics", "Deep Learning & NLP", "Business Intelligence"],
        careerScope: "Avg Package ₹7.8 LPA. Recruiters: Cognizant, Virtusa, Accenture, Tech Mahindra."
      },
      {
        id: "glb-btech-it",
        name: "B.Tech in Information Technology & Cybersecurity",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,45,000 / Year (₹5.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,25,000/yr • Lab & Exam: ₹20,000/yr",
        eligibility: "10+2 with Physics and Mathematics with at least 50% marks. Qualified JEE Main.",
        entranceExam: "JEE Main / UPTAC",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Network Security & Ethical Hacking", "Cloud Defense", "Cryptography & Information Assurance"],
        careerScope: "Avg Package ₹7.5 LPA. Recruiters: Cisco, HCL Tech, Mindtree, LTIMindtree."
      },
      {
        id: "glb-mba",
        name: "Master of Business Administration (MBA - Dual Specialization)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,35,000 / Year (₹2.70 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,18,000/yr • Examination & Book Bank: ₹17,000/yr",
        eligibility: "Graduation in any discipline with minimum 50% marks (45% for SC/ST candidates) from recognized university + Valid CUET-PG or CAT/MAT score.",
        entranceExam: "CUET PG / CAT / MAT / UPTAC",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Marketing Management", "Finance", "Human Resource Management", "Information Technology", "International Business"],
        careerScope: "Avg Package ₹6.5 LPA. Recruiters: ICICI Bank, Jaro Education, Bajaj Finserv, Reliance Retail."
      },
      {
        id: "glb-mca",
        name: "Master of Computer Applications (MCA)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,35,000 / Year (₹2.70 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,18,000/yr • Lab & Exam: ₹17,000/yr",
        eligibility: "Passed BCA / Bachelor Degree in Computer Science Engineering or equivalent with at least 50% marks (45% for SC/ST). Must have studied Mathematics at 10+2 level or graduation.",
        entranceExam: "CUET PG (UPTAC MCA Counseling)",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Enterprise Web Applications", "Mobile App Development", "Cloud Computing & DevOps"],
        careerScope: "Avg Package ₹6.8 LPA. Recruiters: TCS, Nagarro, Newgen Software, Hexaware."
      }
    ]
  },
  {
    id: "col-pvt-05",
    name: "Birla Institute of Technology and Science (BITS) Pilani",
    shortName: "BITS Pilani",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "sciences"],
    city: "Rajasthan",
    location: "Vidya Vihar, Pilani",
    nirfRank: "NIRF Top 20 Overall",
    accreditation: "Institute of Eminence (IoE)",
    rating: "4.9",
    reviewsCount: 3100,
    established: "1964",
    avgPackage: "₹20.9 LPA",
    highestPackage: "₹1.33 CPA",
    fees: "₹5.5 Lakhs / yr",
    entranceExams: ["BITSAT"],
    streams: ["B.E. Computer Science", "Electronics & Instrumentation", "Mechanical", "Economics Dual", "MBA Tech"],
    image: "assets/colleges/col-pvt-05.jpg",
    highlights: ["Zero Attendance Policy", "Practice School Industry Internship", "Billion-Dollar Founder Alumni"],
    description: "Recognized as an Institute of Eminence, BITS Pilani is on par with the top IITs, famous for student autonomy, venture incubators, and dual-degree programs.",
    courses: [
      {
        id: "bits-be-cs",
        name: "B.E. in Computer Science",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹5,41,000 / Year (₹21.64 Lakhs Total)",
        feeBreakdown: "Tuition: ₹4,96,000/yr • Student Union & Amenities: ₹45,000/yr",
        eligibility: "Passed 10+2 with minimum 75% aggregate in PCM and at least 60% marks in each subject. High score in BITSAT (typically 320+ out of 390).",
        entranceExam: "BITSAT",
        seats: "140 Seats",
        mode: "Full-Time Residential (On-Campus)",
        specializations: ["Distributed Systems", "Compilers", "Applied Cryptography", "Machine Learning"],
        careerScope: "Avg Package ₹27.8 LPA. Top Recruiters: Google, Uber, Microsoft, DE Shaw, Rubrik, Tower Research."
      },
      {
        id: "bits-msc-econ-dual",
        name: "M.Sc (Hons) Economics + B.E. Dual Degree",
        degree: "Integrated (UG+PG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹5,41,000 / Year (₹27.05 Lakhs Total)",
        feeBreakdown: "Tuition: ₹4,96,000/yr • Lab & Amenities: ₹45,000/yr",
        eligibility: "10+2 with minimum 75% aggregate in PCM. Admitted to M.Sc Economics based on BITSAT; awarded top engineering branch after 1st year based on CGPA.",
        entranceExam: "BITSAT",
        seats: "100 Seats",
        mode: "Full-Time Residential",
        specializations: ["Quantitative Finance", "Algorithmic Trading", "Econometrics + CS/ECE"],
        careerScope: "Avg Package ₹25.2 LPA. Highly recruited by Wall Street quant funds, Goldman Sachs, JP Morgan."
      }
    ]
  },
  {
    id: "col-pvt-06",
    name: "Symbiosis International University (SIU) Pune",
    shortName: "Symbiosis Pune",
    type: "Private",
    category: "Management & Commerce",
    disciplines: ["management", "law", "design"],
    city: "Pune",
    location: "Viman Nagar & Lavale, Pune",
    nirfRank: "NIRF Top 30 University",
    accreditation: "NAAC A++ Grade",
    rating: "4.8",
    reviewsCount: 2450,
    established: "1971",
    avgPackage: "₹12.5 LPA",
    highestPackage: "₹45 LPA",
    fees: "₹3.8 Lakhs / yr",
    entranceExams: ["SET", "SNAP", "SLAT", "SEED"],
    streams: ["BBA (SCMS)", "MBA (SIBM Pune)", "BA LLB / BBA LLB (SLAT)", "B.Des (SID Pune)"],
    image: "assets/colleges/col-pvt-06.jpg",
    highlights: ["Vibrant Multicultural Campus", "Leading Law & Business Schools", "Global Alumni Network"],
    description: "One of India's most prestigious deemed universities, celebrated for Symbiosis Law School, SIBM Pune, and world-class management infrastructure.",
    courses: [
      {
        id: "siu-sibm-mba",
        name: "MBA (Symbiosis Institute of Business Management - SIBM Pune)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹11,50,000 / Year (₹23.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹10,20,000/yr • Institute Deposit & Library: ₹1,30,000",
        eligibility: "Graduate from any recognized University with a minimum of 50% marks (45% for SC/ST). Valid SNAP score (typically 98.5+ percentile) + GE-PI.",
        entranceExam: "SNAP (Symbiosis National Aptitude Test)",
        seats: "180 Seats",
        mode: "Full-Time Residential (Lavale Campus)",
        specializations: ["Marketing", "Human Resources", "Finance", "Operations"],
        careerScope: "Avg Package ₹26.7 LPA. Recruiters: HUL, P&G, McKinsey, ITC, Aditya Birla Group, Barclays."
      },
      {
        id: "siu-scms-bba",
        name: "BBA (Symbiosis Centre for Management Studies - SCMS Pune)",
        degree: "Undergraduate (UG)",
        duration: "3 Years (4 Years with Honours)",
        fees: "₹3,80,000 / Year (₹11.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,50,000/yr • Exam & Amenities: ₹30,000/yr",
        eligibility: "Passed 10+2 in any stream from recognized board with minimum 50% marks (45% for SC/ST). Selection based on SET entrance exam.",
        entranceExam: "SET (Symbiosis Entrance Test) + Personal Interaction (PI)",
        seats: "300 Seats",
        mode: "Full-Time Regular (Viman Nagar Campus)",
        specializations: ["Human Resource Management", "Marketing Management", "Accounting & Finance", "International Business", "Entrepreneurship"],
        careerScope: "Avg Package ₹7.2 LPA. Top Recruiters: Deloitte, KPMG, Zomato, PwC, Credit Suisse."
      },
      {
        id: "siu-sls-ballb",
        name: "B.A. LL.B. (Honours) - Symbiosis Law School (SLS Pune)",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹4,20,000 / Year (₹21.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,90,000/yr • Library & Moot Court: ₹30,000/yr",
        eligibility: "Passed 10+2 with minimum 45% marks (40% for SC/ST) from any recognized board. Valid score in SLAT entrance test.",
        entranceExam: "SLAT (Symbiosis Law Admission Test) + PI-WAT",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Corporate & Financial Law", "International Dispute Resolution", "IPR & Cyber Law"],
        careerScope: "Avg Package ₹11.5 LPA. Tier-1 law firm placements at Cyril Amarchand Mangaldas, Khaitan & Co, Trilegal."
      }
    ]
  },
  {
    id: "col-pvt-07",
    name: "Vellore Institute of Technology (VIT)",
    shortName: "VIT Vellore",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "design"],
    city: "Tamil Nadu",
    location: "Vellore & Chennai Campuses",
    nirfRank: "NIRF #11 Engineering",
    accreditation: "NAAC A++ Grade, ABET Accredited",
    rating: "4.8",
    reviewsCount: 4200,
    established: "1984",
    avgPackage: "₹9.2 LPA",
    highestPackage: "₹1.02 CPA",
    fees: "₹1.98 Lakhs - ₹2.9 Lakhs / yr",
    entranceExams: ["VITEEE", "VILAT"],
    streams: ["B.Tech CSE (Core / AI / Data)", "B.Tech ECE", "BBA / MBA", "B.Des Industrial Design"],
    image: "assets/colleges/col-pvt-07.jpg",
    highlights: ["Limca Record for Campus Placements", "ABET US Engineering Accreditation", "Super Dream Offers"],
    description: "Ranked among India's top engineering universities, VIT is legendary for its massive placement seasons with 900+ visiting global companies.",
    courses: [
      {
        id: "vit-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,98,000 / Year (Cat 1) to ₹4,93,000 / Year (Cat 5)",
        feeBreakdown: "Category-based fee structure determined by VITEEE rank. Special lab & caution deposit included.",
        eligibility: "Passed 10+2 with minimum 60% aggregate in Physics, Chemistry and Mathematics/Biology (50% for SC/ST and North-East states). Valid VITEEE rank.",
        entranceExam: "VITEEE (VIT Engineering Entrance Examination)",
        seats: "1200 Seats across categories",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Data Science", "Information Security", "IoT", "Bioinformatics"],
        careerScope: "Avg Package ₹9.8 LPA. Over 900 recruiters including Microsoft, Amazon, PayPal, Qualcomm, AppDynamics."
      },
      {
        id: "vit-btech-ece",
        name: "B.Tech in Electronics & Communication Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,98,000 / Year (Cat 1)",
        feeBreakdown: "Tuition: ₹1,95,000/yr • Caution deposit: ₹3,000",
        eligibility: "Passed 10+2 with min 60% in PCM. Rank in VITEEE.",
        entranceExam: "VITEEE",
        seats: "480 Seats",
        mode: "Full-Time Regular",
        specializations: ["VLSI Design", "Embedded Systems", "Wireless Communication", "Signal Processing"],
        careerScope: "Avg Package ₹8.5 LPA. Top Core Recruiters: Texas Instruments, Intel, NXP, Qualcomm."
      }
    ]
  },
  {
    id: "col-pvt-08",
    name: "Manipal Academy of Higher Education (MAHE) & KMC",
    shortName: "Manipal University / KMC",
    type: "Private",
    category: "Medical & Healthcare",
    disciplines: ["medical", "engineering", "management"],
    city: "Karnataka",
    location: "Tiger Circle, Manipal & Mangalore",
    nirfRank: "NIRF #6 Overall University",
    accreditation: "Institute of Eminence (IoE), NMC Approved",
    rating: "4.9",
    reviewsCount: 3890,
    established: "1953",
    avgPackage: "₹12.8 LPA",
    highestPackage: "₹54 LPA",
    fees: "₹3.5 Lakhs - ₹17.8 Lakhs / yr",
    entranceExams: ["NEET UG", "MET (Manipal)"],
    streams: ["MBBS (Kasturba Medical College)", "B.Tech (MIT Manipal)", "B.Pharm", "MBA (TAPMI)"],
    image: "assets/colleges/col-pvt-08.jpg",
    highlights: ["KMC Ranked Top 10 Medical in India", "Sprawling 600-Acre Coastal Campus", "Global USMLE Pathways"],
    description: "MAHE is a premier Institute of Eminence; Kasturba Medical College (KMC) is revered globally for medical research, advanced simulation labs, and clinical brilliance.",
    courses: [
      {
        id: "kmc-mbbs",
        name: "MBBS - Kasturba Medical College (KMC Manipal / Mangalore)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Internship)",
        fees: "₹17,80,000 / Year (₹70.88 Lakhs Total Course Fee)",
        feeBreakdown: "Annual Tuition: ₹17.80 Lakhs • Hostel & Mess: ₹1.95 Lakhs/yr",
        eligibility: "Passed 10+2 with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% marks in PCB. Must qualify NEET-UG and register via MCC Deemed University Counseling.",
        entranceExam: "NEET UG (MCC Central Counseling)",
        seats: "250 Seats (150 Manipal + 100 Mangalore)",
        mode: "Full-Time Residential (2000+ Bed Hospital)",
        specializations: ["Clinical Medicine", "Cardiology", "Neurosurgery", "Pediatrics", "Emergency Medicine"],
        careerScope: "Renowned worldwide with top match rates for USMLE (USA Residency) and PLAB (UK NHS) clinical rotations."
      },
      {
        id: "mit-btech-cse",
        name: "B.Tech in Computer Science & Engineering - MIT Manipal",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹4,20,000 / Year (₹16.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,90,000/yr • Lab & University Fee: ₹30,000/yr",
        eligibility: "Passed 10+2 with Physics, Mathematics and English with minimum 50% marks. Rank in Manipal Entrance Test (MET).",
        entranceExam: "MET (Manipal Entrance Test)",
        seats: "240 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Cloud Computing", "AI & Machine Learning", "Data Engineering", "Computer Vision"],
        careerScope: "Avg Package ₹14.5 LPA. Recruiters: Microsoft, Cisco, Goldman Sachs, Amazon, Schneider Electric."
      }
    ]
  },
  {
    id: "col-pvt-09",
    name: "Amity University (Noida Sector 125)",
    shortName: "Amity University Noida",
    type: "Private",
    category: "Management & Commerce",
    disciplines: ["engineering", "management", "law", "design", "sciences"],
    city: "Delhi / NCR",
    location: "Sector 125, Noida Express Highway",
    nirfRank: "NIRF Top 35 Overall",
    accreditation: "NAAC A+ Grade, UGC Recognized",
    rating: "4.6",
    reviewsCount: 4500,
    established: "2005",
    avgPackage: "₹6.5 LPA",
    highestPackage: "₹61 LPA",
    fees: "₹1.8 Lakhs - ₹3.8 Lakhs / yr",
    entranceExams: ["Amity JEE", "CUET", "Direct Merit"],
    streams: ["BBA / MBA", "B.Tech CSE & AI", "BA LLB / BBA LLB", "Fashion & Interior Design", "Biotech"],
    image: "assets/colleges/col-pvt-09.jpg",
    highlights: ["Ultra-modern 100-Acre Smart Campus", "Global Study Programs (London/NY)", "300+ Hi-Tech Labs"],
    description: "North India's largest private research university, featuring state-of-the-art sports complexes, global immersion programs, and extensive corporate ties.",
    courses: [
      {
        id: "amity-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,48,000 / Year (₹13.92 Lakhs Total)",
        feeBreakdown: "1st Year: ₹3.48 Lakhs • 5% scholarship for 90%+ in 10+2",
        eligibility: "10+2 with minimum 60% aggregate in Physics, Chemistry & Mathematics. Amity JEE or JEE Main score considered.",
        entranceExam: "Amity JEE / JEE Main / CUET",
        seats: "600 Seats",
        mode: "Full-Time Regular",
        specializations: ["Artificial Intelligence", "Internet of Things", "Data Science", "Cyber Security"],
        careerScope: "Avg Package ₹7.1 LPA. Top Recruiters: IBM, Shell, DXC Technology, Wipro, Capgemini."
      },
      {
        id: "amity-mba",
        name: "Master of Business Administration (Amity Business School)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹3,90,000 / Year (₹7.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,60,000/yr • Exam & Amenities: ₹30,000/yr",
        eligibility: "Bachelor's degree with min 50% aggregate. CAT/MAT/GMAT/Amity Test + Video Response.",
        entranceExam: "CAT / MAT / CMAT / Amity Test",
        seats: "240 Seats",
        mode: "Full-Time Regular",
        specializations: ["Marketing & Sales", "Finance", "International Business", "Human Resources"],
        careerScope: "Avg Package ₹7.5 LPA. Recruiters: Ernst & Young, KPMG, Genpact, ICICI Bank."
      }
    ]
  },
  {
    id: "col-pvt-10",
    name: "Shiv Nadar University (Institution of Eminence)",
    shortName: "Shiv Nadar University (SNU)",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "sciences", "design"],
    city: "Greater Noida",
    location: "NH-91, Tehsil Dadri, Greater Noida",
    nirfRank: "Institution of Eminence (IoE)",
    accreditation: "UGC, AICTE Approved, NAAC A Grade",
    rating: "4.8",
    reviewsCount: 1670,
    established: "2011",
    avgPackage: "₹11.3 LPA",
    highestPackage: "₹58 LPA",
    fees: "₹3.9 Lakhs / yr",
    entranceExams: ["SNUSAT", "JEE Main"],
    streams: ["B.Tech Computer Science", "B.Tech Mechanical", "BMS (Bachelor of Management)", "Design & Fine Arts"],
    image: "assets/colleges/col-pvt-10.jpg",
    highlights: ["Multidisciplinary Research Focus", "286-Acre Green Campus", "Direct HCL & Global Tech Links"],
    description: "Backed by the Shiv Nadar Foundation (HCL), SNU provides liberal research-intensive education with elite faculty from premier world universities.",
    courses: [
      {
        id: "snu-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹4,10,000 / Year (₹16.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,85,000/yr • Examination: ₹25,000/yr",
        eligibility: "Passed 10+2 with minimum 75% marks in PCM. Valid score in SNUSAT + Academic Proficiency Test (APT) or JEE Main (>= 80 percentile).",
        entranceExam: "SNUSAT / JEE Main",
        seats: "180 Seats",
        mode: "Full-Time Residential (286-Acre Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Data Science & Big Data", "Cyber Security & Privacy", "Robotics"],
        careerScope: "Avg Package ₹12.8 LPA. Direct HCL incubator tie-up, Goldman Sachs, Adobe, Dell, Microsoft."
      },
      {
        id: "snu-bms",
        name: "Bachelor of Management Studies (BMS - Liberal Arts & Business)",
        degree: "Undergraduate (UG)",
        duration: "3 Years (4 Years with Research)",
        fees: "₹3,40,000 / Year (₹10.20 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,15,000/yr • Course Materials: ₹25,000/yr",
        eligibility: "10+2 from any stream with minimum 65% aggregate. SNUSAT + APT test + Personal Interview.",
        entranceExam: "SNUSAT / SAT / ACT",
        seats: "120 Seats",
        mode: "Full-Time Residential",
        specializations: ["General Management", "Finance & Economics", "Digital Strategy", "Marketing"],
        careerScope: "Avg Package ₹8.5 LPA. Recruiters: McKinsey, Deloitte, Zomato, Bain Capability Center."
      }
    ]
  },
  {
    id: "col-pvt-11",
    name: "Thapar Institute of Engineering & Technology (TIET)",
    shortName: "Thapar University Patiala",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management"],
    city: "Punjab",
    location: "Bhadson Road, Patiala, Punjab",
    nirfRank: "NIRF #20 Engineering",
    accreditation: "NAAC A+ Grade, NBA Accredited",
    rating: "4.8",
    reviewsCount: 2800,
    established: "1956",
    avgPackage: "₹11.9 LPA",
    highestPackage: "₹55 LPA",
    fees: "₹3.8 Lakhs / yr",
    entranceExams: ["JEE Main", "TIET Merit"],
    streams: ["Computer Engineering", "Electronics & Computers", "Mechanical", "LM Thapar MBA"],
    image: "assets/colleges/col-pvt-11.jpg",
    highlights: ["Partnership with Trinity College Dublin", "68 Years of Engineering Excellence", "Silicon Valley Alumni"],
    description: "One of India's oldest private technical institutions, renowned for world-class laboratories, rigorous curriculum, and partnerships with Trinity College Dublin.",
    courses: [
      {
        id: "tiet-be-coe",
        name: "B.E. in Computer Engineering (COE)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,95,000 / Year (₹15.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,70,000/yr • Development & Exam: ₹25,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate in Physics, Mathematics and Chemistry/Biology/CS. Admission based on 50% JEE Main rank and 50% Class 12 PCM board marks.",
        entranceExam: "JEE Main / 10+2 Board Merit",
        seats: "480 Seats",
        mode: "Full-Time Regular (Patiala Campus)",
        specializations: ["Software Engineering", "AI & Deep Learning", "Cyber Systems", "Data Science"],
        careerScope: "Avg Package ₹13.2 LPA. Top Recruiters: Apple, Amazon, Microsoft, JP Morgan, Cisco, Oracle."
      },
      {
        id: "tiet-be-enc",
        name: "B.E. in Electronics and Computer Engineering (ENC)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,80,000 / Year (₹15.20 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,55,000/yr • Labs: ₹25,000/yr",
        eligibility: "10+2 with min 60% aggregate in PCM. JEE Main rank or 12th board merit.",
        entranceExam: "JEE Main / Class 12 Merit",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["IoT & Hardware Systems", "Embedded Systems", "Computer Networks", "VLSI"],
        careerScope: "Avg Package ₹11.5 LPA. Recruiters: Qualcomm, Texas Instruments, NXP, Sandisk."
      }
    ]
  },
  {
    id: "col-pvt-12",
    name: "O.P. Jindal Global University (Jindal Global Law School)",
    shortName: "JGU / Jindal Law",
    type: "Private",
    category: "Law & Legal Studies",
    disciplines: ["law", "management"],
    city: "Delhi / NCR",
    location: "Sonipat, NCR Delhi",
    nirfRank: "QS World #70 for Law (India's #1 Law School)",
    accreditation: "Institute of Eminence (IoE), BCI Approved",
    rating: "4.9",
    reviewsCount: 2150,
    established: "2009",
    avgPackage: "₹14.5 LPA",
    highestPackage: "₹36 LPA",
    fees: "₹6.0 Lakhs / yr",
    entranceExams: ["LSAT—India", "JSAT", "CLAT"],
    streams: ["BA LLB (Hons)", "BBA LLB (Hons)", "LLM", "Jindal Global Business School (MBA)"],
    image: "assets/colleges/col-pvt-12.jpg",
    highlights: ["Ranked #1 Law School in India by QS", "Faculty from Oxford, Harvard & Yale", "World-class Global Moot Courts"],
    description: "An Institute of Eminence internationally celebrated for Jindal Global Law School (JGLS), hosting premier legal scholars and international corporate placements.",
    courses: [
      {
        id: "jgu-ballb-hons",
        name: "B.A. LL.B. (Honours) - Jindal Global Law School",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹6,00,000 / Year (₹30.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹5,50,000/yr • Law Library & International Moot Court: ₹50,000/yr",
        eligibility: "Passed 10+2 examination with minimum 45% aggregate marks. Admission strictly based on LSAT—India percentile (typically 75+ percentile) or CLAT/JSAT score.",
        entranceExam: "LSAT—India / CLAT / JSAT-Law",
        seats: "300 Seats",
        mode: "Full-Time Residential (Sonipat Campus)",
        specializations: ["Corporate Law & Securities", "International Arbitration", "IPR & Tech Regulation", "Human Rights & Constitutional Law"],
        careerScope: "Avg Package ₹15.8 LPA. Placements at Magic Circle UK firms (Linklaters, Allen & Overy), Shardul Amarchand, AZB & Partners, Cyril Amarchand."
      },
      {
        id: "jgu-jgbs-mba",
        name: "MBA (Jindal Global Business School)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹5,50,000 / Year (₹11.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹5,00,000/yr • International Exchange: ₹50,000/yr",
        eligibility: "Bachelor's degree with min 50% aggregate from recognized university + CAT/XAT/MAT/GMAT score + Personal Interview.",
        entranceExam: "CAT / MAT / XAT / NMAT / GMAT",
        seats: "120 Seats",
        mode: "Full-Time Residential",
        specializations: ["Analytics & Digital Transformation", "Finance & Banking", "Marketing", "Supply Chain"],
        careerScope: "Avg Package ₹10.5 LPA. Recruiters: Amazon, Dabur, ICICI Bank, American Express."
      }
    ]
  },
  {
    id: "col-pvt-13",
    name: "Dr. D.Y. Patil Medical College, Hospital & Research Centre",
    shortName: "D.Y. Patil Medical College",
    type: "Private",
    category: "Medical & Healthcare",
    disciplines: ["medical"],
    city: "Pune / Maharashtra",
    location: "Pimpri, Pune",
    nirfRank: "NIRF #15 Medical in India",
    accreditation: "NAAC A++ Grade, NMC Recognized",
    rating: "4.7",
    reviewsCount: 1940,
    established: "1996",
    avgPackage: "₹14.0 LPA",
    highestPackage: "₹32 LPA",
    fees: "₹25.0 Lakhs / yr",
    entranceExams: ["NEET UG", "NEET PG"],
    streams: ["MBBS", "MD / MS Super Speciality", "B.Sc Nursing", "Physiotherapy (BPT)"],
    image: "assets/colleges/col-pvt-13.jpg",
    highlights: ["2,000+ Bed Super Specialty Hospital", "Robotic Surgery Training Lab", "NMC Deemed Medical Hub"],
    description: "A premier private medical institution equipped with Asia's largest robotic surgery training suites, high patient footfall, and advanced intensive care units.",
    courses: [
      {
        id: "dyp-mbbs",
        name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Internship)",
        fees: "₹25,00,000 / Year (₹1.12 Crore Total Course Fee)",
        feeBreakdown: "Annual Tuition: ₹25.0 Lakhs (Annual 7% increment) • Caution Deposit: ₹50,000",
        eligibility: "Passed 10+2 with minimum 50% in Physics, Chemistry & Biology combined. Valid NEET-UG score. Allotted through MCC Deemed University Medical Counseling.",
        entranceExam: "NEET UG (MCC Counseling)",
        seats: "250 Seats",
        mode: "Full-Time Residential (2,000-Bed Teaching Hospital)",
        specializations: ["General Medicine", "Robotic Surgery", "Cardiothoracic Surgery", "Radio-Diagnosis", "Obstetrics"],
        careerScope: "Top clinical residency placement, state-of-the-art robotic simulation lab training, and high surgical volume exposure."
      },
      {
        id: "dyp-bpt",
        name: "Bachelor of Physiotherapy (BPT)",
        degree: "Undergraduate (UG)",
        duration: "4.5 Years (4 Yrs Academic + 6 Months Internship)",
        fees: "₹2,50,000 / Year (₹10.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,30,000/yr • Hospital Lab Fee: ₹20,000/yr",
        eligibility: "Passed 10+2 with Physics, Chemistry and Biology with minimum 50% marks (45% for SC/ST).",
        entranceExam: "NEET UG / DY Patil AIET",
        seats: "100 Seats",
        mode: "Full-Time Regular (Hospital Attached)",
        specializations: ["Sports Physiotherapy", "Neuro-Physiotherapy", "Cardiopulmonary Rehabilitation"],
        careerScope: "Avg Package ₹5.8 LPA. Career in premier sports academies, rehabilitation centres, and hospital ICU departments."
      }
    ]
  },
  {
    id: "col-pvt-14",
    name: "Symbiosis Institute of Design (SID) & Srishti Manipal",
    shortName: "SID Pune / Design",
    type: "Private",
    category: "Design & Architecture",
    disciplines: ["design"],
    city: "Pune",
    location: "Viman Nagar, Pune",
    nirfRank: "Top 3 Private Design Institute in India",
    accreditation: "NAAC A++ Grade, SIU Deemed",
    rating: "4.8",
    reviewsCount: 1350,
    established: "2006",
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹24 LPA",
    fees: "₹4.2 Lakhs / yr",
    entranceExams: ["SEED (Symbiosis Entrance Exam for Design)"],
    streams: ["B.Des Communication Design", "Industrial Product Design", "Fashion Communication", "User Experience (UX/UI)"],
    image: "assets/colleges/col-pvt-14.jpg",
    highlights: ["Leading UX/UI Design Placement", "Industry Prototype Workshops", "Annual National Design Showcase"],
    description: "One of India's premier design schools, preparing students for leadership in Product Design, UI/UX, Animation, and Fashion Communication.",
    courses: [
      {
        id: "sid-bdes-ux",
        name: "B.Des in User Experience (UX/UI) & Interaction Design",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹4,20,000 / Year (₹16.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,85,000/yr • Studio Workshops & Prototyping Lab: ₹35,000/yr",
        eligibility: "Passed 10+2 in any stream (Science, Commerce, Arts) with minimum 50% aggregate marks (45% for SC/ST). Selection based on SEED score + Portfolio Review & Personal Interaction (PRPI).",
        entranceExam: "SEED (Symbiosis Entrance Exam for Design) + PRPI",
        seats: "60 Seats",
        mode: "Full-Time Regular (Design Studio Campus)",
        specializations: ["User Experience Architecture", "Interaction Design", "AR/VR Interfaces", "Design Systems"],
        careerScope: "Avg Package ₹10.2 LPA. Top Recruiters: Microsoft UX, Google, Tata Elxsi, Infosys Experience Design, Swiggy, Cred."
      },
      {
        id: "sid-bdes-product",
        name: "B.Des in Industrial & Product Design",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹4,20,000 / Year (₹16.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,85,000/yr • Rapid Prototyping & Material Labs: ₹35,000/yr",
        eligibility: "10+2 with min 50% marks in any stream. SEED entrance test + Design Portfolio.",
        entranceExam: "SEED + Portfolio Review",
        seats: "45 Seats",
        mode: "Full-Time Regular",
        specializations: ["Consumer Electronics Design", "Automotive Styling", "Ergonomics & Furniture Design"],
        careerScope: "Avg Package ₹8.5 LPA. Recruiters: Whirlpool, Godrej, Philips, Titan, Mahindra Design Studio."
      }
    ]
  },

  // =========================================================================
  // ADDITIONAL GOVERNMENT PREMIER MEDICAL COLLEGES
  // =========================================================================
  {
    id: "col-gov-06",
    name: "Maulana Azad Medical College (MAMC Delhi)",
    shortName: "MAMC New Delhi",
    type: "Government",
    category: "Medical & Healthcare",
    disciplines: ["medical"],
    city: "Delhi / NCR",
    location: "Bahadur Shah Zafar Marg, New Delhi",
    nirfRank: "NIRF #3 Medical in India",
    accreditation: "Delhi University, NMC Approved",
    rating: "4.9",
    reviewsCount: 1890,
    established: "1958",
    avgPackage: "₹15.0 LPA",
    highestPackage: "₹38 LPA",
    fees: "₹4,200 / yr (Subsidized)",
    entranceExams: ["NEET UG", "INI CET"],
    streams: ["MBBS", "MD / MS", "M.Ch Super Speciality", "Diploma in Child Health"],
    image: "assets/colleges/col-gov-06.jpg",
    highlights: ["Associated with Lok Nayak & GB Pant Hospitals", "2,800+ Bed Teaching Hospital", "Top Clinical Case Exposure"],
    description: "One of Asia's most coveted government medical colleges affiliated with the University of Delhi, producing India's top surgical specialists and medical researchers.",
    courses: [
      {
        id: "mamc-mbbs",
        name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Internship)",
        fees: "₹4,200 / Year (₹23,100 Total Course Fee)",
        feeBreakdown: "Tuition: ₹3,000/yr • Examination & Library: ₹1,200/yr",
        eligibility: "Passed 10+2 with Physics, Chemistry, Biology/Biotech and English with min 50% marks (40% for SC/ST). AIR <= 380 in NEET-UG (Delhi 85% quota or AIQ 15%).",
        entranceExam: "NEET UG (MCC / DU Central Counseling)",
        seats: "250 Seats",
        mode: "Full-Time Residential (Hospital Attached)",
        specializations: ["General Medicine", "Pediatrics", "Cardiology", "Neurology", "Obstetrics"],
        careerScope: "100% placement / residency at central government hospitals with resident stipend ₹1.1L/month."
      }
    ]
  },
  {
    id: "col-gov-07",
    name: "King George's Medical University (KGMU Lucknow)",
    shortName: "KGMU Lucknow",
    type: "Government",
    category: "Medical & Healthcare",
    disciplines: ["medical"],
    city: "Uttar Pradesh",
    location: "Shah Mina Road, Chowk, Lucknow",
    nirfRank: "NIRF #12 Medical in India",
    accreditation: "State Medical University, NAAC A+",
    rating: "4.8",
    reviewsCount: 2100,
    established: "1905",
    avgPackage: "₹14.0 LPA",
    highestPackage: "₹35 LPA",
    fees: "₹54,000 / yr",
    entranceExams: ["NEET UG", "NEET MDS", "NEET PG"],
    streams: ["MBBS", "BDS", "MD / MS", "DM / M.Ch Super Speciality"],
    image: "assets/colleges/col-gov-07.jpg",
    highlights: ["4,500+ Bed Multi-Specialty Hospital", "120-Year Heritage of Excellence", "Top Trauma & Organ Transplant Center"],
    description: "Uttar Pradesh's flagship medical university with an immense 4,500+ bed capacity hospital, offering unmatched surgical volume and hands-on patient care.",
    courses: [
      {
        id: "kgmu-mbbs",
        name: "MBBS (King George's Medical University)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Internship)",
        fees: "₹54,000 / Year (₹2.97 Lakhs Total Course Fee)",
        feeBreakdown: "Tuition: ₹42,000/yr • Examination & University Amenities: ₹12,000/yr",
        eligibility: "Passed 10+2 with Physics, Chemistry & Biology with minimum 50% marks. Qualified NEET-UG via UPDGME (State 85%) or MCC (AIQ 15%).",
        entranceExam: "NEET UG",
        seats: "250 Seats",
        mode: "Full-Time Residential",
        specializations: ["Clinical Medicine", "Trauma & Emergency Surgery", "Pediatrics", "Cardiology", "Dermatology"],
        careerScope: "Top clinical residency placement, government medical officer direct recruitment, and prestigious fellowships."
      },
      {
        id: "kgmu-bds",
        name: "BDS (Bachelor of Dental Surgery - Faculty of Dental Sciences)",
        degree: "Undergraduate (UG)",
        duration: "5 Years (4 Yrs Academic + 1 Yr Internship)",
        fees: "₹48,000 / Year (₹2.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹38,000/yr • Clinical Material & Exam: ₹10,000/yr",
        eligibility: "Passed 10+2 with PCB with minimum 50% aggregate marks. Valid NEET-UG score.",
        entranceExam: "NEET UG",
        seats: "100 Seats",
        mode: "Full-Time Hospital Attached",
        specializations: ["Oral & Maxillofacial Surgery", "Orthodontics", "Conservative Dentistry", "Prosthodontics"],
        careerScope: "High patient footfall dental residency and private dental clinic practice."
      }
    ]
  },

  // =========================================================================
  // EXTENDED TOP PRIVATE UNIVERSITIES & COLLEGES
  // =========================================================================
  {
    id: "col-pvt-15",
    name: "Noida Institute of Engineering & Technology (NIET Greater Noida)",
    shortName: "NIET Greater Noida",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management"],
    city: "Greater Noida",
    location: "Plot No. 19, Knowledge Park 2, Greater Noida",
    nirfRank: "NIRF Ranked Top 100-150 Engineering",
    accreditation: "Autonomous Institute, NAAC A Grade, NBA Accredited",
    rating: "4.7",
    reviewsCount: 2650,
    established: "2001",
    avgPackage: "₹7.1 LPA",
    highestPackage: "₹51 LPA",
    fees: "₹1.42 Lakhs / yr",
    entranceExams: ["JEE Main", "UPTAC", "CUET"],
    streams: ["B.Tech CSE / AI / IoT", "B.Tech Data Science", "B.Tech Biotech", "MCA", "MBA"],
    image: "assets/colleges/col-pvt-15.jpg",
    highlights: ["First Autonomous Engineering College in Greater Noida", "Right at Knowledge Park 2 Metro", "Apple Authorized Training Centre"],
    description: "An autonomous tech powerhouse in Knowledge Park 2, celebrated for autonomous curriculum agility, Apple and PTC innovation labs, and strong AKTU placements.",
    courses: [
      {
        id: "niet-btech-cse",
        name: "B.Tech in Computer Science & Engineering (Core / AI / IoT)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,42,000 / Year (₹5.68 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,22,000/yr • Examination & Innovation Labs: ₹20,000/yr",
        eligibility: "Passed 10+2 with Physics and Mathematics as compulsory subjects along with Chemistry/CS with min 50% marks (45% for SC/ST). Valid JEE Main rank via UPTAC or direct merit counseling.",
        entranceExam: "JEE Main / UPTAC / AKTU Merit",
        seats: "420 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Internet of Things (IoT)", "Cloud Computing", "Data Science"],
        careerScope: "Avg Package ₹7.5 LPA. Top Recruiters: Amazon, Cisco, Capgemini, TCS Digital, Wipro, Virtusa."
      },
      {
        id: "niet-btech-biotech",
        name: "B.Tech in Biotechnology",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,35,000 / Year (₹5.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,18,000/yr • Wet Lab: ₹17,000/yr",
        eligibility: "Passed 10+2 with Physics and Chemistry plus Mathematics or Biology with min 50% marks.",
        entranceExam: "JEE Main / CUET / UPTAC",
        seats: "60 Seats",
        mode: "Full-Time Regular",
        specializations: ["Bioinformatics", "Genetic Engineering", "Bioprocess Technology", "Pharmaceutical Tech"],
        careerScope: "Avg Package ₹6.2 LPA. Placements at Biocon, Serum Institute, Torrent Pharma, Dr. Reddy's."
      },
      {
        id: "niet-mca",
        name: "Master of Computer Applications (MCA Cloud & DevOps)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,30,000 / Year (₹2.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,15,000/yr • Exam & Computing Lab: ₹15,000/yr",
        eligibility: "BCA or Bachelor Degree in Computer Science with min 50% aggregate marks (45% for SC/ST) + Mathematics at 10+2 or graduation.",
        entranceExam: "CUET PG / UPTAC MCA",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Full Stack Cloud Development", "DevOps & Microservices", "Data Analytics"],
        careerScope: "Avg Package ₹6.8 LPA. Recruiters: Cognizant, Infosys, Tech Mahindra, Mindtree."
      }
    ]
  },
  {
    id: "col-pvt-16",
    name: "Lloyd Institute of Engineering & Technology / Lloyd Law College",
    shortName: "Lloyd Group (Knowledge Park 2)",
    type: "Private",
    category: "Law & Legal Studies",
    disciplines: ["law", "engineering", "management"],
    city: "Greater Noida",
    location: "Plot No. 11 & 3, Knowledge Park 2, Greater Noida",
    nirfRank: "Top 10 Private Law Colleges in India (CSR-GHRDC)",
    accreditation: "BCI Approved, AICTE, AKTU Affiliated",
    rating: "4.6",
    reviewsCount: 1750,
    established: "2003",
    avgPackage: "₹6.8 LPA",
    highestPackage: "₹32 LPA",
    fees: "₹1.4 Lakhs - ₹2.2 Lakhs / yr",
    entranceExams: ["LET", "CLAT", "LSAT", "JEE Main"],
    streams: ["BA LLB (Hons)", "BBA LLB (Hons)", "B.Tech CSE", "B.Pharm", "MBA"],
    image: "assets/colleges/col-pvt-16.jpg",
    highlights: ["Proximity to Knowledge Park 2 Metro", "International Legal & Moot Court Ties", "SILF Law Firm Partnerships"],
    description: "A premier institute in Knowledge Park 2 renowned for Lloyd Law College, hosting international mock trials, corporate law apprenticeships, and specialized B.Tech CSE programs.",
    courses: [
      {
        id: "lloyd-ballb",
        name: "B.A. LL.B. (5-Year Integrated Law Program)",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹1,85,000 / Year (₹9.25 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,60,000/yr • Legal Research & Moot Court: ₹25,000/yr",
        eligibility: "Passed 10+2 in any stream from recognized board with min 45% aggregate (42% for OBC, 40% for SC/ST). Selection based on Lloyd Entrance Test (LET) or CLAT/LSAT score.",
        entranceExam: "LET (Lloyd Entrance Test) / CLAT / LSAT—India",
        seats: "240 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Corporate & Mergers Law", "Intellectual Property Rights", "Criminal Justice & Trial Advocacy", "Cyber Law"],
        careerScope: "Avg Package ₹7.2 LPA. Placements at Luthra and Luthra, Khaitan & Co, and judicial litigation clerkships."
      },
      {
        id: "lloyd-btech-cse",
        name: "B.Tech in Computer Science & Engineering (Co-Op)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,40,000 / Year (₹5.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,20,000/yr • Industry Co-op Fee: ₹20,000/yr",
        eligibility: "10+2 with PCM minimum 50% marks (45% for SC/ST). Valid JEE Main or UPTAC merit rank.",
        entranceExam: "JEE Main / UPTAC",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Artificial Intelligence & ML", "Cybersecurity", "Data Analytics"],
        careerScope: "Avg Package ₹6.5 LPA. Industry Co-Op internships with leading NCR technology firms."
      }
    ]
  },
  {
    id: "col-pvt-17",
    name: "Jaypee Institute of Information Technology (JIIT Noida)",
    shortName: "JIIT Noida (Sector 62 & 128)",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management"],
    city: "Delhi / NCR",
    location: "A-10, Sector 62 & Sector 128, Noida",
    nirfRank: "NIRF Top 100 Engineering in India",
    accreditation: "Deemed to be University, NAAC A Grade, UGC Recognized",
    rating: "4.8",
    reviewsCount: 3120,
    established: "2001",
    avgPackage: "₹11.8 LPA",
    highestPackage: "₹1.15 CPA",
    fees: "₹2.95 Lakhs / yr",
    entranceExams: ["JEE Main", "JIIT Direct Counseling"],
    streams: ["B.Tech CSE (Sec 62)", "B.Tech CSE (Sec 128)", "B.Tech ECE", "B.Tech IT & Computing", "MBA"],
    image: "assets/colleges/col-pvt-17.jpg",
    highlights: ["Premier Coding Reputation in Delhi-NCR", "Direct Metro Access (Noida Electronic City)", "Tier-1 Tech Company Magnet"],
    description: "Ranked among India's finest deemed universities for Computer Science and IT education, famous for world-class coding culture, competitive programming, and top MNC offers.",
    courses: [
      {
        id: "jiit-btech-cse-62",
        name: "B.Tech in Computer Science & Engineering (Sector 62 Main Campus)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,95,000 / Year (₹11.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,60,000/yr • Academic Development & Lab: ₹35,000/yr",
        eligibility: "Passed 10+2 or equivalent with minimum 60% aggregate marks (55% for SC/ST) in Mathematics, Physics and Chemistry/CS. Admission strictly through JEE Main All India Rank.",
        entranceExam: "JEE Main (JIIT Central Counseling Portal)",
        seats: "480 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Data Science", "Cyber Security", "Distributed Computing"],
        careerScope: "Avg Package ₹12.5 LPA (Highest ₹1.15 CPA). Recruiters: Microsoft, Amazon, Adobe, Atlassian, DE Shaw, Cisco."
      },
      {
        id: "jiit-btech-cse-128",
        name: "B.Tech in Computer Science & Engineering (Sector 128 Campus)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,95,000 / Year (₹11.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,60,000/yr • Campus Facilities: ₹35,000/yr",
        eligibility: "10+2 with PCM minimum 60% aggregate marks + Valid JEE Main All India Rank.",
        entranceExam: "JEE Main",
        seats: "240 Seats",
        mode: "Full-Time Regular",
        specializations: ["Software Engineering", "Cloud Systems", "Mobile Applications"],
        careerScope: "Avg Package ₹10.8 LPA. Shared centralized campus placement drive with Sector 62."
      },
      {
        id: "jiit-btech-ece",
        name: "B.Tech in Electronics & Communication Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,75,000 / Year (₹11.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,45,000/yr • VLSI & Hardware Lab: ₹30,000/yr",
        eligibility: "10+2 with PCM min 60% aggregate. JEE Main rank or 10+2 merit score.",
        entranceExam: "JEE Main / 10+2 Merit",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["VLSI Design", "Embedded Systems", "Communication Networks", "Signal Processing"],
        careerScope: "Avg Package ₹8.5 LPA. Core Recruiters: Qualcomm, Texas Instruments, STMicroelectronics, Cadence."
      }
    ]
  },
  {
    id: "col-pvt-18",
    name: "SRM Institute of Science and Technology (SRMIST Delhi-NCR)",
    shortName: "SRM University (Delhi NCR / Chennai)",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "medical"],
    city: "Delhi / NCR",
    location: "Delhi-Meerut Road, Modinagar, NCR & Kattankulathur, Chennai",
    nirfRank: "NIRF #18 Overall University in India",
    accreditation: "NAAC A++ Grade, UGC Recognized",
    rating: "4.7",
    reviewsCount: 3950,
    established: "1985",
    avgPackage: "₹7.9 LPA",
    highestPackage: "₹1.0 CPA",
    fees: "₹3.2 Lakhs / yr",
    entranceExams: ["SRMJEEE", "JEE Main"],
    streams: ["B.Tech CSE (Cloud / Cyber / AI)", "B.Tech ECE", "BBA", "MBA", "B.Pharm"],
    image: "assets/colleges/col-pvt-18.jpg",
    highlights: ["NAAC A++ Highest Accreditation", "Over 1,100 Recruiter Visits", "Proximity to Delhi-Meerut Expressway"],
    description: "A deemed multi-campus university giant offering cutting-edge engineering programs, massive campus placement drives, and state-of-the-art incubation labs.",
    courses: [
      {
        id: "srm-btech-cse",
        name: "B.Tech in Computer Science & Engineering (Core & Specializations)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,20,000 / Year (₹12.80 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,95,000/yr • Registration & Examination: ₹25,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate in Physics, Chemistry and Mathematics. Valid rank in SRMJEEE or JEE Main score.",
        entranceExam: "SRMJEEE (SRM Joint Engineering Entrance Exam) / JEE Main",
        seats: "600 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Artificial Intelligence & Machine Learning", "Big Data Analytics", "Cyber Security", "Cloud Computing"],
        careerScope: "Avg Package ₹8.2 LPA. Top Recruiters: Amazon, Google, Microsoft, TCS, Infosys, Cognizant, Wipro."
      },
      {
        id: "srm-mba",
        name: "Master of Business Administration (MBA - SRM School of Management)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹2,75,000 / Year (₹5.50 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,50,000/yr • Industry Seminar & Exam: ₹25,000/yr",
        eligibility: "Graduation in any discipline with min 50% marks from a recognized university. CAT/MAT/XAT/SRM Entrance.",
        entranceExam: "CAT / MAT / CMAT / SRM Entrance",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Financial Analytics", "Marketing Management", "Human Resources", "Supply Chain Management"],
        careerScope: "Avg Package ₹7.5 LPA. Recruiters: Deloitte, KPMG, HDFC Bank, Tech Mahindra."
      }
    ]
  },
  {
    id: "col-pvt-19",
    name: "Kalinga Institute of Industrial Technology (KIIT Bhubaneswar)",
    shortName: "KIIT Bhubaneswar",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "law", "medical"],
    city: "Odisha",
    location: "Patia, Bhubaneswar, Odisha",
    nirfRank: "NIRF #16 University in India (Institute of Eminence)",
    accreditation: "NAAC A++ Grade, IoE Recognized",
    rating: "4.8",
    reviewsCount: 3600,
    established: "1992",
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹63 LPA",
    fees: "₹3.85 Lakhs / yr",
    entranceExams: ["KIITEE", "JEE Main"],
    streams: ["B.Tech CSE", "B.Tech AI & Machine Learning", "B.Tech Aerospace", "MBA (KSOM)", "BA LLB (KSOL)"],
    image: "assets/colleges/col-pvt-19.jpg",
    highlights: ["Institution of Eminence (IoE)", "100% Academic Placement Record", "Sprawling 25-Square-KM Smart Campus"],
    description: "Recognized as an Institution of Eminence, KIIT is one of Eastern India's largest research universities with 23 lush campuses, sports complexes, and 6,000+ placement offers.",
    courses: [
      {
        id: "kiit-btech-cse",
        name: "B.Tech in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,85,000 / Year (₹15.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,50,000/yr • Registration & Examination: ₹35,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate marks in Physics, Chemistry and Mathematics. Free KIITEE entrance or JEE Main score.",
        entranceExam: "KIITEE (Zero Fee Entrance Exam) / JEE Main",
        seats: "720 Seats",
        mode: "Full-Time Residential (Bhubaneswar)",
        specializations: ["Artificial Intelligence & Machine Learning", "Data Engineering", "Cybersecurity", "Cloud Computing"],
        careerScope: "Avg Package ₹9.2 LPA. Top Recruiters: HighRadius, Microsoft, Amazon, Tata Power, Deloitte, Accenture."
      },
      {
        id: "kiit-mba",
        name: "MBA (KIIT School of Management - KSOM)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹5,20,000 / Year (₹10.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹4,80,000/yr • Industry Workshops: ₹40,000/yr",
        eligibility: "Graduation with minimum 50% marks in any discipline + CAT, XAT, MAT, or KIITEE Management score.",
        entranceExam: "CAT / XAT / CMAT / KIITEE Management",
        seats: "180 Seats",
        mode: "Full-Time Residential",
        specializations: ["Business Analytics", "Marketing", "Finance", "Supply Chain & Operations"],
        careerScope: "Avg Package ₹8.8 LPA. Recruiters: PwC, EY, ICICI Securities, Asian Paints."
      }
    ]
  },
  {
    id: "col-pvt-20",
    name: "UPES Dehradun (University of Petroleum & Energy Studies)",
    shortName: "UPES Dehradun",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "law", "design"],
    city: "Uttarakhand",
    location: "Bidholi & Kandoli, Dehradun",
    nirfRank: "NIRF Top 50 Overall University",
    accreditation: "NAAC A Grade, UGC Recognized",
    rating: "4.7",
    reviewsCount: 2890,
    established: "2003",
    avgPackage: "₹8.7 LPA",
    highestPackage: "₹50 LPA",
    fees: "₹3.9 Lakhs / yr",
    entranceExams: ["UPESEAT", "JEE Main", "CUET"],
    streams: ["B.Tech CSE (Cloud / Cyber / AI)", "B.Tech Applied Petroleum", "BBA (Oil & Gas)", "BA LLB", "B.Des"],
    image: "assets/colleges/col-pvt-20.jpg",
    highlights: ["Scenic Foothills Campus", "Specialized Energy & Aerospace Curriculum", "Global Exchange Tie-ups"],
    description: "Nestled in the Dehradun valley, UPES is renowned for domain-specific engineering, high-tech energy and cloud computing curriculum, and leading corporate partnerships.",
    courses: [
      {
        id: "upes-btech-cse",
        name: "B.Tech in Computer Science & Engineering (Cloud / AI / Cyber)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹3,90,000 / Year (₹15.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,60,000/yr • Academic Support: ₹30,000/yr",
        eligibility: "Passed 10+2 with minimum 50% marks in Class X and XII with minimum 50% in PCM. Score in UPESEAT or JEE Main.",
        entranceExam: "UPESEAT / JEE Main / Board Merit",
        seats: "420 Seats",
        mode: "Full-Time Regular (Bidholi Campus)",
        specializations: ["Cloud Computing & Virtualization Technology", "Artificial Intelligence & Machine Learning", "Cyber Security & Digital Forensics"],
        careerScope: "Avg Package ₹9.1 LPA. Top Recruiters: Microsoft, IBM, Shell, L&T Infotech, Schlumberger."
      },
      {
        id: "upes-ballb",
        name: "B.A. LL.B. (Honours) with Specialization in Energy & Cyber Laws",
        degree: "Undergraduate (UG)",
        duration: "5 Years (10 Semesters)",
        fees: "₹3,50,000 / Year (₹17.50 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,20,000/yr • Legal Databases & Moot Court: ₹30,000/yr",
        eligibility: "10+2 with minimum 50% aggregate marks. Score in ULSAT or CLAT/LSAT—India.",
        entranceExam: "ULSAT / CLAT / LSAT—India",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Energy Law & Regulations", "Cyber Law & Digital Rights", "Corporate & Commercial Law"],
        careerScope: "Avg Package ₹7.8 LPA. Corporate law firm placements in energy and IT sectors."
      }
    ]
  },
  {
    id: "col-pvt-21",
    name: "Chitkara University (Punjab / Chandigarh NCR)",
    shortName: "Chitkara University",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management", "design"],
    city: "Punjab / Chandigarh",
    location: "Chandigarh-Patiala National Highway (NH-64), Rajpura",
    nirfRank: "NAAC A+ Grade, NIRF Top 75",
    accreditation: "UGC Recognized, AICTE Approved",
    rating: "4.7",
    reviewsCount: 3100,
    established: "2010",
    avgPackage: "₹8.2 LPA",
    highestPackage: "₹44 LPA",
    fees: "₹1.9 Lakhs / yr",
    entranceExams: ["JEE Main", "Chitkara Merit"],
    streams: ["B.Tech CSE (AI & Full Stack)", "B.Tech Robotics", "BBA", "MBA", "B.Des Animation"],
    image: "assets/colleges/col-pvt-21.jpg",
    highlights: ["NAAC A+ Highest Grade", "Apple iOS Development Lab", "600+ MNC Placements Annually"],
    description: "North India's premier multi-disciplinary university offering industry-embedded engineering degrees, Apple and Microsoft developer centers, and high placement return on investment.",
    courses: [
      {
        id: "chitkara-btech-cse",
        name: "B.Tech in Computer Science & Engineering (Full Stack & AI)",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹1,90,000 / Year (₹7.60 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,70,000/yr • Exam & Tech Resources: ₹20,000/yr",
        eligibility: "Passed 10+2 with minimum 60% aggregate in Physics, Chemistry and Mathematics. JEE Main or 12th board merit.",
        entranceExam: "JEE Main / 10+2 Merit",
        seats: "600 Seats",
        mode: "Full-Time Regular",
        specializations: ["Full Stack Web Development", "Artificial Intelligence", "Cloud Computing & DevOps"],
        careerScope: "Avg Package ₹8.5 LPA. Top Recruiters: Adobe, Amazon, Morgan Stanley, Capgemini, Infosys."
      },
      {
        id: "chitkara-mba",
        name: "Master of Business Administration (Chitkara Business School)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹2,20,000 / Year (₹4.40 Lakhs Total)",
        feeBreakdown: "Tuition: ₹1,95,000/yr • Corporate Immersion: ₹25,000/yr",
        eligibility: "Bachelor's degree with min 50% marks in any discipline + CAT/MAT/CMAT or Chitkara Entrance.",
        entranceExam: "CAT / MAT / XAT / CMAT",
        seats: "180 Seats",
        mode: "Full-Time Regular",
        specializations: ["Finance & Banking", "Supply Chain & Logistics", "Digital Marketing", "Healthcare Management"],
        careerScope: "Avg Package ₹8.0 LPA. Recruiters: Deloitte, HDFC Bank, Nestle, Reliance Industries."
      }
    ]
  },
  {
    id: "col-pvt-22",
    name: "R.V. College of Engineering (RVCE Bangalore)",
    shortName: "RVCE Bangalore",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering"],
    city: "Bangalore / Karnataka",
    location: "Mysore Road, Bengaluru, Karnataka",
    nirfRank: "NIRF Top 10 Private Engineering in India",
    accreditation: "Autonomous, VTU Affiliated, NAAC A+",
    rating: "4.9",
    reviewsCount: 3420,
    established: "1963",
    avgPackage: "₹18.2 LPA",
    highestPackage: "₹62 LPA",
    fees: "₹2.6 Lakhs - ₹10.0 Lakhs / yr",
    entranceExams: ["KCET", "COMEDK", "JEE Main (Management)"],
    streams: ["B.E. Computer Science", "B.E. Information Science", "B.E. AI & ML", "B.E. Electronics & Communication"],
    image: "assets/colleges/col-pvt-22.jpg",
    highlights: ["Karnataka's #1 Ranked Engineering College", "Highest Private Engineering RoI in South India", "Direct Silicon City Recruiter Links"],
    description: "Located on Mysore Road in Bengaluru, RVCE is celebrated as South India's premier autonomous technical institution with placement figures rivaling top NITs and IITs.",
    courses: [
      {
        id: "rvce-be-cse",
        name: "B.E. in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,60,000 / Year (KCET/COMEDK Quota)",
        feeBreakdown: "COMEDK Tuition: ₹2.60 Lakhs/yr • Management Quota seats available on merit",
        eligibility: "Passed 10+2 with minimum 60% marks in Physics and Mathematics along with Chemistry/CS. Selection through KCET (Karnataka candidates) or COMEDK UGET (All India).",
        entranceExam: "COMEDK UGET / KCET / JEE Main Merit",
        seats: "240 Seats",
        mode: "Full-Time Regular (Bengaluru)",
        specializations: ["Distributed Systems", "Cloud Computing", "Artificial Intelligence", "Algorithms"],
        careerScope: "Avg Package ₹21.4 LPA. Top Recruiters: Google, Microsoft, Atlassian, Cisco, Goldman Sachs, Uber."
      },
      {
        id: "rvce-be-ise",
        name: "B.E. in Information Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,60,000 / Year",
        feeBreakdown: "COMEDK: ₹2.60 Lakhs/yr • Laboratory Fee Included",
        eligibility: "10+2 with PCM minimum 60% aggregate. Valid COMEDK or KCET rank.",
        entranceExam: "COMEDK / KCET",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Data Analytics", "Software Design", "Information Security"],
        careerScope: "Avg Package ₹18.5 LPA. Recruiters: Amazon, Intuit, Oracle, Morgan Stanley."
      }
    ]
  },
  {
    id: "col-pvt-23",
    name: "M.S. Ramaiah Institute of Technology (MSRIT Bangalore)",
    shortName: "MSRIT Bangalore",
    type: "Private",
    category: "Engineering & Tech",
    disciplines: ["engineering", "management"],
    city: "Bangalore / Karnataka",
    location: "MSR Nagar, Mathikere, Bengaluru",
    nirfRank: "NIRF #67 Engineering in India",
    accreditation: "Autonomous, NAAC A+ Grade, VTU Affiliated",
    rating: "4.8",
    reviewsCount: 3150,
    established: "1962",
    avgPackage: "₹14.5 LPA",
    highestPackage: "₹50 LPA",
    fees: "₹2.4 Lakhs - ₹9.0 Lakhs / yr",
    entranceExams: ["KCET", "COMEDK", "JEE Main"],
    streams: ["B.E. Computer Science & Engineering", "B.E. Data Science & AI", "B.E. Biotechnology", "MBA"],
    image: "assets/colleges/col-pvt-23.jpg",
    highlights: ["Autonomous Status with Dynamic Curriculum", "Over 350 Global IT Recruiters", "Heart of Bengaluru Location"],
    description: "One of Karnataka's oldest and most prestigious engineering institutions, producing software architects, tech entrepreneurs, and leading biomedical engineers.",
    courses: [
      {
        id: "msrit-be-cse",
        name: "B.E. in Computer Science & Engineering",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,40,000 / Year (COMEDK Quota)",
        feeBreakdown: "Tuition: ₹2,40,000/yr • College Amenities: Included",
        eligibility: "Passed 10+2 with minimum 50% marks in Physics, Mathematics and Chemistry/Bio/CS. Valid COMEDK or KCET score.",
        entranceExam: "COMEDK UGET / KCET",
        seats: "240 Seats",
        mode: "Full-Time Regular (Bengaluru)",
        specializations: ["Artificial Intelligence", "Big Data", "Cloud Computing", "Cyber Security"],
        careerScope: "Avg Package ₹16.2 LPA. Top Recruiters: Apple, Amazon, Adobe, Infosys, Qualcomm, Robert Bosch."
      },
      {
        id: "msrit-be-aids",
        name: "B.E. in Artificial Intelligence & Data Science",
        degree: "Undergraduate (UG)",
        duration: "4 Years (8 Semesters)",
        fees: "₹2,40,000 / Year",
        feeBreakdown: "COMEDK: ₹2.40 Lakhs/yr",
        eligibility: "10+2 with PCM minimum 50% marks. Rank in COMEDK or KCET.",
        entranceExam: "COMEDK / KCET",
        seats: "120 Seats",
        mode: "Full-Time Regular",
        specializations: ["Deep Learning", "Predictive Analytics", "Natural Language Processing"],
        careerScope: "Avg Package ₹14.8 LPA. Recruiters: Samsung R&D, Cisco, Target, Dell Technologies."
      }
    ]
  },
  {
    id: "col-pvt-24",
    name: "Santosh Deemed to be University & Hospital (Ghaziabad, NCR)",
    shortName: "Santosh Medical College NCR",
    type: "Private",
    category: "Medical & Healthcare",
    disciplines: ["medical"],
    city: "Delhi / NCR",
    location: "Sector 12, Santosh Nagar, Pratap Vihar, Ghaziabad",
    nirfRank: "NIRF Top 40 Dental & Medical in India",
    accreditation: "Deemed to be University, NAAC A+ Grade, NMC Approved",
    rating: "4.7",
    reviewsCount: 1680,
    established: "1995",
    avgPackage: "₹12.0 LPA",
    highestPackage: "₹30 LPA",
    fees: "₹24.0 Lakhs / yr",
    entranceExams: ["NEET UG", "NEET MDS", "NEET PG"],
    streams: ["MBBS (Santosh Hospital)", "BDS (Santosh Dental)", "MD / MS", "B.Sc Nursing"],
    image: "assets/colleges/col-pvt-24.jpg",
    highlights: ["800+ Bed Multi-Specialty Hospital", "15 Minutes from Central Delhi (Connaught Place)", "NABH & NABL Accredited"],
    description: "A premier private medical university located right on the Delhi-UP border, offering an 800+ bed teaching hospital, high patient footfall, and advanced clinical simulation suites.",
    courses: [
      {
        id: "santosh-mbbs",
        name: "MBBS (Santosh Medical College & Hospital)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Compulsory Internship)",
        fees: "₹24,00,000 / Year (₹96.00 Lakhs Total Tuition)",
        feeBreakdown: "Annual Tuition: ₹24.0 Lakhs • Hostel & Mess: ₹2.0 Lakhs/yr",
        eligibility: "Passed 10+2 with minimum 50% in Physics, Chemistry and Biology/Biotechnology. Qualified NEET-UG and registered for MCC Deemed University Medical Counseling.",
        entranceExam: "NEET UG (MCC Central Counseling)",
        seats: "150 Seats",
        mode: "Full-Time Residential (Hospital Campus)",
        specializations: ["Clinical Medicine", "General Surgery", "Pediatrics", "Cardiology", "Emergency Care"],
        careerScope: "Hands-on patient clinical rotations in NCR with high clinical OPD numbers, residency preparation."
      },
      {
        id: "santosh-bds",
        name: "BDS (Santosh Dental College & Hospital)",
        degree: "Undergraduate (UG)",
        duration: "5 Years (4 Yrs Academic + 1 Yr Internship)",
        fees: "₹3,50,000 / Year (₹14.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹3,15,000/yr • Material Fee: ₹35,000/yr",
        eligibility: "Passed 10+2 with PCB with minimum 50% marks. Qualified NEET-UG.",
        entranceExam: "NEET UG",
        seats: "100 Seats",
        mode: "Full-Time Hospital Attached",
        specializations: ["Oral Implantology", "Orthodontics", "Conservative Dentistry & Endodontics"],
        careerScope: "Active dental OPD practice, multi-chair simulation lab experience."
      }
    ]
  },
  {
    id: "col-pvt-25",
    name: "Subharti Medical College & Hospital (Swami Vivekanand Subharti Univ)",
    shortName: "Subharti Medical College Meerut",
    type: "Private",
    category: "Medical & Healthcare",
    disciplines: ["medical", "engineering", "law"],
    city: "Delhi / NCR",
    location: "Subhartipuram, NH-58, Meerut, Delhi-NCR",
    nirfRank: "NAAC A Grade, Top Ranked UP Medical College",
    accreditation: "UGC Recognized, NMC, DCI, BCI Approved",
    rating: "4.7",
    reviewsCount: 2200,
    established: "1996",
    avgPackage: "₹11.5 LPA",
    highestPackage: "₹34 LPA",
    fees: "₹11.85 Lakhs / yr (Govt Fixed)",
    entranceExams: ["NEET UG", "NEET PG", "UPTAC"],
    streams: ["MBBS (1000-bed Hospital)", "BDS", "MD / MS", "BPT Physiotherapy", "B.Tech CSE"],
    image: "assets/colleges/col-pvt-25.jpg",
    highlights: ["1,000+ Bed Chhatrapati Shivaji Subharti Hospital", "Delhi-Meerut Rapid Rail (RRTS) Connectivity", "NABH Accredited Tertiary Center"],
    description: "A prestigious 250-acre medical township in Delhi-NCR featuring the 1000-bed Chhatrapati Shivaji Hospital, providing extensive clinical exposure and subsidized patient care.",
    courses: [
      {
        id: "subharti-mbbs",
        name: "MBBS (Chhatrapati Shivaji Subharti Hospital)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Internship)",
        fees: "₹11,85,107 / Year (Govt Mandated Tuition)",
        feeBreakdown: "Annual Tuition: ₹11.85 Lakhs • Security Deposit: ₹3.0 Lakhs (Refundable)",
        eligibility: "Passed 10+2 with English, Physics, Chemistry and Biology with minimum 50% marks in PCB. Qualified NEET-UG and registered for UPDGME counseling.",
        entranceExam: "NEET UG (UPDGME State Counseling)",
        seats: "200 Seats",
        mode: "Full-Time Residential (Hospital Campus)",
        specializations: ["General Medicine", "General Surgery", "Obstetrics & Gynecology", "Pediatrics", "Ophthalmology"],
        careerScope: "100% rotating internship in 1000-bed super-specialty hospital with extensive patient case exposure."
      },
      {
        id: "subharti-bds",
        name: "BDS (Subharti Dental College)",
        degree: "Undergraduate (UG)",
        duration: "5 Years (4 Yrs Academic + 1 Yr Internship)",
        fees: "₹3,25,000 / Year (₹13.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹2,95,000/yr • Clinical Lab & Exam: ₹30,000/yr",
        eligibility: "10+2 with PCB with minimum 50% marks + Valid NEET-UG score.",
        entranceExam: "NEET UG",
        seats: "100 Seats",
        mode: "Full-Time Regular",
        specializations: ["Periodontics", "Prosthodontics", "Pedodontics", "Oral Pathology"],
        careerScope: "High clinical volume dental hospital attached, clinical practice."
      }
    ]
  },
  {
    id: "col-pvt-26",
    name: "Era's Lucknow Medical College and Hospital (Era University)",
    shortName: "Era's Medical College Lucknow",
    type: "Private",
    category: "Medical & Healthcare",
    disciplines: ["medical"],
    city: "Uttar Pradesh",
    location: "Sarfarazganj, Hardoi Road, Lucknow",
    nirfRank: "Top 5 Private Medical Colleges in Uttar Pradesh",
    accreditation: "NAAC A+ Grade, NMC Approved",
    rating: "4.7",
    reviewsCount: 1950,
    established: "2001",
    avgPackage: "₹12.5 LPA",
    highestPackage: "₹36 LPA",
    fees: "₹16.6 Lakhs / yr",
    entranceExams: ["NEET UG", "NEET PG"],
    streams: ["MBBS (950-bed Hospital)", "MD / MS", "B.Sc Radiography & Medical Tech", "B.Pharm"],
    image: "assets/colleges/col-pvt-26.jpg",
    highlights: ["950+ Bed Multi-Specialty Hospital", "Asia's Advanced Medical Simulation Center", "NABH Accredited Blood Bank & Hospital"],
    description: "A leading private medical college in Lucknow equipped with advanced robotic clinical simulators, high patient OPD footfall, and intensive critical care units.",
    courses: [
      {
        id: "era-mbbs",
        name: "MBBS (Era's Lucknow Medical College)",
        degree: "Undergraduate (UG)",
        duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Compulsory Rotatory Internship)",
        fees: "₹16,60,000 / Year (Govt Approved Tuition)",
        feeBreakdown: "Annual Tuition: ₹16.60 Lakhs • Hostel & Mess: ₹1.85 Lakhs/yr",
        eligibility: "Passed 10+2 with minimum 50% marks in PCB. Must qualify NEET-UG and participate in UP DGME state medical counseling.",
        entranceExam: "NEET UG (UPDGME Counseling)",
        seats: "150 Seats",
        mode: "Full-Time Residential (950-Bed Hospital)",
        specializations: ["Clinical Medicine", "Surgery & Robotic Simulation", "Pediatrics", "Anesthesia & Critical Care", "Cardiology"],
        careerScope: "Top clinical residency, advanced simulation training on computerized mannequin patients, NHS UK overseas pathways."
      }
    ]
  },

  // Faculty of Management Studies (FMS Delhi / DU)
  {
    id: "col-gov-08",
    name: "Faculty of Management Studies (FMS), University of Delhi",
    shortName: "FMS Delhi (DU)",
    type: "Government",
    category: "Management & MBA",
    disciplines: ["management"],
    city: "Delhi / NCR",
    location: "Malka Ganj, North Campus, University of Delhi, Delhi",
    nirfRank: "Ranked Among Top 5 B-Schools in India",
    accreditation: "University of Delhi, Central University, AIU Approved",
    rating: "4.9",
    reviewsCount: 3820,
    established: "1954",
    avgPackage: "₹34.1 LPA",
    highestPackage: "₹1.23 CPA",
    fees: "₹1.0 Lakh / yr (₹2.0 Lakhs Total Course Fee)",
    entranceExams: ["CAT"],
    streams: ["MBA (Full-Time)", "Executive MBA", "MBA Healthcare Administration", "Ph.D in Management"],
    image: "assets/colleges/col-gov-08.jpg",
    highlights: ["Highest ROI in Asia", "100% Top-Tier Placements", "Red Building of Dreams (North Campus)"],
    description: "Affectionately called the 'Red Building of Dreams', FMS Delhi delivers world-renowned management pedagogy with unprecedented ROI, attracting top global investment banks and management consultancies.",
    courses: [
      {
        id: "fms-mba-fulltime",
        name: "Master of Business Administration (MBA Full-Time)",
        degree: "Postgraduate (PG)",
        duration: "2 Years (4 Semesters)",
        fees: "₹1,00,000 / Year (₹2,00,000 Total for 2 Years)",
        feeBreakdown: "Annual Tuition: ₹96,000 • Examination & Library: ₹4,000/yr",
        eligibility: "Candidates must hold a Bachelor's Degree in any discipline with at least 50% marks (45% for SC/ST/OBC/PWD/EWS). Valid CAT score followed by Extempore, Group Discussion & Personal Interview rounds.",
        entranceExam: "CAT (Common Admission Test conducted by IIMs)",
        seats: "251 Seats",
        mode: "Full-Time Regular (On-Campus)",
        specializations: ["Finance & Investment Banking", "Marketing & Brand Strategy", "Operations & Supply Chain", "Information Technology", "Strategy & Consulting"],
        careerScope: "Avg Package ₹34.1 LPA. Median Package ₹31.0 LPA. Highest Domestic ₹1.23 CPA. Top Recruiters: McKinsey, BCG, Bain & Co, Goldman Sachs, Morgan Stanley, Google, Microsoft, Unilever."
      },
      {
        id: "fms-mba-executive",
        name: "MBA Executive (Evening Program)",
        degree: "Executive PG",
        duration: "2 Years (Evening)",
        fees: "₹1,50,000 / Year (₹3,00,000 Total)",
        feeBreakdown: "Tuition: ₹1,40,000/yr • Case Studies: ₹10,000/yr",
        eligibility: "Bachelor's degree with min 45% marks + Minimum 5 years of full-time executive/managerial work experience. Selection based on academic background, executive presentation, and interview.",
        entranceExam: "Executive Assessment + Academic Profile + Personal Interview",
        seats: "200 Seats",
        mode: "Part-Time Evening (Working Professionals)",
        specializations: ["Strategic Management", "Corporate Finance", "Global Marketing", "Business Analytics"],
        careerScope: "Fast-track leadership acceleration for working corporate executives."
      }
    ]
  },

  // Institute of Management Technology (IMT Ghaziabad)
  {
    id: "col-pvt-27",
    name: "Institute of Management Technology (IMT) Ghaziabad",
    shortName: "IMT Ghaziabad",
    type: "Private",
    category: "Management & MBA",
    disciplines: ["management"],
    city: "Delhi / NCR",
    location: "Raj Nagar, Ghaziabad, Delhi NCR",
    nirfRank: "NIRF #35 Management / Top 10 Private B-Schools",
    accreditation: "AACSB Accredited, AICTE, NBA, AIU Approved",
    rating: "4.8",
    reviewsCount: 3100,
    established: "1980",
    avgPackage: "₹17.35 LPA",
    highestPackage: "₹65.6 LPA",
    fees: "₹10.5 Lakhs / yr (₹21.0 Lakhs Total Course Fee)",
    entranceExams: ["CAT", "XAT", "GMAT"],
    streams: ["PGDM (Core)", "PGDM Marketing", "PGDM Finance", "PGDM Dual Country (DCP)", "PGDM Banking & FinTech"],
    image: "assets/colleges/col-pvt-27.jpg",
    highlights: ["AACSB Accredited", "India's #1 Marketing B-School", "Global Dual-Country Program (Dubai Campus)"],
    description: "A premier AACSB-accredited business school renowned nationwide for excellence in marketing, supply chain, and banking leadership with a powerful 15,000+ strong corporate alumni network.",
    courses: [
      {
        id: "imt-pgdm-core",
        name: "Post Graduate Diploma in Management (PGDM Core)",
        degree: "Postgraduate Diploma (PGDM - Equivalent to MBA)",
        duration: "2 Years (6 Trimesters)",
        fees: "₹10,50,000 / Year (₹21.00 Lakhs Total)",
        feeBreakdown: "Academic Tuition: ₹9.50 Lakhs/yr • Learning Material & Tech: ₹1.00 Lakh/yr",
        eligibility: "Bachelor's degree in any discipline with minimum 50% aggregate marks. Valid CAT / XAT / GMAT percentile (typically 90+ percentile) followed by Critical Thinking Test and Personal Interview.",
        entranceExam: "CAT / XAT / GMAT",
        seats: "360 Seats",
        mode: "Full-Time Residential (On-Campus)",
        specializations: ["Marketing Management", "Finance & Banking", "Operations & Supply Chain Analytics", "Strategy & Innovation", "Human Resources"],
        careerScope: "Avg Package ₹17.35 LPA. Top Recruiters: HUL, P&G, Reckitt, Google, Microsoft, Deloitte, KPMG, JP Morgan, Goldman Sachs, HSBC."
      },
      {
        id: "imt-pgdm-marketing",
        name: "PGDM in Marketing",
        degree: "Postgraduate Diploma (PGDM)",
        duration: "2 Years (6 Trimesters)",
        fees: "₹10,50,000 / Year (₹21.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹9.50 Lakhs/yr • Digital Lab & Simulations: ₹1.00 Lakh/yr",
        eligibility: "Graduate with min 50% aggregate marks. Scorecard in CAT/XAT followed by IMT personal interview assessment.",
        entranceExam: "CAT / XAT",
        seats: "180 Seats",
        mode: "Full-Time Residential",
        specializations: ["Digital Brand Strategy", "Consumer Insights & Neuromarketing", "Omnichannel Retail & E-Commerce", "B2B Sales Leadership"],
        careerScope: "India's premier marketing program. Avg Package ₹18.1 LPA. Unbeatable placement in FMCG and Tech."
      }
    ]
  },

  // Birla Institute of Management Technology (BIMTECH Greater Noida)
  {
    id: "col-pvt-28",
    name: "Birla Institute of Management Technology (BIMTECH Greater Noida)",
    shortName: "BIMTECH Greater Noida",
    type: "Private",
    category: "Management & MBA",
    disciplines: ["management"],
    city: "Greater Noida",
    location: "Plot No. 5, Knowledge Park 2, Greater Noida",
    nirfRank: "NIRF #48 Management / NAAC A+ Grade",
    accreditation: "AACSB Accredited, AICTE, AIU, NBA Approved",
    rating: "4.7",
    reviewsCount: 2450,
    established: "1988",
    avgPackage: "₹11.2 LPA",
    highestPackage: "₹24.4 LPA",
    fees: "₹7.0 Lakhs / yr (₹14.0 Lakhs Total Course Fee)",
    entranceExams: ["CAT", "XAT", "CMAT", "MAT"],
    streams: ["PGDM", "PGDM International Business", "PGDM Retail Management", "PGDM Insurance Business Management"],
    image: "assets/colleges/col-pvt-28.jpg",
    highlights: ["Prestigious Birla Legacy", "AACSB Accredited Institution", "100% Placements with Global Immersion"],
    description: "Established under the aegis of the Birla Academy of Art and Culture, BIMTECH is a top AACSB-accredited B-school in Knowledge Park 2 celebrated for ethical leadership and stellar industry connections.",
    courses: [
      {
        id: "bimtech-pgdm-general",
        name: "PGDM (Post Graduate Diploma in Management)",
        degree: "Postgraduate Diploma (AICTE / AIU MBA Equivalent)",
        duration: "2 Years (6 Trimesters)",
        fees: "₹7,00,000 / Year (₹14.00 Lakhs Total)",
        feeBreakdown: "Annual Tuition: ₹6,50,000 • Course Material & Exam: ₹50,000/yr",
        eligibility: "Minimum 50% marks in Graduation in any discipline. Candidate must have appeared in CAT / XAT / CMAT / MAT followed by Extempore and Personal Interview.",
        entranceExam: "CAT / XAT / CMAT / MAT",
        seats: "240 Seats",
        mode: "Full-Time Residential (Knowledge Park 2 Campus)",
        specializations: ["Marketing", "Financial Services", "Operations & Decision Sciences", "Human Resource & Analytics"],
        careerScope: "Avg Package ₹11.2 LPA. Top Recruiters: Ernst & Young, Gartner, KPMG, Wipro, Infosys, Maruti Suzuki, ICICI Bank, Aditya Birla Group."
      },
      {
        id: "bimtech-pgdm-ib",
        name: "PGDM in International Business (IB)",
        degree: "Postgraduate Diploma (PGDM)",
        duration: "2 Years (6 Trimesters)",
        fees: "₹7,00,000 / Year (₹14.00 Lakhs Total)",
        feeBreakdown: "Tuition: ₹6,50,000/yr • International Trade Simulation: ₹50,000/yr",
        eligibility: "Graduation with minimum 50% marks in any discipline. Scorecard of CAT/XAT/CMAT.",
        entranceExam: "CAT / XAT / CMAT",
        seats: "60 Seats",
        mode: "Full-Time Residential",
        specializations: ["Cross-Border Trade & Finance", "Global Supply Chain Logistics", "Export-Import Governance", "International Marketing"],
        careerScope: "Direct placements in multinational export-import corporations, global shipping lines, and cross-border trade consultancies."
      }
    ]
  },
  {
    "id": "col-gov-iitb",
    "name": "Indian Institute of Technology (IIT) Bombay",
    "shortName": "IIT Bombay",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "Powai, Mumbai",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b932.5 LPA",
    "highestPackage": "\u20b93.67 CPA",
    "fees": "\u20b92.25 Lakhs / yr",
    "entranceExams": [
      "JEE Main",
      "JEE Advanced"
    ],
    "streams": [
      "Computer Science & Engineering",
      "Electrical Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #1 Engineering",
      "Global Tech Recruiter Destination"
    ],
    "description": "Indian Institute of Technology (IIT) Bombay is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iitb-iitb-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.25 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.25 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling (IIT Admissions)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b932.5 LPA. Highest Package \u20b93.67 CPA."
      },
      {
        "id": "col-gov-iitb-iitb-ee",
        "name": "B.Tech in Electrical Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.25 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.25 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b932.5 LPA. Highest Package \u20b93.67 CPA."
      }
    ]
  },
  {
    "id": "col-gov-iitm",
    "name": "Indian Institute of Technology (IIT) Madras",
    "shortName": "IIT Madras",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Chennai / Tamil Nadu",
    "location": "Adyar, Chennai",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b930.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.1 Lakhs / yr",
    "entranceExams": [
      "JEE Main",
      "JEE Advanced"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #1 Overall in India",
      "IITM Research Park Ecosystem"
    ],
    "description": "Indian Institute of Technology (IIT) Madras is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iitm-iitm-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.1 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.1 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b930.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iitk",
    "name": "Indian Institute of Technology (IIT) Kanpur",
    "shortName": "IIT Kanpur",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Kanpur / Uttar Pradesh",
    "location": "Kalyanpur, Kanpur",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b928.7 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.2 Lakhs / yr",
    "entranceExams": [
      "JEE Main",
      "JEE Advanced"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Legendary Computing & Cybersecurity Pioneer"
    ],
    "description": "Indian Institute of Technology (IIT) Kanpur is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iitk-iitk-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.2 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.2 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b928.7 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iitkgp",
    "name": "Indian Institute of Technology (IIT) Kharagpur",
    "shortName": "IIT Kharagpur",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Kharagpur / West Bengal",
    "location": "Kharagpur Campus",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b926.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.2 Lakhs / yr",
    "entranceExams": [
      "JEE Main",
      "JEE Advanced"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "India's First IIT",
      "Vast 2,100-Acre Campus & Alumni Network"
    ],
    "description": "Indian Institute of Technology (IIT) Kharagpur is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iitkgp-iitkgp-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.2 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.2 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b926.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iitr",
    "name": "Indian Institute of Technology (IIT) Roorkee",
    "shortName": "IIT Roorkee",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Roorkee / Uttarakhand",
    "location": "Roorkee Campus",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b925.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.2 Lakhs / yr",
    "entranceExams": [
      "JEE Main",
      "JEE Advanced"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Oldest Technical Institute in Asia",
      "Active AI & Robotics"
    ],
    "description": "Indian Institute of Technology (IIT) Roorkee is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iitr-iitr-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.2 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.2 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b925.8 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iitbhu",
    "name": "Indian Institute of Technology (BHU) Varanasi",
    "shortName": "IIT (BHU) Varanasi",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Varanasi / Uttar Pradesh",
    "location": "BHU Campus, Varanasi",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b924.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.2 Lakhs / yr",
    "entranceExams": [
      "JEE Main",
      "JEE Advanced"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Centenary Engineering Legacy",
      "Top High-Frequency Trading Recruiter"
    ],
    "description": "Indian Institute of Technology (BHU) Varanasi is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iitbhu-iitbhu-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.2 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.2 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b924.0 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitt",
    "name": "National Institute of Technology (NIT) Tiruchirappalli",
    "shortName": "NIT Trichy",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Tiruchirappalli / Tamil Nadu",
    "location": "Thuvakudi, Trichy",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b927.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.75 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering",
      "Electronics & Communication Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #1 NIT in India",
      "Unmatched Software MNC Placements"
    ],
    "description": "National Institute of Technology (NIT) Tiruchirappalli is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitt-nitt-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b927.2 LPA. Highest Package \u20b942 LPA."
      },
      {
        "id": "col-gov-nitt-nitt-ece",
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b927.2 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitk",
    "name": "National Institute of Technology Karnataka (NITK) Surathkal",
    "shortName": "NIT Surathkal",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Mangalore / Karnataka",
    "location": "Surathkal, Mangalore",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b926.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.75 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Private Beachfront Campus",
      "Outstanding Tech Placements"
    ],
    "description": "National Institute of Technology Karnataka (NITK) Surathkal is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitk-nitk-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b926.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitw",
    "name": "National Institute of Technology (NIT) Warangal",
    "shortName": "NIT Warangal",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Warangal / Telangana",
    "location": "Kazipet, Warangal",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b925.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.75 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "First RECs in India",
      "Exceptional Coding Culture"
    ],
    "description": "National Institute of Technology (NIT) Warangal is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitw-nitw-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b925.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-mnnit",
    "name": "Motilal Nehru National Institute of Technology (MNNIT) Allahabad",
    "shortName": "MNNIT Allahabad",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Prayagraj / Uttar Pradesh",
    "location": "Teliarganj, Prayagraj",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b924.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.65 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Premier UP National Institute",
      "Top Software Recruitment"
    ],
    "description": "Motilal Nehru National Institute of Technology (MNNIT) Allahabad is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-mnnit-mnnit-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.65 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.65 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB (UP Home State 50%)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b924.8 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitr",
    "name": "National Institute of Technology (NIT) Rourkela",
    "shortName": "NIT Rourkela",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Rourkela / Odisha",
    "location": "Sector 1, Rourkela",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b922.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.75 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Extensive 1200-Acre Campus",
      "Strong Tech Innovations"
    ],
    "description": "National Institute of Technology (NIT) Rourkela is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitr-nitr-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b922.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitc",
    "name": "National Institute of Technology (NIT) Calicut",
    "shortName": "NIT Calicut",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Kozhikode / Kerala",
    "location": "Chathamangalam, Calicut",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b921.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.75 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Top Technical Institute in South India"
    ],
    "description": "National Institute of Technology (NIT) Calicut is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitc-nitc-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b921.8 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-iiith",
    "name": "International Institute of Information Technology (IIIT) Hyderabad",
    "shortName": "IIIT Hyderabad",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Hyderabad / Telangana",
    "location": "Gachibowli, Hyderabad",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b932.2 LPA",
    "highestPackage": "\u20b91.02 CPA",
    "fees": "\u20b94.0 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "India's #1 Coding Institute",
      "Supreme Research Labs & ICPC World Finalists"
    ],
    "description": "International Institute of Information Technology (IIIT) Hyderabad is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-iiith-iiith-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b94.0 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b94.0 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "IIIT Hyderabad Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b932.2 LPA. Highest Package \u20b91.02 CPA."
      }
    ]
  },
  {
    "id": "col-gov-iiitd",
    "name": "Indraprastha Institute of Information Technology (IIIT) Delhi",
    "shortName": "IIIT Delhi",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "Okhla Phase 3, New Delhi",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b923.7 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b94.5 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Top Tier Computer Science & AI Research Campus"
    ],
    "description": "Indraprastha Institute of Information Technology (IIIT) Delhi is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iiitd-iiitd-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b94.5 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b94.5 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JAC Delhi Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b923.7 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iiita",
    "name": "Indian Institute of Information Technology (IIIT) Allahabad",
    "shortName": "IIIT Allahabad",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Prayagraj / Uttar Pradesh",
    "location": "Jhalwa, Prayagraj",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b925.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.95 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Information Technology"
    ],
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Institute of National Importance",
      "Top IT & Cyber Tech Recruiters"
    ],
    "description": "Indian Institute of Information Technology (IIIT) Allahabad is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iiita-iiita-it",
        "name": "B.Tech in Information Technology",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.95 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.95 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b925.8 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nsut",
    "name": "Netaji Subhas University of Technology (NSUT Delhi)",
    "shortName": "NSUT Delhi",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "Dwarka, New Delhi",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b920.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.1 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Premier Delhi Engineering Campus",
      "Renowned Tech Placements"
    ],
    "description": "Netaji Subhas University of Technology (NSUT Delhi) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nsut-nsut-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.1 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.1 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JAC Delhi",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b920.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-coep",
    "name": "COEP Technological University (College of Engineering Pune)",
    "shortName": "COEP Pune",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Pune / Maharashtra",
    "location": "Shivajinagar, Pune",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b917.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.4 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Historic 1854 Legacy",
      "Maharashtra's #1 Tech University"
    ],
    "description": "COEP Technological University (College of Engineering Pune) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-coep-coep-cse",
        "name": "B.Tech in Computer Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.4 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.4 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "DTE Maharashtra / CAP Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b917.8 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-hbtu",
    "name": "Harcourt Butler Technical University (HBTU Kanpur)",
    "shortName": "HBTU Kanpur",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Kanpur / Uttar Pradesh",
    "location": "Nawabganj, Kanpur",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.35 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Century-Old Premier UP State University",
      "Strong Core & IT Placement"
    ],
    "description": "Harcourt Butler Technical University (HBTU Kanpur) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-hbtu-hbtu-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.35 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.35 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "HBTU Central Counseling / JEE Main",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b912.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-bmsce",
    "name": "BMS College of Engineering (BMSCE Bangalore)",
    "shortName": "BMSCE Bangalore",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Bangalore / Karnataka",
    "location": "Basavanagudi, Bengaluru",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b913.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.4 Lakhs - \u20b98.5 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "First Private Engineering College in India (Est. 1946)"
    ],
    "description": "BMS College of Engineering (BMSCE Bangalore) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-bmsce-bmsce-cse",
        "name": "B.E. in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.4 Lakhs - \u20b98.5 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.4 Lakhs - \u20b98.5 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "COMEDK / KEA",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b913.8 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-pes",
    "name": "PES University (RR & Electronic City Campus)",
    "shortName": "PES University Bangalore",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Bangalore / Karnataka",
    "location": "100 Feet Ring Road, BSK III Stage, Bengaluru",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b94.5 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Top Tier Tech Placement in Bengaluru",
      "Super Dream Offer Hub"
    ],
    "description": "PES University (RR & Electronic City Campus) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-pes-pes-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b94.5 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b94.5 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "PES University Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b915.2 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-jss",
    "name": "JSS Academy of Technical Education (JSS Noida)",
    "shortName": "JSS Noida",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "Sector 62, Noida",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b97.9 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.40 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Prime Noida Sector 62 Location",
      "Established Top-Ranked AKTU College"
    ],
    "description": "JSS Academy of Technical Education (JSS Noida) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-jss-jss-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.40 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.40 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "UPTAC Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b97.9 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-akgec",
    "name": "Ajay Kumar Garg Engineering College (AKGEC Ghaziabad)",
    "shortName": "AKGEC Ghaziabad",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "27th Km Stone, Delhi-Hapur Bypass, Ghaziabad",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b97.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.42 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Industrial Automation & Robotics Lab with KUKA",
      "Top AKTU Enrolment"
    ],
    "description": "Ajay Kumar Garg Engineering College (AKGEC Ghaziabad) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-akgec-akgec-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.42 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.42 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "UPTAC Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b97.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-kiet",
    "name": "KIET Group of Institutions (Delhi-NCR Ghaziabad)",
    "shortName": "KIET Ghaziabad",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "Delhi-NCR, Meerut Road, Ghaziabad",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b97.6 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.40 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NBA Accredited",
      "Excellent Coding and Product Company Record"
    ],
    "description": "KIET Group of Institutions (Delhi-NCR Ghaziabad) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-kiet-kiet-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.40 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.40 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "UPTAC Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b97.6 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-cu",
    "name": "Chandigarh University (Mohali / Chandigarh)",
    "shortName": "Chandigarh University (CU)",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Punjab / Chandigarh",
    "location": "NH-05, Ludhiana - Chandigarh Highway",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b97.4 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.8 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NAAC A+ Grade",
      "Limca Book Record for Campus Placements"
    ],
    "description": "Chandigarh University (Mohali / Chandigarh) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-cu-cu-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.8 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.8 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "Chandigarh University Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b97.4 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-lpu",
    "name": "Lovely Professional University (LPU)",
    "shortName": "LPU Phagwara / Jalandhar",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Punjab",
    "location": "Jalandhar - Delhi G.T. Road, Phagwara",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b97.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.6 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Mega 600-Acre Campus",
      "Global Placement Opportunities"
    ],
    "description": "Lovely Professional University (LPU) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-lpu-lpu-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.6 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.6 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "LPUNEST Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b97.2 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iiitl",
    "name": "Indian Institute of Information Technology (IIIT) Lucknow",
    "shortName": "IIIT Lucknow",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Lucknow / Uttar Pradesh",
    "location": "Ahmamau, Lucknow",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b926.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92.4 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Artificial Intelligence"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Institute of National Importance",
      "Top Emerging AI/CS Hub",
      "Highest \u20b959 LPA"
    ],
    "description": "Indian Institute of Information Technology (IIIT) Lucknow is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iiitl-iiitl-cs",
        "name": "B.Tech in Computer Science & Artificial Intelligence",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b92.4 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b92.4 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b926.0 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitkkr",
    "name": "National Institute of Technology (NIT) Kurukshetra",
    "shortName": "NIT Kurukshetra",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Kurukshetra / Haryana",
    "location": "Kurukshetra, Haryana",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b917.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.65 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Established 1963 Legacy",
      "Top Delhi-NCR Tech Recruiter Gateway"
    ],
    "description": "National Institute of Technology (NIT) Kurukshetra is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitkkr-nitkkr-cse",
        "name": "B.Tech in Computer Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.65 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.65 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b917.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-nitd",
    "name": "National Institute of Technology (NIT) Delhi",
    "shortName": "NIT Delhi",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "Narela, New Delhi",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b918.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.75 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Capital City Advantage",
      "New Permanent Campus at Narela"
    ],
    "description": "National Institute of Technology (NIT) Delhi is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-nitd-nitdelhi-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.75 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.75 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JoSAA / CSAB",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b918.0 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-pec",
    "name": "Punjab Engineering College (PEC Chandigarh)",
    "shortName": "PEC Chandigarh",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Chandigarh",
    "location": "Sector 12, Chandigarh",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b916.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.95 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Founded 1921",
      "Renowned Alumni (Astronaut Kalpana Chawla)"
    ],
    "description": "Punjab Engineering College (PEC Chandigarh) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-pec-pec-chd-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.95 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.95 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "JAC Chandigarh / JoSAA",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b916.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-iet",
    "name": "Institute of Engineering & Technology (IET Lucknow)",
    "shortName": "IET Lucknow",
    "type": "Government",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Lucknow / Uttar Pradesh",
    "location": "Sitapur Road, Lucknow",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b910.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b995,000 / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "The 'IIT of AKTU'",
      "Highest Ranking State Engineering College in Uttar Pradesh"
    ],
    "description": "Institute of Engineering & Technology (IET Lucknow) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iet-iet-lucknow-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b995,000 / yr",
        "feeBreakdown": "Annual Fee: \u20b995,000 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "UPTAC (AKTU #1 Govt Engineering College)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b910.5 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-mait",
    "name": "Maharaja Agrasen Institute of Technology (MAIT Delhi)",
    "shortName": "MAIT Delhi",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "PSP Area, Sector 22, Rohini, Delhi",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b99.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.4 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Top Choice under IP University",
      "Leading Product Company Recruiters"
    ],
    "description": "Maharaja Agrasen Institute of Technology (MAIT Delhi) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-mait-mait-delhi-cse",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.4 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.4 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "IPU Central Counseling (GGSIPU #1 College)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b99.2 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-pvt-abes",
    "name": "ABES Engineering College (Ghaziabad, Delhi-NCR)",
    "shortName": "ABES Ghaziabad",
    "type": "Private",
    "category": "Engineering & Tech",
    "disciplines": [
      "engineering",
      "technology"
    ],
    "city": "Delhi / NCR",
    "location": "19th Km Stone, NH-24, Ghaziabad",
    "nirfRank": "Premier Engineering & Tech",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b97.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.42 Lakhs / yr",
    "entranceExams": [
      "JEE Main"
    ],
    "streams": [
      "Computer Science & Engineering"
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "High Enrolment",
      "Cisco Networking Academy & AWS Cloud Labs"
    ],
    "description": "ABES Engineering College (Ghaziabad, Delhi-NCR) is recognized among India's leading institutions for Engineering & Tech, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-abes-abes-ghaziabad",
        "name": "B.Tech in Computer Science & Engineering",
        "degree": "Undergraduate (UG)",
        "duration": "4 Years (8 Semesters)",
        "fees": "\u20b91.42 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.42 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Mathematics and Chemistry/CS with min 75% marks (or 60% for state private). Qualify JEE.",
        "entranceExam": "UPTAC Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Cloud Computing",
          "Artificial Intelligence & ML",
          "Cybersecurity",
          "Data Engineering"
        ],
        "careerScope": "Avg Package \u20b97.2 LPA. Highest Package \u20b942 LPA."
      }
    ]
  },
  {
    "id": "col-gov-aiims-jod",
    "name": "All India Institute of Medical Sciences (AIIMS) Jodhpur",
    "shortName": "AIIMS Jodhpur",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Rajasthan",
    "location": "Basni, Jodhpur",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b916.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b95,856 Total Course Fee",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Top 2nd Generation AIIMS",
      "Premier Robotic Surgical Infrastructure"
    ],
    "description": "All India Institute of Medical Sciences (AIIMS) Jodhpur is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-aiims-jod-aiims-jodhpur",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b95,856 Total Course Fee",
        "feeBreakdown": "Annual Fee: \u20b95,856 Total Course Fee \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b916.0 LPA. Associated with 1,000+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-aiims-bho",
    "name": "All India Institute of Medical Sciences (AIIMS) Bhopal",
    "shortName": "AIIMS Bhopal",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Madhya Pradesh",
    "location": "Saket Nagar, Bhopal",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b95,856 Total Course Fee",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Institute of National Importance",
      "Advanced Clinical Diagnostic Centers"
    ],
    "description": "All India Institute of Medical Sciences (AIIMS) Bhopal is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-aiims-bho-aiims-bhopal",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b95,856 Total Course Fee",
        "feeBreakdown": "Annual Fee: \u20b95,856 Total Course Fee \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b915.5 LPA. Associated with 960+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-aiims-rsh",
    "name": "All India Institute of Medical Sciences (AIIMS) Rishikesh",
    "shortName": "AIIMS Rishikesh",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Uttarakhand",
    "location": "Virbhadra Road, Rishikesh",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b95,856 Total Course Fee",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "High-Altitude Trauma & Disaster Medicine Center",
      "Apex Himalayan Healthcare"
    ],
    "description": "All India Institute of Medical Sciences (AIIMS) Rishikesh is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-aiims-rsh-aiims-rishikesh",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b95,856 Total Course Fee",
        "feeBreakdown": "Annual Fee: \u20b95,856 Total Course Fee \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b915.2 LPA. Associated with 1,050+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-aiims-pat",
    "name": "All India Institute of Medical Sciences (AIIMS) Patna",
    "shortName": "AIIMS Patna",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Bihar",
    "location": "Phulwari Sharif, Patna",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b95,856 Total Course Fee",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Major Regional Tertiary Hub",
      "Modern Multi-Specialty Hospital"
    ],
    "description": "All India Institute of Medical Sciences (AIIMS) Patna is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-aiims-pat-aiims-patna",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b95,856 Total Course Fee",
        "feeBreakdown": "Annual Fee: \u20b95,856 Total Course Fee \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b914.8 LPA. Associated with 960+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-jipmer",
    "name": "JIPMER (Jawaharlal Institute of Postgraduate Medical Education & Research)",
    "shortName": "JIPMER Puducherry",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Puducherry",
    "location": "Dhanvantari Nagar, Puducherry",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b917.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912,620 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Autonomous Institute of National Importance",
      "Super Speciality Research"
    ],
    "description": "JIPMER (Jawaharlal Institute of Postgraduate Medical Education & Research) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-jipmer-jipmer-puducherry",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b912,620 / yr",
        "feeBreakdown": "Annual Fee: \u20b912,620 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b917.0 LPA. Associated with 2,150+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-vmmc",
    "name": "Vardhman Mahavir Medical College & Safdarjung Hospital",
    "shortName": "VMMC & Safdarjung Hospital",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "Ring Road, Safdarjung, New Delhi",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b933,500 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "One of Largest Tertiary Teaching Hospitals in South Asia"
    ],
    "description": "Vardhman Mahavir Medical College & Safdarjung Hospital is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-vmmc-vmmc-delhi",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b933,500 / yr",
        "feeBreakdown": "Annual Fee: \u20b933,500 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC / IPU Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b915.5 LPA. Associated with 2,900+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-lhmc",
    "name": "Lady Hardinge Medical College (LHMC Delhi)",
    "shortName": "LHMC New Delhi",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "Connaught Place, New Delhi",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b92,500 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS (For Female Candidates)"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Historic Central Delhi Institution",
      "Associated Kalawati Saran Children's Hospital"
    ],
    "description": "Lady Hardinge Medical College (LHMC Delhi) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-lhmc-lhmc-delhi",
        "name": "MBBS (For Female Candidates)",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b92,500 / yr",
        "feeBreakdown": "Annual Fee: \u20b92,500 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central / DU Quota",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b914.2 LPA. Associated with 1,400+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-ucms",
    "name": "University College of Medical Sciences (UCMS) & GTB Hospital",
    "shortName": "UCMS Delhi",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "Dilshad Garden, Delhi",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b95,200 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Premier Research Medical College",
      "1800-Bed Guru Teg Bahadur Hospital"
    ],
    "description": "University College of Medical Sciences (UCMS) & GTB Hospital is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-ucms-ucms-delhi",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b95,200 / yr",
        "feeBreakdown": "Annual Fee: \u20b95,200 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Central / DU Quota",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b914.5 LPA. Associated with 1,800+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-gsvm",
    "name": "GSVM Medical College Kanpur",
    "shortName": "GSVM Kanpur",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Kanpur / Uttar Pradesh",
    "location": "Swaroop Nagar, Kanpur",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b936,000 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Top 2nd Govt Medical College in UP",
      "LLR Hospital Complex"
    ],
    "description": "GSVM Medical College Kanpur is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-gsvm-gsvm-kanpur",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b936,000 / yr",
        "feeBreakdown": "Annual Fee: \u20b936,000 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME / MCC Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b912.0 LPA. Associated with 2,200+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-sms",
    "name": "Sawai Man Singh (SMS) Medical College Jaipur",
    "shortName": "SMS Jaipur",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Jaipur / Rajasthan",
    "location": "JLN Marg, Jaipur",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b913.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b928,500 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Rajasthan's #1 Medical Institution",
      "Super-Specialty Inpatient Care"
    ],
    "description": "Sawai Man Singh (SMS) Medical College Jaipur is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-sms-sms-jaipur",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b928,500 / yr",
        "feeBreakdown": "Annual Fee: \u20b928,500 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "Rajasthan NEET Counseling / MCC",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b913.5 LPA. Associated with 4,000+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-kem",
    "name": "Seth GS Medical College & KEM Hospital Mumbai",
    "shortName": "KEM Mumbai",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "Parel, Mumbai",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b91.15 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Century-Old Mumbai Medical Landmark",
      "Exceptional Clinical Caseload"
    ],
    "description": "Seth GS Medical College & KEM Hospital Mumbai is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-kem-kem-mumbai",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b91.15 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b91.15 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "DME Maharashtra / MCC",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b914.0 LPA. Associated with 1,800+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-bmcri",
    "name": "Bangalore Medical College & Research Institute (BMCRI)",
    "shortName": "BMCRI Bangalore",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Bangalore / Karnataka",
    "location": "Fort, KR Road, Bengaluru",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b913.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b965,000 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Karnataka's #1 Premier Medical College",
      "Victoria & Vani Vilas Hospitals"
    ],
    "description": "Bangalore Medical College & Research Institute (BMCRI) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-bmcri-bmcri-bangalore",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b965,000 / yr",
        "feeBreakdown": "Annual Fee: \u20b965,000 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "KEA Karnataka / MCC",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b913.5 LPA. Associated with 3,000+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-cmc",
    "name": "Christian Medical College (CMC Vellore)",
    "shortName": "CMC Vellore",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Vellore / Tamil Nadu",
    "location": "Ida Scudder Road, Vellore",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b952,000 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #3 Medical in India",
      "World-Renowned Medical Education & Research"
    ],
    "description": "Christian Medical College (CMC Vellore) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-cmc-cmc-vellore",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b952,000 / yr",
        "feeBreakdown": "Annual Fee: \u20b952,000 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "Tamil Nadu State Counseling (DME)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b915.8 LPA. Associated with 3,000+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-stjohns",
    "name": "St. John's Medical College (Bangalore)",
    "shortName": "St. John's Bangalore",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Bangalore / Karnataka",
    "location": "Sarjapur Road, John Nagar, Bengaluru",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b97.4 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #13 Medical in India",
      "Premier Non-Profit Medical Academy"
    ],
    "description": "St. John's Medical College (Bangalore) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-stjohns-st-johns-bangalore",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b97.4 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b97.4 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "KEA Karnataka Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b914.0 LPA. Associated with 1,350+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-kmcmang",
    "name": "Kasturba Medical College (KMC Mangalore, MAHE)",
    "shortName": "KMC Mangalore",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Karnataka",
    "location": "Light House Hill Road, Mangalore",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b913.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b917.8 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Sister Campus of KMC Manipal",
      "Wenlock & KMC Hospitals Clinical Base"
    ],
    "description": "Kasturba Medical College (KMC Mangalore, MAHE) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-kmcmang-kmc-mangalore",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b917.8 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b917.8 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Deemed Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b913.8 LPA. Associated with 1,500+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-himsr",
    "name": "Hamdard Institute of Medical Sciences & Research (HIMSR New Delhi)",
    "shortName": "HIMSR New Delhi",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "Jamia Hamdard, Hamdard Nagar, New Delhi",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b916.0 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NAAC A+ Deemed University in South Delhi",
      "HAH Centenary Hospital"
    ],
    "description": "Hamdard Institute of Medical Sciences & Research (HIMSR New Delhi) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-himsr-himsr-delhi",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b916.0 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b916.0 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Deemed Medical Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b912.5 LPA. Associated with 750+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-mmc",
    "name": "Muzaffarnagar Medical College (MMC Muzaffarnagar)",
    "shortName": "Muzaffarnagar Medical College",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Uttar Pradesh",
    "location": "Opp. Begrajpur Industrial Area, Muzaffarnagar",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b99.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912.8 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Established UP Private Medical College",
      "High Patient OPD Volume"
    ],
    "description": "Muzaffarnagar Medical College (MMC Muzaffarnagar) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-mmc-muzaffarnagar-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b912.8 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b912.8 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME UP State Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b99.8 LPA. Associated with 850+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-rmc",
    "name": "Rohilkhand Medical College & Hospital (Bareilly)",
    "shortName": "Rohilkhand Medical College",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Uttar Pradesh",
    "location": "Pilibhit Bypass Road, Bareilly",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b910.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b913.0 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Well-Regarded Medical Institute in Western UP",
      "Modern ICUs"
    ],
    "description": "Rohilkhand Medical College & Hospital (Bareilly) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-rmc-rohilkhand-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b913.0 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b913.0 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME UP State Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b910.0 LPA. Associated with 920+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-hims",
    "name": "Hind Institute of Medical Sciences (Barabanki / Sitapur)",
    "shortName": "Hind Medical College UP",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Uttar Pradesh",
    "location": "Safedabad, Barabanki / Sitapur",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b99.6 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b911.7 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Affiliated with Dr. RML Avadh University",
      "Strong Clinical Training"
    ],
    "description": "Hind Institute of Medical Sciences (Barabanki / Sitapur) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-hims-hind-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b911.7 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b911.7 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b99.6 LPA. Associated with 750+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-sims",
    "name": "Saraswathi Institute of Medical Sciences (SIMS Hapur, NCR)",
    "shortName": "Saraswathi Medical College Hapur",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "NH-24, Anwarpur, Pilkhuwa, Hapur, Delhi-NCR",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b99.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b911.8 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Located on Delhi-Lucknow NH-24",
      "800-Bed Multi-Specialty Hospital"
    ],
    "description": "Saraswathi Institute of Medical Sciences (SIMS Hapur, NCR) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-sims-saraswathi-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b911.8 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b911.8 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b99.2 LPA. Associated with 800+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-rama",
    "name": "Rama Medical College Hospital & Research Centre (Hapur / Kanpur)",
    "shortName": "Rama Medical College Hapur",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "NH-24, Delhi-Hapur Highway, Hapur",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b99.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912.6 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Integrated Super-Specialty Medical Complex on NH-24"
    ],
    "description": "Rama Medical College Hospital & Research Centre (Hapur / Kanpur) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-rama-rama-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b912.6 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b912.6 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b99.0 LPA. Associated with 750+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-gsmc",
    "name": "GS Medical College & Hospital (Pilkhuwa, Hapur)",
    "shortName": "GS Medical College Pilkhuwa",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Delhi / NCR",
    "location": "Near Railway Crossing, Pilkhuwa, Hapur, NCR",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b98.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b911.78 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NABH Accredited Hospital",
      "Serving Rural & Semi-Urban NCR Patients"
    ],
    "description": "GS Medical College & Hospital (Pilkhuwa, Hapur) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-gsmc-gs-medical-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b911.78 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b911.78 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b98.8 LPA. Associated with 650+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-rml",
    "name": "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS Lucknow)",
    "shortName": "RMLIMS Lucknow",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Lucknow / Uttar Pradesh",
    "location": "Vibhuti Khand, Gomti Nagar, Lucknow",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b913.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b936,500 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Autonomous Super-Specialty Medical Institute in Gomti Nagar"
    ],
    "description": "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS Lucknow) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-rml-rml-lucknow",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b936,500 / yr",
        "feeBreakdown": "Annual Fee: \u20b936,500 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME / MCC Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b913.5 LPA. Associated with 1,400+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-mmc",
    "name": "Madras Medical College (MMC Chennai)",
    "shortName": "Madras Medical College",
    "type": "Government",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Chennai / Tamil Nadu",
    "location": "EVR Periyar Salai, Park Town, Chennai",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b918,073 / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Established 1835 (3rd Oldest Medical College in India)",
      "Rajiv Gandhi Govt General Hospital"
    ],
    "description": "Madras Medical College (MMC Chennai) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-mmc-mmc-chennai",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b918,073 / yr",
        "feeBreakdown": "Annual Fee: \u20b918,073 / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "DME Tamil Nadu / MCC",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b914.2 LPA. Associated with 3,000+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-kims",
    "name": "Kalinga Institute of Medical Sciences (KIMS Bhubaneswar)",
    "shortName": "KIMS Bhubaneswar",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Bhubaneswar / Odisha",
    "location": "Kushabhadra Campus, Patia, Bhubaneswar",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b918.5 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "2600-Bed Super Specialty Hospital",
      "NABH & NABL Accredited"
    ],
    "description": "Kalinga Institute of Medical Sciences (KIMS Bhubaneswar) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-kims-kims-bhubaneswar",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b918.5 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b918.5 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "MCC Deemed Medical Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b912.0 LPA. Associated with 2,600+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-pims",
    "name": "Prasad Institute of Medical Sciences (PIMS Lucknow)",
    "shortName": "Prasad Medical College Lucknow",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Uttar Pradesh",
    "location": "Sarojini Nagar, Kanpur Road, Lucknow",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b98.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b911.0 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Accessible Lucknow Location on Kanpur Road",
      "650-Bed Teaching Facility"
    ],
    "description": "Prasad Institute of Medical Sciences (PIMS Lucknow) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-pims-prasad-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b911.0 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b911.0 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b98.5 LPA. Associated with 650+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-pvt-mims",
    "name": "Mayo Institute of Medical Sciences (MIMS Barabanki / Lucknow NCR)",
    "shortName": "Mayo Medical College",
    "type": "Private",
    "category": "Medical & Healthcare",
    "disciplines": [
      "medical",
      "sciences"
    ],
    "city": "Uttar Pradesh",
    "location": "Faizabad Road, Gadia, Barabanki",
    "nirfRank": "Premier Medical & Healthcare",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b98.8 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b911.21 Lakhs / yr",
    "entranceExams": [
      "NEET-UG",
      "NEET-PG"
    ],
    "streams": [
      "MBBS"
    ],
    "image": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NABH Accredited Teaching Hospital on Lucknow-Faizabad Expressway"
    ],
    "description": "Mayo Institute of Medical Sciences (MIMS Barabanki / Lucknow NCR) is recognized among India's leading institutions for Medical & Healthcare, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-mims-mayo-mbbs",
        "name": "MBBS",
        "degree": "Undergraduate (UG)",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "fees": "\u20b911.21 Lakhs / yr",
        "feeBreakdown": "Annual Fee: \u20b911.21 Lakhs / yr \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Passed 10+2 with Physics, Chemistry & Biology with min 50% marks (40% for reserved). Must qualify NEET-UG.",
        "entranceExam": "UPDGME Counseling",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Community Medicine"
        ],
        "careerScope": "Avg Stipend / Package \u20b98.8 LPA. Associated with 700+ Bed Teaching Hospital."
      }
    ]
  },
  {
    "id": "col-gov-iima",
    "name": "Indian Institute of Management (IIM) Ahmedabad",
    "shortName": "IIM Ahmedabad",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Ahmedabad / Gujarat",
    "location": "Vastrapur, Ahmedabad",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b934.45 LPA",
    "highestPackage": "\u20b91.15 CPA",
    "fees": "\u20b912.5 Lakhs / yr (\u20b925.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Management (PGP / MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #1 Management in India",
      "Premier Global Business School",
      "Top McKinsey, BCG & Goldman Sachs Hub"
    ],
    "description": "Indian Institute of Management (IIM) Ahmedabad is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iima-iima-pgp",
        "name": "Post Graduate Program in Management (PGP / MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b912.5 Lakhs / yr (\u20b925.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b912.5 Lakhs / yr (\u20b925.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Ahmedabad Selection (CAT + AWT & PI)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b934.45 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iimb",
    "name": "Indian Institute of Management (IIM) Bangalore",
    "shortName": "IIM Bangalore",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Bangalore / Karnataka",
    "location": "Bannerghatta Road, Bengaluru",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b935.31 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912.25 Lakhs / yr (\u20b924.5 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Master of Business Administration (PGP / MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF #2 Management",
      "Leading Tech & Consulting Recruiter Destination"
    ],
    "description": "Indian Institute of Management (IIM) Bangalore is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iimb-iimb-pgp",
        "name": "Master of Business Administration (PGP / MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b912.25 Lakhs / yr (\u20b924.5 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b912.25 Lakhs / yr (\u20b924.5 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Bangalore Selection (CAT + WAT & PI)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b935.31 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iimc",
    "name": "Indian Institute of Management (IIM) Calcutta",
    "shortName": "IIM Calcutta",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Kolkata / West Bengal",
    "location": "Joka, Kolkata",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b935.07 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Master of Business Administration (MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Finance Capital of Indian B-Schools",
      "Triple Crown Accredited (AACSB, AMBA, EQUIS)"
    ],
    "description": "Indian Institute of Management (IIM) Calcutta is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iimc-iimc-pgp",
        "name": "Master of Business Administration (MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Calcutta Selection (CAT + WAT-PI)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b935.07 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iiml",
    "name": "Indian Institute of Management (IIM) Lucknow",
    "shortName": "IIM Lucknow",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Lucknow / Uttar Pradesh",
    "location": "Prabandh Nagar, IIM Road, Lucknow",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b932.2 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Management (PGP)"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF Top 5 Management",
      "Strongest Marketing & Strategy Alumni in India"
    ],
    "description": "Indian Institute of Management (IIM) Lucknow is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iiml-iiml-pgp",
        "name": "Post Graduate Programme in Management (PGP)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Lucknow Selection (CAT + WAT-PI)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b932.2 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iimk",
    "name": "Indian Institute of Management (IIM) Kozhikode",
    "shortName": "IIM Kozhikode",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Kozhikode / Kerala",
    "location": "Kunnamangalam, Kozhikode",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b931.02 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.25 Lakhs / yr (\u20b920.5 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Post Graduate Programme (PGP / MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Pioneer in Gender Diversity",
      "Picturesque Hilltop Campus & High Tech Placements"
    ],
    "description": "Indian Institute of Management (IIM) Kozhikode is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iimk-iimk-pgp",
        "name": "Post Graduate Programme (PGP / MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.25 Lakhs / yr (\u20b920.5 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.25 Lakhs / yr (\u20b920.5 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Kozhikode Selection Process",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b931.02 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iimi",
    "name": "Indian Institute of Management (IIM) Indore",
    "shortName": "IIM Indore",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Indore / Madhya Pradesh",
    "location": "Prabandh Shikhar, Rau-Pithampur Road, Indore",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b930.21 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Post Graduate Programme (PGP / MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Triple Crown Accredited",
      "193-Acre Scenic Campus"
    ],
    "description": "Indian Institute of Management (IIM) Indore is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iimi-iimi-pgp",
        "name": "Post Graduate Programme (PGP / MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Indore Selection Process",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b930.21 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iimm",
    "name": "Indian Institute of Management (IIM) Mumbai (formerly NITIE)",
    "shortName": "IIM Mumbai",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "Vihar Lake, Powai, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b931.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Master of Business Administration (General / Supply Chain & Operations)"
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "The Supply Chain & Operations Capital of India",
      "Surrounded by Lakes in Powai"
    ],
    "description": "Indian Institute of Management (IIM) Mumbai (formerly NITIE) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iimm-iimm-mba",
        "name": "Master of Business Administration (General / Supply Chain & Operations)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.5 Lakhs / yr (\u20b921.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIM Mumbai Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b931.0 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-xlri",
    "name": "XLRI - Xavier School of Management (Jamshedpur / Delhi NCR)",
    "shortName": "XLRI Jamshedpur",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Jharkhand",
    "location": "Circuit House Area, Jamshedpur",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b932.7 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b914.0 Lakhs / yr (\u20b928.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (Business Management / Human Resource Management)"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Oldest B-School in India (Est. 1949)",
      "Unrivaled HR & General Management Program"
    ],
    "description": "XLRI - Xavier School of Management (Jamshedpur / Delhi NCR) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-xlri-xlri-pgdm",
        "name": "PGDM (Business Management / Human Resource Management)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b914.0 Lakhs / yr (\u20b928.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b914.0 Lakhs / yr (\u20b928.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "XLRI Central Admissions (XAT + GD/PI)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b932.7 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-spjimr",
    "name": "S.P. Jain Institute of Management and Research (SPJIMR Mumbai)",
    "shortName": "SPJIMR Mumbai",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b933.0 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b911.25 Lakhs / yr (\u20b922.5 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Management (PGDM)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Ranked #1 Business School by Financial Times (India)",
      "Autumn Internships"
    ],
    "description": "S.P. Jain Institute of Management and Research (SPJIMR Mumbai) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-spjimr-spjimr-pgdm",
        "name": "Post Graduate Diploma in Management (PGDM)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b911.25 Lakhs / yr (\u20b922.5 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b911.25 Lakhs / yr (\u20b922.5 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "SPJIMR Admissions (Profile + CAT/GMAT + PI)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b933.0 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-mdi",
    "name": "Management Development Institute (MDI Gurgaon)",
    "shortName": "MDI Gurgaon",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Mehrauli Road, Sukhrali, Gurugram",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b927.67 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Management (PGDM / HRM / International)"
    ],
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Prime Gurugram Corporate Hub Location",
      "AACSB & AMBA Accredited"
    ],
    "description": "Management Development Institute (MDI Gurgaon) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-mdi-mdi-pgdm",
        "name": "Post Graduate Diploma in Management (PGDM / HRM / International)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "MDI Gurgaon Admissions Process",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b927.67 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-nmims",
    "name": "SVKM's NMIMS School of Business Management (Mumbai)",
    "shortName": "NMIMS Mumbai",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "V.L. Mehta Road, Vile Parle West, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b926.63 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "MBA (Core / Human Resources / Digital Transformation)"
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Financial Capital Headquarters",
      "Top FMCG, Consulting & Banking Recruiters"
    ],
    "description": "SVKM's NMIMS School of Business Management (Mumbai) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-nmims-nmims-mba",
        "name": "MBA (Core / Human Resources / Digital Transformation)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b912.0 Lakhs / yr (\u20b924.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "NMIMS NMAT Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b926.63 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-iift",
    "name": "Indian Institute of Foreign Trade (IIFT New Delhi)",
    "shortName": "IIFT New Delhi",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Qutab Institutional Area, New Delhi",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b929.1 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.8 Lakhs / yr (\u20b921.6 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "International Business (MBA-IB)"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Ministry of Commerce & Industry Enterprise",
      "World Trade & Global Supply Chain Eminence"
    ],
    "description": "Indian Institute of Foreign Trade (IIFT New Delhi) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-iift-iift-delhi",
        "name": "MBA in International Business (MBA-IB)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.8 Lakhs / yr (\u20b921.6 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.8 Lakhs / yr (\u20b921.6 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIFT Admissions via CAT",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b929.1 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-imi",
    "name": "International Management Institute (IMI New Delhi)",
    "shortName": "IMI New Delhi",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Qutab Institutional Area, Tara Crescent, New Delhi",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b917.01 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.4 Lakhs / yr (\u20b920.8 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Management)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "India's 1st Corporate-Sponsored B-School",
      "AMBA & AACSB Accredited"
    ],
    "description": "International Management Institute (IMI New Delhi) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-imi-imi-delhi",
        "name": "PGDM (Post Graduate Diploma in Management)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.4 Lakhs / yr (\u20b920.8 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.4 Lakhs / yr (\u20b920.8 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IMI Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b917.01 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-tapmi",
    "name": "T.A. Pai Management Institute (TAPMI Manipal, MAHE)",
    "shortName": "TAPMI Manipal",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Karnataka",
    "location": "Manipal, Karnataka",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.7 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b98.5 Lakhs / yr (\u20b917.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "MBA (General / BKFS / Marketing / HR)"
    ],
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "AACSB & AMBA Accredited",
      "State-of-the-Art Bloomberg Finance Lab"
    ],
    "description": "T.A. Pai Management Institute (TAPMI Manipal, MAHE) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-tapmi-tapmi-manipal",
        "name": "MBA (General / BKFS / Marketing / HR)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b98.5 Lakhs / yr (\u20b917.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b98.5 Lakhs / yr (\u20b917.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "TAPMI Admissions (MAHE)",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b915.7 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-fore",
    "name": "FORE School of Management (New Delhi)",
    "shortName": "FORE School of Management",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Qutab Institutional Area, New Delhi",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.98 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b99.2 Lakhs / yr (\u20b918.4 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (International Business / Financial Management / Big Data Analytics)"
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Premier South Delhi Campus",
      "Top Tier Analytics & BFSI Placement Record"
    ],
    "description": "FORE School of Management (New Delhi) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-fore-fore-delhi",
        "name": "PGDM (International Business / Financial Management / Big Data Analytics)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b99.2 Lakhs / yr (\u20b918.4 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b99.2 Lakhs / yr (\u20b918.4 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "FORE Admissions Process",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b914.98 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-glakes",
    "name": "Great Lakes Institute of Management (Chennai / Gurgaon)",
    "shortName": "Great Lakes",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Chennai / Tamil Nadu",
    "location": "ECR Road, Chennai & Manesar, Gurgaon",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b915.1 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b99.75 Lakhs / yr (\u20b919.5 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGPM (1-Year) / PGDM (2-Year Flagship)"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "AMBA & SAQS Accredited",
      "Founded by Prof. Bala V Balachandran",
      "Top IT/Consulting"
    ],
    "description": "Great Lakes Institute of Management (Chennai / Gurgaon) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-glakes-greatlakes-pgdm",
        "name": "PGPM (1-Year) / PGDM (2-Year Flagship)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b99.75 Lakhs / yr (\u20b919.5 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b99.75 Lakhs / yr (\u20b919.5 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "Great Lakes Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b915.1 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-gim",
    "name": "Goa Institute of Management (GIM Goa)",
    "shortName": "GIM Goa",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Goa",
    "location": "Sanquelim, Poriem, Goa",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b914.87 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b99.5 Lakhs / yr (\u20b919.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (Big Data Analytics / Healthcare / BIFS)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Scenic 50-Acre Foothills Campus",
      "Top Healthcare & Data Analytics B-School in India"
    ],
    "description": "Goa Institute of Management (GIM Goa) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-gim-gim-goa",
        "name": "PGDM (Big Data Analytics / Healthcare / BIFS)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b99.5 Lakhs / yr (\u20b919.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b99.5 Lakhs / yr (\u20b919.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "GIM Admissions Process",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b914.87 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-lbsim",
    "name": "Lal Bahadur Shastri Institute of Management (LBSIM New Delhi)",
    "shortName": "LBSIM Delhi",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Sector 11, Dwarka, New Delhi",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.42 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b97.5 Lakhs / yr (\u20b915.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (General / Financial Management / Research & Business Analytics)"
    ],
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Established Value-Based Leadership",
      "Premier Finance & Banking Hub in Dwarka"
    ],
    "description": "Lal Bahadur Shastri Institute of Management (LBSIM New Delhi) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-lbsim-lbsim-delhi",
        "name": "PGDM (General / Financial Management / Research & Business Analytics)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b97.5 Lakhs / yr (\u20b915.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b97.5 Lakhs / yr (\u20b915.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "LBSIM Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b912.42 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-jaipuria",
    "name": "Jaipuria Institute of Management (Noida / Lucknow)",
    "shortName": "Jaipuria Institute Noida",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Sector 62, Noida, Delhi-NCR",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b911.29 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b96.5 Lakhs / yr (\u20b913.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (Marketing, Service Management, Financial Analytics)"
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "AACSB Member",
      "NAAC A Grade",
      "300+ Recruiters Across Consulting & BFSI"
    ],
    "description": "Jaipuria Institute of Management (Noida / Lucknow) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-jaipuria-jaipuria-pgdm",
        "name": "PGDM (Marketing, Service Management, Financial Analytics)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b96.5 Lakhs / yr (\u20b913.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b96.5 Lakhs / yr (\u20b913.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "Jaipuria Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b911.29 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-jbims",
    "name": "Jamnalal Bajaj Institute of Management Studies (JBIMS Mumbai)",
    "shortName": "JBIMS Mumbai",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "H.T. Parekh Marg, Churchgate, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b928.02 LPA",
    "highestPackage": "\u20b944 LPA",
    "fees": "\u20b93.0 Lakhs / yr (\u20b96.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Management Studies (MMS / MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "The 'CEO Factory of India' in Nariman Point",
      "Highest ROI in Maharashtra"
    ],
    "description": "Jamnalal Bajaj Institute of Management Studies (JBIMS Mumbai) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-jbims-jbims-mms",
        "name": "Masters in Management Studies (MMS / MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b93.0 Lakhs / yr (\u20b96.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b93.0 Lakhs / yr (\u20b96.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "DTE Maharashtra CAP / CAT All India",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b928.02 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-gov-sjmsom",
    "name": "Shailesh J. Mehta School of Management (SJMSOM), IIT Bombay",
    "shortName": "SJMSOM IIT Bombay",
    "type": "Government",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "Powai, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 1 (Premier)",
    "rating": "4.8",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b928.88 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b97.0 Lakhs / yr (\u20b914.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Master of Business Administration (MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "IIT Bombay Campus",
      "Top Tier Analytics, Operations & Consulting Packages"
    ],
    "description": "Shailesh J. Mehta School of Management (SJMSOM), IIT Bombay is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-gov-sjmsom-sjmsom-iitb",
        "name": "Master of Business Administration (MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b97.0 Lakhs / yr (\u20b914.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b97.0 Lakhs / yr (\u20b914.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "IIT Bombay Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b928.88 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-kjsomaiya",
    "name": "K J Somaiya Institute of Management (Mumbai)",
    "shortName": "K J Somaiya Mumbai",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "Vidyavihar, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.3 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b910.0 Lakhs / yr (\u20b920.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "MBA (Core / Healthcare / Sports Management)"
    ],
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Vast 50-Acre Campus in Central Mumbai",
      "AACSB Accredited"
    ],
    "description": "K J Somaiya Institute of Management (Mumbai) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-kjsomaiya-kjsomaiya-mba",
        "name": "MBA (Core / Healthcare / Sports Management)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b910.0 Lakhs / yr (\u20b920.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b910.0 Lakhs / yr (\u20b920.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "Somaiya Vidyavihar Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b912.3 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-weschool",
    "name": "Prin. L.N. Welingkar Institute of Management (WeSchool Mumbai)",
    "shortName": "Welingkar (WeSchool) Mumbai",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Mumbai / Maharashtra",
    "location": "L.N. Road, Matunga, Mumbai",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b912.4 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b97.0 Lakhs / yr (\u20b914.0 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (Business Design / E-Biz / Retail / Media & Ent)"
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Pioneer in Design Thinking & Business Innovation",
      "Top FMCG Recruiter Choice"
    ],
    "description": "Prin. L.N. Welingkar Institute of Management (WeSchool Mumbai) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-weschool-weschool-pgdm",
        "name": "PGDM (Business Design / E-Biz / Retail / Media & Ent)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b97.0 Lakhs / yr (\u20b914.0 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b97.0 Lakhs / yr (\u20b914.0 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "WeSchool Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b912.4 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-christ",
    "name": "School of Business and Management, Christ (Deemed to be University)",
    "shortName": "Christ University Bangalore",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Bangalore / Karnataka",
    "location": "Hosur Road, Bengaluru",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 2 (Top Ranked)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b98.5 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b94.75 Lakhs / yr (\u20b99.5 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "Master of Business Administration (MBA)"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Premier Bangalore B-School",
      "Dynamic Corporate Mentorship"
    ],
    "description": "School of Business and Management, Christ (Deemed to be University) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-christ-christ-mba",
        "name": "Master of Business Administration (MBA)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b94.75 Lakhs / yr (\u20b99.5 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b94.75 Lakhs / yr (\u20b99.5 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "Christ Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b98.5 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  },
  {
    "id": "col-pvt-jims",
    "name": "Jagan Institute of Management Studies (JIMS Rohini, Delhi)",
    "shortName": "JIMS Rohini Delhi",
    "type": "Private",
    "category": "Management & MBA",
    "disciplines": [
      "management",
      "commerce"
    ],
    "city": "Delhi / NCR",
    "location": "Sector 5, Rohini, New Delhi",
    "nirfRank": "Premier Management & MBA",
    "accreditation": "Tier 3 (State / Direct)",
    "rating": "4.6",
    "reviewsCount": 850,
    "established": "1985",
    "avgPackage": "\u20b98.3 LPA",
    "highestPackage": "\u20b942 LPA",
    "fees": "\u20b94.75 Lakhs / yr (\u20b99.5 Lakhs Total)",
    "entranceExams": [
      "CAT",
      "XAT",
      "CMAT",
      "MAT"
    ],
    "streams": [
      "PGDM (International Business / Retail Management)"
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "NIRF Top Ranked in Delhi",
      "Strong Placement Track Record in Retail & BFSI"
    ],
    "description": "Jagan Institute of Management Studies (JIMS Rohini, Delhi) is recognized among India's leading institutions for Management & MBA, offering industry-integrated curriculum and outstanding corporate/clinical outcomes.",
    "courses": [
      {
        "id": "col-pvt-jims-jims-rohini",
        "name": "PGDM (International Business / Retail Management)",
        "degree": "Postgraduate (PG)",
        "duration": "2 Years (4 Semesters)",
        "fees": "\u20b94.75 Lakhs / yr (\u20b99.5 Lakhs Total)",
        "feeBreakdown": "Annual Fee: \u20b94.75 Lakhs / yr (\u20b99.5 Lakhs Total) \u2022 Subsidized Govt / Institutional Quota Structure",
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks (45% for SC/ST). Must qualify CAT/XAT/CMAT/MAT.",
        "entranceExam": "JIMS Central Admissions",
        "seats": "120 - 180 Seats",
        "mode": "Full-Time Regular (On-Campus)",
        "specializations": [
          "Marketing Management",
          "Financial Analytics",
          "Operations & Supply Chain",
          "Human Resource"
        ],
        "careerScope": "Avg Package \u20b98.3 LPA. Top Recruiters across BFSI, Consulting, IT & FMCG."
      }
    ]
  }
];