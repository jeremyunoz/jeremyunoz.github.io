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
      role: "Embedded Firmware, Edge-to-Cloud Pipeline",
      timeframe: "Sep 2024 — Dec 2024",
      stack: ["ESP32-S3", "Embedded C/C++", "I2C", "MQTT", "AWS IoT Core"],
      links: {
         github: "https://github.com/jeremyunoz/ZotFitness",
         devpost: "https://devpost.com/software/zotfitness",
      },
      description:
         "ESP32-S3 embedded IoT system: I2C multi-sensor acquisition streamed over MQTT into AWS IoT Core with a DynamoDB time-series backend.",
      keyMetric:
         "Deterministic I2C sampling · **MQTT → AWS IoT Core** · real-time telemetry",
      impactTitle: "System Overview & Performance",
      impactToggleNoun: "overview",
      impactHeadline:
         "Embedded **ESP32-S3** pipeline streaming I2C sensor telemetry over **MQTT** into AWS IoT Core",
      impactGroups: [
         {
            heading: "Firmware & Sensor Acquisition",
            items: [
               "ESP32-S3 driving an I2C multi-sensor bus (MAX3010x, AHT20)",
               "Deterministic sampling for continuous real-time telemetry",
            ],
         },
         {
            heading: "Edge-to-Cloud Pipeline",
            items: [
               "MQTT publish from ESP32-S3 to AWS IoT Core over Wi-Fi",
               "IoT Core rules + Lambda stream payloads into DynamoDB",
            ],
         },
         {
            heading: "System Reliability",
            items: [
               "UART serial tracing for timing and I2C bus diagnostics",
               "Stable streaming under constrained memory and intermittent Wi-Fi",
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
