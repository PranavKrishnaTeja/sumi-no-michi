# Asset plan — Higgsfield production notes

Model: **Nano Banana 2**, 2K, monochrome. Every plate is flat black ink on **pure white**
so `mix-blend-mode: multiply` composites it into the washi with no cut-outs or alpha needed.
House rules baked into every prompt: *no people, no text, no kanji, no signatures, no seal
stamps* (the site stamps its own hanko in code — the only vermilion allowed).

## Plates in use

**hero** · 21:9 · Act II painting + OG image candidate
> Traditional Japanese sumi-e ink wash painting on white washi paper: a vast misty mountain
> range dissolving into fog, one small distant pine on a ridge, delicate gradations of black
> ink and pale grey washes, enormous empty negative space in the sky, asymmetrical composition
> weighted low and left, masterful restrained brushwork, subtle paper grain, monochrome, fine
> art, no people, no animals, no text, no calligraphy characters, no signature, no seal stamps

**stroke** · 16:9 · InkReveal sweep + Act II identity sweep (reused rotated/flipped — one
stroke is a brush library)
> One single bold horizontal Japanese calligraphy brush stroke of black sumi ink on a pure
> white background, expressive dry-brush texture with flying-white streaks (kasure), ink dense
> and wet at the left origin, tapering to a ragged dry trailing edge on the right, isolated
> stroke centered, high contrast, monochrome, no text, no kanji characters, no signature, no seal

**bloom** · 16:9 · Act III atmosphere (14% opacity, counter-parallax)
> Macro photograph of black sumi ink blooming and diffusing in clear water against a pure white
> seamless background, elegant soft tendrils and slow clouds of ink, delicate gradients from
> deep black through smoke grey to white, high-key lighting, lots of empty white space around
> the bloom, minimalist, monochrome, no text, no objects, no hands

**washi** · 1:1 · tiled page background
> Flat overhead scan of handmade Japanese washi paper, warm off-white ivory tone, subtle visible
> plant fibers and organic mottling, soft perfectly even lighting, completely blank paper with
> no ink, no marks, no folds, no text, edge-to-edge seamless texture, high resolution archival
> scan look

## Deferred shot (needs ~10+ credits): the Act I overture film

A single 5s loop for the opening — ink blooming once in still water, then holding. Generate with
`kling3_0_turbo` (text-to-video, 16:9, 1080p), encode H.264, mount muted/looped behind Act I
with the bloom still as poster and reduced-motion fallback:

> Slow macro shot, locked camera with an almost imperceptible push-in: one drop of black sumi
> ink falls into still clear water against a pure white background and blooms into slow soft
> tendrils, elegant, minimal, high-key, monochrome, no text, no logos, no hands, no shake

Everything else that moves on the site is procedural (GSAP/SVG/Canvas) by design — cheaper,
lighter, and it keeps the motion language exactly on the easing law in `lib/motion.ts`.

## v2 mounting note (night scroll)

All plates are now mounted dark: `filter: invert(1)` + `mix-blend-mode: screen` (the `.plate`
class). Black ink becomes luminous white ink; the pure-white ground vanishes into the void.
This is why every prompt insists on a pure white background — it is the alpha channel.
The washi paper scan is unused by the dark theme (kept in the manifest for a light mode).
