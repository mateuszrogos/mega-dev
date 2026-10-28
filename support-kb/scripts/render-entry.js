import { render } from 'svelte/server';
import Page from '../src/routes/kb/incidents/4471-findings/+page.svx';

const { head, body } = render(Page);
export const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${head}</head><body>${body}</body></html>
`;
