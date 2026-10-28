import"./Bzak7iHL.js";import"./VxOJoADb.js";import{K as r,F as d,a as u,f as h}from"./DvAwoIhJ.js";import{l,s as g}from"./CcVb-7Ev.js";import{R as c}from"./BX55AoQR.js";import{C as m}from"./B3zyK1QK.js";import{R as f}from"./D-l7dn6u.js";const e={layout:"runbook",title:"#4471 · two date-handling causes",owner:"support desk",status:"living",reviewed:"2026-10-28T00:00:00.000Z",signature:"mateuszrogos"},{layout:S,title:C,owner:D,status:I,reviewed:P,signature:b}=e;var v=h(`<p>Ticket #4471 contains <strong>412 unique reports</strong>, but the export includes <strong>427
rows</strong> because 15 report IDs repeat in overlapping pages. All 412 unique
reports were merged into #4471. The evidence separates them into two causes,
not one.</p> <h2>Shared parser — 379 reports</h2> <p>The shared parser reads dates month-first. For tenants whose locale writes the
day before the month, that reverses day and month. This group spans 11 tenants
and app, email, and form reports.</p> <p>Track the shared-parser follow-up in <a href="https://github.com/mateuszrogos/mega-dev/issues/1" rel="nofollow">GitHub issue #1</a>.</p> <p><strong>Outcome:</strong> Fixed in <code>fix(dates): parse dd/mm for eu locales</code>.</p> <h2>Booking-v3 date hint — 33 reports</h2> <p>Booking-v3 displays <code>MM/DD/YYYY</code> for day-first tenants, while the form
interprets values using the tenant’s locale. This group contains 33 form
reports across Alder Physio (12), Copper Studio (11), and Pale Harbour (10).
It is distinct from the shared-parser group.</p> <p>Track the booking-v3 follow-up in <a href="https://github.com/mateuszrogos/mega-dev/issues/2" rel="nofollow">GitHub issue #2</a>.</p> <p><strong>Outcome:</strong> Not fixed; the booking-v3 form was retired.</p> <h2>Engineering update</h2> <p>The support desk closed #4471 on <strong>5 October 2026</strong>. The shared parser was
fixed, while the booking-v3 hint will not be fixed because its form was retired.</p> <h2>Counts and classification</h2> <!> <p>Intake tags do not identify the root cause reliably: 23 parser-group reports
are tagged <code>hint</code>, and 15 hint-group reports are tagged <code>parser</code>. The five
one-day-move IDs in the desk notes remain within the parser group’s 379 under
the supplied tenant-based classifier; they are noted by the table and are not
counted as a third cause.</p> <!>`,1);function w(s,a){const n=l(a,["children","$$slots","$$events","$$legacy"]);c(s,g(()=>n,()=>e,{children:(i,_)=>{var t=v(),o=r(d(t),24);m(o,{ticket:4471});var p=r(o,4);f(p,{get signature(){return b}}),u(i,t)},$$slots:{default:!0}}))}const R=Object.freeze(Object.defineProperty({__proto__:null,default:w,metadata:e},Symbol.toStringTag,{value:"Module"}));export{R as _,w as a};
