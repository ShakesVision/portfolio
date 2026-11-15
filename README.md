# Shakeeb Ahmad — Personal Portfolio

A typography-first portfolio built with semantic HTML, CSS and vanilla JavaScript. The visual direction follows Concept 07: oversized editorial typography, warm ivory surfaces, deep violet accents, restrained grids and typography-led project presentation. A dark theme is available from the small theme control in the header.

## Run locally

The site uses JavaScript modules, so open it through a local static server rather than double-clicking `index.html`.

```bash
cd shakeeb-portfolio
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Views

The default view is the general full-stack engineer portfolio. Tailored views are addressable with URL parameters and can be sent as separate links:

- General engineering: `/` or `/?role=dev`
- QA / test automation: `/?role=qa`
- AI and applied research: `/?role=ai&for=client`
- Urdu language and poetry: `/?role=lang`
- Personal work beyond a resume: `/?role=dev&for=job`

Supported `role` values are `dev`, `qa`, `ai` and `lang`. Supported `for` values are `client` and `job`. Unknown values fall back to the default. There is deliberately no visible role switcher on the default page.

## How to add things

All portfolio content is in `js/data.js`. The markup and rendering logic live in `js/main.js`; styles live in `css/styles.css`.

### Add a project

Copy this object into the `projects` array in `js/data.js`:

```js
{
  id: "my-new-project",
  title: "Project title",
  subtitle: "A one-line explanation.",
  type: "Web app / Open source / Mobile app",
  category: ["frontend", "backend"],
  description: "A fuller description of the problem, solution and result.",
  role: "My role on the project",
  tech: ["JavaScript", "Node.js"],
  highlights: ["Verified capability or feature", "Another verified detail"],
  links: [{ label: "Live", url: "https://example.com" }],
  accent: "violet",
  visibility: ["dev", "qa"],
  draft: false
}
```

Available accent values: `violet`, `rose`, `blue`, `mint`, `gold`. Categories are free-form, but the filter row is generated from categories actually used by projects. `visibility` controls which role pages display a project. Use only verified claims in `highlights`; mark incomplete project entries with `draft: true`.

When screenshots are ready, add a `media` array to the project object. The project dialog automatically displays thumbnails, lazy-loads them and opens a keyboard- and swipe-enabled lightbox. Use local files under `assets/projects/<project-id>/` and add descriptive alt text and captions. Example: `media: [{ src: "assets/projects/my-new-project/screen-01.webp", alt: "Dashboard overview", caption: "Dashboard overview" }]`. The current project cover artwork is an intentional typographic placeholder, not a claim to be a screenshot of the app.

### Add a skill

Add a `["Skill name", "Tier"]` pair to the appropriate group in `skills`. Allowed tiers are `Core`, `Proficient`, `Exploring` and `Learning`. Keep tiers honest. The `site.showSkillTiers` switch controls their display.

### Add a QA highlight

Add an object to `qaHighlights` with `n`, `title` and `body`. Keep all examples anonymised and remove client, employer, product and internal-system identifiers. The five initial highlights are based on the workflow supplied for this portfolio.

### Add teaching, a workshop or a publication

Teaching content is organised in `teaching.formats` and `teaching.subjects`. Research and writing links are rendered in `renderResearch()` and `renderWriting()` in `js/main.js`; move those into `data.js` if the lists grow. Do not add student names, private messages or testimonials without explicit permission.

### Add a section type

Add a renderer function in `js/main.js`, register it in `sectionRegistry`, and include its key in the relevant role sequence inside `renderPage()`. Keep section content in `js/data.js` where practical. This keeps future sections such as Talks, Case Studies, Services or Open-source Contributions modular.

## Configuration

The `site` object in `js/data.js` contains the public email, social links, skill-tier setting and content switches. Important switches:

- `showSkillTiers`: displays Core / Proficient / Exploring / Learning labels.
- `showAnonymousProfessionalHighlights`: optional extra professional bullets; **off by default**. The QA workflow highlights already shown in the QA view are a separate, user-supplied set of anonymised descriptions.
- `showReligiousOrSectarianMagazineTopics`: off by default. The Urdu magazine is described as an editing, publishing, typesetting and Unicode web-publishing project only.
- `showPricing`: off by default.

## Deployment

This is a static site with no build step or server-side dependency. Upload the folder to GitHub Pages, Netlify or Cloudflare Pages. Keep the folder structure intact. The project can also be served from any ordinary static web server.

The Google Fonts stylesheet is optional; local fallbacks are defined in CSS. No JavaScript framework or animation library is required. Scroll reveals use `IntersectionObserver` and automatically fall back when reduced motion is requested.

## Privacy and content safeguards

- No employer names or work-history section are included.
- No phone number is collected or displayed.
- The public email is provided in `js/data.js` and is ready for launch.
- No invented testimonial, client logo, case-study outcome or test-coverage percentage is used.
- Project cover panels are typographic placeholders. Replace them with approved product screenshots before launch.
