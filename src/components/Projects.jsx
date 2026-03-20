import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { IconBriefcase } from "@tabler/icons-react";
import Card from "./decoration/ProjectCard.jsx";
import Loading from "./decoration/StatusBox";

const createProjectVisual = (title, subtitle, accent) =>
   `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
         <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stop-color="#f7fffb" />
               <stop offset="100%" stop-color="#e0f2ea" />
            </linearGradient>
         </defs>
         <rect width="1200" height="800" fill="url(#bg)" rx="48" />
         <circle cx="180" cy="140" r="120" fill="${accent}" fill-opacity="0.16" />
         <circle cx="1010" cy="660" r="170" fill="${accent}" fill-opacity="0.14" />
         <rect x="84" y="90" width="1032" height="620" rx="34" fill="#ffffff" fill-opacity="0.74" />
         <text x="120" y="250" fill="#2f5a4c" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="700">
            Featured Project
         </text>
         <text x="120" y="360" fill="#24493e" font-family="Inter, Arial, sans-serif" font-size="86" font-weight="800">
            ${title}
         </text>
         <text x="120" y="450" fill="#5c7f73" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="500">
            ${subtitle}
         </text>
         <rect x="120" y="520" width="220" height="14" rx="7" fill="${accent}" fill-opacity="0.8" />
         <rect x="120" y="570" width="400" height="14" rx="7" fill="#cfe7dd" />
         <rect x="120" y="610" width="320" height="14" rx="7" fill="#dbeee6" />
      </svg>
   `)}`;

const projectItems = [
   {
      imageSrc: createProjectVisual("AuraBot", "Edge AI wellness companion", "#8fcab7"),
      altText: "AuraBot project graphic",
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
      imageSrc: createProjectVisual("Bincredible", "Recycling app and on-device vision", "#7db9cc"),
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
      imageSrc: createProjectVisual("Smart-Sit Guardian", "IoT posture and wellness monitoring", "#96b6e0"),
      altText: "Smart-Sit Guardian project graphic",
      title: "Smart-Sit Guardian",
      description:
         "Engineered an IoT smart seat system that monitored posture, heart rate, SpO2, and sitting duration to help students reduce prolonged sedentary behavior.",
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
               <p className="projects-kicker">My Work</p>
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
