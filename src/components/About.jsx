import React from "react";
import "./About.css";
import TimelineUI from "./decoration/TimelineUI";
import { ScrambleGreeting } from "./decoration/ScrambleGreeting";

function About() {
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
                  <p className="about-kicker">
                     <ScrambleGreeting />
                  </p>
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
                  <p className="about-card-text">
                     Focused on real-time systems, distributed IoT
                     architectures, and human-centered robotics.
                  </p>
                  <div className="about-status">
                     <span className="about-status-label">Currently</span>
                     <span className="about-status-text">
                        Building real-time embedded vision systems and
                        distributed edge-AI products
                     </span>
                  </div>
               </div>
            </div>

            <div className="about-content">
               <div className="about-intro-card">
                  <p className="about-text">
                     I focus on the intersection where hardware, software, and
                     product thinking all have to work together. I enjoy
                     building systems that live in the real world, not just in
                     code. Most of my recent work has involved embedded
                     devices, real-time inference, cloud-connected services,
                     and interfaces that make technical systems feel practical
                     and approachable.
                  </p>
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

                  <article className="about-summary-card">
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

                  <article className="about-summary-card about-summary-card-featured">
                     <p className="about-card-label">What&apos;s Next</p>
                     <p className="about-card-text">
                        Next, I plan to pursue a Master&apos;s degree focused on
                        Embedded Systems and Edge AI, deepening my expertise in
                        system architecture, real-time intelligence, and
                        scalable IoT platforms.
                     </p>
                  </article>
               </div>
            </div>

            <div className="about-timeline-shell">
               <div className="about-timeline-header">
                  <p className="about-card-label">Journey</p>
                  <h3 className="about-timeline-title">Experience Timeline</h3>
               </div>
               <TimelineUI />
            </div>
         </div>
      </section>
   );
}

export default About;
