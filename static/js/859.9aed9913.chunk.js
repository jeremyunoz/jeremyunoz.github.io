/*! For license information please see 859.9aed9913.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[859],{7859(e,a,r){r.r(a),r.d(a,{default:()=>B});var i=r(5043),s=r(5847),n=r(403),t=r(184),l=r(389),o=r(4648);const d=(0,o.A)("outline","adjustments-horizontal","AdjustmentsHorizontal",[["path",{d:"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M4 6l8 0",key:"svg-1"}],["path",{d:"M16 6l4 0",key:"svg-2"}],["path",{d:"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-3"}],["path",{d:"M4 12l2 0",key:"svg-4"}],["path",{d:"M10 12l10 0",key:"svg-5"}],["path",{d:"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-6"}],["path",{d:"M4 18l11 0",key:"svg-7"}],["path",{d:"M19 18l1 0",key:"svg-8"}]]);var c=r(1604),m=r(273);const p=(0,o.A)("outline","device-mobile","DeviceMobile",[["path",{d:"M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14",key:"svg-0"}],["path",{d:"M11 4h2",key:"svg-1"}],["path",{d:"M12 17v.01",key:"svg-2"}]]);var h=r(4677),g=r(4666),b=r(3131),u=r(3004),f=r(9653),x=r(3551),v=r(6960),y=r(8057),k=r(4234),w=r(2653),j=r(579);const N=e=>{if("string"!==typeof e)return e;return e.split(/(\*\*[^*]+\*\*)/g).map((e,a)=>{const r=e.match(/^\*\*([^*]+)\*\*$/);return r?(0,j.jsx)("strong",{className:"inline-metric",children:r[1]},a):(0,j.jsx)(i.Fragment,{children:e},a)})},z=[{label:"Role",value:"Embedded Systems Lead \xb7 Edge AI Pipeline"},{label:"Team",value:"6 engineers \xb7 BRDG Innovation Challenge 2025"},{label:"Timeline",value:"20 weeks \xb7 May \u2014 Oct 2025 \xb7 Shipped"},{label:"Stack",value:"Raspberry Pi 5 \xb7 TensorFlow Lite \xb7 YOLO \xb7 MQTT"}],M=[{value:"~93%",label:"Classification accuracy",note:"YOLO \xb7 TFLite INT8"},{value:"~25%",label:"End-to-end latency reduction",note:"Baseline \u2192 tuned pipeline"},{value:"20 wks",label:"Delivery cycle",note:"6-engineer team, shipped"}],A=[{icon:l.A,label:"Camera",detail:"Pi 5 + CSI sensor captures frames",zone:"edge"},{icon:d,label:"Preprocess",detail:"Resize, normalize, color convert",zone:"edge"},{icon:c.A,label:"TFLite",detail:"Quantized on-device inference",zone:"edge"},{icon:m.A,label:"MQTT",detail:"QoS-tuned event publish",zone:"cloud"},{icon:p,label:"Mobile App",detail:"Firebase-synced UI updates",zone:"cloud"}],T=[{label:"Input",body:"Camera capture on Raspberry Pi 5 with a CSI sensor streams frames into the pipeline at a steady cadence."},{label:"Processing",body:"Frames are resized, normalized, and color-adjusted to match the model's expected input tensor."},{label:"Inference",body:"A quantized TensorFlow Lite model classifies recyclables entirely on-device \u2014 no cloud round-trip required."},{label:"Communication",body:"Results are published over MQTT with Firebase as the cloud backbone for authenticated state sync."},{label:"Output",body:"The mobile app subscribes to classification events and renders them with sub-second latency."}],C=["Implemented the on-device inference pipeline in Python on Raspberry Pi 5, wiring camera capture to TFLite output.","Optimized preprocessing and model quantization to cut end-to-end latency ~25%.","Designed the MQTT communication layer and Firebase sync for device \u2192 cloud \u2192 mobile delivery.","Led integration across a 6-engineer team, owning the boundary between firmware, ML, and the mobile client."],I=[{title:"Latency Optimization",icon:h.A,problem:"Initial inference loop left the app feeling laggy \u2014 frames were being captured faster than the model could process them.",approach:"Profiled each pipeline stage, quantized the model to INT8, and reduced preprocessing allocations per frame.",outcome:"Cut end-to-end latency ~25% and stabilized throughput on-device."},{title:"Resource Constraints",icon:g.A,problem:"The Raspberry Pi 5 is capable, but running capture + inference + networking simultaneously pushed memory and CPU limits.",approach:"Bounded buffers, reused tensors, and pinned the inference thread so it couldn't be starved by I/O work.",outcome:"Sustained real-time classification without thermal throttling or dropped frames under continuous runtime."},{title:"Communication Reliability",icon:b.A,problem:"Wi-Fi variance in the deployment environment caused intermittent message loss between device and app.",approach:"Tuned MQTT QoS, added lightweight retry + dedupe on the subscriber, and fronted with Firebase for eventual consistency.",outcome:"Stable end-to-end delivery even under degraded network conditions during the BRDG demos."}],P=[{choice:"TensorFlow Lite vs full model",reasoning:"TFLite's quantized graph fits the Pi's memory envelope and keeps inference on-device, which is what this product needs to feel instant."},{choice:"MQTT vs HTTP",reasoning:"MQTT's pub/sub model and low per-message overhead are a natural fit for IoT-style event streams. HTTP would have added connection churn per classification."},{choice:"Edge vs cloud inference",reasoning:"Running the model on-device removes a network hop, keeps classification responsive when connectivity is weak, and avoids shipping camera frames off the device."}],R=["Upgrade from classification to multi-object detection for cluttered bin scenes.","Distill or prune the model for higher FPS on the same hardware budget.","Add a local offline-inference fallback so the system degrades gracefully without network."],S=[{id:"architecture",num:"01",label:"Architecture"},{id:"pipeline",num:"02",label:"Pipeline"},{id:"contributions",num:"03",label:"Contributions"},{id:"challenges",num:"04",label:"Challenges"},{id:"decisions",num:"05",label:"Decisions"},{id:"future",num:"06",label:"Next"}];function L(e){let{className:a="back-link"}=e;const r=(0,s.Zp)();return(0,j.jsxs)("a",{className:a,href:"/#/",onClick:e=>{e.preventDefault(),window.history.length>1?r(-1):r("/",{state:{scrollTo:"projects"}})},children:[(0,j.jsx)(u.A,{size:16,stroke:2,"aria-hidden":"true"}),(0,j.jsx)("span",{children:"Back to Projects"})]})}function B(){(0,w.C)({title:"Bincredible \xb7 System Design",description:"Bincredible deep dive: real-time edge AI pipeline for on-device recyclable classification with ~93% accuracy and ~25% reduced latency."});const e=function(e){const[a,r]=(0,i.useState)(e[0]);return(0,i.useEffect)(()=>{const a=e.map(e=>document.getElementById(e)).filter(Boolean);if(!a.length)return;const i=new IntersectionObserver(e=>{const a=e.filter(e=>e.isIntersecting).sort((e,a)=>e.boundingClientRect.top-a.boundingClientRect.top);a[0]&&r(a[0].target.id)},{rootMargin:"-20% 0px -65% 0px",threshold:0});return a.forEach(e=>i.observe(e)),()=>i.disconnect()},[e]),a}((0,i.useMemo)(()=>S.map(e=>e.id),[])),a=(0,i.useRef)(null);return(0,j.jsx)(k.A,{children:(0,j.jsx)(F,{className:"visible",children:(0,j.jsxs)("div",{className:"detail-shell",children:[(0,j.jsx)("div",{className:"topbar",children:(0,j.jsx)(L,{})}),(0,j.jsxs)("header",{className:"overview",id:"top",children:[(0,j.jsxs)("p",{className:"label",children:[(0,j.jsx)("span",{className:"label-dot","aria-hidden":"true"}),"BRDG Innovation Challenge \xb7 2025"]}),(0,j.jsx)("h1",{id:"bincredible-title",children:"Bincredible"}),(0,j.jsx)("p",{className:"thesis",children:"A real-time edge AI system that runs recyclable classification on-device and keeps the cloud out of the hot path."}),(0,j.jsx)("dl",{className:"meta-table",children:z.map(e=>(0,j.jsxs)("div",{className:"meta-row",children:[(0,j.jsx)("dt",{children:e.label}),(0,j.jsx)("dd",{children:e.value})]},e.label))}),(0,j.jsxs)("div",{className:"overview-ctas",children:[(0,j.jsxs)("a",{className:"cta cta-primary",href:"https://github.com/jeremyunoz/bincredible-app",target:"_blank",rel:"noopener noreferrer",children:[(0,j.jsx)(t.hL4,{"aria-hidden":"true"}),(0,j.jsx)("span",{children:"View Code"})]}),(0,j.jsxs)("a",{className:"cta",href:"https://github.com/jeremyunoz/bincredible-app#readme",target:"_blank",rel:"noopener noreferrer",children:[(0,j.jsx)(t.EQc,{"aria-hidden":"true"}),(0,j.jsx)("span",{children:"Live Demo"})]})]})]}),(0,j.jsxs)("section",{className:"impact","aria-labelledby":"impact-label",children:[(0,j.jsx)("p",{className:"eyebrow",id:"impact-label",children:"Impact"}),(0,j.jsx)("h2",{className:"thesis-h",children:"~93% accuracy, ~25% latency reduction, shipped in 20 weeks with a team of six."}),(0,j.jsx)("div",{className:"impact-grid",children:M.map(e=>(0,j.jsxs)("div",{className:"impact-stat",children:[(0,j.jsx)("div",{className:"impact-value",children:e.value}),(0,j.jsx)("div",{className:"impact-label",children:e.label}),(0,j.jsx)("div",{className:"impact-note",children:e.note})]},e.label))}),(0,j.jsxs)("div",{className:"latency-bar",role:"img","aria-label":"Latency reduced by about twenty-five percent from baseline",children:[(0,j.jsxs)("div",{className:"latency-row",children:[(0,j.jsx)("span",{className:"latency-label",children:"Baseline"}),(0,j.jsx)("div",{className:"latency-track",children:(0,j.jsx)("div",{className:"latency-fill latency-fill-base",style:{width:"100%"}})}),(0,j.jsx)("span",{className:"latency-value",children:"100%"})]}),(0,j.jsxs)("div",{className:"latency-row",children:[(0,j.jsx)("span",{className:"latency-label",children:"Tuned"}),(0,j.jsx)("div",{className:"latency-track",children:(0,j.jsx)("div",{className:"latency-fill latency-fill-tuned",style:{width:"75%"}})}),(0,j.jsx)("span",{className:"latency-value",children:"~75%"})]}),(0,j.jsx)("p",{className:"latency-caption",children:"End-to-end, from frame capture to mobile UI update."})]})]}),(0,j.jsxs)("section",{className:"proof","aria-label":"System in action",children:[(0,j.jsx)("p",{className:"eyebrow",children:(0,j.jsx)("span",{children:"In action"})}),(0,j.jsxs)("figure",{className:"demo",children:[(0,j.jsxs)("div",{className:"demo-frame",children:[(0,j.jsx)("span",{className:"demo-play","aria-hidden":"true",children:(0,j.jsx)(f.A,{size:20,stroke:2})}),(0,j.jsx)("img",{src:"/assets/Bincredible.png",alt:"Bincredible system showing a classification result on the companion mobile app",loading:"lazy",decoding:"async"})]}),(0,j.jsx)("figcaption",{children:"Live classification result propagating from the Pi to the mobile app in under a second."})]})]}),(0,j.jsx)("nav",{ref:a,className:"subnav","aria-label":"Sections on this page",children:(0,j.jsx)("div",{className:"subnav-inner",children:S.map(r=>(0,j.jsxs)("a",{href:`#${r.id}`,onClick:e=>((e,r)=>{var i,s,n,t;e.preventDefault();const l=document.getElementById(r);if(!l)return;const o=null!==(i=null===(s=a.current)||void 0===s?void 0:s.offsetHeight)&&void 0!==i?i:0,d=window.scrollY+l.getBoundingClientRect().top-o-12,c=null===(n=(t=window).matchMedia)||void 0===n?void 0:n.call(t,"(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:d,behavior:c?"auto":"smooth"})})(e,r.id),className:"subnav-chip "+(e===r.id?"is-active":""),"aria-current":e===r.id?"true":void 0,children:[(0,j.jsx)("span",{className:"subnav-num",children:r.num}),(0,j.jsx)("span",{className:"subnav-label",children:r.label})]},r.id))})}),(0,j.jsxs)("section",{className:"s",id:"architecture","aria-labelledby":"arch-title",children:[(0,j.jsxs)("header",{className:"s-head",children:[(0,j.jsxs)("p",{className:"eyebrow",children:[(0,j.jsx)("span",{className:"eyebrow-num",children:"01"}),(0,j.jsx)("span",{children:"Architecture"})]}),(0,j.jsx)("h2",{id:"arch-title",className:"thesis-h",children:"Classification runs on-device; the cloud is only used for delivery."})]}),(0,j.jsxs)("div",{className:"pipeline-card",children:[(0,j.jsxs)("div",{className:"pipeline-zones","aria-hidden":"true",children:[(0,j.jsx)("div",{className:"zone-label zone-edge",children:"On-device (Edge)"}),(0,j.jsx)("div",{className:"zone-label zone-cloud",children:"Cloud + Mobile"})]}),(0,j.jsx)("ol",{className:"pipeline",children:A.map((e,a)=>{const r=e.icon,s=a===A.length-1;return(0,j.jsxs)(i.Fragment,{children:[(0,j.jsxs)("li",{className:`stage stage-${e.zone}`,children:[(0,j.jsx)("div",{className:"stage-num","aria-hidden":"true",children:String(a+1).padStart(2,"0")}),(0,j.jsx)("div",{className:"stage-icon","aria-hidden":"true",children:(0,j.jsx)(r,{size:22,stroke:1.7})}),(0,j.jsx)("div",{className:"stage-label",children:e.label}),(0,j.jsx)("div",{className:"stage-detail",children:e.detail})]}),!s&&(0,j.jsx)(x.A,{className:"stage-arrow",size:20,stroke:2.2,"aria-hidden":"true"})]},e.label)})})]}),(0,j.jsx)("p",{className:"caption",children:"Keeping the model on-device removes a network hop from every classification. MQTT + Firebase handle delivery and state sync."})]}),(0,j.jsxs)("section",{className:"s",id:"pipeline","aria-labelledby":"pipeline-title",children:[(0,j.jsxs)("header",{className:"s-head",children:[(0,j.jsxs)("p",{className:"eyebrow",children:[(0,j.jsx)("span",{className:"eyebrow-num",children:"02"}),(0,j.jsx)("span",{children:"Pipeline"})]}),(0,j.jsx)("h2",{id:"pipeline-title",className:"thesis-h",children:"Every stage of the data path, from sensor to screen."})]}),(0,j.jsx)("ol",{className:"rail",children:T.map((e,a)=>(0,j.jsxs)("li",{className:"rail-row",children:[(0,j.jsx)("div",{className:"rail-marker","aria-hidden":"true",children:(0,j.jsx)("span",{className:"rail-dot",children:String(a+1).padStart(2,"0")})}),(0,j.jsxs)("div",{className:"rail-body",children:[(0,j.jsx)("h3",{className:"rail-label",children:e.label}),(0,j.jsx)("p",{children:e.body})]})]},e.label))})]}),(0,j.jsxs)("section",{className:"s",id:"contributions","aria-labelledby":"contrib-title",children:[(0,j.jsxs)("header",{className:"s-head",children:[(0,j.jsxs)("p",{className:"eyebrow",children:[(0,j.jsx)("span",{className:"eyebrow-num",children:"03"}),(0,j.jsx)("span",{children:"Contributions"})]}),(0,j.jsx)("h2",{id:"contrib-title",className:"thesis-h",children:"I owned the firmware, ML, and integration seam."})]}),(0,j.jsx)("ul",{className:"icon-list",children:C.map(e=>(0,j.jsxs)("li",{children:[(0,j.jsx)("span",{className:"icon-list-mark","aria-hidden":"true",children:(0,j.jsx)(v.A,{size:14,stroke:2.5})}),(0,j.jsx)("span",{children:N(e)})]},e))})]}),(0,j.jsxs)("section",{className:"s",id:"challenges","aria-labelledby":"challenges-title",children:[(0,j.jsxs)("header",{className:"s-head",children:[(0,j.jsxs)("p",{className:"eyebrow",children:[(0,j.jsx)("span",{className:"eyebrow-num",children:"04"}),(0,j.jsx)("span",{children:"Challenges"})]}),(0,j.jsx)("h2",{id:"challenges-title",className:"thesis-h",children:"Three places engineering judgement actually mattered."})]}),(0,j.jsx)("div",{className:"challenge-grid",children:I.map(e=>{const a=e.icon;return(0,j.jsxs)("article",{className:"challenge-card",children:[(0,j.jsxs)("header",{className:"challenge-head",children:[(0,j.jsx)("span",{className:"challenge-icon","aria-hidden":"true",children:(0,j.jsx)(a,{size:18,stroke:1.8})}),(0,j.jsx)("h3",{children:e.title})]}),(0,j.jsxs)("div",{className:"pao",children:[(0,j.jsxs)("div",{className:"pao-row pao-problem",children:[(0,j.jsx)("span",{className:"pao-tag",children:"Problem"}),(0,j.jsx)("p",{children:e.problem})]}),(0,j.jsxs)("div",{className:"pao-row pao-approach",children:[(0,j.jsx)("span",{className:"pao-tag",children:"Approach"}),(0,j.jsx)("p",{children:e.approach})]}),(0,j.jsxs)("div",{className:"pao-row pao-outcome",children:[(0,j.jsx)("span",{className:"pao-tag",children:"Outcome"}),(0,j.jsx)("p",{children:e.outcome})]})]})]},e.title)})})]}),(0,j.jsxs)("section",{className:"s",id:"decisions","aria-labelledby":"design-title",children:[(0,j.jsxs)("header",{className:"s-head",children:[(0,j.jsxs)("p",{className:"eyebrow",children:[(0,j.jsx)("span",{className:"eyebrow-num",children:"05"}),(0,j.jsx)("span",{children:"Decisions"})]}),(0,j.jsx)("h2",{id:"design-title",className:"thesis-h",children:"Three tradeoffs and the reasoning behind them."})]}),(0,j.jsx)("ul",{className:"decision-list",children:P.map(e=>(0,j.jsxs)("li",{children:[(0,j.jsx)("span",{className:"decision-choice",children:e.choice}),(0,j.jsx)(y.A,{className:"decision-arrow",size:16,stroke:2.2,"aria-hidden":"true"}),(0,j.jsx)("span",{className:"decision-reasoning",children:e.reasoning})]},e.choice))})]}),(0,j.jsxs)("section",{className:"s",id:"future","aria-labelledby":"future-title",children:[(0,j.jsxs)("header",{className:"s-head",children:[(0,j.jsxs)("p",{className:"eyebrow",children:[(0,j.jsx)("span",{className:"eyebrow-num",children:"06"}),(0,j.jsx)("span",{children:"What's Next"})]}),(0,j.jsx)("h2",{id:"future-title",className:"thesis-h",children:"Where this system goes from here."})]}),(0,j.jsx)("ul",{className:"icon-list",children:R.map(e=>(0,j.jsxs)("li",{children:[(0,j.jsx)("span",{className:"icon-list-mark icon-list-mark-soft","aria-hidden":"true",children:(0,j.jsx)(x.A,{size:14,stroke:2.2})}),(0,j.jsx)("span",{children:e})]},e))})]}),(0,j.jsxs)("footer",{className:"detail-footer",children:[(0,j.jsx)(L,{}),(0,j.jsxs)(s.N_,{to:"/",state:{scrollTo:"projects"},className:"cta cta-primary",children:[(0,j.jsx)("span",{children:"See other projects"}),(0,j.jsx)(x.A,{size:16,stroke:2,"aria-hidden":"true"})]})]})]})})})}const F=n.Ay.section`
   --edge: #588157;
   --edge-soft: rgba(88, 129, 87, 0.14);
   --edge-strong: #27453c;
   --ink-1: #1d352e;
   --ink-2: #2b5d4d;
   --ink-3: #355b4d;
   --ink-4: #4b7a6a;
   --ink-5: #5c7a72;
   --rule: rgba(43, 93, 77, 0.12);
   --rule-strong: rgba(43, 93, 77, 0.22);

   padding: clamp(1rem, 2.5vw, 2rem) 1rem 3rem;
   text-align: left;

   /* Neutralize the global section fade-in so nested <section>s render. */
   section {
      opacity: 1;
      transform: none;
      padding: 0;
      text-align: left;
   }

   .detail-shell {
      width: min(100%, 960px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(2rem, 5vw, 3.25rem);
   }

   .topbar {
      display: flex;
      justify-content: flex-start;
      margin-bottom: -0.5rem;
   }

   .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.4rem 0.85rem 0.4rem 0.7rem;
      border-radius: 999px;
      border: 1px solid var(--rule);
      background: rgba(255, 255, 255, 0.72);
      color: var(--ink-3);
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: none;
      transition:
         transform 0.2s ease,
         background 0.2s ease,
         color 0.2s ease,
         box-shadow 0.2s ease;
   }

   .back-link:hover {
      transform: translateY(-1px);
      background: #ffffff;
      box-shadow: 0 8px 18px rgba(43, 93, 77, 0.1);
      color: var(--ink-1);
   }

   /* ---------- Shared editorial typography ---------- */
   .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      margin: 0 0 0.7rem;
      color: var(--ink-4);
      font-family: var(--font-display);
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
   }

   .eyebrow-num {
      display: inline-grid;
      place-items: center;
      min-width: 1.7rem;
      padding: 0.1rem 0.4rem;
      border-radius: 999px;
      background: var(--edge-soft);
      color: var(--edge-strong);
      font-size: 0.68rem;
      letter-spacing: 0.1em;
   }

   h1 {
      font-family: var(--font-display);
      font-size: clamp(2.6rem, 1.8rem + 3.6vw, 4.2rem);
      letter-spacing: -0.035em;
      line-height: 1;
      color: var(--color-heading-strong);
      margin: 0;
   }

   /* The section-level thesis sentence. This is the load-bearing h2 —
      it should read like a sentence, not a label. */
   .thesis-h {
      font-family: var(--font-display);
      font-size: clamp(1.4rem, 1rem + 1.3vw, 1.95rem);
      line-height: 1.2;
      letter-spacing: -0.01em;
      color: var(--ink-1);
      margin: 0;
      max-width: 34ch;
      text-wrap: balance;
   }

   h3 {
      font-family: var(--font-display);
      font-size: 1.02rem;
      color: var(--ink-2);
      margin: 0;
      letter-spacing: -0.005em;
   }

   .caption {
      margin: 1rem 0 0;
      color: var(--ink-4);
      font-size: 0.9rem;
      line-height: 1.55;
      max-width: 60ch;
   }

   /* ---------- OVERVIEW / HERO ---------- */
   .overview {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
   }

   .overview .label {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      margin: 0;
      color: var(--ink-4);
      font-family: var(--font-display);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
   }

   .label-dot {
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 999px;
      background: var(--edge);
      box-shadow: 0 0 0 4px rgba(88, 129, 87, 0.18);
   }

   .thesis {
      margin: -0.3rem 0 0;
      color: var(--ink-2);
      font-family: var(--font-display);
      font-size: clamp(1.1rem, 0.95rem + 0.5vw, 1.35rem);
      font-weight: 500;
      line-height: 1.35;
      letter-spacing: -0.005em;
      max-width: 42ch;
      text-wrap: balance;
   }

   /* Meta table — Role / Team / Timeline / Stack rows */
   .meta-table {
      margin: 0.4rem 0 0;
      padding: 0;
      display: grid;
      gap: 0;
      border-top: 1px solid var(--rule);
   }

   .meta-row {
      display: grid;
      grid-template-columns: 7rem 1fr;
      gap: 1rem;
      padding: 0.65rem 0;
      border-bottom: 1px solid var(--rule);
   }

   .meta-row dt {
      margin: 0;
      color: var(--ink-4);
      font-family: var(--font-display);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding-top: 0.1rem;
   }

   .meta-row dd {
      margin: 0;
      color: var(--ink-1);
      font-size: 0.96rem;
      font-weight: 500;
      line-height: 1.5;
   }

   .overview-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.35rem;
   }

   /* ---------- CTAs ---------- */
   .cta {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.55rem 0.95rem;
      border-radius: 999px;
      border: 1px solid var(--rule-strong);
      background: rgba(255, 255, 255, 0.88);
      color: var(--ink-2);
      font-size: 0.88rem;
      font-weight: 600;
      text-decoration: none;
      transition:
         transform 0.2s ease,
         background 0.2s ease,
         box-shadow 0.2s ease;
   }

   .cta:hover {
      transform: translateY(-1px);
      background: #ffffff;
      box-shadow: 0 8px 18px rgba(43, 93, 77, 0.12);
      color: var(--ink-1);
   }

   .cta-primary {
      background: var(--edge-strong);
      color: #f3fff9;
      border-color: transparent;
   }

   .cta-primary:hover {
      background: var(--ink-1);
      color: #ffffff;
   }

   /* ---------- IMPACT (headline numbers) ---------- */
   .impact {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }

   .impact-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(0.75rem, 2vw, 1.5rem);
      padding: 1.15rem 0 0.35rem;
      border-top: 1px solid var(--rule);
   }

   .impact-stat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
   }

   .impact-value {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 1.4rem + 3.2vw, 3.6rem);
      font-weight: 700;
      color: var(--ink-1);
      line-height: 0.95;
      letter-spacing: -0.035em;
   }

   .impact-label {
      margin-top: 0.5rem;
      font-family: var(--font-display);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-3);
   }

   .impact-note {
      color: var(--ink-4);
      font-size: 0.82rem;
      line-height: 1.4;
   }

   /* Latency bar — subtle, just supports the 25% claim */
   .latency-bar {
      display: grid;
      gap: 0.45rem;
      margin-top: 0.45rem;
      padding: 0.85rem 0 0;
      border-top: 1px dashed var(--rule);
   }

   .latency-row {
      display: grid;
      grid-template-columns: 4.5rem 1fr 3rem;
      align-items: center;
      gap: 0.75rem;
   }

   .latency-label {
      font-family: var(--font-display);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-4);
   }

   .latency-track {
      position: relative;
      height: 8px;
      border-radius: 999px;
      background: rgba(43, 93, 77, 0.08);
      overflow: hidden;
   }

   .latency-fill {
      height: 100%;
      border-radius: inherit;
   }

   .latency-fill-base {
      background: linear-gradient(90deg, #c8d5ae, #9bb88e);
   }

   .latency-fill-tuned {
      background: linear-gradient(90deg, #5a8e66, var(--edge-strong));
   }

   .latency-value {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 0.86rem;
      color: var(--ink-1);
      text-align: right;
   }

   .latency-caption {
      margin: 0.2rem 0 0;
      color: var(--ink-4);
      font-size: 0.8rem;
   }

   /* ---------- Sticky subnav ---------- */
   .subnav {
      position: sticky;
      top: 8px;
      z-index: 5;
      margin: 0.25rem -4px 0;
      padding: 4px;
      border-radius: 999px;
   }

   .subnav-inner {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.3rem;
      overflow-x: auto;
      scrollbar-width: none;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.82);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid var(--rule);
      box-shadow: 0 8px 22px rgba(43, 93, 77, 0.08);
   }

   .subnav-inner::-webkit-scrollbar {
      display: none;
   }

   .subnav-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.65rem 0.4rem 0.45rem;
      border-radius: 999px;
      color: var(--ink-4);
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
      text-decoration: none;
      transition: background 0.2s ease, color 0.2s ease;
   }

   .subnav-chip:hover {
      background: rgba(88, 129, 87, 0.1);
      color: var(--ink-1);
   }

   .subnav-chip.is-active {
      background: var(--edge-strong);
      color: #f3fff9;
   }

   .subnav-chip.is-active .subnav-num {
      background: rgba(255, 255, 255, 0.22);
      color: #f3fff9;
   }

   .subnav-num {
      display: inline-grid;
      place-items: center;
      min-width: 1.4rem;
      padding: 0.05rem 0.28rem;
      border-radius: 999px;
      background: var(--edge-soft);
      color: var(--edge-strong);
      font-family: var(--font-display);
      font-size: 0.66rem;
      letter-spacing: 0.1em;
      transition: background 0.2s ease, color 0.2s ease;
   }

   /* ---------- Content sections (flat, no card wrapper) ---------- */
   .s {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
   }

   .s-head {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
   }

   .s-head .eyebrow {
      margin: 0;
   }

   /* ---------- Pipeline diagram (keeps its card — it's a diagram) ---------- */
   .pipeline-card {
      padding: 1.1rem 1.1rem 0.85rem;
      border-radius: 20px;
      background: linear-gradient(
         145deg,
         rgba(255, 255, 255, 0.75) 0%,
         rgba(229, 244, 235, 0.7) 100%
      );
      border: 1px solid rgba(88, 129, 87, 0.2);
      box-shadow: 0 14px 32px rgba(43, 93, 77, 0.08);
   }

   .pipeline-zones {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 0.25rem;
      margin-bottom: 0.55rem;
   }

   .zone-label {
      font-family: var(--font-display);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 0.22rem 0.55rem;
      border-radius: 6px;
      text-align: center;
   }

   .zone-edge {
      background: rgba(88, 129, 87, 0.2);
      color: var(--ink-1);
   }

   .zone-cloud {
      background: rgba(165, 184, 131, 0.3);
      color: var(--ink-1);
   }

   .pipeline {
      list-style: none;
      margin: 0;
      padding: 0 0 0.25rem;
      display: flex;
      align-items: stretch;
      gap: 0.3rem;
      flex-wrap: nowrap;
      overflow-x: auto;
   }

   .stage {
      position: relative;
      flex: 1 1 0;
      min-width: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.1rem 0.65rem 0.8rem;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.94);
      border: 1px solid rgba(88, 129, 87, 0.22);
      box-shadow: 0 6px 14px rgba(43, 93, 77, 0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
   }

   .stage:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(43, 93, 77, 0.1);
   }

   .stage-cloud {
      background: linear-gradient(
         160deg,
         rgba(255, 255, 255, 0.95) 0%,
         rgba(212, 228, 178, 0.55) 100%
      );
      border-color: rgba(165, 184, 131, 0.45);
   }

   .stage-num {
      position: absolute;
      top: 0.4rem;
      left: 0.55rem;
      font-family: var(--font-display);
      font-size: 0.66rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--ink-4);
   }

   .stage-icon {
      display: grid;
      place-items: center;
      width: 38px;
      height: 38px;
      border-radius: 11px;
      background: rgba(88, 129, 87, 0.16);
      color: var(--ink-1);
      margin-bottom: 0.45rem;
   }

   .stage-cloud .stage-icon {
      background: rgba(165, 184, 131, 0.38);
   }

   .stage-label {
      font-family: var(--font-display);
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--ink-1);
   }

   .stage-detail {
      margin-top: 0.22rem;
      font-size: 0.72rem;
      line-height: 1.4;
      color: var(--ink-4);
   }

   .stage-arrow {
      flex: 0 0 auto;
      align-self: center;
      color: rgba(43, 93, 77, 0.4);
   }

   /* ---------- Pipeline rail (stage breakdown) ---------- */
   .rail {
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
   }

   .rail::before {
      content: "";
      position: absolute;
      top: 1.2rem;
      bottom: 1.2rem;
      left: 1.1rem;
      width: 2px;
      background: linear-gradient(
         to bottom,
         rgba(88, 129, 87, 0.3) 0%,
         rgba(88, 129, 87, 0.08) 100%
      );
   }

   .rail-row {
      position: relative;
      display: grid;
      grid-template-columns: 2.4rem 1fr;
      gap: 0.85rem;
      padding: 0.4rem 0;
   }

   .rail-marker {
      display: flex;
      justify-content: center;
      padding-top: 0.1rem;
   }

   .rail-dot {
      display: inline-grid;
      place-items: center;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 999px;
      background: #ffffff;
      border: 2px solid var(--edge);
      color: var(--edge-strong);
      font-family: var(--font-display);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      box-shadow: 0 4px 10px rgba(43, 93, 77, 0.08);
   }

   .rail-body p {
      margin: 0.1rem 0 0;
      color: #2f4f43;
      line-height: 1.55;
      max-width: 64ch;
   }

   .rail-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-3);
   }

   /* ---------- Icon list (contributions + future) ---------- */
   .icon-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.55rem;
      max-width: 64ch;
   }

   .icon-list li {
      display: grid;
      grid-template-columns: 1.5rem 1fr;
      gap: 0.75rem;
      align-items: start;
      color: #2f4f43;
      line-height: 1.55;
   }

   .icon-list-mark {
      display: inline-grid;
      place-items: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 999px;
      background: var(--edge-soft);
      color: var(--edge-strong);
      margin-top: 0.15rem;
   }

   .icon-list-mark-soft {
      background: rgba(165, 184, 131, 0.3);
      color: var(--ink-1);
   }

   /* ---------- Challenges ---------- */
   .challenge-grid {
      display: grid;
      gap: 0.85rem;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
   }

   .challenge-card {
      padding: 1.05rem 1.1rem 1.15rem;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.82);
      border: 1px solid var(--rule);
      box-shadow: 0 8px 22px rgba(43, 93, 77, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
   }

   .challenge-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 32px rgba(43, 93, 77, 0.08);
   }

   .challenge-head {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      margin-bottom: 0.75rem;
   }

   .challenge-icon {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border-radius: 9px;
      background: var(--edge-soft);
      color: var(--edge-strong);
   }

   .pao {
      display: grid;
      gap: 0.5rem;
   }

   .pao-row {
      display: grid;
      grid-template-columns: 5.25rem 1fr;
      gap: 0.65rem;
      align-items: start;
   }

   .pao-tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.18rem 0.5rem;
      border-radius: 999px;
      font-size: 0.64rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      height: fit-content;
      margin-top: 0.1rem;
   }

   .pao-problem .pao-tag {
      background: rgba(198, 93, 74, 0.14);
      color: #8a3d2c;
   }

   .pao-approach .pao-tag {
      background: rgba(180, 140, 50, 0.16);
      color: #7a5a14;
   }

   .pao-outcome .pao-tag {
      background: rgba(88, 129, 87, 0.2);
      color: var(--edge-strong);
   }

   .pao-row p {
      margin: 0;
      color: #2f4f43;
      font-size: 0.92rem;
      line-height: 1.5;
   }

   /* ---------- Decisions (tight row list, no outer card) ---------- */
   .decision-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0;
      border-top: 1px solid var(--rule);
   }

   .decision-list li {
      display: grid;
      grid-template-columns: minmax(180px, 240px) auto 1fr;
      align-items: center;
      gap: 0.85rem;
      padding: 0.95rem 0.1rem;
      border-bottom: 1px solid var(--rule);
      transition: background 0.2s ease;
   }

   .decision-list li:hover {
      background: rgba(255, 255, 255, 0.45);
   }

   .decision-choice {
      font-family: var(--font-display);
      font-weight: 700;
      color: var(--ink-1);
      letter-spacing: -0.005em;
   }

   .decision-arrow {
      color: rgba(43, 93, 77, 0.4);
   }

   .decision-reasoning {
      color: #2f4f43;
      line-height: 1.5;
      font-size: 0.94rem;
   }

   /* ---------- Proof shot (demo placed after Impact) ---------- */
   .proof {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
   }

   .proof .eyebrow {
      margin: 0;
   }

   /* ---------- Demo ---------- */
   .demo {
      margin: 0;
   }

   .demo-frame {
      position: relative;
      border-radius: 22px;
      overflow: hidden;
      background: #dbeee2;
      border: 1px solid rgba(88, 129, 87, 0.24);
      box-shadow:
         0 16px 36px rgba(43, 93, 77, 0.12),
         inset 0 0 0 1px rgba(255, 255, 255, 0.3);
   }

   .demo-frame img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
   }

   .demo-play {
      position: absolute;
      top: 0.85rem;
      right: 0.85rem;
      display: inline-grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: rgba(39, 69, 60, 0.88);
      color: #f3fff9;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 1;
   }

   .demo figcaption {
      margin-top: 0.65rem;
      color: var(--ink-4);
      font-size: 0.9rem;
      line-height: 1.5;
      max-width: 56ch;
   }

   /* ---------- Inline metric highlight ---------- */
   .inline-metric {
      color: var(--ink-1);
      font-weight: 700;
      background: rgba(165, 184, 131, 0.28);
      padding: 0 0.28rem;
      border-radius: 6px;
   }

   /* ---------- Footer ---------- */
   .detail-footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--rule);
   }

   /* ---------- Responsive ---------- */
   @media (max-width: 767px) {
      padding: 0.75rem 0.85rem 3rem;

      .detail-shell {
         gap: clamp(1.5rem, 5vw, 2.25rem);
      }

      h1 {
         font-size: clamp(2.1rem, 1.4rem + 4vw, 2.8rem);
      }

      .thesis-h {
         font-size: clamp(1.25rem, 1rem + 1.5vw, 1.6rem);
      }

      .meta-row {
         grid-template-columns: 5.5rem 1fr;
         gap: 0.75rem;
      }

      .impact-grid {
         grid-template-columns: 1fr;
         gap: 0.95rem;
      }

      .subnav {
         margin: 0 -6px;
      }

      .pipeline-zones {
         display: none;
      }

      .pipeline {
         scroll-snap-type: x mandatory;
         padding-bottom: 0.5rem;
      }

      .stage {
         min-width: 160px;
         scroll-snap-align: start;
      }

      .decision-list li {
         grid-template-columns: 1fr;
         gap: 0.3rem;
         padding: 0.75rem 0.1rem;
      }

      .decision-arrow {
         display: none;
      }

      .pao-row {
         grid-template-columns: 1fr;
         gap: 0.25rem;
      }

      .pao-tag {
         justify-self: flex-start;
      }

      .latency-row {
         grid-template-columns: 4rem 1fr 2.75rem;
         gap: 0.5rem;
      }
   }

   @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
         transition-duration: 0ms !important;
      }
   }
`},3004(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},3551(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},1604(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","brain","Brain",[["path",{d:"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8",key:"svg-0"}],["path",{d:"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8",key:"svg-1"}],["path",{d:"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5",key:"svg-2"}],["path",{d:"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0",key:"svg-3"}],["path",{d:"M6.5 16a3.5 3.5 0 0 1 0 -7h.5",key:"svg-4"}],["path",{d:"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10",key:"svg-5"}]])},273(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","broadcast","Broadcast",[["path",{d:"M18.364 19.364a9 9 0 1 0 -12.728 0",key:"svg-0"}],["path",{d:"M15.536 16.536a5 5 0 1 0 -7.072 0",key:"svg-1"}],["path",{d:"M11 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},389(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","camera","Camera",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},8057(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","chevron-right","ChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},4666(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","cpu","Cpu",[["path",{d:"M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12",key:"svg-0"}],["path",{d:"M9 9h6v6h-6l0 -6",key:"svg-1"}],["path",{d:"M3 10h2",key:"svg-2"}],["path",{d:"M3 14h2",key:"svg-3"}],["path",{d:"M10 3v2",key:"svg-4"}],["path",{d:"M14 3v2",key:"svg-5"}],["path",{d:"M21 10h-2",key:"svg-6"}],["path",{d:"M21 14h-2",key:"svg-7"}],["path",{d:"M14 21v-2",key:"svg-8"}],["path",{d:"M10 21v-2",key:"svg-9"}]])},4677(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","gauge","Gauge",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M13.41 10.59l2.59 -2.59",key:"svg-2"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-3"}]])},9653(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","player-play","PlayerPlay",[["path",{d:"M7 4v16l13 -8l-13 -8",key:"svg-0"}]])},3131(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","wifi","Wifi",[["path",{d:"M12 18l.01 0",key:"svg-0"}],["path",{d:"M9.172 15.172a4 4 0 0 1 5.656 0",key:"svg-1"}],["path",{d:"M6.343 12.343a8 8 0 0 1 11.314 0",key:"svg-2"}],["path",{d:"M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0",key:"svg-3"}]])}}]);
//# sourceMappingURL=859.9aed9913.chunk.js.map