import manifest from './asset-manifest.json';

/**
 * ASSET LAYER
 *
 * Every raster asset was produced with Higgsfield (Nano Banana 2, 2K)
 * as flat black ink on pure white — so `mix-blend-mode: multiply`
 * seats it directly into the washi paper with no cut-out masks needed.
 *
 * SOURCE:
 *  - 'remote' → stream straight from the Higgsfield CDN (works out of the box)
 *  - 'local'  → run `npm run fetch-assets` first, then flip this switch.
 *               Local files are strongly recommended for production
 *               (self-hosted, cacheable, immune to upstream changes).
 */
const SOURCE: 'remote' | 'local' = 'remote';

type Key = keyof typeof manifest;

const src = (key: Key): string =>
  SOURCE === 'remote' ? manifest[key].url : `/assets/${manifest[key].file}`;

export interface ArtAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const art: Record<Key, ArtAsset> = {
  hero: {
    src: src('hero'),
    alt: 'Sumi-e ink wash painting of a misty mountain range with a lone pine, mostly empty sky.',
    width: 2464,
    height: 1056,
  },
  stroke: {
    src: src('stroke'),
    alt: '', // decorative — always rendered aria-hidden
    width: 2048,
    height: 1152,
  },
  bloom: {
    src: src('bloom'),
    alt: '', // decorative — always rendered aria-hidden
    width: 2048,
    height: 1152,
  },
  washi: {
    src: src('washi'),
    alt: '', // decorative — page background
    width: 2048,
    height: 2048,
  },
};
