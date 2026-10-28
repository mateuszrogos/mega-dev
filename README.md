# S01E03 — what it shows

## Canonical signed KB page

- [Source: decision 0002 (.svx)](https://github.com/mateuszrogos/mega-dev/blob/main/src/routes/kb/decisions/0002-dedupe-by-cause/%2Bpage.svx)
- [Standalone rendered page (.html)](https://github.com/mateuszrogos/mega-dev/blob/main/rendered/0002-dedupe-by-cause.html)
- [Full static-site page](build/kb/decisions/0002-dedupe-by-cause/index.html)
- [Built KB index](build/kb/index.html)

There is one signed source page. It explains the two causes in #4471,
links their GitHub follow-ups and final engineering outcomes, and supersedes
subject-only deduplication without editing accepted decision 0001.
Counts, examples, timeline and desk reference are computed by the exported
components. The original 30 export files remain unchanged in content.

## Tickets

- [Shared parser — fixed](https://github.com/mateuszrogos/mega-dev/issues/1)
- [Booking-v3 hint — not planned; form retired](https://github.com/mateuszrogos/mega-dev/issues/2)

## Build

```sh
npm ci
npm run render
npm run build
```

The standalone rendered page is self-contained HTML. The full static site
under `build/` includes all KB routes and the client code for interactive
components. Serve `build/` as the web root to use those routes and controls.
`src/app.html` is a build template, not a rendered page.

## Export and historical evidence

- [Original export README and conventions](EXPORT-README.md)
- [Student screenshot of earlier incident findings: top](4471-findings-top.png)
- [Student screenshot of earlier incident findings: bottom](4471-findings-bottom.png)

The screenshots document an earlier findings page, not the current signed
decision. The current decision source and rendered outputs are linked above.
