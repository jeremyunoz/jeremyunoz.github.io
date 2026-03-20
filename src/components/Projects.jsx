import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import Card from "./decoration/ProjectCard.jsx";
import Loading from "./decoration/StatusBox";

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
      <div>
         <section
            id="projects"
            ref={ref}
            className={`projects ${visible ? "visible" : ""}`}
         >
            <h2 className="font-bold">Projects</h2>
            <div className="flex justify-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-20 justify-items-center">
                  <Card
                     imageSrc="./assets/bincredible.png"
                     altText="Bincredible App Image"
                     description="I built my first mobile app using React Native and Firebase to make recycling smarter and more accessible. The app features an on-device ML model that scans everyday items and teaches users how to properly sort recyclables and trash."
                     title="Bincredible"
                  />
                  <Card
                     imageSrc="./assets/zotfitness.png"
                     altText="Project 2 Image"
                     description="Developed a health watch prototype integrated with Google Gemini, acting as a health assistant. It collects user data to provide insights and help maintain good health during workouts."
                     title="ZotFitness"
                  />
               </div>
            </div>
            <div className="mt-20 text-center">
               <div
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     marginTop: "1rem",
                     marginBottom: "1rem",
                  }}
               >
                  <Loading />
               </div>
            </div>
         </section>
      </div>
   );
}

export default Projects;
