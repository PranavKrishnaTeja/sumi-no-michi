# 墨の道 — The Way of Ink

A portfolio told as a **night handscroll**: luminous white ink on deep sumi black, six acts,
one uninterrupted camera move. Scrolling flies the camera through a WebGL world of suspended
ink — and straight through the gap of a giant 3D ensō.

Built with **Next.js (App Router) · TypeScript (strict) · Tailwind CSS · GSAP + ScrollTrigger ·
Lenis · Three.js**. Cinematic raster plates (mountain hero, dry-brush stroke, ink bloom) were
produced with **Higgsfield** (Nano Banana 2) as flat black ink on pure white, then mounted with
the `.plate` technique — `invert(1)` + `mix-blend-mode: screen` — so the ink *glows* against
the void.

---

## The concept in one paragraph

The structural inspiration is the continuous-world, scroll-as-dolly grammar of award-winning
experiences like igloo.inc — one uninterrupted camera move, chaptered narrative, persistent
wayfinding, heavy damped scroll, a real 3D world behind everything. That grammar is re-spoken
in the language of Japanese ink painting at night: the page floats inside a Three.js corridor
of ~3,000 suspended ink motes (`InkWorld`), the scrollbar is the dolly track, and at 65% depth
the motes condense into a giant open ensō the camera passes *through* during the works act.
Typography is washi-white on sumi-black (≈17:1), imagery is painted on rather than faded in,
and vermilion appears in exactly one element — the hanko seal — which is why it lands.

## The six acts

| Act | Scene | What happens |
| --- | --- | --- |
| 一 Silence | The void | 間 breathes at 7% ink; a thin line drips: *begin* |
| 二 First Stroke | Identity | The name soaks in, a luminous dry-brush stroke sweeps beneath it; the mountain painting glows on with parallax |
| 三 Discovery | Philosophy & craft | Three principles in asymmetric balance; skills planted as a garden; white ink-smoke drifts behind |
| 四 Creation | The handscroll | The section pins; vertical scroll becomes a horizontal pan across tilting 3D work panels — as the WebGL camera crosses the ensō gate |
| 五 Mastery | The path | A wavering luminous stroke draws the years in lockstep with the scroll |
| 六 Legacy | The open circle | A larger ensō draws to 93%; the gap is the invitation; contact |

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (type-checked)
```

## Make it yours (5 minutes)

Everything personal lives in **`lib/content.ts`** — name, seal character, role, philosophy,
works, timeline, links. The voice rules are commented at the top of the file; keep them.
Nothing else needs touching.

## Assets

Generated plates are referenced from the Higgsfield CDN out of the box
(`lib/asset-manifest.json`). For production, self-host them:

```bash
npm run fetch-assets   # downloads into public/assets/
```

then set `SOURCE = 'local'` in `lib/assets.ts`. Optionally convert the PNGs to WebP/AVIF and
update the `file` fields in the manifest — the mountain hero benefits most.

Regeneration prompts (Higgsfield, Nano Banana 2, monochrome, "no text / no people / no seals")
are recorded in `docs/ASSET-PLAN.md` should you ever want variants. The washi paper scan in the
manifest is currently unused by the dark theme — kept for a future light mode.

## The 3D world (`InkWorld`)

One Three.js scene behind everything, built with discipline:

- ~3,000 point sprites in one geometry → **one draw call**, additive blending, exp2 fog.
- Scroll progress drives `camera.position.z` down a 52-unit corridor; the pointer leans the
  camera a few degrees. Because Lenis eases native scroll, the WebGL camera inherits the same
  damped feel for free.
- The set-piece: 700 of the motes form an open ensō at depth −24; the camera crosses its
  plane during Act IV.
- DPR capped at 1.5, particle count halved under 900px, paused on `visibilitychange`,
  **never mounted under reduced motion** (the CSS void gradient stands in).
- The sprite texture is drawn on a local canvas — no network fetch, no CORS, nothing to fail.

## Animation map

| Component | Technique | Motion metaphor |
| --- | --- | --- |
| `InkWorld` | Three.js points + fog, scroll-driven camera | flying through suspended ink |
| `InkLoader` | SVG dashoffset + clip-path exit | a circle drawn in one breath; the sheet lifts away |
| `SmoothScroll` | Lenis `lerp 0.08` synced to GSAP ticker | a camera dolly with mass |
| `CalligraphyTitle` | per-character blur → sharp, y-settle | wet ink drying |
| `InkReveal` | clip edge + brush sweep + scale settle | imagery painted on, not loaded |
| `BrushDivider` / `ActMastery` line | dashoffset draw (scrubbed) | a steady hand |
| `ActCreation` | pinned section, scrubbed x-pan, `containerAnimation` triggers | unrolling the handscroll |
| `PaperCard` | pointer-tracked ±5° tilt (`quickTo`) | a scroll panel catching the light |
| `SealStamp` | 1.5 → 1 hard-out, −2° settle | a stamp meeting paper |
| `InkCursor` | Canvas 2D, screen blend | the visitor holds a brush of light |
| Grain | one fixed feTurbulence layer, stepped transform | film, and paper tooth |

**The easing law:** ink never bounces, overshoots, or spins. Everything uses three eases
(`soak`, `sweep`, `draw` — see `lib/motion.ts`).

## Performance

- The WebGL scene is a single draw call; everything else is compositor-only (transforms,
  opacity, clip-path, dashoffset). No layout thrash.
- Canvases cap devicePixelRatio at 1.5 and pause on `visibilitychange`.
- Plates are flat ink on white → excellent compression; hero loads eager, everything else lazy.
  `width`/`height` set everywhere → zero CLS.
- Fonts load via `<link>` with `display=swap` so the repo builds offline; for the last few
  points of LCP, switch to `next/font/google` locally (self-hosted, subset).
- Budget: LCP < 2.5s · INP < 200ms · CLS < 0.1 · 60fps scroll. Verify with
  `npm run build && npm start` + Lighthouse.

## Accessibility

- Washi on sumi ≈ 17:1 contrast; secondary text stays ≥ 7:1, meta text ≥ 4.5:1.
- Real text everywhere; animated characters are `aria-hidden` with the full string in `aria-label`.
- `prefers-reduced-motion`: Lenis never mounts, pins never register, WebGL and cursor canvases
  never mount, the handscroll becomes a native snap-aligned horizontal scroller, and all
  content is immediately visible. The painting stands still; nothing is lost.
- Skip link, section landmarks, visible washi `:focus-visible`, chapter nav as real buttons
  with `aria-current`.

## Deploy

Vercel: push the repo, import, done — zero config (`next build` output). Any Node host works:
`npm run build && npm start`. Self-host the assets first (above) so production has no
third-party image dependency.

## Structure

```
app/            layout (void, grain, fonts, metadata) · page (the six acts) · globals.css
components/
  experience/   SmoothScroll · InkLoader · InkWorld (Three.js) · InkCursor · ProgressStroke
  ink/          PaperSection · CalligraphyTitle · InkReveal · BrushDivider · Enso
  ui/           SealStamp · BrushButton · PaperCard (3D tilt)
  acts/         ActSilence … ActLegacy (one file per act)
lib/            content.ts (edit me) · assets.ts · asset-manifest.json · motion.ts · lenis.ts
scripts/        fetch-assets.mjs
docs/           ASSET-PLAN.md (prompts & rationale)
```

---

*The circle stays open.*
