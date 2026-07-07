/**
 * Downloads the generated Higgsfield plates into /public/assets so the
 * site can self-host them in production.
 *
 *   npm run fetch-assets
 *
 * Then open lib/assets.ts and flip:  SOURCE = 'local'
 *
 * Requires Node 18+ (global fetch).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, 'public', 'assets');

const manifest = JSON.parse(
  await readFile(join(root, 'lib', 'asset-manifest.json'), 'utf8')
);

await mkdir(outDir, { recursive: true });

let ok = 0;
for (const [key, { url, file }] of Object.entries(manifest)) {
  if (!url || url.startsWith('PENDING')) {
    console.warn(`⚠ ${key}: no URL in manifest — skipped`);
    continue;
  }
  process.stdout.write(`↓ ${key} → public/assets/${file} ... `);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`failed (${res.status})`);
    continue;
  }
  await writeFile(join(outDir, file), Buffer.from(await res.arrayBuffer()));
  console.log('done');
  ok += 1;
}

console.log(
  `\n${ok}/${Object.keys(manifest).length} assets saved.` +
    `\nNext step: set SOURCE = 'local' in lib/assets.ts\n` +
    `Optional: convert to WebP/AVIF (e.g. \`npx sharp-cli\`) and update the manifest "file" fields.`
);
