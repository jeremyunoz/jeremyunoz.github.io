import React from "react";
import "./About.css";
import TimelineUI from "./decoration/TimelineUI";

function About() {
   return (
      <section
         id="about"
         className="about visible"
         style={{ paddingBottom: 10 }}
      >
         <div className="about-shell">
            <h2 className="about-heading">My Story</h2>
            <div className="about-content">
               <div className="about-intro">
                  <p className="about-text">
                     I am a Computer Science and Engineering student at the University
                     of California, Irvine, focused on embedded systems, edge AI, and
                     IoT product development. I build systems that integrate sensing,
                     real-time inference, and distributed computation across
                     resource-constrained devices.
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
         </div>

         <div className="about-timeline-shell">
            <TimelineUI />
         </div>
      </section>
   );
}

export default About;
