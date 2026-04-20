import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
   IconArrowLeft,
   IconArrowRight,
   IconCamera,
   IconAdjustmentsHorizontal,
   IconBrain,
   IconBroadcast,
   IconDeviceMobile,
   IconCheck,
   IconChevronRight,
   IconGauge,
   IconCpu,
   IconWifi,
   IconPlayerPlay,
} from "@tabler/icons-react";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../lib/usePageMeta";

const renderBold = (text) => {
   if (typeof text !== "string") return text;
   const parts = text.split(/(\*\*[^*]+\*\*)/g);
   return parts.map((part, i) => {
      const match = part.match(/^\*\*([^*]+)\*\*$/);
      if (match) {
         return (
            <strong key={i} className="inline-metric">
               {match[1]}
            </strong>
         );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
   });
};

const META = [
   {
      label: "Role",
      value: "Embedded Systems Lead · Edge AI Pipeline",
   },
   {
      label: "Team",
      value: "6 engineers · BRDG Innovation Challenge 2025",
   },
   {
      label: "Timeline",
      value: "20 weeks · May — Oct 2025 · Shipped",
   },
   {
      label: "Stack",
      value: "Raspberry Pi 5 · TensorFlow Lite · YOLO · MQTT",
   },
];

const IMPACT_STATS = [
   {
      value: "~93%",
      label: "Classification accuracy",
      note: "YOLO · TFLite INT8",
   },
   {
      value: "~25%",
      label: "End-to-end latency reduction",
      note: "Baseline → tuned pipeline",
   },
   {
      value: "20 wks",
      label: "Delivery cycle",
      note: "6-engineer team, shipped",
   },
];

const PIPELINE_STAGES = [
   {
      icon: IconCamera,
      label: "Camera",
      detail: "Pi 5 + CSI sensor captures frames",
      zone: "edge",
   },
   {
      icon: IconAdjustmentsHorizontal,
      label: "Preprocess",
      detail: "Resize, normalize, color convert",
      zone: "edge",
   },
   {
      icon: IconBrain,
      label: "TFLite",
      detail: "Quantized on-device inference",
      zone: "edge",
   },
   {
      icon: IconBroadcast,
      label: "MQTT",
      detail: "QoS-tuned event publish",
      zone: "cloud",
   },
   {
      icon: IconDeviceMobile,
      label: "Mobile App",
      detail: "Firebase-synced UI updates",
      zone: "cloud",
   },
];

const PIPELINE_BREAKDOWN = [
   {
      label: "Input",
      body: "Camera capture on Raspberry Pi 5 with a CSI sensor streams frames into the pipeline at a steady cadence.",
   },
   {
      label: "Processing",
      body: "Frames are resized, normalized, and color-adjusted to match the model's expected input tensor.",
   },
   {
      label: "Inference",
      body: "A quantized TensorFlow Lite model classifies recyclables entirely on-device — no cloud round-trip required.",
   },
   {
      label: "Communication",
      body: "Results are published over MQTT with Firebase as the cloud backbone for authenticated state sync.",
   },
   {
      label: "Output",
      body: "The mobile app subscribes to classification events and renders them with sub-second latency.",
   },
];

const CONTRIBUTIONS = [
   "Implemented the on-device inference pipeline in Python on Raspberry Pi 5, wiring camera capture to TFLite output.",
   "Optimized preprocessing and model quantization to cut end-to-end latency ~25%.",
   "Designed the MQTT communication layer and Firebase sync for device → cloud → mobile delivery.",
   "Led integration across a 6-engineer team, owning the boundary between firmware, ML, and the mobile client.",
];

const CHALLENGES = [
   {
      title: "Latency Optimization",
      icon: IconGauge,
      problem:
         "Initial inference loop left the app feeling laggy — frames were being captured faster than the model could process them.",
      approach:
         "Profiled each pipeline stage, quantized the model to INT8, and reduced preprocessing allocations per frame.",
      outcome: "Cut end-to-end latency ~25% and stabilized throughput on-device.",
   },
   {
      title: "Resource Constraints",
      icon: IconCpu,
      problem:
         "The Raspberry Pi 5 is capable, but running capture + inference + networking simultaneously pushed memory and CPU limits.",
      approach:
         "Bounded buffers, reused tensors, and pinned the inference thread so it couldn't be starved by I/O work.",
      outcome:
         "Sustained real-time classification without thermal throttling or dropped frames under continuous runtime.",
   },
   {
      title: "Communication Reliability",
      icon: IconWifi,
      problem:
         "Wi-Fi variance in the deployment environment caused intermittent message loss between device and app.",
      approach:
         "Tuned MQTT QoS, added lightweight retry + dedupe on the subscriber, and fronted with Firebase for eventual consistency.",
      outcome:
         "Stable end-to-end delivery even under degraded network conditions during the BRDG demos.",
   },
];

const DESIGN_DECISIONS = [
   {
      choice: "TensorFlow Lite vs full model",
      reasoning:
         "TFLite's quantized graph fits the Pi's memory envelope and keeps inference on-device, which is what this product needs to feel instant.",
   },
   {
      choice: "MQTT vs HTTP",
      reasoning:
         "MQTT's pub/sub model and low per-message overhead are a natural fit for IoT-style event streams. HTTP would have added connection churn per classification.",
   },
   {
      choice: "Edge vs cloud inference",
      reasoning:
         "Running the model on-device removes a network hop, keeps classification responsive when connectivity is weak, and avoids shipping camera frames off the device.",
   },
];

const FUTURE = [
   "Upgrade from classification to multi-object detection for cluttered bin scenes.",
   "Distill or prune the model for higher FPS on the same hardware budget.",
   "Add a local offline-inference fallback so the system degrades gracefully without network.",
];

const SECTIONS = [
   { id: "architecture", num: "01", label: "Architecture" },
   { id: "pipeline", num: "02", label: "Pipeline" },
   { id: "contributions", num: "03", label: "Contributions" },
   { id: "challenges", num: "04", label: "Challenges" },
   { id: "decisions", num: "05", label: "Decisions" },
   { id: "future", num: "06", label: "Next" },
];

function BackToProjects({ className = "back-link" }) {
   const navigate = useNavigate();
   const handleClick = (e) => {
      e.preventDefault();
      if (window.history.length > 1) {
         navigate(-1);
      } else {
         navigate("/", { state: { scrollTo: "projects" } });
      }
   };
   return (
      <a className={className} href="/#/" onClick={handleClick}>
         <IconArrowLeft size={16} stroke={2} aria-hidden="true" />
         <span>Back to Projects</span>
      </a>
   );
}

function useActiveSection(ids) {
   const [active, setActive] = useState(ids[0]);
   useEffect(() => {
      const targets = ids
         .map((id) => document.getElementById(id))
         .filter(Boolean);
      if (!targets.length) return undefined;
      const observer = new IntersectionObserver(
         (entries) => {
            const visible = entries
               .filter((e) => e.isIntersecting)
               .sort(
                  (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
               );
            if (visible[0]) setActive(visible[0].target.id);
         },
         {
            rootMargin: "-20% 0px -65% 0px",
            threshold: 0,
         }
      );
      targets.forEach((t) => observer.observe(t));
      return () => observer.disconnect();
   }, [ids]);
   return active;
}

export default function BincredibleProjectPage() {
   usePageMeta({
      title: "Bincredible · System Design",
      description:
         "Bincredible deep dive: real-time edge AI pipeline for on-device recyclable classification with ~93% accuracy and ~25% reduced latency.",
   });

   const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
   const active = useActiveSection(ids);
   const navRef = useRef(null);

   const handleJump = (e, id) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      const navH = navRef.current?.offsetHeight ?? 0;
      const top =
         window.scrollY + el.getBoundingClientRect().top - navH - 12;
      const reduced = window.matchMedia?.(
         "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
   };

   return (
      <PageShell>
         <StyledDetail className="visible">
            <div className="detail-shell">
               <div className="topbar">
                  <BackToProjects />
               </div>

               {/* OVERVIEW / HERO — editorial, no card chrome */}
               <header className="overview" id="top">
                  <p className="label">
                     <span className="label-dot" aria-hidden="true" />
                     BRDG Innovation Challenge · 2025
                  </p>
                  <h1 id="bincredible-title">Bincredible</h1>
                  <p className="thesis">
                     A real-time edge AI system that runs recyclable
                     classification on-device and keeps the cloud out of the
                     hot path.
                  </p>

                  <dl className="meta-table">
                     {META.map((m) => (
                        <div className="meta-row" key={m.label}>
                           <dt>{m.label}</dt>
                           <dd>{m.value}</dd>
                        </div>
                     ))}
                  </dl>

                  <div className="overview-ctas">
                     <a
                        className="cta cta-primary"
                        href="https://github.com/jeremyunoz/bincredible-app"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaGithub aria-hidden="true" />
                        <span>View Code</span>
                     </a>
                     <a
                        className="cta"
                        href="https://github.com/jeremyunoz/bincredible-app#readme"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span>Live Demo</span>
                     </a>
                  </div>
               </header>

               {/* IMPACT — standalone giant numerals (Karthik-style) */}
               <section className="impact" aria-labelledby="impact-label">
                  <p className="eyebrow" id="impact-label">
                     Impact
                  </p>
                  <h2 className="thesis-h">
                     ~93% accuracy, ~25% latency reduction, shipped in 20 weeks
                     with a team of six.
                  </h2>
                  <div className="impact-grid">
                     {IMPACT_STATS.map((s) => (
                        <div className="impact-stat" key={s.label}>
                           <div className="impact-value">{s.value}</div>
                           <div className="impact-label">{s.label}</div>
                           <div className="impact-note">{s.note}</div>
                        </div>
                     ))}
                  </div>

                  <div
                     className="latency-bar"
                     role="img"
                     aria-label="Latency reduced by about twenty-five percent from baseline"
                  >
                     <div className="latency-row">
                        <span className="latency-label">Baseline</span>
                        <div className="latency-track">
                           <div
                              className="latency-fill latency-fill-base"
                              style={{ width: "100%" }}
                           />
                        </div>
                        <span className="latency-value">100%</span>
                     </div>
                     <div className="latency-row">
                        <span className="latency-label">Tuned</span>
                        <div className="latency-track">
                           <div
                              className="latency-fill latency-fill-tuned"
                              style={{ width: "75%" }}
                           />
                        </div>
                        <span className="latency-value">~75%</span>
                     </div>
                     <p className="latency-caption">
                        End-to-end, from frame capture to mobile UI update.
                     </p>
                  </div>
               </section>

               {/* PROOF SHOT — demo asset, acts as a visual anchor between
                   the impact claim and the technical deep-dive */}
               <section className="proof" aria-label="System in action">
                  <p className="eyebrow">
                     <span>In action</span>
                  </p>
                  <figure className="demo">
                     <div className="demo-frame">
                        <span className="demo-play" aria-hidden="true">
                           <IconPlayerPlay size={20} stroke={2} />
                        </span>
                        <img
                           src="/assets/Bincredible.png"
                           alt="Bincredible system showing a classification result on the companion mobile app"
                           loading="lazy"
                           decoding="async"
                        />
                     </div>
                     <figcaption>
                        Live classification result propagating from the Pi to
                        the mobile app in under a second.
                     </figcaption>
                  </figure>
               </section>

               {/* Sticky section subnav */}
               <nav
                  ref={navRef}
                  className="subnav"
                  aria-label="Sections on this page"
               >
                  <div className="subnav-inner">
                     {SECTIONS.map((s) => (
                        <a
                           key={s.id}
                           href={`#${s.id}`}
                           onClick={(e) => handleJump(e, s.id)}
                           className={`subnav-chip ${
                              active === s.id ? "is-active" : ""
                           }`}
                           aria-current={active === s.id ? "true" : undefined}
                        >
                           <span className="subnav-num">{s.num}</span>
                           <span className="subnav-label">{s.label}</span>
                        </a>
                     ))}
                  </div>
               </nav>

               {/* 01 ARCHITECTURE — diagram keeps its card; section is editorial */}
               <section
                  className="s"
                  id="architecture"
                  aria-labelledby="arch-title"
               >
                  <header className="s-head">
                     <p className="eyebrow">
                        <span className="eyebrow-num">01</span>
                        <span>Architecture</span>
                     </p>
                     <h2 id="arch-title" className="thesis-h">
                        Classification runs on-device; the cloud is only used
                        for delivery.
                     </h2>
                  </header>
                  <div className="pipeline-card">
                     <div className="pipeline-zones" aria-hidden="true">
                        <div className="zone-label zone-edge">
                           On-device (Edge)
                        </div>
                        <div className="zone-label zone-cloud">
                           Cloud + Mobile
                        </div>
                     </div>
                     <ol className="pipeline">
                        {PIPELINE_STAGES.map((stage, idx) => {
                           const Icon = stage.icon;
                           const isLast = idx === PIPELINE_STAGES.length - 1;
                           return (
                              <React.Fragment key={stage.label}>
                                 <li className={`stage stage-${stage.zone}`}>
                                    <div
                                       className="stage-num"
                                       aria-hidden="true"
                                    >
                                       {String(idx + 1).padStart(2, "0")}
                                    </div>
                                    <div
                                       className="stage-icon"
                                       aria-hidden="true"
                                    >
                                       <Icon size={22} stroke={1.7} />
                                    </div>
                                    <div className="stage-label">
                                       {stage.label}
                                    </div>
                                    <div className="stage-detail">
                                       {stage.detail}
                                    </div>
                                 </li>
                                 {!isLast && (
                                    <IconArrowRight
                                       className="stage-arrow"
                                       size={20}
                                       stroke={2.2}
                                       aria-hidden="true"
                                    />
                                 )}
                              </React.Fragment>
                           );
                        })}
                     </ol>
                  </div>
                  <p className="caption">
                     Keeping the model on-device removes a network hop from
                     every classification. MQTT + Firebase handle delivery and
                     state sync.
                  </p>
               </section>

               {/* 02 PIPELINE — rail, no wrapper card */}
               <section
                  className="s"
                  id="pipeline"
                  aria-labelledby="pipeline-title"
               >
                  <header className="s-head">
                     <p className="eyebrow">
                        <span className="eyebrow-num">02</span>
                        <span>Pipeline</span>
                     </p>
                     <h2 id="pipeline-title" className="thesis-h">
                        Every stage of the data path, from sensor to screen.
                     </h2>
                  </header>
                  <ol className="rail">
                     {PIPELINE_BREAKDOWN.map((row, idx) => (
                        <li className="rail-row" key={row.label}>
                           <div className="rail-marker" aria-hidden="true">
                              <span className="rail-dot">
                                 {String(idx + 1).padStart(2, "0")}
                              </span>
                           </div>
                           <div className="rail-body">
                              <h3 className="rail-label">{row.label}</h3>
                              <p>{row.body}</p>
                           </div>
                        </li>
                     ))}
                  </ol>
               </section>

               {/* 03 CONTRIBUTIONS */}
               <section
                  className="s"
                  id="contributions"
                  aria-labelledby="contrib-title"
               >
                  <header className="s-head">
                     <p className="eyebrow">
                        <span className="eyebrow-num">03</span>
                        <span>Contributions</span>
                     </p>
                     <h2 id="contrib-title" className="thesis-h">
                        I owned the firmware, ML, and integration seam.
                     </h2>
                  </header>
                  <ul className="icon-list">
                     {CONTRIBUTIONS.map((item) => (
                        <li key={item}>
                           <span className="icon-list-mark" aria-hidden="true">
                              <IconCheck size={14} stroke={2.5} />
                           </span>
                           <span>{renderBold(item)}</span>
                        </li>
                     ))}
                  </ul>
               </section>

               {/* 04 CHALLENGES — 3 cards, no outer wrapper */}
               <section
                  className="s"
                  id="challenges"
                  aria-labelledby="challenges-title"
               >
                  <header className="s-head">
                     <p className="eyebrow">
                        <span className="eyebrow-num">04</span>
                        <span>Challenges</span>
                     </p>
                     <h2 id="challenges-title" className="thesis-h">
                        Three places engineering judgement actually mattered.
                     </h2>
                  </header>
                  <div className="challenge-grid">
                     {CHALLENGES.map((c) => {
                        const Icon = c.icon;
                        return (
                           <article className="challenge-card" key={c.title}>
                              <header className="challenge-head">
                                 <span
                                    className="challenge-icon"
                                    aria-hidden="true"
                                 >
                                    <Icon size={18} stroke={1.8} />
                                 </span>
                                 <h3>{c.title}</h3>
                              </header>
                              <div className="pao">
                                 <div className="pao-row pao-problem">
                                    <span className="pao-tag">Problem</span>
                                    <p>{c.problem}</p>
                                 </div>
                                 <div className="pao-row pao-approach">
                                    <span className="pao-tag">Approach</span>
                                    <p>{c.approach}</p>
                                 </div>
                                 <div className="pao-row pao-outcome">
                                    <span className="pao-tag">Outcome</span>
                                    <p>{c.outcome}</p>
                                 </div>
                              </div>
                           </article>
                        );
                     })}
                  </div>
               </section>

               {/* 05 DECISIONS */}
               <section
                  className="s"
                  id="decisions"
                  aria-labelledby="design-title"
               >
                  <header className="s-head">
                     <p className="eyebrow">
                        <span className="eyebrow-num">05</span>
                        <span>Decisions</span>
                     </p>
                     <h2 id="design-title" className="thesis-h">
                        Three tradeoffs and the reasoning behind them.
                     </h2>
                  </header>
                  <ul className="decision-list">
                     {DESIGN_DECISIONS.map((d) => (
                        <li key={d.choice}>
                           <span className="decision-choice">{d.choice}</span>
                           <IconChevronRight
                              className="decision-arrow"
                              size={16}
                              stroke={2.2}
                              aria-hidden="true"
                           />
                           <span className="decision-reasoning">
                              {d.reasoning}
                           </span>
                        </li>
                     ))}
                  </ul>
               </section>

               {/* 06 FUTURE */}
               <section className="s" id="future" aria-labelledby="future-title">
                  <header className="s-head">
                     <p className="eyebrow">
                        <span className="eyebrow-num">06</span>
                        <span>What's Next</span>
                     </p>
                     <h2 id="future-title" className="thesis-h">
                        Where this system goes from here.
                     </h2>
                  </header>
                  <ul className="icon-list">
                     {FUTURE.map((item) => (
                        <li key={item}>
                           <span
                              className="icon-list-mark icon-list-mark-soft"
                              aria-hidden="true"
                           >
                              <IconArrowRight size={14} stroke={2.2} />
                           </span>
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
               </section>

               <footer className="detail-footer">
                  <BackToProjects />
                  <Link
                     to="/"
                     state={{ scrollTo: "projects" }}
                     className="cta cta-primary"
                  >
                     <span>See other projects</span>
                     <IconArrowRight size={16} stroke={2} aria-hidden="true" />
                  </Link>
               </footer>
            </div>
         </StyledDetail>
      </PageShell>
   );
}

const StyledDetail = styled.section`
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
`;
