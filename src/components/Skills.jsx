import React from "react";
import "./Skills.css";
import {
   IconLayersIntersect,
   IconCpu,
   IconPlug,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import {
   SiCplusplus,
   SiEspressif,
   SiFirebase,
   SiMqtt,
   SiTensorflow,
   SiYolo,
} from "react-icons/si";
import { FaAws, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";

function Skills() {
   const focusAreas = [
      {
         title: "Real-Time Embedded Systems",
         description:
            "Firmware, RTOS scheduling, and low-level peripheral drivers.",
         items: [
            {
               name: "C/C++",
               icon: SiCplusplus,
               color: "#00599C",
               tooltip:
                  "Primary language for firmware, drivers, and real-time systems.",
            },
            {
               name: "ESP32 / ESP-IDF",
               icon: SiEspressif,
               color: "#E7352C",
               tooltip:
                  "Espressif's native framework for Wi-Fi/BLE-capable MCU firmware.",
            },
            {
               name: "FreeRTOS",
               icon: IconCpu,
               color: "#2B5D4D",
               tooltip:
                  "Task scheduling, queues, and ISR-safe primitives on ESP32.",
            },
            {
               name: "I²C / SPI / UART",
               icon: IconPlug,
               color: "#2B5D4D",
               tooltip:
                  "Peripheral drivers for sensors, displays, and MCU-to-MCU links.",
            },
            {
               name: "MQTT",
               icon: SiMqtt,
               color: "#660066",
               tooltip:
                  "Lightweight pub/sub for edge devices over intermittent networks.",
            },
         ],
      },
      {
         title: "Edge AI",
         description: "On-device inference and deployment on constrained compute.",
         items: [
            {
               name: "Python",
               icon: FaPython,
               color: "#3776AB",
               tooltip:
                  "ML prototyping, data pipelines, and on-device inference scripts.",
            },
            {
               name: "TensorFlow Lite",
               icon: SiTensorflow,
               color: "#FF6F00",
               tooltip:
                  "Quantized on-device inference for constrained edge compute.",
            },
            {
               name: "YOLO",
               icon: SiYolo,
               color: "#000000",
               tooltip:
                  "Real-time object detection at 10–40 FPS on edge hardware.",
            },
            {
               name: "Linux",
               icon: FcLinux,
               color: "#222222",
               tooltip:
                  "Raspberry Pi daily driver — systemd services, cross-compile, and peripheral debugging.",
            },
         ],
      },
      {
         title: "Edge-to-Cloud Systems",
         description: "Distributed IoT pipelines and systems integration.",
         items: [
            {
               name: "MQTT",
               icon: SiMqtt,
               color: "#660066",
               tooltip:
                  "Event ingest from ESP32 fleets into cloud pipelines.",
            },
            {
               name: "AWS",
               icon: FaAws,
               color: "#181717",
               tooltip:
                  "IoT Core, Lambda, and S3 for device ingest and cloud processing.",
            },
            {
               name: "Firebase",
               icon: SiFirebase,
               color: "#FFCA28",
               tooltip:
                  "Realtime Database, Auth, and Cloud Functions for device-facing apps.",
            },
            {
               name: "React",
               icon: FaReact,
               color: "#61DAFB",
               muted: true,
               tooltip: "Dashboards and companion UIs for device telemetry.",
            },
            {
               name: "Node.js",
               icon: FaNodeJs,
               color: "#5FA04E",
               muted: true,
               tooltip:
                  "Lightweight bridges between MQTT brokers, APIs, and cloud services.",
            },
         ],
      },
   ];

   const featuredTools = [
      {
         name: "C/C++",
         icon: SiCplusplus,
         color: "#00599C",
         tooltip:
            "Primary language for firmware, drivers, and real-time systems.",
      },
      {
         name: "ESP32",
         icon: SiEspressif,
         color: "#E7352C",
         tooltip:
            "Dual-core MCU with Wi-Fi/BLE — the backbone of my edge firmware.",
      },
      {
         name: "FreeRTOS",
         icon: IconCpu,
         color: "#2B5D4D",
         tooltip:
            "Task scheduling and ISR-safe concurrency for MCU firmware.",
      },
      {
         name: "TensorFlow Lite",
         icon: SiTensorflow,
         color: "#FF6F00",
         tooltip:
            "Quantized on-device inference on constrained compute.",
      },
   ];

   return (
      <section id="skills" className="skills visible">
         <div className="skills-shell">
            <div className="skills-header">
               <div className="skills-header-icon" aria-hidden="true">
                  <IconLayersIntersect size={42} stroke={1.6} />
               </div>
               <p className="skills-eyebrow">Built for the edge</p>
               <h2 className="skills-title">
                  Real-Time Embedded Systems &amp; Edge AI
               </h2>
               <p className="skills-subtitle">
                  Firmware, concurrency, and edge-to-cloud pipelines —
                  engineered for timing, memory, and hardware constraints.
               </p>
            </div>

            <div
               className="skills-featured-tools"
               aria-label="Core technologies"
            >
               {featuredTools.map((item) => {
                  const hasTooltip = Boolean(item.tooltip);
                  const tooltipId = hasTooltip
                     ? `skill-featured-tip-${item.name
                          .replace(/[^a-z0-9]+/gi, "-")
                          .toLowerCase()}`
                     : undefined;
                  const className = `skill-chip${
                     hasTooltip ? " skill-chip--interactive" : ""
                  }`;
                  const inner = (
                     <>
                        <item.icon
                           className="skill-chip-icon"
                           style={{ color: item.color }}
                        />
                        <span>{item.name}</span>
                        {hasTooltip ? (
                           <span
                              className="skill-chip-tip"
                              role="tooltip"
                              id={tooltipId}
                           >
                              {item.tooltip}
                           </span>
                        ) : null}
                     </>
                  );

                  if (hasTooltip) {
                     return (
                        <button
                           type="button"
                           className={className}
                           key={item.name}
                           aria-describedby={tooltipId}
                        >
                           {inner}
                        </button>
                     );
                  }

                  return (
                     <div className={className} key={item.name}>
                        {inner}
                     </div>
                  );
               })}
            </div>

            <div className="skills-groups">
               {focusAreas.map((group) => (
                  <article className="skill-group" key={group.title}>
                     <div className="skill-group-header">
                        <h3>{group.title}</h3>
                        {group.description ? (
                           <p className="skill-group-desc">
                              {group.description}
                           </p>
                        ) : null}
                     </div>
                     <div className="skill-inline-list">
                        {group.items.map((item) => {
                           const hasTooltip = Boolean(item.tooltip);
                           const tooltipId = hasTooltip
                              ? `skill-tip-${item.name
                                   .replace(/[^a-z0-9]+/gi, "-")
                                   .toLowerCase()}`
                              : undefined;
                           const className = `skill-inline-item${
                              item.muted ? " skill-inline-item--muted" : ""
                           }${
                              hasTooltip
                                 ? " skill-inline-item--interactive"
                                 : ""
                           }`;
                           const inner = (
                              <>
                                 <item.icon
                                    className="skill-inline-icon"
                                    style={{ color: item.color }}
                                 />
                                 <span>{item.name}</span>
                                 {hasTooltip ? (
                                    <span
                                       className="skill-inline-tip"
                                       role="tooltip"
                                       id={tooltipId}
                                    >
                                       {item.tooltip}
                                    </span>
                                 ) : null}
                              </>
                           );

                           if (hasTooltip) {
                              return (
                                 <button
                                    type="button"
                                    className={className}
                                    key={item.name}
                                    aria-describedby={tooltipId}
                                 >
                                    {inner}
                                 </button>
                              );
                           }

                           return (
                              <div className={className} key={item.name}>
                                 {inner}
                              </div>
                           );
                        })}
                     </div>
                  </article>
               ))}
            </div>

            <div className="skills-bench" aria-label="Debugging toolkit">
               <span className="skills-bench-label">Bench</span>
               <span className="skills-bench-items">
                  UART <span aria-hidden="true">·</span> Logic Analyzer{" "}
                  <span aria-hidden="true">·</span> Oscilloscope{" "}
                  <span aria-hidden="true">·</span> GDB{" "}
                  <span aria-hidden="true">·</span> Latency Profiling
               </span>
            </div>

            <div className="skills-footer">
               <p>Want the full picture of my stack and background?</p>
               <Link className="skills-link" to="/about">
                  View Full Engineering Stack
               </Link>
            </div>
         </div>
      </section>
   );
}

export default Skills;
