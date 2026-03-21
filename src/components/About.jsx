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
                  <h2 className="about-heading">I&apos;m Jeremy Zheng 👋</h2>
                  <p className="about-lead">
                     I&apos;m a Computer Science and Engineering student at UC Irvine
                     building embedded systems, edge AI, and connected products that
                     turn sensing into useful real-world experiences.
                  </p>
                  <div className="about-status">
                     <span className="about-status-label">Currently</span>
                     <span className="about-status-text">
                        Researching embedded vision and building edge-AI products
                     </span>
                  </div>
               </div>
            </div>

            <div className="about-content">
               <div className="about-intro-card">
                  <p className="about-text">
                     I focus on the part of engineering where hardware, software, and
                     product thinking all have to work together. Most of my recent
                     projects have involved embedded devices, real-time inference,
                     cloud-connected services, and interfaces that make technical
                     systems feel practical and approachable.
                  </p>
               </div>

               <div className="about-summary-grid">
                  <article className="about-summary-card">
                     <p className="about-card-label">What I Build</p>
                     <p className="about-card-text">
                        I am especially interested in intelligent, responsive systems
                        that sit at the intersection of hardware and software, where
                        performance, reliability, and user experience all matter.
                     </p>
                  </article>

                  <article className="about-summary-card">
                     <p className="about-card-label">How I Work</p>
                     <p className="about-card-text">
                        Through undergraduate research at UCI&apos;s Embedded and
                        Cyber-Physical Systems Lab and team-based product builds, I
                        have developed end-to-end systems spanning embedded firmware,
                        edge-AI pipelines, and cloud-connected architectures.
                     </p>
                  </article>

                  <article className="about-summary-card">
                     <p className="about-card-label">Recent Experience</p>
                     <ul className="about-list">
                        <li>
                           Evaluating real-time computer vision models on embedded
                           platforms.
                        </li>
                        <li>
                           Designing MQTT-based distributed systems across Raspberry Pi
                           and ESP32 devices.
                        </li>
                        <li>
                           Building interactive systems with voice and sensor-driven
                           feedback.
                        </li>
                     </ul>
                  </article>

                  <article className="about-summary-card about-summary-card-featured">
                     <p className="about-card-label">What&apos;s Next</p>
                     <p className="about-card-text">
                        Next, I plan to pursue a Master&apos;s degree in Embedded Systems
                        and Edge AI to deepen my expertise in system architecture,
                        real-time intelligence, and scalable IoT platforms.
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
