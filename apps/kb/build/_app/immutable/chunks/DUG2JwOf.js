import"./Bzak7iHL.js";import"./VxOJoADb.js";import{K as e,F as c,a as h,f as u}from"./DvAwoIhJ.js";import{l as m,s as g}from"./CcVb-7Ev.js";import{R as b}from"./BX55AoQR.js";import{C as f}from"./B3zyK1QK.js";import{D as w}from"./KCZhyl35.js";import{Q as k}from"./Br4CRE70.js";import{R as v}from"./D-l7dn6u.js";const t={layout:"runbook",title:"0002 · Deduplicate reports by cause, not subject",owner:"mateuszrogos",status:"accepted",reviewed:"2026-10-28T00:00:00.000Z",signature:"mateuszrogos"},{layout:O,title:F,owner:G,status:H,reviewed:A,signature:y}=t;var _=u(`<p><strong>Date:</strong> 28 October 2026 · <strong>Author:</strong> mateuszrogos</p> <p><strong>Supersedes:</strong> <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001: duplicates share a subject line</a>.
The accepted record remains unchanged as a record of the old rule.</p> <h2>Context</h2> <p>Ticket #4471 was marked known and described as one parser problem. Its live
cause table separates the reports into two problems. Subject text and intake
tags are not reliable evidence that two reports have the same cause.</p> <p>The table below deduplicates overlapping export rows by report ID before
counting. It classifies reports from the tenant’s locale, booking-form version,
and report channel, rather than copying the intake tag.</p> <!> <p>This table describes the original support-desk export. Its “no ticket of its
own” label means no separate ticket in that export; the GitHub follow-ups
below now track both causes.</p> <p>The desk notes identify reports read as one-day moves. They remain in the
parser group under the supplied classifier; do not double-count them or
assert another cause without further evidence.</p> <h2>Decision</h2> <p>Replace subject-only merging with cause-based triage:</p> <ol><li>Read the report body. Look up the tenant’s locale and booking-form version,
and identify the report channel.</li> <li>For day-first tenants, distinguish the shared month-first parser from the
booking-v3 form’s month-first hint. The form interprets dates according to
the tenant’s locale, despite its conflicting hint.</li> <li>Merge reports only when their cause is established as the same. Different
subjects may describe the same cause; identical subjects may describe
different causes.</li> <li>If the tenant or cause is unknown, keep the report separate and investigate.
Two unclassified reports are not established duplicates.</li> <li>Keep one engineering ticket per problem, with counts of unique report IDs.
Recheck the ticket’s outcome before presenting it as open or fixed.</li></ol> <p>The cases below are computed by the exported cause logic. They demonstrate
both false merges and missed duplicates under the old subject rule.</p> <!> <h2>Tickets and engineering outcomes</h2> <ul><li><a href="https://github.com/mateuszrogos/mega-dev/issues/1" rel="nofollow">Shared-parser follow-up, GitHub issue #1</a>:
closed as completed. Fixed in <code>fix(dates): parse dd/mm for eu locales</code>.</li> <li><a href="https://github.com/mateuszrogos/mega-dev/issues/2" rel="nofollow">Booking-v3 hint follow-up, GitHub issue #2</a>:
closed as not planned. The booking-v3 form was retired; its hint was not fixed.</li></ul> <p>The support desk closed #4471 on <strong>5 October 2026</strong>. Closing both follow-ups
does not mean both problems were fixed.</p> <h2>What the queue shows</h2> <!> <p>Received and merged are different events. A batch of merges does not establish
a new outbreak or a shared cause. Use the report evidence, not the size or
timing of the merged ticket, to decide whether reports belong together.</p> <h2>Consequences</h2> <p>Triage requires reading and tenant context, rather than a subject-line match.
The desk gets separate engineering outcomes and counts for separate causes.
Unknown cases stay visible instead of being silently merged into a known bug.
Treat old reviewed dates and accepted records as historical claims, not proof
that the current live evidence still supports them.</p> <!>`,1);function T(n,i){const l=m(i,["children","$$slots","$$events","$$legacy"]);b(n,g(()=>l,()=>t,{children:(d,x)=>{var o=_(),s=e(c(o),10);f(s,{ticket:4471});var r=e(s,14);w(r,{});var a=e(r,10);k(a,{ticket:4471});var p=e(a,8);v(p,{get signature(){return y}}),h(d,o)},$$slots:{default:!0}}))}const K=Object.freeze(Object.defineProperty({__proto__:null,default:T,metadata:t},Symbol.toStringTag,{value:"Module"}));export{K as _,T as a};
