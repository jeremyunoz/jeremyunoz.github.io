import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
   const [visible, setVisible] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      setVisible(true);
   }, []);

   return (
      <section id="hero" className={`hero ${visible ? "fade-in" : ""}`}>
         <div className="hero-orb hero-orb-one" aria-hidden="true" />
         <div className="hero-orb hero-orb-two" aria-hidden="true" />
         <div className="hero-grid" aria-hidden="true" />
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
                  <span className="hero-name">I'm Jeremy Zheng.</span>
                  <span className="hero-subheadline">
                     I build <span className="hero-accent">embedded and edge-AI systems</span>
                     that turn <span className="hero-emphasis">real-world sensing into useful products</span>.
                  </span>
               </h1>

               <p className="hero-summary">
                  UCI computer science and engineering student, embedded systems
                  researcher, and software lead building intelligent products with
                  Raspberry Pi, ESP32, computer vision, and full-stack software.
               </p>

               <div className="hero-tags">
                  <span>UCI Embedded Research</span>
                  <span>Raspberry Pi + ESP32</span>
                  <span>Computer Vision</span>
               </div>

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
