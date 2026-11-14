export const site = {
  name: "Shakeeb Ahmad",
  shortName: "SA.",
  location: "Nagpur / Kamptee, India",
  availability: "Open to select projects and relocation",
  email: "[FILL: public contact email]",
  github: "https://github.com/shakesvision",
  npm: "https://www.npmjs.com/~shakesvision",
  youtube: "https://www.youtube.com/@ShakeebAhmad",
  blog: "https://shakeeb.in",
  urduBlog: "https://ur.shakeeb.in",
  studio: "Sarbakaf Group",
  showSkillTiers: true,
  showAnonymousProfessionalHighlights: false,
  showReligiousOrSectarianMagazineTopics: false,
  showPricing: false
};

export const stats = [
  { value: "7+", label: "years building software", note: "5+ years in professional teams" },
  { value: "12+", label: "production apps", note: "Web, mobile and developer tools" },
  { value: "7,000+", label: "active API users", note: "Across Node / Express APIs I built" },
  { value: "45K+", label: "Android app downloads", note: "App attribution to confirm before launch", review: true }
];

export const skills = [
  { group: "Frontend", items: [ ["HTML, CSS, JavaScript", "Core"], ["Angular", "Proficient"], ["Ionic / Capacitor", "Proficient"], ["React", "Exploring"] ] },
  { group: "Backend & APIs", items: [ ["Node.js / Express", "Core"], ["REST API design", "Core"], ["Python / FastAPI", "Proficient"], ["Serverless functions", "Proficient"] ] },
  { group: "Mobile & product", items: [ ["Android / hybrid apps", "Proficient"], ["Firebase", "Proficient"], ["PWA architecture", "Proficient"], ["Product delivery", "Proficient"] ] },
  { group: "Testing & quality", items: [ ["Cypress E2E", "Proficient"], ["Jasmine / Karma", "Proficient"], ["Playwright", "Exploring"], ["Pytest", "Exploring"], ["Vitest / Jest", "Proficient"] ] },
  { group: "DevOps & delivery", items: [ ["Jenkins pipelines", "Proficient"], ["GitHub Actions", "Proficient"], ["CI integration", "Proficient"], ["Cloud platforms", "Exploring"] ] },
  { group: "Data, ML & AI", items: [ ["SQL / data handling", "Proficient"], ["NLP / deep learning", "Proficient"], ["Hugging Face", "Exploring"], ["LLM agents / tool calling", "Exploring"] ] },
  { group: "Language technology", items: [ ["Unicode / RTL systems", "Core"], ["Urdu typography", "Core"], ["Urdu / Hindi NLP", "Proficient"], ["Farsi / Arabic", "Learning"] ] }
];

export const projects = [
  {
    id: "qaafiyah-expert", title: "Qaafiyah Expert 2.0", subtitle: "A complete workspace for the craft of poetry.", type: "Product / Mobile", category: ["mobile", "language", "frontend", "backend"],
    description: "An offline-first poetry companion for Urdu, Hindi, Persian and Hindustani writers. It brings rhyme discovery, meter analysis, dictionaries, a personal bayaaz and an islah workspace into one carefully connected product.",
    role: "Product design, engineering and ongoing development", tech: ["Ionic", "Angular", "Capacitor", "Firebase", "JavaScript"],
    highlights: ["Three interface languages: English, Urdu and Hindi", "Five poetry word-list scripts, with custom lists", "Qafiya search, regex search and wazn filtering", "Multiple taqti engines and 9+ dictionaries", "Print-ready bayaaz layouts and cloud backup", "Public and private islah workflows"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.sarbakaf.qaafiyah" }, { label: "Trailer", url: "https://www.youtube.com/watch?v=1aOX0Ed1cYg" }], accent: "violet", visibility: ["dev", "lang", "ai"]
  },
  {
    id: "shakeeb-justify", title: "shakeeb-justify", subtitle: "Poetry layout, without the layout engine.", type: "Open-source / npm", category: ["frontend", "language", "tool"],
    description: "A zero-dependency JavaScript package for justified Urdu and RTL poetry layouts, supporting ghazal, qat'a, mukhammas, musaddas and custom patterns.",
    role: "Author and maintainer", tech: ["JavaScript", "npm", "Jest", "CSS"],
    highlights: ["Zero runtime dependencies", "Configurable stanza patterns", "Copy-friendly rendered output", "Integrated into 8+ apps, web apps, scripts and an extension"],
    links: [{ label: "Live demo", url: "https://shakesvision.github.io/PoetryJustification" }, { label: "GitHub", url: "https://github.com/ShakesVision/PoetryJustification" }], accent: "rose", visibility: ["dev", "qa", "lang"]
  },
  {
    id: "hyperdict", title: "HyperDict.js", subtitle: "A browser-native dictionary engine.", type: "Open-source / npm", category: ["frontend", "backend", "tool"],
    description: "A browser-focused StarDict engine built around efficient lookup and practical offline use, with Bloom-filter support, binary search, HTTP Range requests and caching.",
    role: "Author and maintainer", tech: ["JavaScript", "Vitest", "Chrome MV3", "GitHub Actions"],
    highlights: ["Browser-native dictionary access", "Range-based data retrieval", "Offline cache support", "Automated tests and CI workflow"],
    links: [{ label: "GitHub", url: "https://github.com/shakesvision/hyperdict" }], accent: "blue", visibility: ["dev", "qa", "lang"]
  },
  {
    id: "dicapi", title: "dicapi", subtitle: "Reusable dictionary data as an API.", type: "Backend / API", category: ["backend", "tool"],
    description: "A reusable Node / Express web-scraping REST API designed to run independently or as serverless functions.",
    role: "Design and implementation", tech: ["Node.js", "Express", "REST", "Netlify Functions"],
    highlights: ["Reusable API surface", "Standalone and serverless deployment patterns", "Structured access to dictionary-oriented data"],
    links: [{ label: "GitHub", url: "https://github.com/shakesvision/dicapi" }], accent: "mint", visibility: ["dev", "ai"]
  },
  {
    id: "urdu-tools", title: "Urdu Tools", subtitle: "A toolkit that can grow with its users.", type: "Android app", category: ["mobile", "language"],
    description: "An Android utility platform for creating and importing Urdu tools, with remote updates and custom-code support.",
    role: "Product and app development", tech: ["Android", "Web technologies", "Remote configuration"],
    highlights: ["Extendable tool model", "Remote updates", "Urdu-first experience"],
    links: [{ label: "Google Play", url: "[FILL: Urdu Tools Play Store URL]" }], accent: "gold", visibility: ["dev", "lang"]
  },
  {
    id: "urdu-web-tools", title: "A growing Urdu web toolkit", subtitle: "Reading, conversion and writing tools for the browser.", type: "Web apps / PWA collection", category: ["frontend", "language", "tool"],
    description: "A collection of focused tools emerging from the Urdu publishing and language ecosystem: reader experiences, InPage-to-Unicode workflows, text utilities and contextual word lookup.",
    role: "Independent design and development", tech: ["JavaScript", "HTML", "CSS", "Unicode", "PWA"],
    highlights: ["Rekhta Reader and Downloader", "InPage Reader with Unicode conversion", "Naseem InPage texter", "In-page word meaning lookup"],
    links: [{ label: "Urdu blog", url: "https://ur.shakeeb.in" }], accent: "rose", visibility: ["dev", "lang"]
  },
  {
    id: "research", title: "Urdu & Hindi poetry generation", subtitle: "Language, pattern and neural generation.", type: "Published research", category: ["ml", "ai", "language"],
    description: "Research exploring Urdu and Hindi poetry generation using neural networks, published in the context of ICDMAI 2022 and a Springer LNDECT chapter.",
    role: "Research contributor", tech: ["NLP", "Neural networks", "Python"],
    highlights: ["Published research", "Second-best paper, ICDMAI 2022 — AI & Deep Learning track"],
    links: [{ label: "arXiv paper", url: "https://arxiv.org/abs/2107.14587" }], accent: "blue", visibility: ["ai", "lang"]
  },
  {
    id: "nafnuq", title: "NafNuq Dashboard", subtitle: "A data-led dashboard concept.", type: "Python application", category: ["backend", "tool"],
    description: "A Python application for share and stock recommendations using custom filters. More detail will be added once the public-facing scope is ready.",
    role: "[FILL: role and scope]", tech: ["Python", "[FILL: data stack]"],
    highlights: ["Details forthcoming"], links: [], accent: "gold", visibility: ["dev", "ai"], draft: true
  },
  {
    id: "more-android", title: "A portfolio of focused Android products", subtitle: "Small, purposeful apps with real users.", type: "Mobile products", category: ["mobile"],
    description: "Additional products include Quran: Hifz Helper, AfsaneDB, Patras Ke Mazameen and OneSignal Push Manager. Individual case studies and current listing links can be added as media is assembled.",
    role: "Product and app development", tech: ["Android", "TWA", "Web technologies"],
    highlights: ["Utility, reading and learning-oriented products", "Dedicated case-study slots for each app"], links: [], accent: "mint", visibility: ["dev", "lang"]
  }
];

export const qaHighlights = [
  { n: "01", title: "End-to-end automation at application scale", body: "Automating complete user journeys across large applications with Cypress, turning end-to-end coverage into a repeatable engineering practice." },
  { n: "02", title: "Unit testing as part of the build", body: "Unit-level test suites using Jasmine and Karma, with attention to regression safety and the behaviour of individual components." },
  { n: "03", title: "From test bed to executable tests", body: "Translating test beds and test cases into automated test-writing workflows and maintainable execution scripts." },
  { n: "04", title: "Sandboxed Jenkins execution", body: "Writing Jenkins job scripts, running suites across isolated environments and making execution repeatable across test beds." },
  { n: "05", title: "Results back into the workflow", body: "Automating the feedback loop by publishing test outcomes to Jira, helping teams see results where work is tracked." },
  { n: "06", title: "Regression, failure triage and root-cause analysis", body: "Using repeatable regression and end-to-end runs to isolate failures, investigate likely causes and give teams actionable feedback." }
];

export const teaching = {
  stat: "500+",
  label: "direct students taught",
  intro: "My teaching is primarily private and workshop-based, with direct one-to-one islah. I also keep learning public through a Telegram group, educational blog posts and forum discussions.",
  formats: [
    { title: "Private teaching & workshops", body: "Most teaching takes place privately or in workshop settings, with focused sessions around poetic craft, prosody and practical correction." },
    { title: "One-to-one islah", body: "Personal feedback on individual verses, including meter, rhyme, expression and the finer points of poetic construction." },
    { title: "Public learning spaces", body: "A Telegram group, educational blog posts and forum-based discussions that make poetry learning accessible beyond private sessions." }
  ],
  subjects: ["Aruuz & taqti", "Qaafiya & radeef", "Wazn and poetic structure", "Islah and poetic flaws", "Urdu language and writing"]
};

export const roles = {
  dev: {
    label: "Full-stack engineer",
    kicker: "ENGINEERING / PRODUCT / EXECUTION",
    title: "I turn <em>complex ideas</em> into things people can use.",
    description: "I design, build and ship software across the stack—from thoughtful interfaces and mobile products to APIs, automation and the systems behind them.",
    cta: "Explore selected work",
    focus: "Engineering with end-to-end ownership",
    meta: "7+ years total · 5+ professional · 12+ production apps"
  },
  qa: {
    label: "Quality & test automation",
    kicker: "QUALITY ENGINEERING / AUTOMATION / DELIVERY",
    title: "I make quality <em>repeatable</em>—from test case to result.",
    description: "A developer's approach to testing: automate end-to-end journeys, build unit-level confidence, orchestrate sandboxed runs and return useful results to the team's workflow.",
    cta: "Explore QA highlights",
    focus: "Automation as an engineering system",
    meta: "Cypress · Jasmine / Karma · Jenkins · Jira"
  },
  ai: {
    label: "AI & applied research",
    kicker: "AI / NLP / RESEARCH / AUTOMATION",
    title: "Connecting <em>language and intelligence</em> to useful tools.",
    description: "My AI work spans published language-generation research, NLP, deep-learning exploration and practical automation that connects models with real tools.",
    cta: "Explore AI work",
    focus: "Research-minded, product-oriented AI",
    meta: "Published research · NLP · neural networks · agentic workflows"
  },
  lang: {
    label: "Urdu language & poetry",
    kicker: "POETRY / PROSODY / TEACHING / LANGUAGE TECHNOLOGY",
    title: "A lifelong study of <em>the word</em>—and the tools that serve it.",
    description: "I teach, write about and build for Urdu poetry: from aruz, taqti and qaafiya to Unicode, Nastaliq typography and right-to-left software.",
    cta: "Explore language work",
    focus: "A craftsman's eye, an engineer's toolkit",
    meta: "500+ direct students · one-to-one islah · language tools"
  }
};
