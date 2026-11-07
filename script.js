/* ---------------- Project Data (synced with resume) ---------------- */
const projects = [
  {
    name: "GHOST [GNSS-Free Hybrid Onboard Sensor Tracker]",
    tagline: "AI-based navigation system during 60s GNSS outages (SIH 2026)",
    desc: "A hybrid AI-based navigation system for vehicle tracking during GNSS outages without GPS, combining 1D-CNN speed estimation and 5-state Extended Kalman Filter.",
    tech: ["Python", "PyTorch", "Scikit-learn", "NumPy", "SciPy", "Extended Kalman Filter", "React", "Three.js", "React Three Fiber"],
    status: "live",
    featured: true,
    image: "assets/ghost.svg",
    metrics: ["2.40% Position Drift", "60s Outage Recovery", "1D-CNN + 5-State EKF", "3D Interactive Simulation"],
    repo: "https://github.com/A-Hrithik-4/GHOST",
    problem: "GNSS/GPS signals frequently fail in tunnels, urban canyons, and jammed environments. Conventional navigation systems rapidly accumulate positional drift error.",
    features: [
      "Developed a hybrid AI-based navigation system for vehicle tracking during 60-second GNSS outages without GPS",
      "Built a PyTorch 1D-CNN speed estimator calibrated using Scikit-learn's Isotonic Regression to improve dead-reckoning accuracy",
      "Integrated a 5-state Extended Kalman Filter (EKF), IMU-based motion estimation, and OpenStreetMap road-heading constraints",
      "Engineered sensor preprocessing and feature extraction pipelines using Python, NumPy, and SciPy for sensor fusion",
      "Achieved 2.40% position drift during simulated 60-second GNSS outages, meeting the SIH requirement of ≤10%",
      "Built an interactive 3D simulation dashboard using React, Three.js, and React Three Fiber to compare navigation performance with and without GHOST"
    ],
    challenges: "Eliminating speed estimation bias without overfitting to specific driving patterns — resolved through isotonic regression calibration and fusing road constraints into the EKF."
  },
  {
    name: "HAMMER — IPL Cyber Intelligence Escape Room",
    tagline: "Competitive cybersecurity escape room platform with live leaderboards (Pravrutti 2.0)",
    desc: "A full-stack cybersecurity challenge platform with live scoring, automated qualification, and a custom cyber-terminal interface for 180+ participants.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Jinja2", "Gunicorn", "Git", "GitHub", "Render"],
    status: "live",
    featured: true,
    image: "assets/hammer.svg",
    metrics: ["180+ Event Participants", "8 Progressive Levels", "Live Leaderboard", "Top-8 Qualification"],
    repo: "https://github.com/A-Hrithik-4/ipl_escape_room",
    problem: "Engaging over 180 competitors in a fast-paced national tech fest requires an automated, tamper-proof platform with real-time feedback and dynamic difficulty.",
    features: [
      "Designed eight progressive cybersecurity challenges covering cryptography, binary conversion, Python code tracing, HTML/CSS inspection, hashing, and logical reasoning",
      "Engineered multi-stage puzzles combining technical clues, hidden information, code analysis, and deduction",
      "Developed a Python, Flask, and SQLite platform with team registration, session management, persistent progress tracking, and server-side answer validation",
      "Built a live leaderboard with completion-time rankings, automatic top-eight qualification, and an admin dashboard for event management",
      "Deployed using Gunicorn and Render, featuring a custom cyber-terminal interface built with HTML, CSS, JavaScript, and Jinja2"
    ],
    challenges: "Preventing inspect-element answer leakage and race conditions during simultaneous team submissions — tackled with atomic server-side validation and salt-hashed session states."
  },
  {
    name: "TRACE [Track Record Analysis & Classification Engine]",
    tagline: "Operational track log anomaly classification engine (BEL Internship)",
    desc: "End-to-end Python data processing, statistical analysis, and machine learning pipeline to parse and analyze operational track-parameter logs.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Isolation Forest", "Streamlit", "Plotly", "Matplotlib", "ReportLab"],
    status: "live",
    featured: true,
    image: "assets/trace.svg",
    metrics: ["Isolation Forest ML", "Multi-Page Dashboard", "Time-Series Analytics", "Automated PDF Reports"],
    repo: "https://github.com/A-Hrithik-4/internship-project",
    problem: "Defense operational track parameter logs are dense, high-dimensional, and noisy. Manual inspection to detect operational anomalies is unsustainable.",
    features: [
      "TRACE is a Python-based track log analysis and classification system built for operational log parsing",
      "Built Pandas and NumPy pipelines for log parsing, data cleaning, timestamp handling, statistical analysis, and feature engineering",
      "Implemented Scikit-learn's Isolation Forest with feature scaling for unsupervised anomaly detection",
      "Developed a multi-page Streamlit dashboard using Plotly and Matplotlib for track visualization and anomaly analysis",
      "Created scatter plots, time-series charts, correlation heatmaps, and boxplots for track parameter analysis",
      "Automated PDF audit report generation using ReportLab to summarize findings and anomalies"
    ],
    challenges: "Unsupervised detection across heterogeneous track parameters without ground truth labels — addressed by tuning isolation forest contamination rates and robust feature scaling."
  },
  {
    name: "PULSE+",
    tagline: "AI-enhanced hospital management system",
    desc: "A full-stack hospital management web app streamlining patient, doctor, and admin workflows through one centralized platform.",
    tech: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express.js", "MySQL"],
    status: "live",
    featured: false,
    image: "assets/pulse.png",
    metrics: ["Role-based dashboards", "Secure authentication", "Appointment workflow", "AI assistant integration"],
    repo: "https://github.com/A-Hrithik-4/Hospital-Management-System",
    problem: "Hospitals juggle multiple roles — doctors, admins, patients — each needing a different view of the same data. PULSE+ unifies that into role-based dashboards with secure authentication instead of separate disconnected tools.",
    features: [
      "Developed a full-stack hospital management web application to streamline patient, doctor, and administrative workflows through a centralized platform",
      "Implemented role-based dashboards with secure authentication, appointment management, and user administration features",
      "Built an appointment workflow system supporting booking, approval, rescheduling, and status tracking",
      "Integrated an interactive AI assistant to improve navigation, provide contextual assistance, and enhance user experience"
    ],
    challenges: "Designing the database schema so role permissions stayed clean without duplicating logic across dashboards was the trickiest part — solved with a shared middleware layer for access control."
  },
  {
    name: "Elite Dine",
    tagline: "Restaurant management & reservation web app",
    desc: "A web application for restaurant management and customer bookings, with table reservations, ordering, and online payments.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "live",
    featured: false,
    image: "assets/elite-dine.png",
    metrics: ["Table reservations", "Slot selection", "Online payments", "Responsive UI"],
    repo: "https://github.com/A-Hrithik-4/Elite-Dine",
    problem: "Small restaurants need booking and ordering in one place rather than stitching together third-party apps that take a cut of every order.",
    features: [
      "Developed a web application for restaurant management and customer bookings",
      "Added features for table reservation, food ordering, slot selection, and online payments",
      "Created a responsive and user-friendly interface for seamless navigation"
    ],
    challenges: "Keeping the reservation and ordering flows from feeling like two separate apps bolted together — unified them under one consistent design system."
  },
  {
    name: "SDF Aura",
    tagline: "Small-scale tuition management portal",
    desc: "A full-stack web application to manage operations for small-to-medium tuition centers, backed by MongoDB.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
    status: "live",
    featured: false,
    image: "assets/sdf-aura.png",
    metrics: ["Student enrollment", "Scheduling", "MongoDB-backed storage"],
    repo: "https://github.com/A-Hrithik-4/SDF-AURA",
    problem: "Small tuition centers often run on spreadsheets and WhatsApp. SDF Aura gives them one portal for enrollment, scheduling, and records.",
    features: [
      "Built a full-stack web application to manage operations for small-to-medium tuition centers",
      "Implemented student enrollment, scheduling, and data storage features backed by MongoDB",
      "Designed a responsive UI with clean CSS, ensuring a seamless user experience across devices"
    ],
    challenges: "Balancing simplicity for non-technical tutors with enough flexibility for varied class schedules required several rounds of UI simplification."
  },
  {
    name: "Pocket Pilot",
    tagline: "Personal finance dashboard",
    desc: "EMI calculator, repayment strategy comparisons, and expense tracking through an intuitive financial planning interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "live",
    featured: false,
    image: "assets/pocket-pilot.png",
    metrics: ["EMI calculator", "Expense tracker", "Instant loan simulations"],
    repo: "https://github.com/A-Hrithik-4/pocket-pilot",
    problem: "Most EMI calculators only return a single number. People taking loans need to compare repayment strategies and see how their expenses fit around it — that's the gap Pocket Pilot fills.",
    features: [
      "EMI calculator with adjustable tenure & interest",
      "Repayment strategy comparison",
      "Expense tracking dashboard",
      "Clean, distraction-free financial UI"
    ],
    challenges: "Getting the EMI math to update live without recalculating the whole page took a few passes — settled on isolating the calculation logic so the UI only re-renders the affected fields."
  }
];

function shotHTML(p) {
  return `<div class="pcard-browser-wrap">
<div class="car-topbar"><span></span><span></span><span></span></div>
<img src="${p.image}" alt="${p.name} screenshot" loading="lazy">
  </div>`;
}

const grid = document.getElementById('projectGrid');
projects.forEach((p) => {
  const card = document.createElement('div');
  card.className = 'pcard';
  card.innerHTML = `
<div class="pcard-shot">${shotHTML(p)}</div>
<div class="pcard-body">
  <span class="pcard-status" style="${p.status === 'building' ? 'color:var(--accent)' : ''}">${p.status === 'building' ? 'In development' : 'Shipped'}</span>
  <h3>${p.name}</h3>
  <p class="desc">${p.desc}</p>
  <div class="pcard-metrics">${p.metrics.map(m => `<span class="metric">${m}</span>`).join('')}</div>
  <div class="pcard-tags">${p.tech.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
  <div class="pcard-links">
    <a href="${p.repo}" class="btn btn-ghost" onclick="event.stopPropagation()" target="_blank" rel="noopener">GitHub</a>
    <button class="btn btn-primary case-study-btn">Case Study</button>
  </div>
</div>
  `;
  card.querySelector('.case-study-btn').addEventListener('click', (e) => { e.stopPropagation(); openModal(p); });
  card.addEventListener('click', (e) => { if (e.target.closest('a,button')) return; openModal(p); });
  grid.appendChild(card);
});

/* ---------------- Modal ---------------- */
const overlay = document.getElementById('modalOverlay');
function openModal(p) {
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalTagline').textContent = p.tagline;
  document.getElementById('modalProblem').textContent = p.problem;
  document.getElementById('modalFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modalTech').innerHTML = p.tech.map(t => `<span class="ptag">${t}</span>`).join('');
  document.getElementById('modalChallenges').textContent = p.challenges;
  document.getElementById('modalLinks').innerHTML = `<a href="${p.repo}" class="btn btn-ghost" target="_blank" rel="noopener">GitHub Repo</a>`;
  overlay.classList.add('open');
}
document.getElementById('modalClose').addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('mobile-open')));

/* ---------------- Nav scroll spy ---------------- */
const navAnchors = document.querySelectorAll('.nav-links a');
const spySections = [...navAnchors].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  let current = spySections[0]?.id || '';
  spySections.forEach(sec => {
    if (sec.offsetTop <= scrollY) current = sec.id;
  });
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ---------------- Hero carousel ---------------- */
const carouselProjects = projects.filter(p => p.status === 'live').slice(0, 4);
const frame = document.getElementById('carFrame');
carouselProjects.forEach((p, i) => {
  const slide = document.createElement('div');
  slide.className = 'car-slide' + (i === 0 ? ' active' : '');
  slide.style.cursor = 'pointer';
  slide.setAttribute('role', 'button');
  slide.setAttribute('aria-label', `View ${p.name}`);
  slide.innerHTML = `
<div class="car-topbar"><span></span><span></span><span></span></div>
<div class="car-body">
  <img src="${p.image}" class="car-img" alt="${p.name} Web Preview">
</div>
  `;
  slide.addEventListener('click', () => {
    const projectCards = document.querySelectorAll('.pcard');
    const targetCard = [...projectCards].find(c => c.querySelector('h3')?.textContent === p.name);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetCard.classList.add('highlight-pulse');
      setTimeout(() => targetCard.classList.remove('highlight-pulse'), 2500);
    }
    openModal(p);
  });
  frame.appendChild(slide);
});

let carIdx = 0;
function goToSlide(i) {
  const slides = document.querySelectorAll('.car-slide');
  slides.forEach((s, j) => {
    if (j === carIdx && j !== i) {
      s.classList.remove('active');
      s.classList.add('slide-out');
    } else if (j === i) {
      s.classList.remove('slide-out');
      s.classList.add('active');
    } else {
      s.classList.remove('active', 'slide-out');
    }
  });
  carIdx = i;
}
let carInterval = setInterval(() => {
  goToSlide((carIdx + 1) % carouselProjects.length);
}, 4000);

/* ---------------- Tech stack grid ---------------- */
const techStack = [
  {
    label: "Python",
    cat: "ai",
    tag: "CORE AI",
    color: "#3776AB",
    glow: "rgba(55, 118, 171, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#3776AB" d="M63.2 4.1c-15.6 0-25 6.8-25 15.6v11.4h25v3.4H24.8C11.5 34.5 0 43.8 0 60.1c0 16.2 10.6 25.8 23.9 25.8h8v-11.4c0-15.5 12.8-25.7 28.3-25.7h25v-3.4H47.1V31.1c0-8.8 9.4-15.6 25-15.6h17.1V4.1H63.2zm-9.3 7.8c2.9 0 5.2 2.3 5.2 5.2s-2.3 5.2-5.2 5.2-5.2-2.3-5.2-5.2 2.3-5.2 5.2-5.2z"/><path fill="#FFD43B" d="M64.8 123.9c15.6 0 25-6.8 25-15.6V96.9h-25v-3.4h38.4c13.3 0 24.8-9.3 24.8-25.6 0-16.2-10.6-25.8-23.9-25.8h-8v11.4c0 15.5-12.8 25.7-28.3 25.7h-25v3.4h38.1v14.3c0 8.8-9.4 15.6-25 15.6H43.8v11.4h21zM74.1 116.1c-2.9 0-5.2-2.3-5.2-5.2s2.3-5.2 5.2-5.2 5.2 2.3 5.2 5.2-2.3 5.2-5.2 5.2z"/></svg>`
  },
  {
    label: "PyTorch",
    cat: "ai",
    tag: "DEEP LEARNING",
    color: "#EE4C2C",
    glow: "rgba(238, 76, 44, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#EE4C2C" d="M72.6 8.3a54.3 54.3 0 0 0-42.3 89.2l-9.8 9.8 4.4 4.4 9.8-9.8A54.3 54.3 0 0 0 97.4 20l-5.6 5.6a46.4 46.4 0 1 1-52.9 72.8l10.8-10.8a31.3 31.3 0 0 0 45-42.7L72.6 8.3zm8.9 27.2a6.3 6.3 0 1 1-8.9 8.9 6.3 6.3 0 0 1 8.9-8.9z"/></svg>`
  },
  {
    label: "Scikit-Learn",
    cat: "ai",
    tag: "MACHINE LEARNING",
    color: "#F7931E",
    glow: "rgba(247, 147, 30, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><circle cx="64" cy="64" r="58" fill="#F7931E"/><path fill="#3499CD" d="M64 6a58 58 0 0 1 58 58H64V6z"/><circle cx="64" cy="64" r="32" fill="#fff"/><path fill="#3776AB" d="M64 42a22 22 0 1 0 0 44 22 22 0 0 0 0-44zm0 12a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>`
  },
  {
    label: "Pandas",
    cat: "ai",
    tag: "DATA ENGINE",
    color: "#150458",
    glow: "rgba(231, 4, 136, 0.35)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><rect x="18" y="22" width="24" height="42" rx="6" fill="#150458"/><rect x="52" y="44" width="24" height="62" rx="6" fill="#FFD43B"/><rect x="86" y="16" width="24" height="74" rx="6" fill="#E70488"/><circle cx="30" cy="84" r="10" fill="#150458"/></svg>`
  },
  {
    label: "NumPy",
    cat: "ai",
    tag: "TENSOR OPS",
    color: "#4DABF7",
    glow: "rgba(77, 171, 247, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#013243" d="M16 32h32v64H16z"/><path fill="#4DABF7" d="M80 32h32v64H80z"/><path fill="#4D77CF" d="m48 32 32 64h12V32H80v44L56 32H48z"/></svg>`
  },
  {
    label: "Streamlit",
    cat: "ai",
    tag: "DATA APPS",
    color: "#FF4B4B",
    glow: "rgba(255, 75, 75, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#FF4B4B" d="M125.7 75.3 103.5 37a5.5 5.5 0 0 0-9.6 0L81.2 59.2a3.3 3.3 0 0 1-5.7 0L64.2 40a5.5 5.5 0 0 0-9.6 0L2.3 129.7a3.3 3.3 0 0 0 2.9 4.9h117.6a5.5 5.5 0 0 0 4.8-8.3l-1.9-3.3-8.8-15.2 8.8-15.2c1.7-2.9 1.7-6.5 0-9.3l-1.9-3.3z"/></svg>`
  },
  {
    label: "Java",
    cat: "backend",
    tag: "ENTERPRISE OOP",
    color: "#E76F00",
    glow: "rgba(231, 111, 0, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#5382A1" d="M46.7 94.6s-5.6 3.4 3.9 4.6c11.7 1.4 17.7 1.2 30.6-.7 0 0 4.3 2.7 10.1 5-26.4 11.2-57.9-1.3-44.6-8.9zm-2.8-15.4s-6.2 4.4 3.5 5.7c12.2 1.6 22.8 1.8 39.4-.9 0 0 3 3.1 7.2 4.7-32.9 10.3-64.8.4-50.1-9.5zm27.4-32.7c3.9 4.5-3 8.6-3 8.6s7.9-4.1 4.3-10.2c-3.6-6-8.9-8.9-15.5-15.5-1.9-1.9-3.7-3.9-5.4-6.1 7 4.1 14.6 17.3 19.6 23.2zm14.8 23.5c6.5 7.8-3.4 14.8-3.4 14.8s8.9-4.7 4.7-12.7c-4.2-8-12.4-12.1-19.6-18.7-2.6-2.4-4.8-5-6.7-7.8 7.3 4.5 17.5 15.5 25 24.4z"/><path fill="#E76F00" d="M88.7 109.9s4.8 3.9-5.2 6.9c-19 5.8-39.7 6.1-57.7.3-6.4-2.1 5.3-5.6 8.8-6.4 13.9-3.1 23-2.6 35.8-1.5 6.4.5 12.6.9 18.3.7zm-26.6-86.4c5.1 5.8-3.9 11.2-3.9 11.2s10.3-5.4 5.6-13.3c-4.7-7.8-11.6-11.6-20.2-20.2-2.5-2.5-4.8-5.1-7-8 9.1 5.4 18.9 22.6 25.5 30.3zm31.7 80.9c2.4-1.9 1.4-3.7-2.1-5.1-6.1-2.4-15.8-4.7-15.8-4.7s3.8.9 7.6 2.3c4.7 1.7 4.5 3.3 1.2 4.4-11.6 3.9-41.9 5.1-54.3-.2-3.8-1.6 1.2-3.4 4.1-4.2 12.3-3.4 20.3-2.7 32.5-1.4 0 0-4.6-2.9-12.5-3.3-17.6-.9-36.9 1.4-45.7 7.7-6.9 4.9.4 9 10.9 11 25.7 4.9 57.6 4.3 74.2-6.5z"/></svg>`
  },
  {
    label: "Flask",
    cat: "backend",
    tag: "MICRO-FRAMEWORK",
    color: "#24292E",
    glow: "rgba(36, 41, 46, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28" fill="#24292E"><path d="M84.5 16.5h-4.3v13.6c4.6 4.2 7.5 10.3 7.5 17 0 5.4-1.9 10.4-5 14.4l24 35.3c3.8 5.6 4.1 12.8.9 18.7s-9.4 9.5-16.2 9.5H36.6c-6.8 0-13-3.6-16.2-9.5s-2.9-13.1.9-18.7l24-35.3c-3.1-4-5-9-5-14.4 0-6.7 2.9-12.8 7.5-17V16.5h-4.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h41c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zm-32.2 0v17.5c0 2.3-1.9 4.2-4.2 4.2-6.5 0-11.8 5.3-11.8 11.8 0 4.6 2.6 8.5 6.4 10.5 1.5.8 2.4 2.3 2.4 4l-23 33.8c-2.1 3.1-2.3 7.1-.5 10.4s5.2 5.3 8.9 5.3h54.9c3.8 0 7.1-2 8.9-5.3s1.6-7.3-.5-10.4l-23-33.8c0-1.7.9-3.2 2.4-4 3.8-2 6.4-5.9 6.4-10.5 0-6.5-5.3-11.8-11.8-11.8-2.3 0-4.2-1.9-4.2-4.2V16.5H52.3z"/></svg>`
  },
  {
    label: "SQL",
    cat: "backend",
    tag: "RELATIONAL",
    color: "#00758F",
    glow: "rgba(0, 117, 143, 0.40)",
    svg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#00758F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`
  },
  {
    label: "MySQL",
    cat: "backend",
    tag: "ENTERPRISE DB",
    color: "#00618A",
    glow: "rgba(0, 97, 138, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#00618A" d="M64 16c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm22.4 69.4c-4.8 3.5-12 5.6-20.2 5.6-13.8 0-24.8-6.1-24.8-16.1 0-8.8 8.6-14.7 20.4-15.3 1.9-.1 3.8-.1 5.6 0v-4.1c0-4.3-3.6-7.1-9.5-7.1-4.7 0-9.2 1.5-12.8 3.8l-3.3-6.1c4.8-3.1 11-5 17.5-5 11.2 0 17.9 5.8 17.9 15.6v20.4c0 3 .6 4.7 2.1 4.7.7 0 1.5-.2 2.3-.5l4.8 4.1zm-19-19.1c-1.5-.1-3-.1-4.5 0-6.9.5-11.7 3.6-11.7 8.5 0 4.7 4.9 8.1 12.2 8.1 4.4 0 8.3-1.1 11.2-2.9v-13.7h-7.2z"/><path fill="#E48E00" d="M102 46.5c-2.4-7-7.8-12.4-15.2-15-2.2-.8-4.5-1.3-6.9-1.5 3.5 3.1 6.1 7.2 7.4 12 1.6 6 1.1 12.2-1.3 17.8 5.7-3.4 11.6-6.8 16-13.3z"/></svg>`
  },
  {
    label: "MongoDB",
    cat: "backend",
    tag: "NOSQL DOCUMENT",
    color: "#13AA52",
    glow: "rgba(19, 170, 82, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#13AA52" d="M64.6 2.4c-1.8.8-10.2 12-14.4 18-13 18.3-21.4 39.5-21.4 61.8 0 25.1 12.5 42.1 34.6 45.4.4.1.8-.2.9-.5l1.6-11.9c.1-.4-.2-.8-.6-.9-17-3.5-23.7-16.2-23.7-32.1 0-18.7 7.7-37 19.3-53.1 1.7-2.3 3.6-4.6 5.4-6.8.3-.4.8-.4 1.1 0 1.8 2.2 3.7 4.5 5.4 6.8 11.6 16.1 19.3 34.4 19.3 53.1 0 15.9-6.7 28.6-23.7 32.1-.4.1-.7.5-.6.9l1.6 11.9c.1.3.5.6.9.5 22.1-3.3 34.6-20.3 34.6-45.4 0-22.3-8.4-43.5-21.4-61.8-4.2-6-12.6-17.2-14.4-18-.3-.2-.5-.2-.6 0z"/><path fill="#116149" d="M64 4v118c.2 0 .5-.1.6-.2l1.6-11.9c.1-.4-.2-.8-.6-.9V4z"/></svg>`
  },
  {
    label: "SQLite",
    cat: "backend",
    tag: "EMBEDDED DB",
    color: "#003B57",
    glow: "rgba(0, 59, 87, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#003B57" d="M108 36c0-13.3-19.7-24-44-24S20 22.7 20 36v56c0 13.3 19.7 24 44 24s44-10.7 44-24V36z"/><ellipse cx="64" cy="36" rx="44" ry="24" fill="#005B8C"/><path fill="#3D52A0" d="M20 54c0 13.3 19.7 24 44 24s44-10.7 44-24v18c0 13.3-19.7 24-44 24s-44-10.7-44-24V54z"/></svg>`
  },
  {
    label: "JavaScript",
    cat: "frontend",
    tag: "DYNAMIC ES6+",
    color: "#F7DF1E",
    glow: "rgba(247, 223, 30, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#F7DF1E" d="M0 0h128v128H0z"/><path d="m67.3 100.1 13.8-8c2.9 5.1 5.8 9.4 11.9 9.4 6 0 9.8-2.4 9.8-11.9V47.2h17.2v42.5c0 18.8-11 27.2-26.7 27.2-14.3 0-22.6-7.5-26-16.8zm-41-1.3 13.8-8.4c3.5 5.5 8.1 9.7 16 9.7 6.8 0 11.2-3.4 11.2-8.2 0-5.7-4.5-7.7-12.3-11.1l-4.2-1.8c-12.2-5.2-20.2-11.7-20.2-25.2 0-12.6 9.7-22.1 24.9-22.1 10.8 0 18.7 3.9 24.3 13.9l-13.1 8.4c-2.8-5-5.8-7-11.2-7-5.1 0-8.6 3.2-8.6 7.3 0 5.1 3.4 7.2 11.2 10.5l4.2 1.8c14.3 6.1 21.6 12.6 21.6 26.1 0 14.9-11.8 23.4-27.5 23.4-15.6-.1-25.1-8.2-30.1-22.3z"/></svg>`
  },
  {
    label: "HTML5",
    cat: "frontend",
    tag: "SEMANTIC WEB",
    color: "#E34F26",
    glow: "rgba(227, 79, 38, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#E44D26" d="M13.6 116.5 2.7 0h122.6l-10.9 116.5-50.4 14-50.4-14z"/><path fill="#F16529" d="M64 120.4V10.2h50.9L106 109 64 120.4z"/><path fill="#EBEBEB" d="M64 52.8H44.6l-1.3-15H64V23.6H27.9l4 44.2H64v-15zm0 39.8-19.4-5.2-1.2-14H28.9l2.4 27.4L64 109.8v-17.2z"/><path fill="#fff" d="M64 52.8h19.5l-1.8 20.6L64 78.6v15.7l27.1-7.5 3.8-42.6H64V52.8zm0-29.2h36.1l-1.3 14.2H64V23.6z"/></svg>`
  },
  {
    label: "CSS3",
    cat: "frontend",
    tag: "STYLING & FX",
    color: "#1572B6",
    glow: "rgba(21, 114, 182, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#1572B6" d="M13.6 116.5 2.7 0h122.6l-10.9 116.5-50.4 14-50.4-14z"/><path fill="#33A9DC" d="M64 120.4V10.2h50.9L106 109 64 120.4z"/><path fill="#EBEBEB" d="M64 52.8H44.6l-1.3-15H64V23.6H27.9l4 44.2H64v-15zm0 39.8-19.4-5.2-1.2-14H28.9l2.4 27.4L64 109.8v-17.2z"/><path fill="#fff" d="M64 52.8h19.5l-1.8 20.6L64 78.6v15.7l27.1-7.5 3.8-42.6H64V52.8zm0-29.2h36.1l-1.3 14.2H64V23.6z"/></svg>`
  },
  {
    label: "EJS",
    cat: "frontend",
    tag: "TEMPLATING",
    color: "#A91E50",
    glow: "rgba(169, 30, 80, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><rect width="128" height="128" rx="28" fill="#A91E50"/><text x="64" y="80" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="44" fill="#fff" text-anchor="middle">&lt;%</text></svg>`
  },
  {
    label: "Git",
    cat: "tools",
    tag: "VERSION CONTROL",
    color: "#F05032",
    glow: "rgba(240, 80, 50, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#F05032" d="M125.7 57.3 70.7 2.3c-3.1-3.1-8.1-3.1-11.2 0L48.2 13.6l15.9 15.9c3.4-1.1 7.2-.4 10 2.3 2.8 2.8 3.5 6.7 2.3 10.1l15.3 15.3c3.4-1.1 7.3-.4 10.1 2.3 3.9 3.9 3.9 10.2 0 14.1s-10.2 3.9-14.1 0c-2.9-2.9-3.6-7-2-10.4L65.4 48v34.4c1 .6 2 1.4 2.8 2.3 3.9 3.9 3.9 10.2 0 14.1s-10.2 3.9-14.1 0-3.9-10.2 0-14.1c1.1-1.1 2.3-1.9 3.7-2.4V46.8c-1.4-.5-2.6-1.3-3.7-2.4-2.9-2.9-3.6-7-2-10.4L36.3 18.2 2.3 52.2c-3.1 3.1-3.1 8.1 0 11.2l55 55c3.1 3.1 8.1 3.1 11.2 0l57.2-57.2c3.1-3 3.1-8.1 0-11.2V57.3z"/></svg>`
  },
  {
    label: "GitHub",
    cat: "tools",
    tag: "CI/CD & REPOS",
    color: "#24292E",
    glow: "rgba(36, 41, 46, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28" fill="#24292E"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-11.9c-17.8 3.9-21.5-7.6-21.5-7.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.2 5.4 0 10.9.7 16 2.2 12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.3 5.9 4.3 11.9v17.7c0 1.7 1.2 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"/></svg>`
  },
  {
    label: "VS Code",
    cat: "tools",
    tag: "PRIMARY IDE",
    color: "#007ACC",
    glow: "rgba(0, 122, 204, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><path fill="#0065A9" d="M95.6 126.9c3.2 1.6 7.1 1.2 9.8-.9l20.4-16.7c3-2.5 4.8-6.1 4.8-10V28.7c0-3.9-1.8-7.5-4.8-10L105.4 2c-2.7-2.1-6.6-2.5-9.8-.9L38.4 46.4 19.3 31.8c-2.4-1.8-5.7-1.9-8.2-.2L2 37.8c-2.5 1.7-3.1 5.1-1.4 7.6.3.4.6.8 1 1.1L24.8 64 1.6 81.5c-2.5 1.7-3.1 5.1-1.4 7.6.3.4.6.8 1 1.1l9.1 6.2c2.5 1.7 5.8 1.6 8.2-.2l19.1-14.6 58 45.3z"/><path fill="#007ACC" d="M105.4 2c-2.7-2.1-6.6-2.5-9.8-.9L1.6 46.5c-2.5 1.7-3.1 5.1-1.4 7.6.3.4.6.8 1 1.1l8.1 6.1L95.6 2.5l9.8-.5z"/><path fill="#1F9CF0" d="M105.4 126c-2.7 2.1-6.6 2.5-9.8.9L1.6 81.5c-2.5-1.7-3.1-5.1-1.4-7.6.3-.4.6-.8 1-1.1l8.1-6.1L95.6 125.5l9.8.5z"/></svg>`
  },
  {
    label: "IntelliJ",
    cat: "tools",
    tag: "JVM IDE",
    color: "#000000",
    glow: "rgba(8, 124, 250, 0.40)",
    svg: `<svg viewBox="0 0 128 128" width="28" height="28"><rect width="128" height="128" rx="28" fill="#000000"/><path fill="#087CFA" d="M110 30 76 10 64 36l26 24z"/><path fill="#FE315D" d="M18 90l34 28 46-24-30-36z"/><path fill="#3D52A0" d="M18 42l46-6-20 40z"/><path fill="#fff" d="M30 102h36v8H30zm6-70h8v44h-8zm16 0h24v8H64v10h14v8H64v10h16v8H52z"/></svg>`
  }
];

const techGrid = document.getElementById('techGrid');
techStack.forEach((t) => {
  const tile = document.createElement('div');
  tile.className = 'tech-tile';
  tile.setAttribute('data-cat', t.cat);
  tile.style.setProperty('--tech-glow', t.glow);
  tile.style.setProperty('--tech-brand-color', t.color);
  tile.innerHTML = `
    <div class="tech-tile-top">
      <span class="tech-tag">${t.tag}</span>
      <span class="tech-dot" style="background:${t.color};box-shadow:0 0 8px ${t.glow}"></span>
    </div>
    <div class="tech-icon-frame">
      <div class="tech-ambient-glow" style="background:${t.glow}"></div>
      <div class="tech-svg-wrap">${t.svg}</div>
    </div>
    <div class="tech-tile-bottom">
      <span class="tech-label">${t.label}</span>
      <div class="tech-meter-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  techGrid.appendChild(tile);
});

/* Interactive Tech Filter Tabs */
const techFilterBtns = document.querySelectorAll('.tech-filter-btn');
techFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    techFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filterCat = btn.getAttribute('data-cat');
    const allTiles = document.querySelectorAll('.tech-tile');
    allTiles.forEach(tile => {
      const tileCat = tile.getAttribute('data-cat');
      if (filterCat === 'all' || tileCat === filterCat) {
        tile.classList.remove('is-dimmed');
        tile.classList.add('is-focused');
        setTimeout(() => tile.classList.remove('is-focused'), 400);
      } else {
        tile.classList.add('is-dimmed');
      }
    });
  });
});

/* ---------------- Fade-in on scroll (Animate.css fadeInUp) ---------------- */
const fadeEls = document.querySelectorAll('.fade-in');

/* Assign stagger delays to siblings within the same parent */
const staggerParents = new Set(Array.from(fadeEls).map(el => el.parentElement));
staggerParents.forEach(parent => {
  const children = Array.from(parent.querySelectorAll(':scope > .fade-in, .fade-in'));
  children.forEach((el, i) => {
    el.style.setProperty('--animate-delay', `${i * 0.12}s`);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('visible', 'animate__animated', 'animate__fadeInUp');
      observer.unobserve(el); /* fire once — no re-trigger on scroll back */
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));
