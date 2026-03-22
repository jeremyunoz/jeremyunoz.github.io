import React from "react";
import "./Skills.css";
import { IconLayersIntersect } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import {
   SiCplusplus,
   SiEspressif,
   SiFirebase,
   SiMqtt,
   SiPytorch,
   SiRaspberrypi,
   SiTensorflow,
   SiRust,
   SiArduino,
   SiOllama,
   SiYolo,
} from "react-icons/si";
import {
   FaAws,
   FaNodeJs,
   FaPython,
   FaReact,
} from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

function Skills() {
   const focusAreas = [
      {
         title: "Embedded Systems",
         items: [
            { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Rust", icon: SiRust, color: "#000000" },
            { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
            { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
            { name: "MQTT", icon: SiMqtt, color: "#660066" },
            { name: "Arduino", icon: SiArduino, color: "#00979D" },
         ],
      },
      {
         title: "Edge AI",
         items: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "YOLO", icon: SiYolo, color: "#000000" },
            { name: "TensorFlow Lite", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Linux", icon: FcLinux, color: "#222222" },
            { name: "Ollama", icon: SiOllama, color: "#000000" },
         ],
      },
      {
         title: "Apps & Cloud",
         items: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
            { name: "AWS", icon: FaAws, color: "#181717" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "PostgreSQL", icon: DiPostgresql, color: "#4169E1" },
         ],
      },
   ];

   const featuredTools = [
      { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Linux", icon: FcLinux, color: "#222222" },
      { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
      { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "YOLO", icon: SiYolo, color: "#000000" },
   ];

   return (
      <section id="skills" className="skills visible">
         <div className="skills-shell">
            <div className="skills-header">
               <div className="skills-header-icon" aria-hidden="true">
                  <IconLayersIntersect size={42} stroke={1.6} />
               </div>
               <p className="skills-eyebrow">Built for the edge</p>
               <h2 className="skills-title">Embedded Systems & Edge AI</h2>
            </div>

            <div className="skills-featured-tools">
               {featuredTools.map((item) => (
                  <div className="skill-chip" key={item.name}>
                     <item.icon
                        className="skill-chip-icon"
                        style={{ color: item.color }}
                     />
                     <span>{item.name}</span>
                  </div>
               ))}
            </div>

            <div className="skills-groups">
               {focusAreas.map((group) => (
                  <article className="skill-group" key={group.title}>
                     <h3>{group.title}</h3>
                     <div className="skill-inline-list">
                        {group.items.map((item) => (
                           <div className="skill-inline-item" key={item.name}>
                              <item.icon
                                 className="skill-inline-icon"
                                 style={{ color: item.color }}
                              />
                              <span>{item.name}</span>
                           </div>
                        ))}
                     </div>
                  </article>
               ))}
            </div>

            <div className="skills-footer">
               <p>Want the full picture of my stack and background?</p>
               <Link className="skills-link" to="/about">
                  View full stack
               </Link>
            </div>
         </div>
      </section>
   );
}

export default Skills;
