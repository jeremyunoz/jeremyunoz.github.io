import React, { useEffect, useState } from "react";
import "./About.css";
import TimelineUI from "./decoration/TimelineUI";

function About() {
   const [isMobile, setIsMobile] = useState(false);
   const [isTimelineOpen, setIsTimelineOpen] = useState(false);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");

      const syncLayout = (event) => {
         const mobile = event.matches;
         setIsMobile(mobile);
         setIsTimelineOpen(!mobile);
      };

      syncLayout(mediaQuery);

      if (mediaQuery.addEventListener) {
         mediaQuery.addEventListener("change", syncLayout);
         return () => mediaQuery.removeEventListener("change", syncLayout);
      }

      mediaQuery.addListener(syncLayout);
      return () => mediaQuery.removeListener(syncLayout);
   }, []);

   return (
      <section id="about" className="about visible">
         <div className="about-shell">
            <div className="about-hero">
               <div className="about-hero-image-shell">
                  <img
                     src="/assets/about_me.png"
                     alt="Jeremy Zheng portrait"
                     className="about-hero-image"
                  />
               </div>

               <div className="about-hero-copy">
                  <p className="about-kicker">About Me</p>
                  <h2 className="about-heading">
                     I&apos;m Jeremy Zheng{" "}
                     <span className="about-wave" aria-hidden="true">
                        👋
                     </span>
                  </h2>
                  <p className="about-lead">
                     I design embedded firmware and edge-AI systems — from
                     low-level drivers and RTOS scheduling to on-device
                     inference.
                  </p>
                  <p className="about-card-text">
                     I recently earned my B.S. in Computer Science and
                     Engineering from UC Irvine and am an incoming M.S. in
                     Computational Science and Engineering at Georgia Tech.
                     My work sits squarely in embedded systems, firmware, and
                     real-time software.
                  </p>
                  <div className="about-status">
                     <span className="about-status-label">Currently</span>
                     <span className="about-status-text">
                        On an independent study in Rust — focused on memory
                        safety, concurrency, and firmware-grade reliability —
                        ahead of my M.S. at Georgia Tech.
                     </span>
                  </div>
               </div>
            </div>

            <div className="about-content">
               <div className="about-intro-card about-mobile-hidden">
                  <div className="about-intro-copy">
                     <p className="about-text">
                        I work where firmware meets the real world — where
                        timing, memory, and hardware constraints actually
                        matter.
                     </p>
                     <p className="about-text">
                        Most of my recent builds live on ESP32 and Raspberry
                        Pi: real-time sensing, peripheral drivers, and
                        edge-ML pipelines that have to run reliably on
                        constrained compute.
                     </p>
                  </div>
               </div>

               <div className="about-education-shell" aria-labelledby="about-education-title">
                  <div className="about-education-header">
                     <p className="about-card-label">Education</p>
                     <h3 className="about-education-title" id="about-education-title">
                        Academic Background
                     </h3>
                  </div>

                  <div className="about-education-list">
                     <article className="about-education-item">
                      <div className="about-education-top">
                         <img
                            src="/assets/gt_logo.png"
                            alt="Georgia Institute of Technology logo"
                            className="about-education-logo"
                         />
                         <div className="about-education-copy">
                            <p className="about-education-school">
                               Georgia Institute of Technology
                            </p>
                            <p className="about-education-degree">
                               M.S. in Computational Science and Engineering
                            </p>
                            <p className="about-education-meta">
                               Incoming · Fall 2026
                            </p>
                         </div>
                      </div>
                     </article>

                     <article className="about-education-item">
                      <div className="about-education-top">
                         <img
                            src="/assets/uci_logo.png"
                            alt="University of California, Irvine logo"
                            className="about-education-logo"
                         />
                         <div className="about-education-copy">
                            <p className="about-education-school">
                               University of California, Irvine
                            </p>
                            <p className="about-education-degree">
                               B.S. in Computer Science and Engineering
                            </p>
                            <p className="about-education-meta">
                               Graduated March 2026 · GPA 3.90
                            </p>
                         </div>
                      </div>
                      <ul className="about-list about-education-highlights">
                         <li>Dean&apos;s Honor List (10x)</li>
                      </ul>
                     </article>
                  </div>
               </div>

               <div className="about-summary-grid">
                  <article className="about-summary-card">
                     <p className="about-card-label">What I Build</p>
                     <p className="about-card-text">
                        Embedded firmware and real-time systems. Recent work
                        spans ESP32 firmware with FreeRTOS, peripheral drivers
                        (I2C, SPI, UART, PWM), DMA-backed audio pipelines,
                        and on-device ML on Raspberry Pi.
                     </p>
                  </article>

                  <article className="about-summary-card about-summary-card-mobile-hidden">
                     <p className="about-card-label">How I Work</p>
                     <p className="about-card-text">
                        End-to-end: from board bring-up and drivers to edge
                        inference and cloud connectivity. Research at
                        UCI&apos;s Embedded and Cyber-Physical Systems Lab
                        sharpened my instincts for profiling latency, handling
                        real-time constraints, and debugging with UART, logic
                        analyzers, and scopes.
                     </p>
                  </article>

                  <article className="about-summary-card">
                     <p className="about-card-label">Recent Experience</p>
                     <ul className="about-list">
                        <li>
                           Profiled end-to-end perception latency at 10–40 FPS
                           on constrained compute; identified bottlenecks
                           across capture, processing, and inference.
                        </li>
                        <li>
                           Built real-time audio pipelines on ESP32 using I2S
                           with DMA-backed buffering and FreeRTOS task
                           scheduling.
                        </li>
                        <li>
                           Designed MQTT-based edge-to-cloud pipelines across
                           ESP32 and Raspberry Pi — reliable under constrained
                           memory and intermittent networks.
                        </li>
                     </ul>
                  </article>

               </div>
            </div>

            <div className="about-timeline-shell">
               <div className="about-timeline-header">
                  <p className="about-card-label">Journey</p>
                  <h3 className="about-timeline-title">Experience Timeline</h3>
               </div>
               {isMobile ? (
                  <>
                     <button
                        type="button"
                        className="about-timeline-toggle"
                        aria-expanded={isTimelineOpen}
                        onClick={() => setIsTimelineOpen((open) => !open)}
                     >
                        {isTimelineOpen ? "Hide journey" : "Show journey"}
                     </button>
                     {isTimelineOpen ? <TimelineUI /> : null}
                  </>
               ) : (
                  <TimelineUI />
               )}
            </div>
         </div>
      </section>
   );
}

export default About;
