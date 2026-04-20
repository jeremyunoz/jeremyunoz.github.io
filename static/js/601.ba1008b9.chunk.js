/*! For license information please see 601.ba1008b9.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[601],{5601(e,a,r){r.r(a),r.d(a,{default:()=>U});var i=r(5043),n=r(5847),s=r(403),t=r(184),o=r(389),l=r(4648);const d=(0,l.A)("outline","microphone","Microphone",[["path",{d:"M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5",key:"svg-0"}],["path",{d:"M5 10a7 7 0 0 0 14 0",key:"svg-1"}],["path",{d:"M8 21l8 0",key:"svg-2"}],["path",{d:"M12 17l0 4",key:"svg-3"}]]);var c=r(1604);const m=(0,l.A)("outline","activity","Activity",[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]]),p=(0,l.A)("outline","robot","Robot",[["path",{d:"M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4",key:"svg-0"}],["path",{d:"M12 2v2",key:"svg-1"}],["path",{d:"M9 12v9",key:"svg-2"}],["path",{d:"M15 12v9",key:"svg-3"}],["path",{d:"M5 16l4 -2",key:"svg-4"}],["path",{d:"M15 14l4 2",key:"svg-5"}],["path",{d:"M9 18h6",key:"svg-6"}],["path",{d:"M10 8v.01",key:"svg-7"}],["path",{d:"M14 8v.01",key:"svg-8"}]]),h=(0,l.A)("outline","volume","Volume",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M17.7 5a9 9 0 0 1 0 14",key:"svg-1"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-2"}]]);var g=r(4677),u=r(4666);const b=(0,l.A)("outline","bolt","Bolt",[["path",{d:"M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11",key:"svg-0"}]]);var f=r(3131),x=r(3004),v=r(9653);const y=(0,l.A)("outline","screen-share","ScreenShare",[["path",{d:"M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9",key:"svg-0"}],["path",{d:"M7 20l10 0",key:"svg-1"}],["path",{d:"M9 16l0 4",key:"svg-2"}],["path",{d:"M15 16l0 4",key:"svg-3"}],["path",{d:"M17 4h4v4",key:"svg-4"}],["path",{d:"M16 9l5 -5",key:"svg-5"}]]),k=(0,l.A)("outline","arrow-down","ArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]);var w=r(273);const j=(0,l.A)("outline","timeline","Timeline",[["path",{d:"M4 16l6 -7l5 5l5 -6",key:"svg-0"}],["path",{d:"M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M3 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}]]);var N=r(6960),M=r(8057),A=r(3551),S=r(4234),z=r(2653),T=r(579);const P=e=>{if("string"!==typeof e)return e;return e.split(/(\*\*[^*]+\*\*)/g).map((e,a)=>{const r=e.match(/^\*\*([^*]+)\*\*$/);return r?(0,T.jsx)("strong",{className:"inline-metric",children:r[1]},a):(0,T.jsx)(i.Fragment,{children:e},a)})},C=[{label:"Role",value:"Firmware Lead \xb7 Embedded Systems & Real-Time Interaction"},{label:"Team",value:"Senior Design Capstone \xb7 UCI"},{label:"Timeline",value:"Sep 2025 \u2014 Mar 2026"},{label:"Recognition",value:"Industry Advisory Board Award \xb7 Annual Design Review"},{label:"Stack",value:"ESP32 / ESP32-P4 \xb7 FreeRTOS \xb7 ESP-IDF \xb7 Pi 5 \xb7 IMX500 \xb7 MQTT / WebSocket"}],I=[{value:"~10 FPS",label:"Real-time vision inference",note:"IMX500 on-sensor"},{value:"~95%",label:"Voice command accuracy",note:"STT \u2192 LLM \u2192 TTS pipeline"},{value:"Concurrent",label:"Multi-task execution",note:"Sensing + timers + interaction"}],E=[{icon:o.A,label:"Vision (IMX500)",detail:"On-sensor inference frames"},{icon:d,label:"Speech Processing",detail:"STT \xb7 LLM \xb7 TTS"},{icon:c.A,label:"Wellness Logic",detail:"Orchestration + reminders"}],R=[{icon:m,label:"Sensor Control",detail:"PIR fallback presence"},{icon:p,label:"Motion",detail:"Servo actuation"},{icon:h,label:"Audio I/O + OLED",detail:"Mic, speaker, UI output"}],D=[{label:"Vision Detection",body:"IMX500 runs on-sensor inference at ~10 FPS, streaming presence signals into the wellness logic without burdening the Pi's CPU."},{label:"Presence Detection",body:"Vision output is fused with a PIR sensor fallback on the ESP32, so the system stays responsive when lighting or framing degrades."},{label:"Wellness Timer",body:"An inactivity timer runs alongside the interaction loop \u2014 detection, reminders, and speech do not block each other."},{label:"Reminder Logic",body:"Threshold crossings trigger reminder prompts routed to the ESP32 for speaker playback and OLED status."},{label:"Voice Interaction",body:"Speech moves through STT \u2192 LLM \u2192 TTS on the Pi, streamed over WebSocket to the ESP32 as non-blocking audio."}],L=["Implemented ESP32 firmware in C (ESP-IDF) for sensing, motion control, and audio handling with FreeRTOS task scheduling.","Designed MQTT-based communication between the robot module and the Pi 5 edge processor for reliable event exchange.","Developed the real-time interaction pipeline integrating STT, LLM, and TTS with WebSocket audio streaming.","Led system-level integration across sensing, AI inference, and robotic actuation \u2014 owning the boundary between firmware and edge compute."],O=[{title:"Latency vs Stability (Vision)",icon:g.A,problem:"A CPU-based YOLO pipeline on the Pi 5 introduced latency variance and thermal pressure under sustained runtime.",approach:"Benchmarked IMX500 on-sensor inference against CPU YOLO across latency, thermal behavior, and CPU headroom.",outcome:"Selected IMX500 for stable ~100 ms inference latency and lower thermal variance, freeing CPU cycles for speech and orchestration."},{title:"Concurrent System Execution",icon:u.A,problem:"A blocking speech pipeline stalled the wellness timer and presence detection, breaking the concurrent interaction loop.",approach:"Decomposed the runtime into FreeRTOS tasks with bounded queues, kept the speech path non-blocking, and isolated timer ticks on their own task.",outcome:"Timers, interaction, and detection run simultaneously without starving each other under sustained load."},{title:"Power Stability",icon:b,problem:"Servo inrush current caused voltage drops on shared rails, resetting the ESP32 mid-motion.",approach:"Added a dedicated buck converter for the servo rail plus local decoupling to absorb transients.",outcome:"Stable ESP32 operation during servo actuation \u2014 no more brownouts or watchdog resets under load."},{title:"Distributed Communication",icon:f.A,problem:"Wi-Fi variance in the deployment environment disrupted MQTT message delivery between the robot and the Pi.",approach:"Tuned MQTT QoS, added retry + resubscribe logic on reconnect, and separated control traffic from streaming audio on WebSocket.",outcome:"Reliable robot \u2194 edge message exchange even under degraded network conditions during review demos."}],B=[{choice:"Distributed edge architecture",reasoning:"Split compute so the Pi 5 handles AI and orchestration while the ESP32 owns real-time control and actuation. Each side runs at the latency envelope it is built for."},{choice:"On-sensor inference (IMX500)",reasoning:"Offloading detection to the camera sensor removes it from the CPU path entirely, improving thermal stability and freeing cycles for speech and orchestration."},{choice:"MQTT + WebSocket",reasoning:"MQTT carries system-level events and robot commands with low overhead; WebSocket handles real-time audio streaming where ordered, low-latency delivery matters."}],W=["Autonomous navigation and obstacle avoidance on the robot module.","Wireless charging dock for unattended long-running deployments.","Improved power management across servo and compute rails.","Modular sensing architecture so new sensors can be added without firmware rework."],F=[{id:"architecture",num:"01",label:"Architecture"},{id:"pipeline",num:"02",label:"Pipeline"},{id:"contributions",num:"03",label:"Contributions"},{id:"challenges",num:"04",label:"Challenges"},{id:"decisions",num:"05",label:"Decisions"},{id:"future",num:"06",label:"Next"}];function V(e){let{className:a="back-link"}=e;const r=(0,n.Zp)();return(0,T.jsxs)("a",{className:a,href:"/#/",onClick:e=>{e.preventDefault(),window.history.length>1?r(-1):r("/",{state:{scrollTo:"projects"}})},children:[(0,T.jsx)(x.A,{size:16,stroke:2,"aria-hidden":"true"}),(0,T.jsx)("span",{children:"Back to Projects"})]})}function Q(e){let{title:a,icon:r,zoneClass:i,nodes:n}=e;return(0,T.jsxs)("div",{className:`arch-tier ${i}`,children:[(0,T.jsxs)("header",{className:"arch-tier-head",children:[(0,T.jsx)("span",{className:"arch-tier-icon","aria-hidden":"true",children:(0,T.jsx)(r,{size:18,stroke:1.8})}),(0,T.jsx)("span",{className:"arch-tier-title",children:a})]}),(0,T.jsx)("ol",{className:"arch-nodes",children:n.map((e,a)=>{const r=e.icon;return(0,T.jsxs)("li",{className:"arch-node",children:[(0,T.jsx)("div",{className:"arch-node-num","aria-hidden":"true",children:String(a+1).padStart(2,"0")}),(0,T.jsx)("div",{className:"arch-node-icon","aria-hidden":"true",children:(0,T.jsx)(r,{size:22,stroke:1.7})}),(0,T.jsx)("div",{className:"arch-node-label",children:e.label}),(0,T.jsx)("div",{className:"arch-node-detail",children:e.detail})]},e.label)})})]})}function U(){(0,z.C)({title:"AuraBot \xb7 System Design",description:"AuraBot deep dive: distributed edge-AI robotics system with ESP32 real-time firmware, Pi 5 vision/speech orchestration, ~10 FPS inference, and ~95% voice command accuracy."});const e=function(e){const[a,r]=(0,i.useState)(e[0]);return(0,i.useEffect)(()=>{const a=e.map(e=>document.getElementById(e)).filter(Boolean);if(!a.length)return;const i=new IntersectionObserver(e=>{const a=e.filter(e=>e.isIntersecting).sort((e,a)=>e.boundingClientRect.top-a.boundingClientRect.top);a[0]&&r(a[0].target.id)},{rootMargin:"-20% 0px -65% 0px",threshold:0});return a.forEach(e=>i.observe(e)),()=>i.disconnect()},[e]),a}((0,i.useMemo)(()=>F.map(e=>e.id),[])),a=(0,i.useRef)(null);return(0,T.jsx)(S.A,{children:(0,T.jsx)(X,{className:"visible",children:(0,T.jsxs)("div",{className:"detail-shell",children:[(0,T.jsx)("div",{className:"topbar",children:(0,T.jsx)(V,{})}),(0,T.jsxs)("header",{className:"overview",id:"top",children:[(0,T.jsxs)("p",{className:"label",children:[(0,T.jsx)("span",{className:"label-dot","aria-hidden":"true"}),"Senior Design Capstone \xb7 2025 \u2014 2026"]}),(0,T.jsx)("h1",{id:"aurabot-title",children:"AuraBot"}),(0,T.jsx)("p",{className:"thesis",children:"A distributed edge-AI robotics system for presence-aware wellness monitoring and multimodal human\u2013robot interaction."}),(0,T.jsx)("dl",{className:"meta-table",children:C.map(e=>(0,T.jsxs)("div",{className:"meta-row",children:[(0,T.jsx)("dt",{children:e.label}),(0,T.jsx)("dd",{children:e.value})]},e.label))}),(0,T.jsxs)("div",{className:"overview-ctas",children:[(0,T.jsxs)("a",{className:"cta cta-primary",href:"https://github.com/jeremyunoz/AuraBot",target:"_blank",rel:"noopener noreferrer",children:[(0,T.jsx)(t.hL4,{"aria-hidden":"true"}),(0,T.jsx)("span",{children:"View Code"})]}),(0,T.jsxs)("a",{className:"cta",href:"https://projects.eng.uci.edu/projects/2025-2026/aurabot-edge-ai-desk-wellness-companion",target:"_blank",rel:"noopener noreferrer",children:[(0,T.jsx)(t.EQc,{"aria-hidden":"true"}),(0,T.jsx)("span",{children:"UCI Project Page"})]})]})]}),(0,T.jsxs)("section",{className:"impact","aria-labelledby":"impact-label",children:[(0,T.jsx)("p",{className:"eyebrow",id:"impact-label",children:"Impact"}),(0,T.jsx)("h2",{className:"thesis-h",children:"Real-time inference, robust voice interaction, and concurrent execution \u2014 running on edge hardware."}),(0,T.jsx)("div",{className:"impact-grid",children:I.map(e=>(0,T.jsxs)("div",{className:"impact-stat",children:[(0,T.jsx)("div",{className:"impact-value",children:e.value}),(0,T.jsx)("div",{className:"impact-label",children:e.label}),(0,T.jsx)("div",{className:"impact-note",children:e.note})]},e.label))})]}),(0,T.jsxs)("section",{className:"proof","aria-label":"System in action",children:[(0,T.jsx)("p",{className:"eyebrow",children:(0,T.jsx)("span",{children:"In action"})}),(0,T.jsxs)("figure",{className:"demo",children:[(0,T.jsxs)("div",{className:"demo-frame",children:[(0,T.jsx)("span",{className:"demo-play","aria-hidden":"true",children:(0,T.jsx)(v.A,{size:20,stroke:2})}),(0,T.jsx)("img",{src:"/assets/aurabot_demo.png",alt:"AuraBot prototype running the distributed sensing and interaction loop during senior design review",loading:"lazy",decoding:"async"})]}),(0,T.jsx)("figcaption",{children:"AuraBot prototype running the distributed sensing + interaction loop during senior design review."})]})]}),(0,T.jsx)("nav",{ref:a,className:"subnav","aria-label":"Sections on this page",children:(0,T.jsx)("div",{className:"subnav-inner",children:F.map(r=>(0,T.jsxs)("a",{href:`#${r.id}`,onClick:e=>((e,r)=>{var i,n,s,t;e.preventDefault();const o=document.getElementById(r);if(!o)return;const l=null!==(i=null===(n=a.current)||void 0===n?void 0:n.offsetHeight)&&void 0!==i?i:0,d=window.scrollY+o.getBoundingClientRect().top-l-12,c=null===(s=(t=window).matchMedia)||void 0===s?void 0:s.call(t,"(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:d,behavior:c?"auto":"smooth"})})(e,r.id),className:"subnav-chip "+(e===r.id?"is-active":""),"aria-current":e===r.id?"true":void 0,children:[(0,T.jsx)("span",{className:"subnav-num",children:r.num}),(0,T.jsx)("span",{className:"subnav-label",children:r.label})]},r.id))})}),(0,T.jsxs)("section",{className:"s",id:"architecture","aria-labelledby":"arch-title",children:[(0,T.jsxs)("header",{className:"s-head",children:[(0,T.jsxs)("p",{className:"eyebrow",children:[(0,T.jsx)("span",{className:"eyebrow-num",children:"01"}),(0,T.jsx)("span",{children:"Architecture"})]}),(0,T.jsx)("h2",{id:"arch-title",className:"thesis-h",children:"AI and orchestration on the edge; real-time control on the robot."})]}),(0,T.jsxs)("div",{className:"arch-card",children:[(0,T.jsx)(Q,{title:"Edge Processor \u2014 Raspberry Pi 5",icon:y,zoneClass:"arch-tier-edge",nodes:E}),(0,T.jsxs)("div",{className:"arch-bridge","aria-hidden":"true",children:[(0,T.jsx)(k,{size:22,stroke:2.2}),(0,T.jsxs)("span",{className:"arch-bridge-label",children:[(0,T.jsx)(w.A,{size:14,stroke:2,"aria-hidden":"true"}),(0,T.jsx)("span",{children:"MQTT / WebSocket"})]}),(0,T.jsx)(k,{size:22,stroke:2.2})]}),(0,T.jsx)(Q,{title:"Robot Module \u2014 ESP32",icon:p,zoneClass:"arch-tier-robot",nodes:R})]}),(0,T.jsx)("p",{className:"caption",children:"System follows a distributed edge-computing architecture separating AI processing and real-time control."})]}),(0,T.jsxs)("section",{className:"s",id:"pipeline","aria-labelledby":"pipeline-title",children:[(0,T.jsxs)("header",{className:"s-head",children:[(0,T.jsxs)("p",{className:"eyebrow",children:[(0,T.jsx)("span",{className:"eyebrow-num",children:"02"}),(0,T.jsx)("span",{children:"Pipeline"})]}),(0,T.jsx)("h2",{id:"pipeline-title",className:"thesis-h",children:"The runtime loop, from detection to speech \u2014 without blocking."})]}),(0,T.jsx)("ol",{className:"rail",children:D.map((e,a)=>(0,T.jsxs)("li",{className:"rail-row",children:[(0,T.jsx)("div",{className:"rail-marker","aria-hidden":"true",children:(0,T.jsx)("span",{className:"rail-dot",children:String(a+1).padStart(2,"0")})}),(0,T.jsxs)("div",{className:"rail-body",children:[(0,T.jsx)("h3",{className:"rail-label",children:e.label}),(0,T.jsx)("p",{children:e.body})]})]},e.label))}),(0,T.jsxs)("p",{className:"caption",children:[(0,T.jsx)(j,{size:14,stroke:2,"aria-hidden":"true",style:{marginRight:"0.4rem",verticalAlign:"-2px"}}),"Timers, speech, and monitoring tasks run in parallel \u2014 the interaction loop never blocks the sensing pipeline."]})]}),(0,T.jsxs)("section",{className:"s",id:"contributions","aria-labelledby":"contrib-title",children:[(0,T.jsxs)("header",{className:"s-head",children:[(0,T.jsxs)("p",{className:"eyebrow",children:[(0,T.jsx)("span",{className:"eyebrow-num",children:"03"}),(0,T.jsx)("span",{children:"Contributions"})]}),(0,T.jsx)("h2",{id:"contrib-title",className:"thesis-h",children:"I owned the firmware, the communication layer, and the integration seam."})]}),(0,T.jsx)("ul",{className:"icon-list",children:L.map(e=>(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:"icon-list-mark","aria-hidden":"true",children:(0,T.jsx)(N.A,{size:14,stroke:2.5})}),(0,T.jsx)("span",{children:P(e)})]},e))})]}),(0,T.jsxs)("section",{className:"s",id:"challenges","aria-labelledby":"challenges-title",children:[(0,T.jsxs)("header",{className:"s-head",children:[(0,T.jsxs)("p",{className:"eyebrow",children:[(0,T.jsx)("span",{className:"eyebrow-num",children:"04"}),(0,T.jsx)("span",{children:"Challenges"})]}),(0,T.jsx)("h2",{id:"challenges-title",className:"thesis-h",children:"Four places engineering judgement actually mattered."})]}),(0,T.jsx)("div",{className:"challenge-grid",children:O.map(e=>{const a=e.icon;return(0,T.jsxs)("article",{className:"challenge-card",children:[(0,T.jsxs)("header",{className:"challenge-head",children:[(0,T.jsx)("span",{className:"challenge-icon","aria-hidden":"true",children:(0,T.jsx)(a,{size:18,stroke:1.8})}),(0,T.jsx)("h3",{children:e.title})]}),(0,T.jsxs)("div",{className:"pao",children:[(0,T.jsxs)("div",{className:"pao-row pao-problem",children:[(0,T.jsx)("span",{className:"pao-tag",children:"Problem"}),(0,T.jsx)("p",{children:e.problem})]}),(0,T.jsxs)("div",{className:"pao-row pao-approach",children:[(0,T.jsx)("span",{className:"pao-tag",children:"Approach"}),(0,T.jsx)("p",{children:e.approach})]}),(0,T.jsxs)("div",{className:"pao-row pao-outcome",children:[(0,T.jsx)("span",{className:"pao-tag",children:"Outcome"}),(0,T.jsx)("p",{children:e.outcome})]})]})]},e.title)})})]}),(0,T.jsxs)("section",{className:"s",id:"decisions","aria-labelledby":"design-title",children:[(0,T.jsxs)("header",{className:"s-head",children:[(0,T.jsxs)("p",{className:"eyebrow",children:[(0,T.jsx)("span",{className:"eyebrow-num",children:"05"}),(0,T.jsx)("span",{children:"Decisions"})]}),(0,T.jsx)("h2",{id:"design-title",className:"thesis-h",children:"Three architectural tradeoffs and the reasoning behind them."})]}),(0,T.jsx)("ul",{className:"decision-list",children:B.map(e=>(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:"decision-choice",children:e.choice}),(0,T.jsx)(M.A,{className:"decision-arrow",size:16,stroke:2.2,"aria-hidden":"true"}),(0,T.jsx)("span",{className:"decision-reasoning",children:e.reasoning})]},e.choice))})]}),(0,T.jsxs)("section",{className:"s",id:"future","aria-labelledby":"future-title",children:[(0,T.jsxs)("header",{className:"s-head",children:[(0,T.jsxs)("p",{className:"eyebrow",children:[(0,T.jsx)("span",{className:"eyebrow-num",children:"06"}),(0,T.jsx)("span",{children:"What's Next"})]}),(0,T.jsx)("h2",{id:"future-title",className:"thesis-h",children:"Where this system goes from here."})]}),(0,T.jsx)("ul",{className:"icon-list",children:W.map(e=>(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:"icon-list-mark icon-list-mark-soft","aria-hidden":"true",children:(0,T.jsx)(A.A,{size:14,stroke:2.2})}),(0,T.jsx)("span",{children:e})]},e))})]}),(0,T.jsxs)("footer",{className:"detail-footer",children:[(0,T.jsx)(V,{}),(0,T.jsxs)(n.N_,{to:"/",state:{scrollTo:"projects"},className:"cta cta-primary",children:[(0,T.jsx)("span",{children:"See other projects"}),(0,T.jsx)(A.A,{size:16,stroke:2,"aria-hidden":"true"})]})]})]})})})}const X=s.Ay.section`
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

   /* ---------- IMPACT ---------- */
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

   /* ---------- Content sections ---------- */
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

   /* ---------- Architecture (two-tier distributed diagram) ---------- */
   .arch-card {
      padding: 1.2rem 1.15rem 1rem;
      border-radius: 20px;
      background: linear-gradient(
         145deg,
         rgba(255, 255, 255, 0.78) 0%,
         rgba(229, 244, 235, 0.72) 100%
      );
      border: 1px solid rgba(88, 129, 87, 0.2);
      box-shadow: 0 14px 32px rgba(43, 93, 77, 0.08);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
   }

   .arch-tier {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
      padding: 0.85rem 0.85rem 0.9rem;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(88, 129, 87, 0.2);
   }

   .arch-tier-edge {
      background: linear-gradient(
         160deg,
         rgba(255, 255, 255, 0.92) 0%,
         rgba(212, 228, 178, 0.48) 100%
      );
      border-color: rgba(165, 184, 131, 0.45);
   }

   .arch-tier-robot {
      background: rgba(255, 255, 255, 0.92);
      border-color: rgba(88, 129, 87, 0.28);
   }

   .arch-tier-head {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      font-family: var(--font-display);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--ink-1);
   }

   .arch-tier-icon {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: var(--edge-soft);
      color: var(--edge-strong);
   }

   .arch-tier-title {
      line-height: 1.2;
   }

   .arch-nodes {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.5rem;
   }

   .arch-node {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem 0.6rem 0.75rem;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid rgba(88, 129, 87, 0.22);
      box-shadow: 0 4px 12px rgba(43, 93, 77, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
   }

   .arch-node:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(43, 93, 77, 0.09);
   }

   .arch-node-num {
      position: absolute;
      top: 0.35rem;
      left: 0.5rem;
      font-family: var(--font-display);
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--ink-4);
   }

   .arch-node-icon {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(88, 129, 87, 0.16);
      color: var(--ink-1);
      margin-bottom: 0.4rem;
   }

   .arch-tier-edge .arch-node-icon {
      background: rgba(165, 184, 131, 0.38);
   }

   .arch-node-label {
      font-family: var(--font-display);
      font-size: 0.86rem;
      font-weight: 700;
      color: var(--ink-1);
      line-height: 1.2;
   }

   .arch-node-detail {
      margin-top: 0.2rem;
      font-size: 0.7rem;
      line-height: 1.4;
      color: var(--ink-4);
   }

   .arch-bridge {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      padding: 0.1rem 0;
      color: rgba(43, 93, 77, 0.5);
   }

   .arch-bridge-label {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      background: rgba(39, 69, 60, 0.88);
      color: #f3fff9;
      font-family: var(--font-display);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      box-shadow: 0 6px 14px rgba(43, 93, 77, 0.18);
   }

   /* ---------- Pipeline rail ---------- */
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

   /* ---------- Icon list ---------- */
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

   /* ---------- Decisions ---------- */
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

   /* ---------- Proof shot ---------- */
   .proof {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
   }

   .proof .eyebrow {
      margin: 0;
   }

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

      .arch-nodes {
         grid-template-columns: 1fr;
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
   }

   @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
         transition-duration: 0ms !important;
      }
   }
`},3004(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},3551(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},1604(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","brain","Brain",[["path",{d:"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8",key:"svg-0"}],["path",{d:"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8",key:"svg-1"}],["path",{d:"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5",key:"svg-2"}],["path",{d:"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0",key:"svg-3"}],["path",{d:"M6.5 16a3.5 3.5 0 0 1 0 -7h.5",key:"svg-4"}],["path",{d:"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10",key:"svg-5"}]])},273(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","broadcast","Broadcast",[["path",{d:"M18.364 19.364a9 9 0 1 0 -12.728 0",key:"svg-0"}],["path",{d:"M15.536 16.536a5 5 0 1 0 -7.072 0",key:"svg-1"}],["path",{d:"M11 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},389(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","camera","Camera",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},8057(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","chevron-right","ChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},4677(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","gauge","Gauge",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M13.41 10.59l2.59 -2.59",key:"svg-2"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-3"}]])},9653(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","player-play","PlayerPlay",[["path",{d:"M7 4v16l13 -8l-13 -8",key:"svg-0"}]])},3131(e,a,r){r.d(a,{A:()=>i});const i=(0,r(4648).A)("outline","wifi","Wifi",[["path",{d:"M12 18l.01 0",key:"svg-0"}],["path",{d:"M9.172 15.172a4 4 0 0 1 5.656 0",key:"svg-1"}],["path",{d:"M6.343 12.343a8 8 0 0 1 11.314 0",key:"svg-2"}],["path",{d:"M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0",key:"svg-3"}]])}}]);
//# sourceMappingURL=601.ba1008b9.chunk.js.map