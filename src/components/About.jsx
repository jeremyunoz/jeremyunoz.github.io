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

   const handleLifeItemMove = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      target.style.setProperty(
         "--life-x",
         `${event.clientX - rect.left}px`
      );
      target.style.setProperty(
         "--life-y",
         `${event.clientY - rect.top}px`
      );
   };

   const lifeItems = [
      {
         icon: "🏙️",
         title: "Preparing for Atlanta",
         sub: "Moving this fall to start at Georgia Tech.",
      },
      {
         icon: "✈️",
         title: "Back to China this summer",
         sub: "Seeing family and starting my summer internship.",
      },
      {
         icon: "🦀",
         title: "Ramping up on Rust",
         sub: "Small systems projects as a warm-up for grad school.",
      },
      {
         icon: "🤖",
         title: "Edge ML on Raspberry Pi 5",
         sub: "Poking at on-device inference pipelines.",
      },
      {
         icon: "🧋",
         title: "Milk tea hunting in Irvine",
         sub: "Long walks and good coffee included.",
      },
   ];

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
                     I design embedded firmware and edge-AI systems, from
                     low-level drivers and RTOS scheduling to on-device
                     inference.
                  </p>
                  <p className="about-card-text about-hero-text">
                     Incoming M.S. @ Georgia Tech (Computational Science and
                     Engineering).
                  </p>
                  <div className="about-status">
                     <span className="about-status-label">Currently</span>
                     <span className="about-status-text">
                        Independent study in Rust ahead of Georgia Tech:
                        memory safety, concurrency, and firmware-grade
                        reliability.
                     </span>
                  </div>
               </div>
            </div>

            <div className="about-stats" role="list" aria-label="At a glance">
               <div className="about-stat" role="listitem">
                  <p className="about-stat-label">Building embedded since</p>
                  <p className="about-stat-number">2022</p>
                  <p className="about-stat-sub">
                     4+ years in firmware &amp; hardware
                  </p>
               </div>
               <div className="about-stat" role="listitem">
                  <p className="about-stat-label">Platforms shipped on</p>
                  <p className="about-stat-number">
                     5<span className="about-stat-plus">+</span>
                  </p>
                  <p className="about-stat-sub">
                     ESP32 · Raspberry Pi · STM32 · Arduino · LILYGO
                  </p>
               </div>
            </div>

            <div className="about-thesis">
               <p className="about-thesis-line">
                  I like problems where timing, memory, and hardware actually
                  bite back.
               </p>
               <p className="about-thesis-support">
                  Firmware is one of the few places where an off-by-one in a
                  DMA buffer or a missed RTOS deadline is immediately,
                  physically obvious. That tight feedback loop between code
                  and the real world is what keeps pulling me back.
               </p>
            </div>

            <div className="about-stack" aria-labelledby="about-stack-title">
               <p
                  className="about-card-label about-stack-label"
                  id="about-stack-title"
               >
                  My Stack
               </p>
               <ul className="about-stack-list">
                  <li className="about-stack-chip">C / C++</li>
                  <li className="about-stack-chip">Rust</li>
                  <li className="about-stack-chip">Python</li>
                  <li className="about-stack-chip">ESP-IDF</li>
                  <li className="about-stack-chip">FreeRTOS</li>
                  <li className="about-stack-chip">I2C / SPI / UART</li>
                  <li className="about-stack-chip">MQTT</li>
                  <li className="about-stack-chip">PyTorch</li>
                  <li className="about-stack-chip">TFLite</li>
                  <li className="about-stack-chip">AWS IoT Core</li>
               </ul>
            </div>

            <div
               className="about-education-shell"
               aria-labelledby="about-education-title"
            >
               <div className="about-education-header">
                  <p className="about-card-label">Education</p>
                  <h3
                     className="about-education-title"
                     id="about-education-title"
                  >
                     Education &amp; Technical Foundation
                  </h3>
                  <p className="about-education-intro">
                     From formal coursework to hands-on embedded systems
                     work: how I went from general CS to writing firmware
                     that ships on real hardware.
                  </p>
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
                           <p className="about-education-focus">
                              Deepening systems-level expertise in HPC,
                              numerical methods, and Rust for safety-critical
                              embedded software.
                           </p>
                        </div>
                     </div>

                     <div className="about-education-narratives">
                        <article className="about-education-narrative about-education-narrative-next">
                           <div className="about-education-narrative-meta">
                              <span className="about-education-narrative-kicker">
                                 Next
                              </span>
                              <span className="about-education-narrative-years">
                                 Fall 2026
                              </span>
                           </div>
                           <h4 className="about-education-narrative-title">
                              Georgia Tech and Rust
                           </h4>
                           <p className="about-education-narrative-text">
                              Using the runway before GT on an independent
                              study in Rust, focused on memory safety,
                              concurrency, and firmware-grade reliability.
                              The goal: embedded software I can trust more.
                           </p>
                        </article>
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
                              Graduated March 2026 · GPA 3.90 · Dean&apos;s
                              Honor List (10×)
                           </p>
                           <p className="about-education-focus">
                              Foundation in firmware, real-time systems, and
                              embedded perception, where software meets
                              constrained hardware and real-world timing.
                           </p>
                        </div>
                     </div>

                     <div className="about-education-narratives">
                        <article className="about-education-narrative">
                           <div className="about-education-narrative-meta">
                              <span className="about-education-narrative-kicker">
                                 Origin
                              </span>
                              <span className="about-education-narrative-years">
                                 2022
                              </span>
                           </div>
                           <h4 className="about-education-narrative-title">
                              Finding embedded at UCI
                           </h4>
                           <p className="about-education-narrative-text">
                              Started UCI as a CS student assuming I&apos;d
                              end up in web or ML. IEEE Open Project Space in
                              2022 reset that. Soldering rovers and flashing
                              microcontrollers pulled me from general CS into
                              firmware, and I&apos;ve been chasing that
                              feeling ever since.
                           </p>
                        </article>

                        <article className="about-education-narrative">
                           <div className="about-education-narrative-meta">
                              <span className="about-education-narrative-kicker">
                                 Research
                              </span>
                              <span className="about-education-narrative-years">
                                 2025 – 2026
                              </span>
                           </div>
                           <h4 className="about-education-narrative-title">
                              Embedded perception at ECPS Lab
                           </h4>
                           <p className="about-education-narrative-text">
                              Spent a year at UCI&apos;s Embedded and
                              Cyber-Physical Systems Lab profiling how drone
                              perception stacks degrade under real-world
                              sensor noise (blur, distortion, exposure).
                              Benchmarked YOLOv8 from 10 to 40 FPS on
                              embedded hardware.
                           </p>
                        </article>

                        <article className="about-education-narrative">
                           <div className="about-education-narrative-meta">
                              <span className="about-education-narrative-kicker">
                                 Building
                              </span>
                              <span className="about-education-narrative-years">
                                 2024 – 2026
                              </span>
                           </div>
                           <h4 className="about-education-narrative-title">
                              Firmware, edge AI, and RTOS
                           </h4>
                           <p className="about-education-narrative-text">
                              Led software on AuraBot, a distributed edge-AI
                              wellness companion across ESP32-P4 and
                              Raspberry Pi 5. Shipped Bincredible, a
                              recycling app with a live Raspberry Pi
                              classifier. In between: I2S audio with DMA
                              buffering, FreeRTOS scheduling, MQTT pipelines,
                              and a lot of UART debugging.
                           </p>
                        </article>
                     </div>
                  </article>
               </div>
            </div>

            <figure className="about-quote">
               <svg
                  className="about-quote-mark"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
               >
                  <path
                     d="M7.17 6C4.87 6 3 7.87 3 10.17V18h7.83v-7.83H6.5c0-1.47 1.2-2.67 2.67-2.67V6zm10 0c-2.3 0-4.17 1.87-4.17 4.17V18h7.83v-7.83H16.5c0-1.47 1.2-2.67 2.67-2.67V6z"
                     fill="currentColor"
                  />
               </svg>
               <blockquote className="about-quote-text">
                  Simplicity is prerequisite for reliability.
               </blockquote>
               <figcaption className="about-quote-cite">
                  — Edsger W. Dijkstra
               </figcaption>
            </figure>

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

            <div
               className="about-life-shell"
               aria-labelledby="about-life-title"
            >
               <div className="about-life-header">
                  <p className="about-card-label">Life Lately</p>
                  <h3 className="about-life-title" id="about-life-title">
                     In reverse chronology
                  </h3>
               </div>
               <ul className="about-life-list">
                  {lifeItems.map((item) => (
                     <li
                        key={item.title}
                        className="about-life-item"
                        onMouseMove={handleLifeItemMove}
                     >
                        <span
                           className="about-life-icon"
                           aria-hidden="true"
                        >
                           {item.icon}
                        </span>
                        <div className="about-life-body">
                           <p className="about-life-item-title">
                              {item.title}
                           </p>
                           <p className="about-life-sub">{item.sub}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}

export default About;
