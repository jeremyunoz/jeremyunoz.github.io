import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../lib/usePageMeta";
import "./AuraBotCaseStudy.css";

const CONSTRAINTS = [
   {
      label: "Compute",
      value: "Raspberry Pi 5 + ESP32-P4",
      detail: "On-device inference only; no cloud dependency at runtime.",
   },
   {
      label: "Latency",
      value: "< 150 ms end-to-end",
      detail: "Presence detection must feel instantaneous to the user.",
   },
   {
      label: "Power",
      value: "Battery-friendly",
      detail: "Duty-cycled sensing so the robot idles gracefully.",
   },
   {
      label: "Voice",
      value: "STT → LLM → TTS",
      detail: "Fully local pipeline where possible for privacy.",
   },
];

const OWNERSHIP = [
   "Architected the distributed system: sensing on ESP32-P4, inference on Pi 5, MQTT as the nervous system, WebSocket audio for the voice path.",
   "Designed the IMX500 + PIR presence-detection pipeline, including camera config, model packaging, and the duty-cycling logic that let the robot stay responsive without pegging the CPU.",
   "Implemented the voice stack end-to-end from mic capture to TTS playback and tuned it until command recognition landed at about 95%.",
   "Led the team through the senior-design milestones: scoping, integration, demo prep, and the final presentation.",
];

const METRICS = [
   { value: "~10 FPS", label: "Presence-detection pipeline" },
   { value: "~99.9 ms", label: "Mean detection latency" },
   { value: "~95%", label: "Voice command recognition" },
];

const NEXT_STEPS = [
   "Swap the generic STT for a domain-tuned model to push command recognition past 98%.",
   "Move the LLM step to a quantized on-device model to remove the remaining network dependency.",
   "Add a lightweight behavior planner so the robot can schedule check-ins instead of only reacting.",
];

function AuraBotCaseStudy() {
   usePageMeta({
      title: "AuraBot — Case Study",
      description:
         "AuraBot senior design case study: distributed embedded + edge-AI system on ESP32-P4 and Raspberry Pi 5.",
   });

   return (
      <PageShell>
         <article className="case-study visible">
            <div className="case-study-shell">
               <nav aria-label="Breadcrumb" className="case-study-breadcrumb">
                  <Link to="/" state={{ scrollTo: "projects" }}>
                     ← Back to projects
                  </Link>
               </nav>

                  <header className="case-study-header">
                     <p className="case-study-kicker">Senior Design · 2024–2025</p>
                     <h1 className="case-study-title">AuraBot</h1>
                     <p className="case-study-lede">
                        An edge-AI robotic wellness companion that connects sensing,
                        inference, and voice interaction across embedded and edge
                        devices.
                     </p>

                     <ul className="case-study-meta" aria-label="Project facts">
                        <li>
                           <span className="case-study-meta-label">Role</span>
                           <span className="case-study-meta-value">
                              Tech Lead
                           </span>
                        </li>
                        <li>
                           <span className="case-study-meta-label">Team</span>
                           <span className="case-study-meta-value">
                              4 engineers
                           </span>
                        </li>
                        <li>
                           <span className="case-study-meta-label">Timeline</span>
                           <span className="case-study-meta-value">
                              Sep 2024 — Jun 2025
                           </span>
                        </li>
                        <li>
                           <span className="case-study-meta-label">Stack</span>
                           <span className="case-study-meta-value">
                              Pi 5, ESP32-P4, IMX500, MQTT, WebSocket
                           </span>
                        </li>
                     </ul>
                  </header>

                  <figure className="case-study-figure">
                     <img
                        src="/assets/aurabot_component.png"
                        alt="AuraBot prototype: a tabletop wellness companion built on Raspberry Pi 5 and ESP32-P4."
                     />
                  </figure>

                  <section className="case-study-section">
                     <h2>The problem</h2>
                     <p>
                        Wellness companions usually live on a phone screen. We wanted
                        to see if a small, calm, physical device could do a better
                        job: sense when you’re present, respond in natural
                        conversation, and get out of the way the rest of the time.
                        The hard part is not the idea — it’s fitting real-time
                        sensing, computer vision, and an LLM-backed voice loop onto
                        hardware that stays quiet, cool, and responsive.
                     </p>
                  </section>

                  <section className="case-study-section">
                     <h2>Constraints</h2>
                     <div className="case-study-constraints">
                        {CONSTRAINTS.map((item) => (
                           <div className="case-study-constraint" key={item.label}>
                              <p className="case-study-constraint-label">
                                 {item.label}
                              </p>
                              <p className="case-study-constraint-value">
                                 {item.value}
                              </p>
                              <p className="case-study-constraint-detail">
                                 {item.detail}
                              </p>
                           </div>
                        ))}
                     </div>
                  </section>

                  <section className="case-study-section">
                     <h2>Architecture</h2>
                     <p>
                        Sensors talk to the MCU, the MCU talks to the edge node over
                        MQTT, and audio flows over a WebSocket so the voice loop
                        stays snappy. Everything converges on the Pi 5, which hosts
                        the vision pipeline and the voice stack.
                     </p>
                     <div className="case-study-arch" aria-hidden="true">
                        <div className="arch-node arch-node-sensor">
                           <span className="arch-node-title">ESP32-P4</span>
                           <span className="arch-node-sub">PIR + mic + speaker</span>
                        </div>
                        <div className="arch-link">
                           <span className="arch-link-label">MQTT</span>
                        </div>
                        <div className="arch-node arch-node-edge">
                           <span className="arch-node-title">Raspberry Pi 5</span>
                           <span className="arch-node-sub">
                              IMX500 vision · STT → LLM → TTS
                           </span>
                        </div>
                        <div className="arch-link arch-link-down">
                           <span className="arch-link-label">WebSocket audio</span>
                        </div>
                        <div className="arch-node arch-node-user">
                           <span className="arch-node-title">User</span>
                           <span className="arch-node-sub">Voice + presence</span>
                        </div>
                     </div>
                  </section>

                  <section className="case-study-section">
                     <h2>What I owned</h2>
                     <ul className="case-study-list">
                        {OWNERSHIP.map((item) => (
                           <li key={item}>{item}</li>
                        ))}
                     </ul>
                  </section>

                  <section className="case-study-section">
                     <h2>Metrics</h2>
                     <ul className="case-study-metrics">
                        {METRICS.map((metric) => (
                           <li key={metric.label}>
                              <span className="case-study-metric-value">
                                 {metric.value}
                              </span>
                              <span className="case-study-metric-label">
                                 {metric.label}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </section>

                  <section className="case-study-section">
                     <h2>What I would do next</h2>
                     <ul className="case-study-list">
                        {NEXT_STEPS.map((item) => (
                           <li key={item}>{item}</li>
                        ))}
                     </ul>
                  </section>

                  <div className="case-study-footer">
                     <Link
                        className="case-study-cta"
                        to="/"
                        state={{ scrollTo: "contact" }}
                     >
                        Let&apos;s talk about embedded + edge-AI roles
                        <span aria-hidden="true">↗</span>
                     </Link>
                  </div>
            </div>
         </article>
      </PageShell>
   );
}

export default AuraBotCaseStudy;
