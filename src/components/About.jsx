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
                     I build embedded and edge AI systems that turn real-world
                     sensing into responsive, user-facing products.
                  </p>
                  <p className="about-card-text">
                     I&apos;m a Computer Science and Engineering student at UC
                     Irvine focused on embedded systems, edge AI, and connected
                     product development.
                  </p>
                  <div className="about-status">
                     <span className="about-status-label">Currently</span>
                     <span className="about-status-text">
                        Strengthening systems programming with Rust and
                        preparing for Device Driver Development and Systems
                        Software internship work
                     </span>
                  </div>
                  <p className="about-focus-text">
                     Currently focused on Rust, systems programming, and
                     performance-critical software.
                  </p>
               </div>
            </div>

            <div className="about-content">
               <div className="about-intro-card about-mobile-hidden">
                  <div className="about-intro-copy">
                     <p className="about-text">
                        I focus on the intersection where hardware, software,
                        and product thinking work together.
                     </p>
                     <p className="about-text">
                        I enjoy building systems that live in the real world,
                        not just in code.
                     </p>
                     <p className="about-text">
                        Most of my recent work has involved embedded devices,
                        real-time inference, cloud-connected systems, and
                        interfaces that make technical solutions practical and
                        approachable.
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
                               Graduated March 2026
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
                        I build intelligent, responsive systems at the
                        intersection of hardware and software, with a focus on
                        real-time performance, reliability, and user
                        experience. Recent work includes edge-AI robotics,
                        embedded vision pipelines, and sensor-driven
                        interaction systems.
                     </p>
                  </article>

                  <article className="about-summary-card about-summary-card-mobile-hidden">
                     <p className="about-card-label">How I Work</p>
                     <p className="about-card-text">
                        I approach systems end-to-end, from low-level firmware
                        and sensing to edge inference and cloud integration.
                        Through research at UCI&apos;s Embedded and
                        Cyber-Physical Systems Lab and team-based builds, I
                        design architectures that are both technically robust
                        and product-oriented.
                     </p>
                  </article>

                  <article className="about-summary-card">
                     <p className="about-card-label">Recent Experience</p>
                     <ul className="about-list">
                        <li>
                           Evaluated real-time computer vision models on
                           embedded platforms to optimize latency and accuracy
                           tradeoffs.
                        </li>
                        <li>
                           Designed MQTT-based distributed systems across
                           Raspberry Pi and ESP32 devices for reliable
                           inter-device communication.
                        </li>
                        <li>
                           Built interactive voice and sensor-driven systems
                           enabling responsive, real-world user feedback.
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
