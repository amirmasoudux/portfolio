# Driving Loyalty — Customer Club case study content

Source of truth for `works/customerclub.html`. **Replace the current page completely.** The current page has claims that are not true (2× in the first month, Silver/Gold/VIP tiers, personalised recommendations, milestone animations, "platform became a selling point"). Do not keep any of them.

Facts come only from the live page (amirmasoude.com/works/customerclub), Amir's own description of the project, and his original design files (desktop dashboard + mobile app with "Champions League"). Screens are recreated in English and white-labeled as "Alpha Bank". The finished design is `reference/index.html`; follow it, and keep the site's nav, footer, fonts and CSS variables.

> Rules
> - Only the facts below. No new numbers, quotes or results.
> - Colour: Alpha Bank gold #D9A93A, used sparingly: the role chip, the active story step and the quote bar. Everything else uses the site's neutral colours.
> - Icons: Lucide, white, 1.75 stroke, on a neutral tile (trending-up, phone-off, smartphone, calendar, box, battery-low, phone-call, search, headset, users, route, eye, crown, zap).

## Layout rule
Every block, including the "At a glance" stats band, sits inside the page container (`.wrap`, max 1280 px, 24 px side padding), so all content shares the same left and right edge. The stats band is a rounded box (radius 20, 1 px border); each stat stacks icon, value, label.

## 1. Hero
- Eyebrow: `03 · Banking · Loyalty`
- Chips: **UX Designer and Concept Developer** (gold) · Regional bank · 3 months · Gamification
- H1: Driving Loyalty (plain, no colour on headings)
- Lede: A regional bank gave away big prizes, from a car to smartphones and cash. But most customers didn't know they were in the draw, and many winners thought the bank's call was a scam. I designed a Customer Club, on the web and in the app, where members see their points, redeem them and follow the prize draws.
- Visual: laptop with `assets/dash.webp` + phone with `assets/app-play.webp` IN FRONT of the laptop (z-index above it), bottom-right; the phone floats slowly.
- One design system for web and app: cream background #F7F5EF, white cards (radius 20), gold #C99A2E for points, near-black #17181C cards for the draw and the lucky wheel, Inter. Don't mix in other styles.

## 2. At a glance (icon + value + label)
| Icon | Value | Label |
|---|---|---|
| trending-up | Double-digit | Rise in point redemptions in the first quarter |
| phone-off | Fewer calls | About point balances to the call centre |
| smartphone | More digital | Banking activity, as users earned usage points |
| calendar | 3 months | Project duration |

## 3. The problem
**Informed, but not involved**
Lede: The bank told customers about their points only by SMS, and many people never read it. Points also sat in a corner of the internet bank, where most people overlooked them. So the campaign rewarded people who didn't know they were taking part.
Under the lede, "the phone call" as three chat bubbles that appear one by one:
1. SMS · Alpha Bank — "You have 71,800 loyalty points." + small "Not read" tag
2. Incoming call · during the draw — "Congratulations, you won a smartphone!"
3. (customer, right-aligned, light bubble) — "Is this a scam? I'll call my bank first."
Side stack (top-aligned with the H2):
- eye-off · **Invisible points** — SMS went unread, and the points page in the internet bank was easy to miss. Most customers had no idea where they stood.
- users · **The wrong winners** — Customers with large balances collected points without doing anything. The bank wanted to reward loyal customers: people who use their account and grow their savings.
- phone-call · **A win felt like a scam** (gold) — Winners called at the draw didn't believe it. Many called the call centre to check, and others called just to ask for their points.

## 4. Discovery
**Opening the black box**
Lede: Points came from a mix of account balance, product holdings and digital activity. To understand why customers didn't follow them, I used four methods.
Method pills: Field research · Call-centre interviews · Focus groups with high-value customers · Journey mapping.
Formula row (HTML chips, fade in one by one): Account balance + Product holdings + Digital activity = **Your points** (the result chip in gold). Note under it: Three sources, one number, and no clear place where customers could see how it added up.
(There was no earlier digital version, so don't show a before/after.)

## 5. Concept
**From a points system to a club**
Lede: The goal was to turn a passive points system into an active Customer Club. Three ideas guided every screen.
- eye · **Transparency** — Visual progress bars show how each source adds to the total.
- crown · **Exclusivity** — A club that feels like a VIP space, not a standard bank page.
- zap · **Active engagement** — Missions, a lucky wheel and a prize draw give people a reason to come back.

## 6. The solution — scroll story
**One club, five moments** · "Scroll through a member's journey. The club works on the web and in the mobile app."
Desktop: steps on the left, a sticky phone on the right. The phone screen changes (fade + slide) when a step reaches the middle of the viewport; dots under the phone show progress; the active step gets a gold left border. Mobile (< 900 px): no sticky phone, each step shows its own screen under the text.
| Step | Text | Screen |
|---|---|---|
| 01 Earn | The home screen shows every way to collect points: account balance, online banking, card payments, a short survey or adding your interests. | app-earn.webp |
| 02 Track | A breakdown by source and a progress chart replace the black box. Customers can check their points themselves, without calling the bank. | app-track.webp |
| 03 Play | In the Champions League, members complete missions, spin a daily lucky wheel and climb a monthly leaderboard. Missions push people toward digital banking. | app-play.webp |
| 04 Redeem | Points become cinema tickets, discount codes, charity donations or gifts. Members also join the Grand Prize Draw for a car, smartphones and cash, and see their entries and the countdown. | app-redeem.webp |
| 05 Win | Draw results appear in the club first. Winners see their prize, when the bank will call and a code to check on the call, so the good news doesn't feel like a scam. | app-win.webp |
Note: Recreated in English and white-labeled as "Alpha Bank". Names and numbers are examples. Step 05 (Win) is a new concept added for this case study.

## 7. On the web
**The same club on desktop**
Lede: Points already had a page inside the internet bank, but people overlooked it. The club got its own home on the web, with the same design as the app: points, draws, the lucky wheel, missions and the leaderboard in one view.
Laptop with `assets/dash.webp` (max 1000 px).

## 8. Impact
**Visibility drives engagement**
- OPERATIONS · **Fewer calls** — Fewer calls about loyalty status, because members could check it themselves.
- ENGAGEMENT · **Double-digit rise** — Point redemptions rose by double digits in the first quarter after launch.
- DIGITAL · **More digital banking** — Members used online banking more to raise their usage points.
- SATISFACTION · **Members felt recognised** — In focus groups, members said the VIP-style club made them feel recognised.
Quote (Key insight): When people can see their points, they use them. Making the points visible turned a struggling campaign into a successful one.

## 9. Next case study
From Friction to Flow — 01 · Telecom · A guided product configurator → `configurator.html`. Then the site footer.

## Motion
Fade-up on scroll with a small stagger (also the formula chips and the three call bubbles); sticky phone screen swap; hero phone floats. All off with prefers-reduced-motion.
