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
         <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2 className="about-heading">My Story</h2>
            <div className="about-content">
               <div className="about-intro">
                  <p className="about-text">
                     I'm a Computer Science and Engineering student at UC Irvine with a strong passion for embedded systems, IoT, and web development.
                  </p>
               </div>
            </div>
         </div>

         <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "left", paddingTop: 40 }}>
            <TimelineUI />
         </div>

         <div
            className="about-passions"
            style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: 40 }}
         >
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
      </section>
   );
}

export default About;
