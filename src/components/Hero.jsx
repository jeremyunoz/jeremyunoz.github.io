import React, { useEffect, useState } from "react";
import { animate, motion } from "motion/react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const HERO_NAME = "I'm Jeremy Zheng";

function Hero() {
   const [visible, setVisible] = useState(false);
   const [typedName, setTypedName] = useState("");
   const [nameDone, setNameDone] = useState(false);
   const navigate = useNavigate();

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
            <div className="hero-avatar-shell">
               <img
                  src="/assets/author2.png"
                  alt="Jeremy Zheng portrait"
                  className="hero-avatar"
               />
            </div>

            <div className="hero-content">
               <div className="hero-kicker">Embedded Systems x Edge AI x Product Engineering</div>
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
                     I build <span className="hero-accent">embedded and edge-AI systems </span>
                     that turn <span className="hero-emphasis">real-world sensing into useful products</span>.
                  </span>
               </h1>

               <p className="hero-summary">
                  UCI Computer Science and Engineering student, embedded systems
                  researcher, and software lead building intelligent products with
                  Raspberry Pi, ESP32, computer vision, and full-stack software.
               </p>

               <div className="hero-actions">
                  <button
                     type="button"
                     className="hero-pill hero-pill-muted"
                     onClick={() => navigate("/?section=projects")}
                  >
                     <span className="hero-pill-dot" />
                     Exploring projects
                  </button>

                  <button
                     type="button"
                     className="hero-pill hero-pill-primary"
                     onClick={() => navigate("/?section=contact")}
                  >
                     Let's work together
                     <span className="hero-pill-arrow">↗</span>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
