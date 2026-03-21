import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { IconBriefcase } from "@tabler/icons-react";
import Card from "./decoration/ProjectCard.jsx";

const projectItems = [
   {
      imageSrc: "../assets/aurabot_component.png",
      altText: "AuraBot Prototype during senior design project",
      title: "AuraBot",
      description:
         "Led development of an edge-AI robotic wellness companion that connected sensing, inference, and voice interaction across embedded and edge devices.",
      impact: [
         "Architected a distributed platform with Raspberry Pi 5, ESP32-P4, MQTT messaging, and WebSocket audio streaming.",
         "Built an IMX500 and PIR presence-detection pipeline that ran at about 10 FPS with about 99.9 ms mean latency.",
         "Implemented a voice pipeline from STT to LLM to TTS that reached about 95% command recognition accuracy.",
      ],
   },
   {
      imageSrc: "../assets/Bincredible.png",
      altText: "Bincredible project graphic",
      title: "Bincredible",
      description:
         "Built a gamified recycling app with React Native, TypeScript, and Firebase to encourage real-world recycling through accessible product design.",
      impact: [
         "Led Agile development for a six-person team and delivered a working prototype in a 20-week BRDG challenge timeline.",
         "Improved backend response latency by about 25% with Firebase indexing.",
         "Trained and deployed a YOLOv11n-cls model on Raspberry Pi 5 for automated waste sorting at 93% real-time accuracy.",
      ],
   },
   {
      imageSrc: "../assets/zotfitness.png",
      altText: "ZotFitness Prototype during BitHacks 2025",
      title: "ZotFitness",
      description:
         "Engineered an IoT smart fitness companion system that monitored posture, heart rate, SpO2, and sitting duration to help students improve their fitness and health.",
      impact: [
         "Implemented C++ firmware on a LILYGO ESP32 to sample sensor data reliably every 3 seconds.",
         "Built an AWS IoT Core, MQTT, DynamoDB, and S3 pipeline for streaming and storing recent health data.",
         "Supported more than 10 users with actionable wellness feedback during the prototype study.",
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
               <p className="projects-kicker">Recent Work</p>
               <h2 className="projects-title">Projects</h2>
            </div>
            <div className="projects-list">
               {projectItems.map((project, index) => (
                  <Card key={project.title} {...project} delay={index * 160} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default Projects;
