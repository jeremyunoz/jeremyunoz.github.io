import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { IconBriefcase } from "@tabler/icons-react";
import Card from "./decoration/ProjectCard.jsx";

const projectItems = [
   {
      imageSrc: "../assets/aurabot_component.png",
      altText: "AuraBot Prototype during senior design project",
      title: "AuraBot",
      role: "Firmware & Software Lead",
      timeframe: "Sep 2025 — Mar 2026",
      stack: [
         "ESP32 / ESP32-P4",
         "ESP-IDF (C)",
         "FreeRTOS",
         "I2S + DMA",
         "I2C / SPI / PWM",
         "Raspberry Pi 5",
         "MQTT",
      ],
      links: {
         github: "https://github.com/Jeremy1-uci/aurabot",
      },
      caseStudy: "/projects/aurabot",
      description:
         "Edge-AI embedded robotics system. Owned low-level firmware on ESP32 / ESP32-P4 and the real-time audio and voice inference pipeline.",
      impact: [
         "Wrote C firmware with ESP-IDF using FreeRTOS task scheduling, ISRs, and event-driven state machines; tuned task priorities, stack sizes, and PSRAM / SRAM allocation to eliminate task starvation, races, and watchdog resets.",
         "Built an I2S + DMA-backed embedded audio pipeline running WakeNet and VAD inference at ~95% accuracy.",
         "Developed peripheral drivers and hardware interfaces (I2C, SPI, PWM, Wi-Fi) for system bring-up and reliable inter-subsystem communication under concurrent workloads.",
         "Debugged real-time firmware via UART serial tracing, diagnosing timing issues and improving stability under sustained runtime.",
      ],
   },
   {
      imageSrc: "../assets/Bincredible.png",
      altText: "Bincredible project graphic",
      title: "Bincredible",
      role: "Embedded Systems / Edge AI Lead",
      timeframe: "May 2025 — Oct 2025",
      stack: [
         "Raspberry Pi 5",
         "TensorFlow Lite",
         "YOLOv11n-cls",
         "MQTT",
         "Firebase",
         "Python",
      ],
      links: {
         devpost: "https://devpost.com/software/bincredible",
      },
      description:
         "Real-time embedded prototype pairing on-device ML with a connected app. Led firmware-to-cloud integration across a 6-engineer team.",
      impact: [
         "Coordinated firmware, ML inference, and cross-component integration for a 6-engineer team; shipped a working prototype in a 20-week BRDG challenge.",
         "Deployed TensorFlow Lite inference on Raspberry Pi 5 for real-time classification at 93% accuracy on edge compute.",
         "Optimized device–cloud messaging over MQTT and Firebase, cutting end-to-end response latency ~25%.",
      ],
   },
   {
      imageSrc: "../assets/zotfitness.png",
      altText: "Smart-Sit Guardian embedded prototype",
      title: "Smart-Sit Guardian",
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
