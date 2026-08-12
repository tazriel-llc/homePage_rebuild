# Tazriel — Website Redesign PRD

**Version** 1.0
**Date** 2026-08-12
**Owner** Robel Muluwork
**Status** Approved for build
**Repo** `C:\project\tazriel_redesign` (standalone git, separate from `tazriel_webpage`)

---

## 1. Context

Tazriel is a global business-process-outsourcing and technology-services company (Springfield, Illinois; founded 2025) operating remote specialist teams across two continents. Seven service lines are live, two are built but dormant.

The current site at tazriel.com is technically sound — Next.js 14, good metadata discipline, valid structured data, sitemap, real SEO work — and visually undermines the business it describes.

### 1.1 What is actually wrong

This is not a taste complaint. Each item below costs money.

| Problem | Why it costs money |
|---|---|
| **Leads with "affordable"** | The homepage headline and meta description both sell on price. Price-led positioning attracts price-led buyers, who churn, negotiate hardest, and never expand. It also caps the deal size a visitor imagines before they read a single service page. |
| **Discount-retail visual grammar** | Filled orange pill buttons, frosted-glass stat cards, floating gradient orbs, drop shadows on everything. This is the visual language of consumer SaaS growth pages, not of a firm you trust with your infrastructure. |
| **Montserrat everywhere** | The most-used free geometric sans on the web. It reads as "template" to anyone who looks at websites for a living — including the buyers at the companies Tazriel wants. |
| **No people** | The pitch is elite specialists. There is no About page, no team, no faces, no named expertise. The single most important claim has no evidence anywhere on the site. |
| **Decorative motion** | `framer-motion` fades on load with staggered delays. Motion that decorates rather than directs. It signals effort, not craft. |
| **Dead weight in the build** | ~30 Radix primitives installed, a handful used. Commented-out arrays and dead JSX shipped to production (`hero-section.tsx` renders an empty grid; `services.ts` carries two commented-out entries). |
| **Undifferentiated services** | Nine services presented as nine equal cards with an icon and one sentence. No hierarchy, no proof, no sense of which one Tazriel is genuinely world-class at. |

### 1.2 What is worth keeping

- Route structure and slugs — they have SEO history and will be preserved exactly.
- Per-route `layout.tsx` metadata pattern — correct approach, carried forward.
- `StructuredData` organization schema — extended, not replaced.
- Brand palette — navy `#020035`, electric blue `#2100b1`, orange `#ed4c00`. **Retained.**
- Firebase Hosting + GitHub Actions deployment.

---

## 2. Goals

**G1 — Reposition from cheap to elite.** Every price signal leaves the site. The buyer should finish the homepage unsure what Tazriel costs and certain it is worth finding out.

**G2 — Look genuinely expensive.** A visitor who works at a company with a design team should not be able to tell this was built on a budget.

**G3 — Make the talent claim provable.** Introduce the people, the credentials, and the platform partnerships that back "elite specialists."

**G4 — Give the seven services a hierarchy.** Not nine equal cards. A clear spine, with the strongest offerings carrying the most weight.

**G5 — Preserve every SEO asset.** No URL changes, no metadata regression, no loss of structured data coverage.

### 2.1 Non-goals

- No CMS in v1. Content lives in typed TypeScript modules. A CMS is added when a non-developer needs to publish weekly — not before.
- No blog, no case-study library, no gated content, no pricing page, no client portal, no login, no i18n, no dark/light toggle (the site has one deliberate look).
- No rebrand. The logo, name, and palette stand.
- The two dormant services (SDR, Virtual Assistance) stay dormant. Their routes are built and reachable but excluded from navigation, exactly as today.

---

## 3. Positioning

**Approved direction: elite talent, quietly.**

Lead with the caliber of the specialists and the outcomes they produce. Price is never mentioned on the site; it becomes a conversation.

### 3.1 Message hierarchy

1. **Specialists, not staff.** Tazriel places named experts in platforms that require real depth — Cvent, Mendix, Power Platform, Microsoft 365, HubSpot Service Hub.
2. **Embedded, not transactional.** Teams integrate into the client's process rather than sitting behind a ticket queue.
3. **Global reach as capability.** Two continents means genuine follow-the-sun coverage, framed as operational advantage rather than as a cost story.
4. **Range with depth.** Seven disciplines under one accountable partner.

### 3.2 Copy rules

**Banned from the site, without exception:** *affordable, cheap, low-cost, cost-effective, budget, save money, competitive rates, offshore*, and any currency figure.

**"24/7"** survives only as an operational fact in a service-page specification block. It never appears in a headline, hero, or meta description.

**Voice:** declarative, short, specific. Concrete nouns over adjectives. No exclamation marks anywhere on the site — including the current homepage headline. Claims carry evidence or they are cut.

**Before / after:**

> **Current:** "Your business now has global specialists!" / "Scale faster with our affordable global remote service experts — 24/7 support, custom solutions, and seamless integration."

> **New:** "Specialists who work the way you already do." / "Tazriel places senior operators inside your process — across seven disciplines, on two continents."

### 3.3 Audience

- **Primary:** operations, IT, and marketing leaders at mid-market companies (100–2,000 staff) evaluating an outsourcing partner. They have been burned by a cheap vendor before. They are buying reliability and are authorized to pay for it.
- **Secondary:** platform-specific buyers arriving from organic search for Cvent, Mendix, or Power Platform expertise. They land on a service page, not the homepage — every service page must therefore stand alone as a complete argument.

---

## 4. Design system

### 4.1 Color

Existing brand colors are retained. What changes is the **hierarchy and the ratio** — the orange is not the problem, the volume of it is.

| Token | Value | Role | Budget |
|---|---|---|---|
| `--ink` | `#020035` | Primary ground. The site's dominant field. | ~55% of surface |
| `--paper` | `#F4F1EC` | Warm off-white. Light sections, alternating against ink. | ~40% |
| `--depth` | `#2100b1` | Electric blue. Gradient bloom **inside** the ink field only. Never text, never a border, never a fill. | ambient |
| `--accent` | `#ed4c00` | Orange. Hairline rules, eyebrow labels, hover underlines, single indicator dots. | **≤1% of visible ink** |
| `--ink-raised` | `#0A0A4D` | Elevated navy for cards and panels on the ink field. Replaces every use of frosted glass. | — |
| `--paper-sunk` | `#EAE5DC` | Recessed warm neutral for panels on the paper field. | — |
| `--line` | `rgba(244,241,236,0.14)` | Hairlines on ink. Structure comes from rules, not shadows. | — |
| `--line-paper` | `rgba(2,0,53,0.12)` | Hairlines on paper. | — |
| `--muted` | `rgba(244,241,236,0.62)` | Secondary text on ink. | — |

**Hard rules.**

- **No filled orange buttons anywhere on the site.** Primary CTA is a paper-on-ink or ink-on-paper solid rectangle. Orange appears only as a hover underline, a 1px rule, or a 4px indicator dot.
- **No `box-shadow` on any element** except the sticky navigation on scroll, and one modal scrim. Depth is expressed through the ink/paper contrast and hairlines. This single rule removes most of what makes the current site feel cheap.
- **No `backdrop-blur` frosted-glass cards.** Panels are solid `--ink-raised` or `--paper-sunk`.
- **No gradient orbs, blobs, or floating shapes.** The one permitted gradient is a large, slow, low-contrast `--depth` bloom in the ink field — barely perceptible, never a discrete shape.
- The warm `--paper` against the cold `--ink` is the primary luxury signal. It adds no new brand color; it is a ground, not a hue.

**Contrast.** Every text/background pair must meet WCAG AA (4.5:1 body, 3:1 large text). `--muted` on `--ink` is verified at build; if any pair fails, the token is lightened, not the rule waived.

### 4.2 Typography

Montserrat is retired (confirmed not brand-locked).

| Role | Family | Usage |
|---|---|---|
| Display | **Instrument Serif** (400, regular + italic) | H1, H2, pull quotes, statistics. High-contrast modern serif — editorial authority without period fussiness. |
| Text | **Inter** (400, 500, 600) | Body, UI, navigation, labels, buttons. Neutral workhorse; carries no style opinion, so the serif does all the talking. |
| Micro | **Inter** (500, `letter-spacing: 0.14em`, uppercase, 11–12px) | Eyebrow labels, section indices, metadata. |

Both load through `next/font/google` — self-hosted at build, zero layout shift, no external font request.

**Scale** — fluid, `clamp()`, 1.25 ratio at the base and widening at display sizes:

| Token | Size |
|---|---|
| `display-xl` | `clamp(3.5rem, 8vw, 8rem)` |
| `display-l` | `clamp(2.5rem, 5vw, 4.5rem)` |
| `display-m` | `clamp(2rem, 3.5vw, 3rem)` |
| `body-l` | `clamp(1.125rem, 1.5vw, 1.375rem)` |
| `body` | `1rem` |
| `micro` | `0.6875rem` |

**Rules.** Display sizes set at `line-height: 0.95–1.05` and `letter-spacing: -0.02em` — tight setting is what separates editorial from default. Body copy capped at **68 characters** measure. Italic Instrument Serif is reserved for a single emphasized word per headline, used at most twice on any page. Never bold the serif; if a headline needs more weight, it needs to be larger or shorter.

**Typographic correctness** (enforced at authoring time): curly quotes `" "` and apostrophes `'`, em dashes `—` for breaks with no surrounding spaces, en dashes `–` for ranges, `…` for ellipsis, non-breaking spaces before units and in brand names that must not wrap. No straight quotes anywhere in rendered copy.

### 4.3 Space and grid

8px base scale: `4, 8, 16, 24, 32, 48, 64, 96, 128, 192, 256`.

12-column grid, `max-width: 1440px`, gutters `clamp(1.25rem, 5vw, 6rem)`.

**Vertical rhythm is the luxury lever.** Section padding runs `clamp(8rem, 14vw, 14rem)` top and bottom — roughly double the current site. Generous negative space is the cheapest premium signal available and the one most often cut. It does not get cut.

Asymmetry is deliberate: headlines set to a 7-column measure offset from the left margin rather than centered. The current site centers nearly everything, which reads as default rather than composed.

Breakpoints: `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.

### 4.4 Motion

**Library:** GSAP 3 with ScrollTrigger, SplitText, and Observer. Lenis for smooth scroll. `framer-motion` is not carried forward — one animation system, not two.

**Governing principle:** if a visitor consciously notices an animation, it is too much. Motion directs attention and expresses material; it never performs.

**Timing.**

| Class | Duration | Ease |
|---|---|---|
| Micro (hover, focus, toggle) | 0.2–0.3s | `power2.out` |
| Reveal (content entering) | 0.9–1.2s | `expo.out` |
| Transition (page, section) | 0.6–0.8s | `power3.inOut` |
| Ambient (background drift) | 8–20s | `sine.inOut`, looped |

**Banned:** `back` and `elastic` eases, spring physics, bounce, any rotation over 3°, scale entrances from below 0.9, parallax exceeding 12% of viewport height, letter-by-letter staggering of body copy, counting-number animations on statistics, typewriter effects, and marquees moving faster than 40s per cycle.

**Required for every animation:**
- A `gsap.set()` initial state declared before the tween. Without it the element paints unstyled for one frame — the flash of unstyled content that instantly reads as amateur.
- Transform and opacity only. Never animate `width`, `height`, `top`, `left`, `margin`, or `filter`.
- `will-change` applied on trigger enter and removed on complete, never left standing in CSS.
- Cleanup through `gsap.context()` scoped to the component, reverted on unmount.

**Reduced motion.** `prefers-reduced-motion: reduce` is a first-class path, not a degradation: all ScrollTriggers are killed, Lenis is disabled to native scroll, every reveal resolves instantly to its final state, ambient loops stop, pinned sections release into normal document flow. The site must be fully usable and fully legible with every animation removed — verified as an explicit QA gate, not assumed.

### 4.5 Reference standard

The bar these decisions are measured against, and what each contributes:

- **Stripe** — explaining complicated services without condescension; disciplined use of a single gradient in an otherwise restrained field.
- **Linear** — motion timing and dark-field mastery; the sense that every transition was measured rather than chosen from a menu.
- **Vercel** — typographic hierarchy carrying the design, monochrome plus one accent.
- **Apple** — pinned scroll choreography where scrolling advances a narrative in place rather than merely moving the page.
- **Loro Piana / Bang & Olufsen** — pacing, negative space, and the confidence to let a single element hold a full viewport.

Reference means *standard of craft*, not visual imitation. Nothing is copied.

---

## 5. Micro-interactions and scroll behavior

An explicit requirement. Every interactive element on the site has a defined resting, hover, active, and focus state — no browser defaults survive.

### 5.1 Micro-interactions

| Element | Behavior |
|---|---|
| **Primary CTA** | Magnetic attraction within a 40px radius, element translating up to 6px toward the cursor, released on `mouseleave` with `elastic`-free `power2.out`. Label shifts 2px; an orange hairline sweeps left-to-right beneath it over 0.3s. |
| **Text link** | Orange underline wipes in from left, `transform: scaleX()` on a pseudo-element, `transform-origin` flipping to right on exit so it wipes *out* the way it came. |
| **Nav item** | Active route carries a persistent 4px orange dot. Hover raises the label 1px and fades a hairline in beneath it. |
| **Service card** | On hover the card's own ground lifts to `--ink-raised`, its hairline brightens, the index number shifts 4px, and an arrow glyph translates 6px right. No scale, no shadow, no lift off the page. |
| **Cursor** | A 6px dot following at 0.15 lerp, expanding to a 40px ring over interactive elements, collapsing to a bar over text. Pointer-devices only — suppressed entirely on touch and under reduced-motion. |
| **Buttons (all)** | Focus-visible ring: 2px orange offset 3px. Never removed, never replaced with an outline-none. |
| **Form field** | Label rises into the border on focus, border transitions `--line` → `--accent` over 0.25s. Validation errors slide in at 0.2s with no shake. |
| **Accordion (FAQs)** | Height animated via GSAP on the panel's natural height, 0.5s `power3.inOut`; the plus glyph rotates 45° to a cross, never 180°. |
| **Image** | Loads behind a `clip-path` reveal from the bottom edge over 1.1s. No blur-up, no fade-in from opacity zero. |
| **Logo marquee** | Partner logos drift at 45s per cycle, pausing on hover, duplicated for a seamless loop. |

### 5.2 Scroll effects

| Effect | Where | Specification |
|---|---|---|
| **Smooth scroll** | Global | Lenis, `lerp: 0.09`, wired into GSAP's ticker so ScrollTrigger stays in sync. Disabled entirely under reduced motion. |
| **Masked line reveal** | Every H1 and H2 | SplitText by line, each line inside an `overflow: hidden` wrapper, translating from 100% to 0 with a 0.08s stagger, `expo.out`, triggered at 80% viewport. The signature move of the site. |
| **Pinned service index** | Homepage services section | The section pins for ~350vh. The seven services advance in place — index number, title, and description crossfading while a full-bleed image swaps behind. A progress rail on the left fills as it advances. Releases naturally at the end. |
| **Horizontal scroll** | Homepage capabilities | A horizontally-translating track driven by vertical scroll while pinned. Falls back to a native `overflow-x` swipe track under 1024px and under reduced motion. |
| **Section color inversion** | Global | As a paper section enters the viewport, the navigation's colors invert from paper-on-ink to ink-on-paper. Driven by a ScrollTrigger per section, transitioning over 0.3s. |
| **Ambient depth drift** | Ink sections | The `--depth` bloom drifts on a 20s `sine.inOut` yoyo at very low opacity. Ambient only — never a discrete visible shape. |
| **Progressive reveal** | All sections | Content enters on a 0.9s `expo.out` from `y: 40, opacity: 0`, staggered 0.06s. `once: true` — content never re-animates on scroll-back, which is a common and irritating error. |
| **Scroll progress** | Global | A 1px orange rule at the top of the viewport, scaling on `transform` only. |
| **Statistics** | Where used | Revealed by mask, **not** counted up from zero. Counting animations read as growth-hack, not authority. |

**Performance ceiling on all of the above:** sustained 60fps on a mid-tier 2022 laptop. Any effect that cannot hold this is cut, not optimized indefinitely. Every ScrollTrigger registers with `invalidateOnRefresh: true` and is killed in its component's `gsap.context()` cleanup.

---

## 6. Information architecture

Fourteen routes. **Every existing URL is preserved exactly** — no redirects needed, no ranking lost.

```
/                                        Home
/about                                   NEW — the talent, the firm, the proof
/contact                                 Contact
/faqs                                    FAQs
/privacy-policy                          Legal
/terms-of-use                            Legal

Services (one template, seven live)
/data-annotation-and-ai-training
/it-helpdesk
/microsoft-365-administration
/marketing-and-digital-services
/meetings-and-events
/saas-product-support
/software-development

Dormant — built, reachable, excluded from navigation (unchanged from today)
/sales-development-representatives
/virtual-assistance
```

**Navigation.** Logo left. Center: Services (mega-panel), About, FAQs. Right: a single "Start a conversation" CTA. The mega-panel opens as a full-width ink panel listing all seven services in two columns with one-line descriptions, revealed by a 0.4s clip-path wipe from the top edge. Nav is sticky, hides on scroll-down past 400px, returns on scroll-up.

**Footer.** Four columns — Services, Company, Legal, Connect. Social links to the seven existing profiles (`@tazrielhq` on TikTok, Instagram, Threads, X, Pinterest, plus LinkedIn and Crunchbase). Springfield, IL address. A closing oversized Instrument Serif wordmark that bleeds off the bottom edge.

---

## 7. Page specifications

### 7.1 Home

| # | Section | Content |
|---|---|---|
| 1 | **Hero** | Full-viewport ink. Display-xl headline, masked line reveal. One subhead, one primary CTA. A single Higgsfield-generated ambient background asset at low opacity behind the `--depth` bloom. No stat cards, no secondary CTA, no scroll-hint arrow. One idea, one action. |
| 2 | **Positioning statement** | Paper section. A single display-m sentence set to a 7-column measure, offset from the left margin. Nothing else in the viewport. The confidence of an empty room. |
| 3 | **Services — pinned index** | Ink. The pinned scroll sequence from §5.2. Seven services advancing in place with imagery and a progress rail. The centerpiece of the page. |
| 4 | **Capabilities — horizontal** | Paper. Horizontally-scrolling track of the platform depth: Cvent, Mendix, Microsoft 365, Power Platform, HubSpot Service Hub, Meraki. Each a card with the platform, what Tazriel does in it, and the depth of that bench. |
| 5 | **The talent** | Ink. Three or four specialist portraits with name, discipline, and years in platform. Links through to `/about`. This section is what makes "elite talent" a claim rather than an adjective. |
| 6 | **Process** | Paper. Four numbered steps on a hairline rail — Scope, Match, Embed, Scale. Revealed sequentially as the rail draws down on scroll. |
| 7 | **Proof** | Ink. Client outcomes and recognition, including the existing DesignRush listing. Statistics revealed by mask, never counted. |
| 8 | **Contact CTA** | Paper. Oversized display-xl invitation, one field, one action. |

### 7.2 Service page template (×7, and ×2 dormant)

Each service page must stand alone — organic search delivers buyers directly here, and many will never see the homepage.

1. **Hero** — ink, service name in display-l, one-sentence definition, breadcrumb.
2. **The problem** — paper, the operational pain this service resolves, in the client's language.
3. **What we do** — ink, four to six concrete deliverables. Verbs and specifics, not benefit adjectives.
4. **Platform depth** — where the service is platform-bound (Cvent, Mendix, M365, Power Platform, HubSpot), the certifications and bench depth behind it.
5. **Specification block** — the only place `24/7`, coverage windows, SLAs, and accuracy figures appear. A dense hairline-ruled table. Reads as a datasheet, which is itself a premium signal.
6. **Engagement model** — how a team is matched and embedded.
7. **Adjacent services** — two related services, hairline cards.
8. **CTA** — paper, service-specific.

Per-service content lives in one typed module (`content/services/<slug>.ts`) so the template stays presentational and the copy is editable without touching JSX.

### 7.3 About — new

The page that makes the positioning credible. Firm narrative, founding, the two-continent operating model, the leadership team with real names and real photographs, the bench by discipline, and the platform certifications held. If a claim on this page cannot be evidenced, it is cut before launch.

### 7.4 Contact

Split layout — ink left carrying the invitation and direct details, paper right carrying the form. Fields: name, work email, company, service of interest (select), message. Client validation via `react-hook-form` + `zod`. Submission through the existing endpoint, carried over from `partnership-form.tsx`. Inline success state, never a redirect to a thank-you page.

### 7.5 FAQs

Accordion on paper, grouped by category. Ships with `FAQPage` structured data — a search-visibility asset the current site does not have.

### 7.6 Legal

Privacy Policy and Terms of Use. Content carried over verbatim from the current site — this is a design migration, not a legal review. Set at a 68-character measure with proper hierarchy, `noindex` retained as configured today.

---

## 8. Technical architecture

**Stack.** Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · GSAP 3 (ScrollTrigger, SplitText, Observer) · Lenis · `react-hook-form` + `zod` · `next/font` (Instrument Serif, Inter) · `lucide-react`.

**Deliberately excluded.** `framer-motion` (GSAP does all of it), `shadcn/ui` and the ~30 Radix primitives (three components are hand-built instead: accordion, select, dialog), `next-themes` (one deliberate look), `recharts`, `embla-carousel`, `cmdk`, `vaul`, `sonner`, `input-otp`, `react-resizable-panels`. The current site installs all of these and uses a fraction. Each dependency added to the new build must be justified against the code it replaces.

```
app/                 routes, one folder per URL, layout.tsx per route for metadata
components/
  layout/            nav, footer, page shell
  sections/          one file per homepage section
  service/           service-page template sections
  motion/            GSAP primitives — RevealText, RevealBlock, Magnetic, Pinned
  ui/                hand-built primitives only
content/
  services/          one typed module per service
  site.ts            nav, footer, social, contact, company facts
lib/
  gsap.ts            plugin registration, shared eases, reduced-motion guard
  lenis.ts           smooth-scroll setup, GSAP ticker wiring
styles/
  tokens.css         color, type, space, motion tokens
public/
  media/             Higgsfield-generated assets
```

**Motion architecture.** GSAP plugins register exactly once in `lib/gsap.ts`. A `useGsap` hook wraps `gsap.context()` scoped to a ref and reverts on unmount. A `usePrefersReducedMotion` hook gates every animated component at the top level. Section components stay presentational; motion enters through the `components/motion/` primitives, so a section can be read and edited without reading animation code.

**Rendering.** Every page is statically generated. No runtime data fetching. Deployed as a static export to Firebase Hosting, matching the current infrastructure. GitHub Actions workflow ported from the existing repo.

**Git.** Fresh repository initialized at `C:\project\tazriel_redesign`, no history from `tazriel_webpage`. Branches `main` and `staging`, mirroring current practice.

---

## 9. Budgets

**Performance.** Lighthouse ≥ 95 across Performance, Accessibility, Best Practices, and SEO on mobile. LCP < 2.0s · CLS < 0.05 · INP < 200ms · initial JS < 180KB gzipped. Images ship as AVIF with WebP fallback through `next/image`. Any hero video is muted, `playsinline`, poster-backed, lazy-loaded below 1024px, and never autoplays under reduced motion or on a metered connection.

**Accessibility — non-negotiable, never traded for aesthetics.** WCAG 2.1 AA. Full keyboard reachability including the mega-panel and the pinned sections. Visible focus on every interactive element. Semantic landmarks and one `h1` per page. Alt text on all meaningful imagery. Pinned and horizontally-scrolled sections must be fully navigable by keyboard and screen reader — if a scroll effect cannot be made accessible, the effect is cut. Verified with axe plus a manual keyboard-only pass and a screen-reader pass.

**SEO.** Every existing URL preserved. Per-route metadata parity or better, including OpenGraph and Twitter cards. `Organization` structured data extended with the new About content; `Service` schema per service page; `FAQPage` schema on FAQs; `BreadcrumbList` sitewide. `sitemap.ts` and `robots.txt` carried forward.

**Browsers.** Last two versions of Chrome, Safari, Firefox, and Edge. iOS Safari 16+ and Chrome Android. Safari gets explicit attention — pinned ScrollTrigger sections and `clip-path` reveals are where it diverges.

---

## 10. Assets

Generated with Higgsfield MCP, art-directed to one consistent visual language.

| Asset | Use | Direction |
|---|---|---|
| Hero ambient | Homepage hero background | Abstract, deep-navy, slow-moving depth. Suggests infrastructure and precision. No literal offices, no stock-photo handshakes, no floating UI panels. Must sit at low opacity behind text without harming contrast. |
| Service imagery ×7 | Pinned service index | One abstract composition per service, unified in palette and grain so the seven read as a set. |
| Capability textures | Horizontal capabilities track | Subtle material backgrounds, low contrast. |
| OG image | Social sharing | 1200×630, wordmark on ink. |

Photography of the actual team is required for the About page and the homepage talent section. This cannot be generated — it must be real people, and the section does not ship with synthetic faces standing in for staff. Flagged as a content dependency on Tazriel.

---

## 11. Delivery

| Phase | Scope |
|---|---|
| **0** | Scaffold, git init, tokens, fonts, GSAP + Lenis foundation, motion primitives, reduced-motion guard. |
| **1** | Navigation, footer, page shell, mega-panel. |
| **2** | Homepage — all eight sections including the pinned index and horizontal track. **Review checkpoint: the design language is judged here.** |
| **3** | Service template + all seven live service pages, content modules, dormant routes ported. |
| **4** | About, Contact, FAQs, legal pages. |
| **5** | Structured data, sitemap, metadata parity audit against the current site, OG assets. |
| **6** | Performance pass, accessibility audit, cross-browser QA, reduced-motion verification, Firebase deploy pipeline. |

Phase 2 is the decision point. If the language is wrong, it is far cheaper to find out with one page built than with fourteen.

---

## 12. Success criteria

**Qualitative — the real test.** A visitor cannot tell whether Tazriel is a 20-person firm or a 2,000-person one from the design alone, and assumes the latter. Nothing on the site suggests the cheapest option. Someone who evaluates websites professionally would not identify it as templated.

**Quantitative.**

| Metric | Target |
|---|---|
| Lighthouse (mobile, all four categories) | ≥ 95 |
| Contact form submissions | +40% within 90 days |
| Average session duration | +50% |
| Homepage bounce rate | −25% |
| Organic ranking on preserved URLs | No regression at 30 days |
| Inbound deal size | Qualitative review at 90 days — the primary test of the repositioning |

---

## 13. Open dependencies

1. **Team photography** — required for the About page and the homepage talent section. Blocks the credibility of the entire positioning. Owner: Tazriel.
2. **Named specialists** — real names, disciplines, and years in platform for the talent sections. Owner: Tazriel.
3. **Certifications and partner status** — verifiable Cvent, Mendix, Microsoft, and HubSpot credentials for the platform depth sections. Owner: Tazriel.
4. **Client outcomes** — at least three quantified results for the proof section, cleared for publication. Owner: Tazriel.
5. **Contact form endpoint** — current submission target to be confirmed and carried over from `partnership-form.tsx`.
6. **Founding date** — `structured-data.tsx` carries a `// confirm this is correct` comment against `2025`. To be confirmed before the schema is ported.

Sections 5 and 7 of the homepage ship with honest placeholder structure until items 1–4 land. Fabricated names, faces, logos, or figures do not ship under any circumstances.
