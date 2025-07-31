import React, { useEffect, useRef, useState } from "react";

import "./Projects.css";

function Projects() {
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
         id="projects"
         ref={ref}
         className={`projects ${visible ? "visible" : ""}`}
      >
         <h2>Projects</h2>
         <div className="project-grid">
            <div className="project-card">
               <h3>Project 1</h3>
               <p>Description of the project goes here.</p>
            </div>
            <div className="project-card">
               <h3>Project 2</h3>
               <p>Description of the project goes here.</p>
            </div>
         </div>
      </section>
   );
}

export default Projects;
