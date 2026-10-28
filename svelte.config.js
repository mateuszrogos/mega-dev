import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';

export default {
  extensions: ['.svelte', '.svx'],
  preprocess: mdsvex({
    extensions: ['.svx'],
    layout: {
      runbook: fileURLToPath(new URL('./src/lib/layouts/runbook.svelte', import.meta.url)),
    },
  }),
  kit: {
    alias: { '#lib': './src/lib' },
    adapter: adapter({ pages: 'build', assets: 'build' }),
  },
};
