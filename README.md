# S01E03 — what it shows

## Knowledge-base page

The original `apps/kb/` project layout is also published under [apps/kb](apps/kb/README.md), including source and the built `/kb/` routes. It is a generated copy of the root project for the original export location.

Direct delivery pair: [source](kb/4471.svx) and [rendered page](kb/4471.html).

The primary KB contribution is a signed replacement decision:

- [Decision 0002: source (.svx)](src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx)
- [Decision 0002: rendered page (.html)](rendered/0002-dedupe-by-cause.html)
- [Decision 0002: full static-site route](build/kb/decisions/0002-dedupe-by-cause/index.html)
- [Built KB index](build/kb/index.html)

It supersedes the subject-only deduplication rule in decision 0001, without
editing that accepted historical record. The tables and chart run the
exported components and data.

Additional incident findings and student screenshots:

- [Signed page source (.svx)](4471-findings.svx)
- [Rendered page (.html)](4471-findings.html)
- [Page screenshot: top](4471-findings-top.png)
- [Page screenshot: bottom, including desk reference](4471-findings-bottom.png)
- [Knowledge-base export and conventions](EXPORT-README.md)

The screenshots were supplied by the student from the rendered page in the
browser. Together they show the page, with an overlap at “Engineering update.”

## Tickets

- [Shared parser: 379 reports — fixed](https://github.com/mateuszrogos/mega-dev/issues/1)
- [Booking-v3 hint: 33 reports — not planned; form retired](https://github.com/mateuszrogos/mega-dev/issues/2)

The support desk closed #4471 on 5 October 2026. The two tickets cover all
412 unique reports (427 export rows, with 15 repeated report IDs).

## Reproduce the rendered page

```sh
npm ci
npm run render
npm run build
```

The renderer compiles the signed `.svx` page and its Svelte components. Counts,
tenant classification, and the desk reference come from the exported logic.

The root source/render pair is generated from the canonical KB route under
`src/routes/kb/incidents/4471-findings/`.

`npm run build` produces the complete static KB under `build/`, including its
`/kb/` index, route HTML, styles, and client code for interactive components.
Serve `build/` as the web root to use those links and controls.
