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
const dotsWrap = document.getElementById('carDots');
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
  const dot = document.createElement('div');
  dot.className = 'car-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsWrap.appendChild(dot);
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
  document.querySelectorAll('.car-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  carIdx = i;
}
let carInterval = setInterval(() => {
  goToSlide((carIdx + 1) % carouselProjects.length);
}, 4000);

/* ---------------- Tech stack grid ---------------- */
const techStack = [
  { label: "Python", bg: "#3776AB" },
  { label: "Java", bg: "#E76F00" },
  { label: "JavaScript", bg: "#F0DB4F" },
  { label: "SQL", bg: "#00758F" },
  { label: "PyTorch", bg: "#EE4C2C" },
  { label: "Scikit-Learn", bg: "#F7931E" },
  { label: "Flask", bg: "#24292E" },
  { label: "Streamlit", bg: "#FF4B4B" },
  { label: "Pandas", bg: "#150458" },
  { label: "NumPy", bg: "#013243" },
  { label: "HTML5", bg: "#E34C26" },
  { label: "CSS3", bg: "#264DE4" },
  { label: "EJS", bg: "#A91E50" },
  { label: "MySQL", bg: "#00618A" },
  { label: "MongoDB", bg: "#47A248" },
  { label: "SQLite", bg: "#003B57" },
  { label: "Git", bg: "#F1502F" },
  { label: "GitHub", bg: "#24292E" },
  { label: "VS Code", bg: "#007ACC" },
  { label: "IntelliJ", bg: "#1F2328" }
];
const techGrid = document.getElementById('techGrid');
techStack.forEach(t => {
  const tile = document.createElement('div');
  tile.className = 'tech-tile';
  tile.innerHTML = `<div class="tech-badge" style="background:${t.bg};color:${t.bg === '#F0DB4F' ? '#1a1a1a' : '#fff'}">${t.label.slice(0, 2).toUpperCase()}</div><span class="label">${t.label}</span>`;
  techGrid.appendChild(tile);
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
