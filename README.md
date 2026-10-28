# S01E03 — what it shows

## Knowledge-base page

- [Signed page source (.svx)](support-kb/src/routes/kb/incidents/4471-findings/+page.svx)
- [Rendered page (.html)](support-kb/rendered/4471-findings.html)
- [Knowledge-base export and conventions](support-kb/README.md)

## Tickets

- [Shared parser: 379 reports — fixed](https://github.com/mateuszrogos/mega-dev/issues/1)
- [Booking-v3 hint: 33 reports — not planned; form retired](https://github.com/mateuszrogos/mega-dev/issues/2)

The support desk closed #4471 on 5 October 2026. The two tickets cover all
412 unique reports (427 export rows, with 15 repeated report IDs).

## Reproduce the rendered page

```sh
cd support-kb
npm ci
npm run render
```

The renderer compiles the signed `.svx` page and its Svelte components. Counts,
tenant classification, and the desk reference come from the exported logic.
