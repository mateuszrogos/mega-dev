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

const { html, decisionHtml } = await import(`${output}/page.mjs`);
await mkdir(path.join(root, 'rendered'), { recursive: true });
const target = path.join(root, 'rendered/4471-findings.html');
await writeFile(target, html);
const rendered = await readFile(target, 'utf8');
for (const expected of ['379', '33', '412', 'DR-P30G-506C', 'issues/1', 'issues/2']) {
  if (!rendered.includes(expected)) throw new Error(`Missing rendered evidence: ${expected}`);
}
if (rendered.includes("this page isn't signed")) throw new Error('Missing signature');
for (const expected of ['379', '33', '412', 'DR-P30G-506C', 'issues/1', 'issues/2', 'Supersedes:', 'same cause']) {
  if (!decisionHtml.includes(expected)) throw new Error(`Missing decision evidence: ${expected}`);
}
if (decisionHtml.includes("this page isn't signed")) throw new Error('Unsigned decision');
await writeFile(path.join(root, 'rendered/0002-dedupe-by-cause.html'), decisionHtml);
// Publish a directly discoverable source/render pair alongside the repository index.
await writeFile(path.join(root, '../4471-findings.svx'), await readFile(path.join(root, 'src/routes/kb/incidents/4471-findings/+page.svx')));
await writeFile(path.join(root, '../4471-findings.html'), rendered);
console.log('Rendered and verified:', target);
