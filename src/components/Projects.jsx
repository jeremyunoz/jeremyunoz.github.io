import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { IconBriefcase } from "@tabler/icons-react";
import Card from "./decoration/ProjectCard.jsx";
import Loading from "./decoration/StatusBox";

const projectItems = [
   {
      imageSrc: "./assets/bincredible.png",
      altText: "Bincredible App Image",
      title: "Bincredible",
      description:
         "I built my first mobile app using React Native and Firebase to make recycling smarter and more accessible.",
      impact: [
         "Used an on-device ML model to scan everyday items.",
         "Guided users on how to sort recyclables and trash correctly.",
      ],
   },
   {
      imageSrc: "./assets/zotfitness.png",
      altText: "ZotFitness project preview",
      title: "ZotFitness",
      description:
         "Developed a health watch prototype integrated with Google Gemini to act like a personalized workout health assistant.",
      impact: [
         "Collected activity data to surface helpful health insights.",
         "Explored how AI can support healthier workout decisions in real time.",
      ],
   },
];

function Projects() {
   const ref = useRef();
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      if (!ref.current) return undefined;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true);
               observer.disconnect();
            }
         },
         { threshold: 0.2 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
   }, []);

   return (
      <section
         id="projects"
         ref={ref}
         className={`projects ${visible ? "visible" : ""}`}
      >
         <div className="projects-shell">
            <div className="projects-header">
               <div className="projects-header-icon" aria-hidden="true">
                  <IconBriefcase size={42} stroke={1.6} />
               </div>
               <p className="projects-kicker">My Work</p>
               <h2 className="projects-title">Projects</h2>
            </div>
            <div className="projects-list">
               {projectItems.map((project, index) => (
                  <Card key={project.title} {...project} delay={index * 160} />
               ))}
            </div>
            <div className="projects-loader">
               <Loading />
            </div>
         </div>
      </section>
   );
}

export default Projects;
