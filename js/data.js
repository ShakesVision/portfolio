export const site = {
  name: "Shakeeb Ahmad",
  shortName: "SA.",
  location: "Nagpur, India",
  availability: "Available",
  email: "admin@sarbakaf.com",
  github: "https://github.com/shakesvision",
  npm: "https://www.npmjs.com/~shakesvision",
  youtube: "https://www.youtube.com/@ShakeebAhmad",
  facebook: "https://www.facebook.com/ShakesVision",
  instagram: "https://www.instagram.com/sarbakafgroup/",
  instagramPersonal: "https://www.instagram.com/shakeeb.in/",
  blog: "https://shakeeb.in",
  urduBlog: "https://ur.shakeeb.in",
  magazine: "https://mag.sarbakaf.com",
  services: "https://sarbakaf.com",
  tools: "https://tools.shakeeb.in",
  studio: "Sarbakaf Group",
  showSkillTiers: true,
  showAnonymousProfessionalHighlights: true,
  showReligiousOrSectarianMagazineTopics: false,
  showPricing: true,
};

export const stats = [
  {
    value: "8+",
    label: "years building software",
    note: "Across products, APIs and tools",
  },
  {
    value: "12+",
    label: "published apps",
    note: "Fullstack, Web, Android and hybrid products",
  },
  {
    value: "38+",
    label: "browser tools",
    note: "Built and hosted on tools.shakeeb.in",
  },
  {
    value: "60K+",
    label: "Android app downloads",
    note: "Across Sarbakaf Group app listings",
    review: false,
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      ["HTML, CSS, JavaScript", "Core"],
      ["Angular", "Proficient"],
      ["Ionic / Capacitor", "Proficient"],
      ["React", "Exploring"],
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      ["Node.js / Express", "Core"],
      ["REST API design", "Core"],
      ["Python / FastAPI", "Proficient"],
      ["Serverless functions", "Proficient"],
      ["API security & hardening", "Core"],
    ],
  },
  {
    group: "Mobile & product",
    items: [
      ["Android / hybrid apps", "Proficient"],
      ["Firebase", "Proficient"],
      ["PWA architecture", "Proficient"],
      ["Product delivery", "Proficient"],
      ["App store publishing", "Proficient"],
    ],
  },
  {
    group: "Security & resilience",
    items: [
      ["Threat modeling", "Proficient"],
      ["Reverse engineering", "Proficient"],
      ["Penetration testing", "Proficient"],
      ["Secure coding patterns", "Core"],
      ["DDoS & abuse mitigation", "Proficient"],
      ["Malware / RAT analysis", "Exploring"],
    ],
  },
  {
    group: "Testing & quality",
    items: [
      ["Cypress E2E", "Proficient"],
      ["Jasmine / Karma", "Proficient"],
      ["Playwright", "Exploring"],
      ["Pytest", "Exploring"],
      ["Vitest / Jest", "Proficient"],
    ],
  },
  {
    group: "DevOps & delivery",
    items: [
      ["Jenkins pipelines", "Proficient"],
      ["GitHub Actions", "Proficient"],
      ["CI integration", "Proficient"],
      ["Cloud platforms", "Exploring"],
    ],
  },
  {
    group: "Data, ML & AI",
    items: [
      ["SQL / data handling", "Proficient"],
      ["NLP / deep learning", "Proficient"],
      ["Hugging Face", "Exploring"],
      ["LLM agents / tool calling", "Exploring"],
    ],
  },
  {
    group: "Language technology",
    items: [
      ["Unicode / RTL systems", "Core"],
      ["Urdu typography", "Core"],
      ["Urdu / Hindi NLP", "Proficient"],
      ["Farsi / Arabic", "Learning"],
    ],
  },
];

export const projects = [
  {
    id: "qaafiyah-expert",
    title: "Qaafiyah Expert 2.0",
    subtitle: "A complete workspace for the craft of poetry.",
    type: "Product / Mobile",
    category: ["mobile", "language", "frontend", "backend"],
    description:
      "An offline-first poetry companion for Urdu, Hindi, Persian and Hindustani writers. It connects rhyme discovery, meter analysis, large word lists, dictionary lookups, private notebooks and publishing workflows into one coherent product for poets and editors.",
    role: "Product design, engineering and ongoing development",
    tech: ["Ionic", "Angular", "Capacitor", "Firebase", "JavaScript"],
    highlights: [
      "Three interface languages: English, Urdu and Hindi",
      "Five poetry word-list scripts with custom lists",
      "Qafiya search, regex search and wazn filtering",
      "Multiple taqti engines and 9+ dictionaries",
      "Print-ready bayaaz layouts and cloud backup",
      "Public and private islah workflows",
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.sarbakaf.qaafiyah",
      },
      {
        label: "Blog post",
        url: "https://shakeeb.in/2026/08/qaafiyah-expert-2.html",
      },
    ],
    accent: "violet",
    visibility: ["dev", "lang", "ai"],
    media: [
      {
        src: "assets/project-qaafiyah-01.svg",
        alt: "Qaafiyah Expert app overview",
        caption: "Poetry workspace and writer tools",
      },
      {
        src: "assets/project-qaafiyah-02.svg",
        alt: "Qaafiyah Expert search and rhyme analysis",
        caption: "Meter and rhyme workflows",
      },
      {
        src: "assets/project-qaafiyah-03.svg",
        alt: "Qaafiyah Expert notebooks and export",
        caption: "Notebook and print-ready export",
      },
    ],
  },
  {
    id: "shakeeb-justify",
    title: "shakeeb-justify",
    subtitle: "Poetry layout, without the layout engine.",
    type: "Open-source / npm",
    category: ["frontend", "language", "tool"],
    description:
      "A zero-dependency JavaScript library for justified Urdu and RTL poetry layout, designed for ghazal, qaṣīda, nazm, mukhammas, musaddas and custom stanza patterns. It solves a practical challenge: clean, readable, print-friendly verse in the browser and in apps.",
    role: "Author and maintainer",
    tech: ["JavaScript", "npm", "Jest", "CSS"],
    highlights: [
      "Zero runtime dependencies",
      "Configurable stanza patterns",
      "Copy-friendly rendered output",
      "Integrated into apps, scripts and browser tooling",
    ],
    links: [
      {
        label: "Live demo",
        url: "https://shakesvision.github.io/PoetryJustification",
      },
      {
        label: "GitHub",
        url: "https://github.com/ShakesVision/PoetryJustification",
      },
    ],
    accent: "rose",
    visibility: ["dev", "qa", "lang"],
    media: [
      {
        src: "assets/project-justify-01.svg",
        alt: "Justified Urdu poetry preview",
        caption: "Typography and alignment system",
      },
      {
        src: "assets/project-justify-02.svg",
        alt: "Poetry layout in browser",
        caption: "Flexible stanza patterns",
      },
    ],
  },
  {
    id: "tools-shakeeb-in",
    title: "tools.shakeeb.in",
    subtitle:
      "A toolkit hub for practical utilities and productivity workflows.",
    type: "Web platform / tools site",
    category: ["frontend", "tool", "backend"],
    description:
      "A growing suite of browser-based utilities covering formatting, text conversion, image processing, scraping, reading and language workflows. The platform reflects the same product instinct behind the Android apps: build useful tools quickly, make them reliable, and keep them usable offline where possible.",
    role: "Design, product strategy and implementation",
    tech: ["JavaScript", "HTML", "CSS", "PWA", "Offline-first UX"],
    highlights: [
      "38+ public tools and utilities",
      "Offline-first and cached shell patterns",
      "Built for Urdu, multimedia and data processing work",
      "Designed to support experimentation and product iteration",
    ],
    links: [
      { label: "Tools hub", url: "https://tools.shakeeb.in" },
      { label: "Featured tools", url: "https://tools.shakeeb.in" },
    ],
    accent: "blue",
    visibility: ["dev", "ai", "lang"],
    media: [
      {
        src: "assets/project-tools-01.svg",
        alt: "Tools hub landing page",
        caption: "Tool catalog and utility grid",
      },
      {
        src: "assets/project-tools-02.svg",
        alt: "Project utility dashboard",
        caption: "Browser-first utility workflows",
      },
    ],
  },
  {
    id: "urdu-tools",
    title: "Urdu Tools",
    subtitle: "A toolkit that can grow with its users.",
    type: "Android app",
    category: ["mobile", "language"],
    description:
      "An Android utility platform for creating and importing Urdu tools, with remote updates, custom code support and language-first UX. It reflects a broader product philosophy: make niche utilities usable, extensible and maintainable without forcing the user into a rigid product structure.",
    role: "Product and app development",
    tech: ["Android", "Web technologies", "Remote configuration"],
    highlights: [
      "Custom tool import and creation flow",
      "Remote updates and extensibility",
      "Built for Urdu-first user workflows",
      "Published in the Sarbakaf Group Play Store portfolio",
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.sarbakaf.utools",
      },
      {
        label: "Developer page",
        url: "https://play.google.com/store/apps/dev?id=8917194327395382081&hl=en_IN",
      },
    ],
    accent: "gold",
    visibility: ["dev", "lang"],
    media: [
      {
        src: "assets/project-urdu-tools-01.svg",
        alt: "Urdu Tools app home",
        caption: "Urdu-first utility toolkit",
      },
      {
        src: "assets/project-urdu-tools-02.svg",
        alt: "Urdu Tools examples",
        caption: "Extensible utility workflows",
      },
    ],
  },
  {
    id: "sarbakaf-magazine",
    title: "Sarbakaf Magazine",
    subtitle: "A digital magazine and publishing platform.",
    type: "Publishing / editorial",
    category: ["language", "frontend", "tool"],
    description:
      "A long-running editorial and publishing project that houses thoughtful essays, religious and cultural discussion, poetry, and public writing in Urdu. The publication demonstrates the blend of content, research, editorial structure, and web publishing that underpins much of the broader work.",
    role: "Editor, publishing designer and web publisher",
    tech: ["Blogger", "HTML", "CSS", "Web publishing", "Unicode"],
    highlights: [
      "Long-running magazine archive",
      "Urdu-language article publishing",
      "Topic-driven editorial categories and archive navigation",
      "Strong content-first publishing structure",
    ],
    links: [{ label: "Magazine", url: "https://mag.sarbakaf.com" }],
    accent: "mint",
    visibility: ["dev", "lang"],
    media: [
      {
        src: "assets/project-magazine-01.svg",
        alt: "Sarbakaf Magazine home page",
        caption: "Editorial archive and content publishing",
      },
      {
        src: "assets/project-magazine-02.svg",
        alt: "Magazine article listing",
        caption: "Category-based long-form archive",
      },
    ],
  },
  {
    id: "research",
    title: "Urdu & Hindi poetry generation",
    subtitle: "Language, pattern and neural generation.",
    type: "Published research",
    category: ["ml", "ai", "language"],
    description:
      "Research exploring Urdu and Hindi poetry generation using neural networks, published in the context of ICDMAI 2022 and a Springer LNDECT chapter. The work sits between language understanding, creative generation and applied NLP experimentation.",
    role: "Research contributor",
    tech: ["NLP", "Neural networks", "Python"],
    highlights: [
      "Published research with a peer-reviewed conference track",
      "Second-best paper in ICDMAI 2022 AI & Deep Learning",
      "Examples of generation patterns in Urdu and Hindi poetry",
    ],
    links: [{ label: "arXiv paper", url: "https://arxiv.org/abs/2107.14587" }],
    accent: "blue",
    visibility: ["ai", "lang"],
    media: [
      {
        src: "assets/project-research-01.svg",
        alt: "Research summary and AI model concept",
        caption: "Applied language research",
      },
      {
        src: "assets/project-research-02.svg",
        alt: "Urdu and Hindi generation concept",
        caption: "Poetry and language generation",
      },
    ],
  },
  {
    id: "more-android",
    title: "A portfolio of focused Android products",
    subtitle: "Small, purposeful apps with real users.",
    type: "Mobile products",
    category: ["mobile"],
    description:
      "Additional published work includes Quran: Hifz Helper, AfsaneDB, Patras Ke Mazameen and OneSignal Push Manager. These products reflect a consistent product pattern: useful domain-specific utilities, bilingual and RTL support, and a low-friction path from idea to app store deployment.",
    role: "Product and app development",
    tech: ["Android", "TWA", "Web technologies"],
    highlights: [
      "Utility, reading and learning-oriented products",
      "Dedicated case-study slots for each app",
      "Published under the Sarbakaf Group developer identity",
    ],
    links: [
      {
        label: "Developer page",
        url: "https://play.google.com/store/apps/dev?id=8917194327395382081&hl=en_IN",
      },
    ],
    accent: "mint",
    visibility: ["dev", "lang"],
    media: [
      {
        src: "assets/project-android-01.svg",
        alt: "Android product list overview",
        caption: "Mobile product portfolio",
      },
      {
        src: "assets/project-android-02.svg",
        alt: "Android utility app concept",
        caption: "Utility and learning-first app design",
      },
    ],
  },
];

export const qaHighlights = [
  {
    n: "01",
    title: "End-to-end automation at application scale",
    body: "Automating complete user journeys across large applications with Cypress, turning end-to-end coverage into a repeatable engineering practice.",
  },
  {
    n: "02",
    title: "Unit testing as part of the build",
    body: "Unit-level test suites using Jasmine and Karma, with attention to regression safety and the behaviour of individual components.",
  },
  {
    n: "03",
    title: "From test bed to executable tests",
    body: "Translating test beds and test cases into automated test-writing workflows and maintainable execution scripts.",
  },
  {
    n: "04",
    title: "Sandboxed Jenkins execution",
    body: "Writing Jenkins job scripts, running suites across isolated environments and making execution repeatable across test beds.",
  },
  {
    n: "05",
    title: "Results back into the workflow",
    body: "Automating the feedback loop by publishing test outcomes to Jira, helping teams see results where work is tracked.",
  },
  {
    n: "06",
    title: "Regression, failure triage and root-cause analysis",
    body: "Using repeatable regression and end-to-end runs to isolate failures, investigate likely causes and give teams actionable feedback.",
  },
];

export const teaching = {
  stat: "500+",
  label: "direct students taught",
  intro:
    "My teaching is primarily private and workshop-based, with direct one-to-one islah. I also keep learning public through educational blog posts, writing, and discussion around poetry, language and craft.",
  formats: [
    {
      title: "Private teaching & workshops",
      body: "Most teaching takes place privately or in workshop settings, with focused sessions around poetic craft, prosody and practical correction.",
    },
    {
      title: "One-to-one islah",
      body: "Personal feedback on individual verses, including meter, rhyme, expression and the finer points of poetic construction.",
    },
    {
      title: "Public learning spaces",
      body: "Educational writing, blog posts and public discussion that make poetry learning accessible beyond private sessions.",
    },
  ],
  subjects: [
    "Aruuz & taqti",
    "Qaafiya & radeef",
    "Wazn and poetic structure",
    "Islah and poetic flaws",
    "Urdu language and writing",
  ],
};

export const roles = {
  dev: {
    label: "Full-stack engineer",
    kicker: "ENGINEERING / PRODUCT / EXECUTION",
    title: "I turn <em>complex ideas</em> into things people can use.",
    description:
      "I design, build and ship software across the stack—from thoughtful interfaces and mobile products to APIs, automation and the systems behind them.",
    cta: "Explore selected work",
    focus: "Engineering with end-to-end ownership",
    meta: "7+ years total · 5+ professional · 12+ production apps",
  },
  qa: {
    label: "Quality & test automation",
    kicker: "QUALITY ENGINEERING / AUTOMATION / DELIVERY",
    title: "I make quality <em>repeatable</em>—from test case to result.",
    description:
      "A developer's approach to testing: automate end-to-end journeys, build unit-level confidence, orchestrate sandboxed runs and return useful results to the team's workflow.",
    cta: "Explore QA highlights",
    focus: "Automation as an engineering system",
    meta: "Cypress · Jasmine / Karma · Jenkins · Jira",
  },
  ai: {
    label: "AI & applied research",
    kicker: "AI / NLP / RESEARCH / AUTOMATION",
    title: "Connecting <em>language and intelligence</em> to useful tools.",
    description:
      "My AI work spans published language-generation research, NLP, deep-learning exploration and practical automation that connects models with real tools.",
    cta: "Explore AI work",
    focus: "Research-minded, product-oriented AI",
    meta: "Published research · NLP · neural networks · agentic workflows",
  },
  lang: {
    label: "Urdu language & poetry",
    kicker: "POETRY / PROSODY / TEACHING / LANGUAGE TECHNOLOGY",
    title: "A lifelong study of <em>the word</em>—and the tools that serve it.",
    description:
      "I teach, write about and build for Urdu poetry: from aruz, taqti and qaafiya to Unicode, Nastaliq typography and right-to-left software.",
    cta: "Explore language work",
    focus: "A craftsman's eye, an engineer's toolkit",
    meta: "500+ direct students · one-to-one islah · language tools",
  },
};
