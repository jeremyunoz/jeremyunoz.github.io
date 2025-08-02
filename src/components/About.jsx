import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import TrueFocus from "./decoration/TrueFocus";

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
         <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
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
            <p className="about-text">
               I'm a Computer Science & Engineering student at UC Irvine, passionate about embedded systems, IoT, and web development. On a daily basis, I enjoy learning new technologies to expand my tech stack and often read blogs and news to explore innovative ideas and gain inspiration from others and the world around us. Outside of tech, I like working out at the gym to push my physical limits and cooking at home (though I'm still learning to be a better chef!).
            </p>
         </div>
      </section>
   );
}

export default About;
