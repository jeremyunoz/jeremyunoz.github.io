import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import TrueFocus from "./decoration/TrueFocus";
import TimelineUI from "./decoration/TimelineUI";

function About() {
   const ref = useRef();
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (ref.current) {
            const top = ref.current.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) setVisible(true);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <section
         id="about"
         ref={ref}
         className={`about ${visible ? "visible" : ""}`}
         style={{ paddingBottom: 10 }}
      >
         <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2 className="about-heading">
               <TrueFocus
                  sentence="About Me"
                  manualMode={false}
                  blurAmount={4}
                  borderColor="#9ed5c5"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
               />
            </h2>
            <div className="about-content">
               <div className="about-intro">
                  <p className="about-text">
                     I'm a Computer Science and Engineering student at UC Irvine with a strong passion for embedded systems, IoT, and web development.
                  </p>
               </div>
               
               <div className="about-passions">
                  <div className="passion-grid">
                     <div className="passion-item">
                        <span className="passion-icon">💻</span>
                        <p>Exploring new technologies and ideas</p>
                     </div>
                     <div className="passion-item">
                        <span className="passion-icon">🏋️</span>
                        <p>Staying active and pushing my limits</p>
                     </div>
                     <div className="passion-item">
                        <span className="passion-icon">👨‍🍳</span>
                        <p>Cooking and learning new recipes</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "left", paddingTop: 40 }}>
            <TimelineUI />
         </div>
      </section>
   );
}

export default About;
