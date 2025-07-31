import React, { useEffect, useRef, useState } from "react";
import "./About.css";

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
      >
         <h2>About Me</h2>
         <p>
            I'm a Computer Science & Engineering student at UC Irvine,
            passionate about embedded systems, IoT, and web development.
         </p>
      </section>
   );
}

export default About;
