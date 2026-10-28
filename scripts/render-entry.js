import { render } from 'svelte/server';
import Decision, { metadata } from '../src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx';
import { deskRef } from '../src/lib/kb/desk-ref.ts';

function document(Component) {
  const { head, body } = render(Component);
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${head}</head><body>${body}</body></html>
`;
}
export const html = document(Decision);

export const signature = metadata.signature;
export const expectedRef = deskRef(signature);
