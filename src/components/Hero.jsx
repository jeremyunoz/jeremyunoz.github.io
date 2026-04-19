import React, { useEffect, useState } from "react";
import { animate, motion } from "motion/react";
import "./Hero.css";
import { scrollToSection } from "../lib/scrollToSection";

const HERO_NAME = "I'm Jeremy Zheng";

function Hero() {
   const [visible, setVisible] = useState(false);
   const [typedName, setTypedName] = useState("");
   const [nameDone, setNameDone] = useState(false);

   useEffect(() => {
      setVisible(true);
   }, []);

   useEffect(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
         setTypedName(HERO_NAME);
         setNameDone(true);
         return;
      }

      const controls = animate(0, HERO_NAME.length, {
         duration: Math.max(HERO_NAME.length * 0.055, 0.2),
         ease: "linear",
         onUpdate: (latest) => {
            setTypedName(HERO_NAME.slice(0, Math.round(latest)));
         },
         onComplete: () => {
            setTypedName(HERO_NAME);
            setNameDone(true);
         },
      });

      return () => controls.stop();
   }, []);

   return (
      <section id="hero" className={`hero ${visible ? "fade-in" : ""}`}>
         <div className="hero-inner">
            <div className="hero-layout">
               <div className="hero-text">
                  <h1 className="hero-intro">
                     <span className="hero-name">
                        <span className="hero-name-visual" aria-hidden="true">
                           {typedName}
                           {!nameDone ? (
                              <motion.span
                                 className="hero-name-cursor"
                                 aria-hidden="true"
                                 animate={{ opacity: [1, 0] }}
                                 transition={{
                                    duration: 0.55,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                 }}
                              >
                                 |
                              </motion.span>
                           ) : null}
                        </span>
                        <span className="hero-name-sr-only">{HERO_NAME}</span>
                     </span>
                     <span className="hero-subheadline">
                        I design <span className="hero-accent">embedded firmware and edge-AI systems </span>
                        — from <span className="hero-emphasis">real-time drivers to on-device inference</span>.
                     </span>
                  </h1>

                  <p className="hero-summary">
                     Embedded engineer working in{" "}
                     <strong>C/C++ firmware and FreeRTOS</strong>, with on-device
                     ML on ESP32 and Raspberry Pi. Currently having fun with systems
                     programming in Rust — ahead of my M.S. at Georgia Tech.
                  </p>

                  <div className="hero-actions-wrapper">
                     <div className="hero-actions">
                        <button
                           type="button"
                           className="hero-pill hero-pill-muted"
                           onClick={() => scrollToSection("projects")}
                        >
                           See projects
                           <span className="hero-pill-arrow">↓</span>
                        </button>

                        <button
                           type="button"
                           className="hero-pill hero-pill-primary"
                           onClick={() => scrollToSection("contact")}
                        >
                           Let's work together
                           <span className="hero-pill-arrow">↗</span>
                        </button>
                     </div>

                     <div className="hero-actions-secondary">
                        <a
                           className="hero-pill hero-pill-outline"
                           href="/assets/Jeremy_Zheng_EmbeddedFirmware_Resume.pdf"
                           target="_blank"
                           rel="noopener noreferrer"
                           download="Jeremy_Zheng_EmbeddedFirmware_Resume.pdf"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.1em"
                              height="1.1em"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="hero-resume-icon"
                           >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                           </svg>
                           Resume
                        </a>
                     </div>
                  </div>
               </div>

               <aside className="hero-profile" aria-label="Profile summary">
                  <div className="hero-avatar-shell">
                     <img
                        src="/assets/jz_author.png"
                        alt="Jeremy Zheng portrait"
                        className="hero-avatar"
                     />
                  </div>

                  <div className="hero-profile-card">
                     <div className="hero-profile-row">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="1em"
                           height="1em"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           aria-hidden="true"
                           className="hero-profile-icon"
                        >
                           <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                           <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                        <div className="hero-profile-row-body">
                           <span className="hero-profile-row-title">
                              B.S. UCI &apos;26
                           </span>
                           <span className="hero-profile-row-sub">
                              Incoming M.S., Georgia Tech
                           </span>
                        </div>
                     </div>

                     <div className="hero-profile-row">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="1em"
                           height="1em"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           aria-hidden="true"
                           className="hero-profile-icon"
                        >
                           <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                           <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div className="hero-profile-row-body">
                           <span className="hero-profile-row-title">Irvine, CA</span>
                           <span className="hero-profile-row-sub">Pacific Time</span>
                        </div>
                     </div>

                     <div className="hero-profile-divider" aria-hidden="true" />

                     <div className="hero-profile-row hero-profile-available">
                        <span className="hero-profile-dot" aria-hidden="true" />
                        <div className="hero-profile-row-body">
                           <span className="hero-profile-row-title">
                              Open to opportunities
                           </span>
                           <span className="hero-profile-row-sub">
                              Embedded / Firmware / Edge AI roles
                           </span>
                        </div>
                     </div>
                  </div>
               </aside>
            </div>
         </div>
      </section>
   );
}

export default Hero;
