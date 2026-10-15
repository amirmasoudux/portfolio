# Making the Abstract Tangible — Finnotech case study content

Source of truth for `works/openapi.html`. Facts come from the live page (amirmasoude.com/works/openapi) and Amir's original Finnotech files. Layout follows the configurator case study. The finished visual design is `reference/index.html`.

> Rules
> - Only the facts below. No new metrics, quotes or results.
> - English only, written for a European reader. No non-English text in any visual.
> - The "UX Strategist…" chip uses Finnotech yellow #F6BB16 (not lime) on this page. Lime stays only on the next-case arrow.
> - Colour: only Finnotech yellow #F6BB16, used sparingly: the goal row (thin left bar only) and the quote bar. Everything else follows the site's neutral type colours, like the other case studies.
> - Icons: Lucide (trending-up, landmark, briefcase, calendar, ban, trending-down, target), white, 1.75 stroke, on a neutral tile.

## Layout rule
Every block, including the "At a glance" stats band, sits inside the page container (`.wrap`, max 1280 px, 24 px side padding), so all content shares the same left and right edge. The stats band is a rounded box (radius 20, 1 px border); each stat stacks icon, value, label.

## 1. Hero
- Eyebrow: `02 · Fintech · B2B platform`
- Chips: **UX Strategist and Concept Developer** (accent) · Finnotech · 6 months · Sales tools
- Title: **Making the Abstract Tangible**
- Intro: Finnotech sold Open Banking APIs to banks and businesses. The product was strong, but executives couldn't see what it would do for them. I helped turn technical features into business outcomes they could see, touch and build with.
- Visual: three compact cards fanned out (N° 01, N° 22, N° 24): a tinted brick side with the number, and a white side with family, title, the one-line tagline from section 6, "In Europe" tag and wordmark. Rendered in HTML/CSS.

## 2. At a glance
Each stat has a white Lucide icon on a neutral tile: trending-up, landmark, briefcase, calendar.
| Value | Label |
|---|---|
| 70% | Uplift in enterprise client conversions |
| 4 banks | Reached out to integrate the APIs |
| 2 projects | Additional projects assigned to us |
| 6 months | Project duration |

## 3. The problem
**A strong product that buyers couldn't picture**

Finnotech's Open Banking APIs were competitive, yet B2B conversion stayed low. The product wasn't the problem. The sales material described technical features, so non-technical leaders couldn't see the return on investment, and they didn't commit.

Small note: Context for European readers: Finnotech is a fintech in the Middle East that offered bank APIs to third parties, similar to what PSD2 enabled for banks and fintechs in Europe.

Side block, top-aligned with the H2, as one connected stack with icon tiles: white Lucide icons ban, trending-down, target; the goal row gets a yellow heading and a thin yellow left bar:
- **The barrier:** sales teams sold technical features, not business outcomes.
- **The impact:** buyers couldn't see the ROI, so deals stalled.
- **The goal:** redesign the sales story and materials so the value is obvious.

## 4. Research
**Finding the confidence gap**

Low sales were the symptom. To find the real blocker, we interviewed the whole team in person, including the sales representatives and the product manager.

- **Priority 1 · Enterprise — The risk-averse executive.** Needs the strategic value without technical jargon. When something is unclear, they stay quiet and drop off rather than risk looking uninformed. Quote: "What does this mean for our business?"
- **Priority 2 · SME — The resource-constrained founder.** Sees high risk in security, time and cost. Needs quick, concrete proof that the integration is safe and doable.

## 5. Strategy
**From features to outcomes**
- From: Selling technical features (endpoints, documentation, integration guides)
- To: Selling business outcomes (what the client's own product can do next)
- How might we 1: …make the value visible enough that an executive understands it without technical help?
- How might we 2: …remove the feeling of risk so a founder is comfortable committing?

Image `assets/blocks.webp` on a white panel (bank on the left, Finnotech's blocks in the middle, a business on the right; the right building's sign was changed from "Insurance" to "Business"). Caption: **One service, one building block.** We framed every API as a numbered block that sits between a bank and a business. Clients could see how a few blocks combine into a new feature for their own product.

## 6. Prototypes — Double-sided service cards
**Double-sided service cards**

Lede: A deck of printed cards, one per service. The front explains the service. The back shows a white-labeled mock-up of the client's own product after the integration, so a CEO could see exactly what their customers would experience.

Component (see `reference/index.html`, data and motion in the script). It replaces the tab list used on the configurator page, so this page has its own interaction:
- **Brick tray** ("Pick a block"): a dark baseplate with a stud pattern and four numbered 3D bricks in a row (role="tablist", arrow keys work). Inactive bricks are dimmed; hover lifts them; the selected brick drops in with a short "snap" bounce and stays lifted with a shadow. Labels: N° 01 Account opening · N° 02 Direct debit · N° 22 In-app payment · N° 24 Payout split.
- **The card** (max 1000 px, original print layout): picking a brick deals a new card in (slides and rotates in from the direction of the brick). Pointer tilt in 3D on hover. Click the card or the "Front / Back" toggle to turn it over. "In Europe: …" next to the toggle.
- **Front = concept, not text:** white title panel (numbered brick, title, icon) + coloured panel with one big tagline and the family label.
- **Back = the client's product:** one short line next to the brick, then the four wireframe screens play in order (screen, arrow draws, next screen…), and the final check mark pops. Card 24 builds the payout-split diagram step by step.
- Under 560 px the card stacks; phones show in a 2×2 grid.

| Card | Front tagline | Back line | In Europe |
|---|---|---|---|
| N° 01 Account opening · Banking | Open a bank account from inside any app. | Abacus opens a savings account for its users. | Digital onboarding |
| N° 02 Direct debit · Banking | Approve once. Get paid on schedule. | Taxito riders top up their credit every month. | SEPA Direct Debit |
| N° 22 In-app payment · Facilitation | Pay without leaving the app. | Taxito riders pay in the app, with no redirect. | In-app checkout |
| N° 24 Payout split · Facilitation | One account in. Fair shares out. | Every fare is split between drivers and Taxito. | Marketplace payouts |

Note: Recreated in English from the original cards. App names and amounts are examples.

Sub-heading **In the meeting, and after it**: Sales reps and clients laid the cards out together to design the client's solution in the meeting. Afterwards the cards stayed with the client as a brochure, which helped them remember and build consensus internally.

Event photos (4, `assets/ev-*.webp`, timestamps removed). Caption: At an industry event, the building-block idea became physical: visitors built with real bricks and sketched on the cards.

## 8. Impact
**Trust is a design problem**

We validated the materials in two stages before rolling them out: first inside the sales process, then in the market.
- Commercial · **70% conversion uplift** — Conversion of enterprise clients rose by 70%.
- Commercial · **Faster pipeline** — Fewer early drop-offs and noticeably faster movement through the pipeline.
- Market · **4 more banks** — Four banks reached out on their own to integrate the API list. Finnotech moved from a single provider toward an industry leader.
- Market · **Clients got excited** — We tested the tools in real sales meetings. Clients "got excited" when they saw their own improved product.

Quote (Strategic outcome): Trust is a design problem. Once it is solved, it drives growth across the industry.

## 9. What happened next
**Removing the remaining doubts**

The first interviews showed that startups and SMEs had their own concerns. We focused on enterprises first and planned to return to this segment in the next phase.
- Implementation · **Free engineering help** — six months of free engineering support.
- Social responsibility · **Free APIs for startups** — selected API packages free in their first six months.
- Function · **A free sandbox** — to test before committing.

## 10. Also designed — The developer dashboard
Lede: In 2016 I designed the UX and UI of Finnotech's developer dashboard, where clients sign in, register their apps, pick services and find the documentation. For this case study I refreshed it with today's patterns: usage at a glance, keys you can copy and rotate, user-approved scopes per service, and docs with live code examples.

- Note: The 2026 refresh is a concept. App names, people and numbers are examples.
- Show only the refresh. Do NOT show the 2016 screenshots or the original `mockup.jpg`: it carries a third-party copyright line.

## 10b. Motion (whole page)
- Hero: the three cards fan out on load; the deck follows the pointer slightly; on hover the outer cards spread.
- Sections, cards, stats, photos: fade up on scroll with a small stagger.
- Stats count up from 0 when they come into view (70%, 4, 2, 6).
- Brick tray snap, card deal-in, card tilt, step-by-step wireframe flow (section 6).
- All motion is off with prefers-reduced-motion.

## 11. Next case study
Driving Loyalty — 03 · Fintech · A customer club for a regional bank. Then the site footer.

---

## Removed or corrected vs. the live page
- "Achieved an uplift from approximately to a strong 70% conversion rate": the starting number is missing and it conflicts with "70% uplift". Use "70% uplift in enterprise client conversions" everywhere until Amir confirms.
- No service catalogue or API list: the story is about solving a sales problem with design thinking, not about introducing the APIs.
- Claims only in the old local `openapi.html` (not on the live page) are not used: "70% drop-off before any real conversation", "discounted API packages", the interactive metric-input simulator.
