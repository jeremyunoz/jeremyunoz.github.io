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
      featuredLabel: "Senior Design Capstone",
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
      impactTitle: "System Overview & Performance",
      impactToggleNoun: "overview",
      impactHeadline:
         "Real-time edge-AI system (**~10 FPS**) with concurrent sensing, interaction, and control",
      impactGroups: [
         {
            heading: "System Behavior",
            items: [
               "Presence detection via vision + PIR",
               "Inactivity tracking and reminders",
               "Voice interaction (STT → LLM → TTS)",
            ],
         },
         {
            heading: "Firmware & Real-Time",
            items: [
               "FreeRTOS task scheduling",
               "ESP32 handles sensing, control, and audio I/O",
            ],
         },
         {
            heading: "Distributed System",
            items: [
               "Raspberry Pi: AI inference and orchestration",
               "ESP32: sensing and actuation node (MQTT)",
            ],
         },
      ],
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
      impactTitle: "System Performance & Results",
      impactToggleNoun: "results",
      impactHeadline:
         "Real-time edge AI system achieving **93%** accuracy with **~25%** reduced latency",
      impactGroups: [
         {
            heading: "Edge ML Performance",
            items: [
               "Deployed TensorFlow Lite on Raspberry Pi 5 for real-time on-device classification",
               "Achieved **93%** accuracy under edge compute constraints",
            ],
         },
         {
            heading: "Latency & Communication",
            items: [
               "Designed MQTT + Firebase pipeline for device-to-cloud messaging",
               "Reduced end-to-end latency by **~25%**, enabling responsive feedback",
            ],
         },
         {
            heading: "System Integration & Delivery",
            items: [
               "Led firmware, ML inference, and app integration across a 6-engineer team",
               "Delivered a fully integrated end-to-end system within a **20-week** BRDG cycle",
            ],
         },
      ],
   },
   {
      imageSrc: "../assets/zotfitness.png",
      altText: "ZotFitness embedded prototype",
      title: "ZotFitness",
      featuredLabel: "BitHack 2025 Project",
      role: "Embedded Software Engineer",
      timeframe: "Sep 2024 — Dec 2024",
      stack: [
         "ESP32",
         "Embedded C/C++",
         "I2C",
         "UART",
         "MQTT",
         "AWS IoT Core",
      ],
      links: {
         github: "https://github.com/jeremyunoz/ZotFitness",
         devpost: "https://devpost.com/software/zotfitness",
      },
      description:
         "Real-time posture and health monitoring system. Wrote embedded firmware for deterministic sensor acquisition and reliable edge-to-cloud streaming.",
      impact: [
         "Implemented C/C++ firmware on ESP32 for real-time multi-sensor acquisition over I2C with deterministic 3-second sampling.",
         "Debugged sensor communication and timing issues via UART serial logging, ensuring reliable I2C data acquisition under continuous runtime.",
         "Designed an edge-to-cloud pipeline with MQTT and AWS IoT Core that stayed reliable under constrained memory and intermittent networks.",
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
