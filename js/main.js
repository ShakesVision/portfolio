import { site, stats, skills, projects, qaHighlights, teaching, roles } from './data.js';

const params = new URLSearchParams(window.location.search);
const requestedRole = params.get('role') || 'dev';
const role = Object.hasOwn(roles, requestedRole) ? requestedRole : 'dev';
const requestedFor = params.get('for') || 'client';
const audience = ['client', 'job'].includes(requestedFor) ? requestedFor : 'client';
const app = document.querySelector('#app');
const header = document.querySelector('#site-header');
const footer = document.querySelector('#site-footer');
const config = { ...site, showSkillTiers: site.showSkillTiers, showAnonymousProfessionalHighlights: site.showAnonymousProfessionalHighlights };
const roleInfo = roles[role];

const esc = (value = '') => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const validLink = url => typeof url === 'string' && /^https:\/\//.test(url);
const linkMarkup = (items = []) => items.filter(item => validLink(item.url)).map(item => `<a class="text-link" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)} <span aria-hidden="true">↗</span></a>`).join('');
const chip = text => `<span class="chip">${esc(text)}</span>`;

function setMeta() {
  const audienceLead = audience === 'job' ? 'Personal work beyond the resume' : 'Independent products and engineering services';
  const titleByRole = {
    dev: `${site.name} — Full-Stack Engineer & Product Builder`,
    qa: `${site.name} — Quality Engineering & Test Automation`,
    ai: `${site.name} — AI, NLP & Applied Research`,
    lang: `${site.name} — Urdu Poetry, Teaching & Language Technology`
  };
  const descriptions = {
    dev: 'Selected software products, open-source tools, engineering work and research by Shakeeb Ahmad.',
    qa: 'An engineering-led view of end-to-end automation, unit testing, Jenkins execution and test-result workflows.',
    ai: 'Published language-generation research, NLP, deep learning and practical AI-enabled automation.',
    lang: 'Urdu poetry, aruz, taqti, qaafiya, teaching, one-to-one islah and language technology.'
  };
  document.title = titleByRole[role];
  document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[role]);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', titleByRole[role]);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', descriptions[role]);
  document.documentElement.dataset.role = role;
  document.documentElement.dataset.audience = audience;
  document.body.classList.toggle('lang-mode', role === 'lang');
  document.body.classList.toggle('qa-mode', role === 'qa');
  document.body.classList.toggle('job-mode', audience === 'job');
  return audienceLead;
}

function renderHeader() {
  header.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="./" aria-label="Shakeeb Ahmad home"><span class="brand-mark">SA<span>.</span></span><span class="brand-name">SHAKEEB AHMAD</span></a>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#about">Approach</a><a href="#contact" class="nav-contact">Contact <span aria-hidden="true">↗</span></a>
      </nav>
      <a class="header-note" href="#contact">${esc(config.availability)}</a>
      <button class="theme-toggle" type="button" aria-label="Toggle dark theme" title="Toggle dark theme">◐</button>
      <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button>
    </div>`;
  const themeToggle = header.querySelector('.theme-toggle');
  try { if (localStorage.getItem('shakeeb-theme') === 'dark') document.documentElement.dataset.theme = 'dark'; } catch (_) {}
  themeToggle.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    if (dark) document.documentElement.dataset.theme = 'dark'; else delete document.documentElement.dataset.theme;
    try { localStorage.setItem('shakeeb-theme', dark ? 'dark' : 'light'); } catch (_) {}
    themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  });
  const toggle = header.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  header.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => {
    header.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false');
  }));
}

function renderHero() {
  const title = audience === 'job' && role === 'dev'
    ? 'Selected work <em>beyond the resume.</em>'
    : roleInfo.title;
  const description = audience === 'job' && role === 'dev'
    ? 'A deeper look at independent products, open-source contributions, research and the engineering practice behind them.'
    : roleInfo.description;
  const note = audience === 'job' ? 'PERSONAL WORK / OPEN SOURCE / RESEARCH' : roleInfo.kicker;
  const statNote = role === 'lang' ? `${teaching.stat} ${teaching.label}` : roleInfo.meta;
  return `
    <section class="hero section-wrap" id="top">
      <div class="hero-topline"><span class="eyebrow">${esc(note)}</span><span class="eyebrow hero-location">${esc(config.location)} <i></i> ${esc(config.availability)}</span></div>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="hero-overline">${esc(roleInfo.label)} <span class="overline-rule"></span> ${esc(site.studio)}</p>
          <h1>${title}</h1>
          <p class="hero-description">${esc(description)}</p>
          <div class="hero-actions"><a class="button button-dark" href="#${role === 'qa' ? 'qa-highlights' : role === 'lang' ? 'teaching' : 'work'}">${esc(roleInfo.cta)} <span aria-hidden="true">↘</span></a><a class="quiet-link" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a></div>
          <div class="hero-meta"><span class="status-dot"></span><span>${esc(statNote)}</span></div>
        </div>
        <aside class="hero-art" aria-label="Typography-led abstract identity artwork">
          <div class="art-index">PORTFOLIO / 2026</div>
          <div class="art-giant">S<span>A</span></div>
          <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
          <div class="art-caption"><span>ENGINEER</span><span>BUILDER</span><span>STUDENT</span></div>
          <div class="art-stamp">INDEPENDENT<br>BY DESIGN</div>
        </aside>
      </div>
      <div class="hero-bottomline"><span>${audience === 'job' ? 'A curated record of independent work' : 'From first sketch to shipped product'}</span><span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span></div>
    </section>`;
}

function renderStats() {
  const filtered = role === 'qa' ? [stats[0], { value: 'E2E', label: 'automation mindset', note: 'Cypress-led workflows' }, { value: 'CI', label: 'repeatable execution', note: 'Jenkins and sandboxed runs' }, stats[2]] : role === 'lang' ? [{ value: teaching.stat, label: teaching.label, note: 'Private teaching, workshops and islah' }, stats[0], { value: '3', label: 'poetry languages', note: 'Urdu, Hindi and Persian' }, { value: 'RTL', label: 'language technology', note: 'Unicode and Nastaliq-aware interfaces' }] : stats;
  return `<section class="stats-strip section-wrap" aria-label="Selected numbers">${filtered.map((item, index) => `<article class="stat-item ${item.review ? 'needs-review' : ''}"><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span><small>${esc(item.note)}</small>${item.review ? '<em class="review-flag">Confirm attribution before publishing</em>' : ''}</article>`).join('')}</section>`;
}

function renderProjectCard(project, index) {
  const visual = `<div class="project-visual visual-${esc(project.accent)}"><span class="visual-serial">${String(index + 1).padStart(2, '0')} / PROJECT</span><div class="visual-wordmark">${esc(project.title)}</div><div class="visual-lines"><i></i><i></i><i></i></div><span class="visual-caption">${esc(project.type)}</span></div>`;
  return `<article class="project-card" data-categories="${esc(project.category.join(' '))}">
    <a class="project-card-main" href="#project-${esc(project.id)}" data-project-open="${esc(project.id)}" aria-label="Read about ${esc(project.title)}">${visual}<div class="project-info"><div class="project-heading"><span class="eyebrow">${esc(project.type)}</span><span class="project-arrow" aria-hidden="true">↗</span></div><h3>${esc(project.title)}</h3><p>${esc(project.subtitle)}</p><div class="project-tags">${project.tech.slice(0, 4).map(chip).join('')}</div></div></a>
  </article>`;
}

function renderWork() {
  const visible = projects.filter(p => p.visibility.includes(role));
  const cats = [...new Set(visible.flatMap(p => p.category))];
  const categoryLabels = { frontend: 'Frontend', backend: 'Backend & APIs', mobile: 'Mobile', ml: 'ML / AI', ai: 'AI', testing: 'Testing', language: 'Language', tool: 'Tools' };
  return `<section class="section-wrap section-block" id="work">
    <div class="section-heading"><div><span class="eyebrow">01 / SELECTED WORK</span><h2>Things made<br><em>to be useful.</em></h2></div><p class="section-intro">${role === 'lang' ? 'Tools and research built around language, reading and the practice of poetry.' : role === 'ai' ? 'A selection across language research, NLP and useful software systems.' : 'A selection of independent products, developer tools and engineering experiments.'}</p></div>
    <div class="filter-row" aria-label="Filter projects"><span class="filter-label">FILTER BY</span><button class="filter-chip active" data-filter="all" type="button">All work</button>${cats.map(cat => `<button class="filter-chip" data-filter="${esc(cat)}" type="button">${esc(categoryLabels[cat] || cat)}</button>`).join('')}</div>
    <div class="project-grid">${visible.map(renderProjectCard).join('')}</div>
    <div class="section-footnote"><span>MORE WORK IS ADDED AS IT IS DOCUMENTED.</span><span>${visible.length} SELECTED ENTRIES</span></div>
  </section>`;
}

function renderCapabilities() {
  if (role === 'qa') return renderQaHighlights();
  const visibleGroups = role === 'lang' ? skills.filter(g => ['Language technology', 'Frontend', 'Data, ML & AI'].includes(g.group)) : role === 'ai' ? skills.filter(g => ['Data, ML & AI', 'Backend & APIs', 'Language technology'].includes(g.group)) : skills;
  return `<section class="section-wrap section-block" id="capabilities">
    <div class="section-heading"><div><span class="eyebrow">02 / CAPABILITIES</span><h2>Range with<br><em>real depth.</em></h2></div><p class="section-intro">A practical toolkit built through shipping products, maintaining software and working across disciplines. Skill tiers are intentionally visible.</p></div>
    <div class="skills-layout">${visibleGroups.map((group, i) => `<article class="skill-group"><div class="skill-group-head"><span class="eyebrow">DOMAIN 0${i + 1}</span><h3>${esc(group.group)}</h3></div><ul>${group.items.map(([name, tier]) => `<li><span>${esc(name)}</span>${config.showSkillTiers ? `<small class="tier tier-${tier.toLowerCase()}">${esc(tier)}</small>` : ''}</li>`).join('')}</ul></article>`).join('')}</div>
    <p class="tier-note"><span class="tier-key core"></span> Core <span class="tier-key proficient"></span> Proficient <span class="tier-key exploring"></span> Exploring / Learning</p>
  </section>`;
}

function renderQaHighlights() {
  return `<section class="section-wrap section-block qa-section" id="capabilities"><div id="qa-highlights"></div>
    <div class="section-heading"><div><span class="eyebrow">02 / ANONYMISED QA HIGHLIGHTS</span><h2>Quality is a<br><em>delivery system.</em></h2></div><p class="section-intro">A practical automation workflow across the test lifecycle. Examples are described without employer, client, application or internal-tool identifiers.</p></div>
    <div class="qa-flow"><div class="qa-flow-label"><span>THE LOOP</span><b>SPEC → SCRIPT → RUN → FEEDBACK</b></div>${qaHighlights.map((item, index) => `<article class="qa-step"><span class="qa-number">${esc(item.n)}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></div><span class="qa-arrow" aria-hidden="true">${index === qaHighlights.length - 1 ? '↺' : '↓'}</span></article>`).join('')}</div>
    <div class="qa-toolband"><span class="eyebrow">TOOLS IN THE WORKFLOW</span><div>${['Cypress', 'Jasmine', 'Karma', 'Playwright', 'Pytest', 'Vitest', 'Jenkins', 'Jira'].map(chip).join('')}</div></div>
    ${config.showAnonymousProfessionalHighlights ? `<div class="anonymous-note"><span class="eyebrow">ANONYMISED PROFESSIONAL HIGHLIGHTS</span><p>[FILL: approved, non-confidential examples and outcomes]</p></div>` : ''}
  </section>`;
}

function renderAbout() {
  const paragraphs = role === 'qa'
    ? ['I approach quality as an engineering discipline, not a final checkpoint. The useful test is the one that can be repeated, trusted and connected to the team's delivery workflow.', 'My engineering background helps me move between application behaviour, test design, automation code and the infrastructure that runs it.']
    : role === 'lang'
      ? ['My work in Urdu poetry is both practical and technical: teaching the craft, studying its formal structure and building tools that make good writing easier to create and share.', 'That combination has led to products for rhyme and meter, dictionary workflows, Unicode publishing and right-to-left interfaces.']
      : role === 'ai'
        ? ['I am interested in applied intelligence: models and methods that can understand language, support creative work or connect to useful tools.', 'My foundation includes published research in Urdu and Hindi poetry generation, with current exploration across LLM workflows and agentic systems.']
        : ['I enjoy taking a product from an unclear problem to a working, maintainable release. That can mean shaping the interface, designing the API, connecting services or building the delivery workflow.', 'My independent work sits at the intersection of software engineering, language technology and products made for specific communities.'];
  return `<section class="section-wrap section-block about-section" id="about">
    <div class="about-mark"><span>SA.</span><small>HOW I THINK<br>HOW I BUILD</small></div>
    <div class="about-copy"><span class="eyebrow">03 / THE APPROACH</span><h2>${roleInfo.focus.split(' ').slice(0, 3).join(' ')}<br><em>${roleInfo.focus.split(' ').slice(3).join(' ')}</em></h2>${paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}<div class="principles"><span>01 / OWN THE OUTCOME</span><span>02 / MAKE TRADE-OFFS VISIBLE</span><span>03 / BUILD FOR THE NEXT ITERATION</span></div></div>
  </section>`;
}

function renderTeaching() {
  return `<section class="teaching-section section-wrap section-block" id="teaching">
    <div class="teaching-top"><div><span class="eyebrow">04 / TEACHING & ISLAH</span><h2>Passing the craft<br><em>forward.</em></h2></div><div class="teaching-stat"><strong>${esc(teaching.stat)}</strong><span>${esc(teaching.label)}</span><small>Across private learning, workshops and direct guidance</small></div></div>
    <p class="teaching-intro">${esc(teaching.intro)}</p>
    <div class="teaching-grid">${teaching.formats.map((item, i) => `<article><span class="eyebrow">0${i + 1} / LEARNING FORMAT</span><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></article>`).join('')}</div>
    <div class="subject-line"><span class="eyebrow">AREAS OF STUDY</span><div>${teaching.subjects.map(chip).join('')}</div></div>
    <div class="teaching-links"><span>PUBLIC LEARNING & WRITING</span>${linkMarkup([{ label: 'Telegram group', url: '[FILL: public Telegram invite URL]' }, { label: 'English blog', url: config.blog }, { label: 'Urdu blog', url: config.urduBlog }])}</div>
  </section>`;
}

function renderResearch() {
  if (role === 'qa') return `<section class="section-wrap section-block engineering-strip" id="engineering-background"><span class="eyebrow">03 / ENGINEERING BACKGROUND</span><h2>Built from a<br><em>software foundation.</em></h2><div class="engineering-facts"><span>7+ years total engineering work</span><span>12+ production applications</span><span>Node / Express API work serving 7,000+ users</span></div><a class="text-link" href="?role=dev">View full engineering portfolio ↗</a></section>`;
  return `<section class="section-wrap section-block research-section" id="research"><div><span class="eyebrow">05 / RESEARCH & STUDY</span><h2>Curiosity with<br><em>footnotes.</em></h2><p>Formal study and independent research inform the way I approach language, systems and software.</p></div><div class="research-detail"><article><span class="eyebrow">PUBLISHED RESEARCH</span><h3>Urdu & Hindi Poetry Generation Using Neural Networks</h3><p>ICDMAI 2022 · AI & Deep Learning track · Springer LNDECT chapter</p><a class="text-link" href="https://arxiv.org/abs/2107.14587" target="_blank" rel="noopener noreferrer">Read the paper ↗</a></article><article><span class="eyebrow">ACADEMIC BACKGROUND</span><h3>M.Tech & B.E.</h3><p>Computer Science</p><p class="research-small">Second-best paper in the ICDMAI 2022 AI & Deep Learning track; first place among 43 projects in an undergraduate competition (2017).</p></article></div></section>`;
}

function renderWriting() {
  return `<section class="section-wrap section-block writing-section" id="writing"><div class="section-heading"><div><span class="eyebrow">06 / WRITING & MEDIA</span><h2>Ideas in<br><em>public.</em></h2></div><p class="section-intro">Notes, tutorials and language-focused writing across software, linguistics, psychology and poetry.</p></div><div class="writing-grid"><a href="${esc(config.blog)}" target="_blank" rel="noopener noreferrer"><span class="eyebrow">ENGLISH / BLOG</span><strong>Shakes Vision</strong><span>Software, learning and ideas ↗</span></a><a href="${esc(config.urduBlog)}" target="_blank" rel="noopener noreferrer"><span class="eyebrow">URDU / BLOG</span><strong class="urdu" lang="ur" dir="rtl">نگہِ من</strong><span>Poetry, language and publishing ↗</span></a><a href="${esc(config.youtube)}" target="_blank" rel="noopener noreferrer"><span class="eyebrow">VIDEO / YOUTUBE</span><strong>Shakeeb Ahmad</strong><span>Talks, demonstrations and media ↗</span></a></div></section>`;
}

function renderServices() {
  if (audience !== 'client') return '';
  const services = role === 'lang'
    ? ['Urdu content review and poetic islah', 'Workshops and structured learning', 'Urdu / RTL product localisation', 'Unicode and language-focused web apps']
    : role === 'qa'
      ? ['End-to-end test automation', 'Unit and regression test suites', 'Test workflow and CI integration', 'Automation strategy and testability review']
      : role === 'ai'
        ? ['NLP and language-tool prototypes', 'AI-assisted product workflows', 'API and tool integrations', 'Research-to-prototype engineering']
        : ['Web and mobile product development', 'Backend systems and REST APIs', 'Automation and integrations', 'RTL, Unicode and language-aware interfaces'];
  return `<section class="section-wrap section-block services-section" id="services"><div class="section-heading"><div><span class="eyebrow">07 / WAYS TO WORK TOGETHER</span><h2>From idea to<br><em>in-use.</em></h2></div><p class="section-intro">Clear scope, honest trade-offs and a focus on making the result useful after handover.</p></div><div class="service-list">${services.map((s, i) => `<div><span>0${i + 1}</span><strong>${esc(s)}</strong><i aria-hidden="true">↗</i></div>`).join('')}</div></section>`;
}

function renderContact() {
  const emailIsReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email);
  const contactControl = emailIsReady ? `<a class="button button-light" href="mailto:${esc(config.email)}">Email Shakeeb <span aria-hidden="true">↗</span></a>` : `<span class="button button-light button-incomplete" aria-label="Add public email address before launch">Add public email before launch</span>`;
  return `<section class="contact-section section-wrap" id="contact"><div class="contact-ornament">LET'S<br>MAKE<br><em>IT MATTER.</em></div><div class="contact-content"><span class="eyebrow">${audience === 'job' ? 'A CLOSER LOOK' : 'HAVE A PROBLEM WORTH SOLVING?'}</span><h2>${audience === 'job' ? 'More context, on request.' : 'Have a thoughtful project in mind?'}</h2><p>${audience === 'job' ? 'For a role-specific discussion, selected project details and relevant technical context can be shared in conversation.' : 'Tell me what you are trying to build, improve or understand. The first step is a clear conversation.'}</p>${contactControl}<div class="social-links">${linkMarkup([{ label: 'GitHub', url: config.github }, { label: 'npm', url: config.npm }, { label: 'YouTube', url: config.youtube }, { label: 'Blog', url: config.blog }])}</div><small class="email-note">${emailIsReady ? esc(config.email) : "[FILL: public contact email in js/data.js]"}</small></div></section>`;
}

const sectionRegistry = {
  hero: renderHero,
  stats: renderStats,
  work: renderWork,
  capabilities: renderCapabilities,
  about: renderAbout,
  teaching: renderTeaching,
  research: renderResearch,
  writing: renderWriting,
  services: renderServices,
  contact: renderContact
};

function renderPage() {
  setMeta();
  renderHeader();
  let sequence = ['hero', 'stats', 'work', 'capabilities', 'about'];
  if (role === 'lang') sequence = ['hero', 'stats', 'teaching', 'work', 'capabilities', 'about', 'research', 'writing', 'services', 'contact'];
  else if (role === 'qa') sequence = ['hero', 'stats', 'capabilities', 'about', 'research', 'work', 'contact'];
  else if (role === 'ai') sequence = ['hero', 'stats', 'work', 'capabilities', 'about', 'teaching', 'research', 'writing', 'services', 'contact'];
  else sequence = ['hero', 'stats', 'work', 'capabilities', 'about', 'teaching', 'research', 'writing', 'services', 'contact'];
  app.innerHTML = sequence.map(name => sectionRegistry[name]()).join('');
  footer.innerHTML = `<div class="footer-inner"><a class="footer-brand" href="#top">SA<span>.</span></a><span>© ${new Date().getFullYear()} ${esc(site.name)}</span><span>${esc(site.location)}</span><a href="#top">BACK TO TOP ↑</a></div><div class="footer-bottom"><span>INDEPENDENT WORK / BUILT WITH INTENT</span><span>TYPOGRAPHY FIRST. ALWAYS.</span></div>`;
  bindFilters(); bindProjectDetails(); revealOnScroll();
}

function bindFilters() {
  const buttons = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.project-card')];
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.toggle('active', b === button));
    const filter = button.dataset.filter;
    cards.forEach(card => {
      const categories = card.dataset.categories.split(' ');
      card.hidden = filter !== 'all' && !categories.includes(filter);
    });
  }));
}

function bindProjectDetails() {
  const modal = document.createElement('dialog');
  modal.className = 'project-dialog';
  modal.setAttribute('aria-label', 'Project details');
  document.body.append(modal);

  const lightbox = document.createElement('dialog');
  lightbox.className = 'lightbox-dialog';
  lightbox.setAttribute('aria-label', 'Project image gallery');
  lightbox.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close gallery">×</button><button class="lightbox-prev" type="button" aria-label="Previous image">←</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" type="button" aria-label="Next image">→</button>`;
  document.body.append(lightbox);

  let activeMedia = [];
  let activeIndex = 0;
  const showMedia = index => {
    if (!activeMedia.length) return;
    activeIndex = (index + activeMedia.length) % activeMedia.length;
    const item = activeMedia[activeIndex];
    const img = lightbox.querySelector('img');
    img.src = item.src;
    img.alt = item.alt || item.caption || 'Project screenshot';
    lightbox.querySelector('figcaption').textContent = item.caption || '';
    lightbox.querySelector('.lightbox-prev').disabled = activeMedia.length < 2;
    lightbox.querySelector('.lightbox-next').disabled = activeMedia.length < 2;
  };
  const openMedia = (media, index) => {
    activeMedia = media;
    showMedia(index);
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
    else lightbox.setAttribute('open', '');
  };
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showMedia(activeIndex - 1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => showMedia(activeIndex + 1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener('keydown', event => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') showMedia(activeIndex - 1);
    if (event.key === 'ArrowRight') showMedia(activeIndex + 1);
  });
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0]?.screenX || 0; }, { passive: true });
  lightbox.addEventListener('touchend', event => {
    const delta = (event.changedTouches[0]?.screenX || 0) - touchStartX;
    if (Math.abs(delta) > 45) showMedia(activeIndex + (delta < 0 ? 1 : -1));
  }, { passive: true });

  document.querySelectorAll('[data-project-open]').forEach(anchor => anchor.addEventListener('click', event => {
    event.preventDefault();
    const project = projects.find(p => p.id === anchor.dataset.projectOpen);
    if (!project) return;
    const media = Array.isArray(project.media) ? project.media : [];
    const gallery = media.length ? `<div class="project-gallery">${media.map((item, index) => `<button class="gallery-thumb" type="button" data-media-index="${index}"><img src="${esc(item.src)}" alt="${esc(item.alt || item.caption || 'Project screenshot')}" loading="lazy"><span>${esc(item.caption || 'View image')}</span></button>`).join('')}</div>` : '';
    modal.innerHTML = `<form method="dialog"><button class="dialog-close" aria-label="Close project details">×</button></form><span class="eyebrow">${esc(project.type)}</span><h2>${esc(project.title)}</h2><p class="dialog-subtitle">${esc(project.subtitle)}</p><p>${esc(project.description)}</p><div class="dialog-highlights">${project.highlights.map(x => `<span>— ${esc(x)}</span>`).join('')}</div>${gallery}<div class="dialog-tags">${project.tech.map(chip).join('')}</div><div class="dialog-links">${linkMarkup(project.links)}</div>${project.draft ? '<p class="draft-warning">Draft entry — add verified scope and detail before publishing.</p>' : ''}`;
    modal.querySelectorAll('[data-media-index]').forEach(button => button.addEventListener('click', () => openMedia(media, Number(button.dataset.mediaIndex))));
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  }));
  modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
}

function revealOnScroll() {
  const items = document.querySelectorAll('.section-block, .stat-item, .project-card, .qa-step');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(item => item.classList.add('is-visible')); return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  items.forEach(item => observer.observe(item));
}

renderPage();
