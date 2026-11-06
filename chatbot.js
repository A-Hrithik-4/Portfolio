/* ==========================================================================
   SYLVIE — Portfolio AI Assistant (client-side, static-site compatible)
   AI Model : Gemini 2.5 Flash  ·  API : @google/generative-ai (browser CDN)
   Adapted from PULSE+ HMS chatbot architecture
   ========================================================================== */

(function () {

  /* ── DOM refs ── */
  const stage    = document.getElementById('syl-stage');
  const fab      = document.getElementById('syl-fab');
  const bot      = document.getElementById('syl-bot');
  const panel    = document.getElementById('syl-panel');
  const messages = document.getElementById('syl-messages');
  const form     = document.getElementById('syl-form');
  const input    = document.getElementById('syl-input');
  const closeBtn = document.getElementById('syl-close');
  const hint     = document.getElementById('syl-hint');

  if (!fab || !panel || !messages || !form || !input) return;

  /* ── Portfolio context fed to Gemini as system instruction ── */
  const PORTFOLIO_CONTEXT = `
You are Sylvie, the personal AI assistant embedded in Hrithik A's developer portfolio.
Your personality: concise, helpful, and slightly futuristic. Never be verbose.

About Hrithik A:
- 3rd year B.Tech student in Information Science Engineering at M. S. Ramaiah University of Applied Sciences (MSRUAS), Bangalore, India
- Seeking software development internships
- Focus: AI/ML, Full-Stack Web Development, Data Analysis

Experience:
- AI/ML Intern @ Bharat Electronics Limited (BEL), 2026 — built TRACE (track log anomaly detection)
- Google GenAI Academy APAC Cohort, 2026 — Gemini, Vertex AI, GCP, ADK, Cloud Run
- AI Data Analyst Intern @ Karo Startup, 2025 — Python automation pipelines
- Teaching Assistant @ Edvantage Academy, 2022–2026 — Physics, Chemistry, Maths (ICSE, PUC)

Projects:
1. GHOST — GNSS-Free Hybrid Onboard Sensor Tracker (SIH 2026). PyTorch 1D-CNN + 5-state EKF. 2.40% position drift during 60s GPS outage. Stack: Python, PyTorch, Scikit-learn, NumPy, SciPy, React, Three.js.
2. HAMMER — Cybersecurity escape room platform for 180+ participants (Pravrutti 2.0). Stack: Python, Flask, SQLite, Jinja2, Gunicorn, Render.
3. TRACE — Operational track log anomaly classification engine (BEL internship). Stack: Python, Pandas, NumPy, Scikit-learn (Isolation Forest), Streamlit, Plotly, Matplotlib, ReportLab.
4. PULSE+ — Full-stack hospital management system. Stack: HTML, CSS, JS, EJS, Node.js, Express.js, MySQL.
5. Elite Dine — Restaurant reservation & management web app. Stack: HTML, CSS, JavaScript.
6. SDF Aura — Tuition management portal. Stack: HTML, CSS, JavaScript, MongoDB.
7. Pocket Pilot — Personal finance dashboard (EMI calculator). Stack: HTML, CSS, JavaScript.

Achievements:
- 1st Place (SkyHack) at Pravrutti National Tech Fest 2026
- SIH SPOC for MSRUAS (2026) and selected at college level for SIH 2025 & 2026
- Event Lead — HAMMER, Pravrutti 2.0

Tech stack known: Python, Java, JavaScript, SQL, PyTorch, Scikit-learn, Flask, Streamlit, Pandas, NumPy, HTML5, CSS3, EJS, Node.js, Express.js, MySQL, MongoDB, SQLite, React, Three.js, Git, GitHub, VS Code, IntelliJ.

Contact: hrithik18a@gmail.com | +91 96865 05558 | LinkedIn: linkedin.com/in/hrithik4848 | GitHub: github.com/A-Hrithik-4

Answer questions about Hrithik's skills, projects, experience, achievements, and how to reach him. If asked something unrelated to this portfolio, politely redirect.
  `.trim();

  /* ── Gemini API (browser-side via REST) ── */
  const GEMINI_API_KEY   = window.SYLVIE_API_KEY || '';
  const GEMINI_MODEL     = 'gemini-2.5-flash';
  const GEMINI_ENDPOINT  = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=`;

  /* Conversation history for multi-turn chat */
  const history = [];

  async function askGemini(userText) {
    history.push({ role: 'user', parts: [{ text: userText }] });

    const payload = {
      system_instruction: { parts: [{ text: PORTFOLIO_CONTEXT }] },
      contents: history,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 400,
      }
    };

    const res = await fetch(GEMINI_ENDPOINT + GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `HTTP ${res.status}`);
    }

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    history.push({ role: 'model', parts: [{ text: reply }] });
    return reply;
  }

  /* ── Minimize / restore ── */
  const MINIMIZED_KEY = 'sylvie_minimized';

  const pill = document.createElement('div');
  pill.className = 'syl-pill';
  pill.innerHTML = `<div class="syl-pill-dot"></div><div class="syl-pill-text">Sylvie &mdash; <span>AI Assistant</span></div>`;
  stage.appendChild(pill);

  const minBtn = document.createElement('button');
  minBtn.className = 'syl-min-btn';
  minBtn.setAttribute('aria-label', 'Minimize Sylvie');
  stage.appendChild(minBtn);

  function applyMinimized(minimized) {
    stage.classList.toggle('minimized', minimized);
    minBtn.textContent = minimized ? '▲' : '▼';
  }

  applyMinimized(localStorage.getItem(MINIMIZED_KEY) !== '0');

  minBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const now = !stage.classList.contains('minimized');
    applyMinimized(now);
    localStorage.setItem(MINIMIZED_KEY, now ? '1' : '0');
  });

  pill.addEventListener('click', (e) => {
    e.stopPropagation();
    applyMinimized(false);
    localStorage.setItem(MINIMIZED_KEY, '0');
  });

  /* ── 3D Model viewer progressive enhancement ── */
  const modelEl = document.getElementById('sylvieModelViewer');
  if (modelEl) {
    modelEl.addEventListener('load', () => {
      modelEl.classList.add('loaded');
      const svg = document.querySelector('.syl-robot-svg');
      if (svg) svg.style.opacity = '0';
    });
  }

  /* ── Cinematic Flight Across Entire Page ── */
  function triggerSylvieFlight() {
    if (!bot || stage.classList.contains('minimized') || panel.classList.contains('open')) return;
    bot.classList.remove('flight-active', 'syl-jump');
    void bot.offsetWidth;
    bot.classList.add('flight-active');
    setTimeout(() => {
      bot.classList.remove('flight-active');
    }, 2850);
  }

  // Trigger flight on initial site visit / page load
  window.addEventListener('load', () => {
    setTimeout(triggerSylvieFlight, 450);
  });
  if (document.readyState === 'complete') {
    setTimeout(triggerSylvieFlight, 450);
  }

  // Trigger flight whenever user clicks a navigation link or logo
  document.querySelectorAll('.logo, .nav-links a, .hero-actions a').forEach((link) => {
    link.addEventListener('click', () => {
      setTimeout(triggerSylvieFlight, 250);
    });
  });

  /* ── Jump animation ── */
  function sylvieJump() {
    if (!bot) return;
    bot.classList.remove('syl-jump');
    void bot.offsetWidth;
    bot.classList.add('syl-jump');
    setTimeout(() => bot.classList.remove('syl-jump'), 600);
  }

  setInterval(sylvieJump, 5000);
  setTimeout(sylvieJump, 1500);

  /* ── Open / close panel ── */
  function openChat() {
    panel.classList.add('open');
    stage.classList.add('panel-open');
    if (hint) hint.classList.remove('show');
    sylvieJump();
    input.focus();
  }

  function closeChat() {
    panel.classList.remove('open');
    stage.classList.remove('panel-open');
  }

  fab.addEventListener('click', () => panel.classList.contains('open') ? closeChat() : openChat());
  closeBtn?.addEventListener('click', closeChat);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeChat(); });

  /* Hint tooltip on first visit */
  if (hint && !localStorage.getItem('sylvie_hint_seen')) {
    setTimeout(() => hint.classList.add('show'), 1400);
    setTimeout(() => {
      hint.classList.remove('show');
      localStorage.setItem('sylvie_hint_seen', '1');
    }, 8000);
  }

  /* ── Message rendering ── */
  function addMessage(text, role) {
    const el = document.createElement('div');
    el.className = `syl-msg ${role}`;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function addTyping() {
    const el = document.createElement('div');
    el.className = 'syl-msg bot typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  /* ── Send message ── */
  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (!GEMINI_API_KEY) {
      addMessage(trimmed, 'user');
      addMessage('⚠️ No API key set. Add your Gemini API key to window.SYLVIE_API_KEY in index.html.', 'bot');
      return;
    }

    input.disabled = true;
    const sendBtn = form.querySelector('button');
    if (sendBtn) sendBtn.disabled = true;

    addMessage(trimmed, 'user');
    const typing = addTyping();

    try {
      const reply = await askGemini(trimmed);
      typing.remove();
      addMessage(reply, 'bot');
    } catch (err) {
      typing.remove();
      addMessage(`Network error: ${err.message}`, 'bot');
    } finally {
      input.disabled = false;
      if (sendBtn) sendBtn.disabled = false;
      input.focus();
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    await sendMessage(text);
  });

  /* ── Quick-reply chips ── */
  document.querySelectorAll('.syl-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const msg = chip.getAttribute('data-msg');
      if (msg) { openChat(); sendMessage(msg); }
    });
  });

})();
