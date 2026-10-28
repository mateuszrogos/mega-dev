import"./Bzak7iHL.js";import"./CBVcDzV-.js";import{J as w,y as _,z as v,a as p,K as y,g as m,aL as T,L as c,B as g,D as f,A as x,f as u}from"./CCyXH59e.js";import{i as R,l as j,s as D}from"./B2IdSBII.js";import{R as z}from"./BBWFcC9g.js";import{C as $,Q as I}from"./1rdeljE0.js";import{D as A}from"./CfCVlJeD.js";import{s as C}from"./Da61xXMX.js";const M="0123456789ABCDEFGHJKMNPQRSTVWXYZ";function b(a,t){let e=t>>>0;for(let s=0;s<a.length;s++)e^=a.charCodeAt(s),e=Math.imul(e,16777619)>>>0;return e}function S(a){const t=a.trim(),e=b(t,2166136261),s=b(t,2654435769);let l=BigInt(e)<<8n|BigInt(s&255),o="";for(let i=0;i<8;i++)o=M[Number(l&31n)]+o,l>>=5n;return`DR-${o.slice(0,4)}-${o.slice(4)}`}var B=u('<p class="stamp svelte-1280m42">desk ref <b class="svelte-1280m42"> </b></p>'),H=u(`<p class="stamp missing svelte-1280m42">no desk ref: this page isn't signed (no <code>signature</code> in its frontmatter)</p>`);function q(a,t){w(t,!0);const e=T(()=>t.signature?S(t.signature):null);var s=_(),l=v(s);{var o=r=>{var n=B(),d=c(g(n)),k=g(d,!0);f(d),f(n),x(()=>C(k,m(e))),p(r,n)},i=r=>{var n=H();p(r,n)};R(l,r=>{m(e)?r(o):r(i,!1)})}p(a,s),y()}const h={layout:"runbook",title:"0002 · Deduplicate reports by cause, not subject",owner:"Mateusz Rogoś",status:"accepted",reviewed:"2026-10-28T00:00:00.000Z",signature:"Mateusz Rogoś"},{layout:W,title:Z,owner:V,status:X,reviewed:Y,signature:G}=h;var L=u(`<p><strong>Date:</strong> 28 October 2026 · <strong>Author:</strong> Mateusz Rogoś (<code>mateuszrogos</code>)</p> <p><strong>Supersedes:</strong> <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001: duplicates share a subject line</a>.
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
that the current live evidence still supports them.</p> <!>`,1);function O(a,t){const e=j(t,["children","$$slots","$$events","$$legacy"]);z(a,D(()=>e,()=>h,{children:(s,l)=>{var o=L(),i=c(v(o),10);$(i,{ticket:4471});var r=c(i,14);A(r,{});var n=c(r,10);I(n,{ticket:4471});var d=c(n,8);q(d,{get signature(){return G}}),p(s,o)},$$slots:{default:!0}}))}const ee=Object.freeze(Object.defineProperty({__proto__:null,default:O,metadata:h},Symbol.toStringTag,{value:"Module"}));export{ee as _,O as a};
