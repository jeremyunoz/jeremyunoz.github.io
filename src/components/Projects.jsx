import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { IconBriefcase } from "@tabler/icons-react";
import Card from "./decoration/ProjectCard.jsx";

const projectItems = [
   {
      imageSrc: "../assets/aurabot_component.png",
      altText: "AuraBot Prototype during senior design project",
      title: "AuraBot",
      featured: true,
      featuredLabel: "IAB Award · UCI Senior Design Capstone",
      role: "Firmware Lead, Embedded Systems & Real-Time Interaction",
      timeframe: "Sep 2025 — Mar 2026",
      stack: [
         "ESP32 / ESP32-P4",
         "FreeRTOS",
         "ESP-IDF (C)",
         "MQTT / WebSocket",
      ],
      links: {
         github: "https://github.com/jeremyunoz/AuraBot",
      },
      description:
         "Distributed edge-AI robotics system for a desk wellness companion, using ESP32 firmware and a Raspberry Pi for real-time sensing, interaction, and control.",
      keyMetric: "**~10 FPS** · **~95%** voice accuracy · real-time multi-tasking",
      detailHref: "/projects/aurabot",
      detailLabel: "System Design",
   },
   {
      imageSrc: "../assets/Bincredible.png",
      altText: "Bincredible project graphic",
      title: "Bincredible",
      featuredLabel: "BRDG Innovation Challenge 2025",
      role: "Embedded Systems Lead, Edge AI Pipeline",
      timeframe: "May 2025 — Oct 2025",
      stack: ["Raspberry Pi 5", "TensorFlow Lite", "YOLO", "MQTT"],
      links: {
         github: "https://github.com/jeremyunoz/bincredible-app",
      },
      description:
         "Edge AI pipeline: camera → preprocessing → TFLite inference → MQTT → mobile app. Real-time recyclable classification on-device with cloud sync.",
      keyMetric: "**~93%** accuracy · **~25%** latency reduction",
      detailHref: "/projects/bincredible",
      detailLabel: "System Design",
   },
   {
      imageSrc: "../assets/zotfitness.png",
      altText: "ZotFitness embedded prototype",
      title: "ZotFitness",
      featuredLabel: "Best Use of Gemini · BitHack 2025",
      role: "Embedded Software Engineer",
      timeframe: "Sep 2024 — Dec 2024",
      stack: ["ESP32", "Embedded C/C++", "I2C", "MQTT", "AWS IoT Core"],
      links: {
         github: "https://github.com/jeremyunoz/ZotFitness",
         devpost: "https://devpost.com/software/zotfitness",
      },
      description:
         "Real-time posture and health monitoring wearable with ESP32 firmware streaming multi-sensor data to AWS IoT Core.",
      keyMetric:
         "**3s** deterministic sampling · multi-sensor I2C · reliable edge-to-cloud",
      impactTitle: "System Overview & Performance",
      impactToggleNoun: "overview",
      impactHeadline:
         "Real-time wearable streaming deterministic multi-sensor data from **ESP32** to **AWS IoT Core**",
      impactGroups: [
         {
            heading: "System Behavior",
            items: [
               "Multi-sensor posture and health tracking",
               "Deterministic 3s sampling cadence",
            ],
         },
         {
            heading: "Firmware & Real-Time",
            items: [
               "ESP32 C/C++ with I2C acquisition",
               "UART serial tracing for timing diagnostics",
            ],
         },
         {
            heading: "Edge-to-Cloud",
            items: [
               "MQTT pipeline to AWS IoT Core",
               "Reliable streaming under constrained memory",
            ],
         },
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
