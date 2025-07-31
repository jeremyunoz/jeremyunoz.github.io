import React from "react";

import "./Projects.css";

export default function Projects() {
   return (
      <section id="projects" className="projects">
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
