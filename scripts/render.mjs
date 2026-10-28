import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const root = fileURLToPath(new URL('..', import.meta.url));
const output = path.join(root, '.render');
await build({
  root,
  configFile: false,
  plugins: [svelte({
    configFile: false,
    extensions: ['.svelte', '.svx'],
    preprocess: mdsvex({
      extensions: ['.svx'],
      layout: { runbook: path.join(root, 'src/lib/layouts/runbook.svelte') },
    }),
    compilerOptions: { css: 'injected' },
  })],
  resolve: { alias: { '#lib': path.join(root, 'src/lib') } },
  ssr: { noExternal: ['svelte'] },
  build: {
    ssr: path.join(root, 'scripts/render-entry.js'),
    outDir: output,
    rollupOptions: { output: { entryFileNames: 'page.mjs' } },
  },
});

const { html, signature, expectedRef } = await import(`${output}/page.mjs`);
await mkdir(path.join(root, 'rendered'), { recursive: true });
const target = path.join(root, 'rendered/0002-dedupe-by-cause.html');
await writeFile(target, html);
const rendered = await readFile(target, 'utf8');
if (typeof signature !== 'string' || !signature.trim()) throw new Error('Missing frontmatter signature');
// The course proof belongs in frontmatter; the desk sees only its derived reference.
for (const expected of ['379', '33', '412', expectedRef, 'issues/1', 'issues/2', 'Supersedes:', 'same cause']) {
  if (!rendered.includes(expected)) throw new Error(`Missing rendered evidence: ${expected}`);
}
if (rendered.includes(signature)) throw new Error('The rendered page exposes the raw signature');
if (rendered.includes("this page isn't signed")) throw new Error('Missing signature');
await writeFile(path.join(root, 'index.html'), rendered);
console.log('Rendered and verified:', target);
