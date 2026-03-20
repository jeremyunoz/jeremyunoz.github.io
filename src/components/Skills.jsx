import React from "react";
import "./Skills.css";
import { IconLayersIntersect } from "@tabler/icons-react";
import {
   SiCplusplus,
   SiEspressif,
   SiFirebase,
   SiJavascript,
   SiMqtt,
   SiPytorch,
   SiRaspberrypi,
   SiRust,
   SiTensorflow,
   SiTypescript,
} from "react-icons/si";
import {
   FaAws,
   FaCss3Alt,
   FaHtml5,
   FaNodeJs,
   FaPython,
   FaReact,
} from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { DiJqueryLogo, DiMysql, DiPostgresql } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

function Skills() {
   const skillGroups = [
      {
         title: "Languages",
         items: [
            { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Rust", icon: SiRust, color: "#000000" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "SQL", icon: DiPostgresql, color: "#4169E1" },
         ],
      },
      {
         title: "Embedded & Systems",
         items: [
            { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
            { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
            { name: "MQTT", icon: SiMqtt, color: "#660066" },
            { name: "Linux", icon: FcLinux, color: "#222222" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "AWS", icon: FaAws, color: "#181717" },
         ],
      },
      {
         title: "AI, Data & Cloud",
         items: [
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "TensorFlow Lite", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "PostgreSQL", icon: DiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: DiMysql, color: "#4479A1" },
         ],
      },
      {
         title: "Web & Mobile",
         items: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "React Native", icon: FaReact, color: "#4FC3F7" },
            { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "jQuery", icon: DiJqueryLogo, color: "#0769AD" },
         ],
      },
   ];

   return (
      <section id="skills" className="skills visible">
         <div className="skills-shell">
            <div className="skills-header">
               <div className="skills-header-icon" aria-hidden="true">
                  <IconLayersIntersect size={42} stroke={1.6} />
               </div>
               <p className="skills-eyebrow">My Stack</p>
               <h2 className="skills-title">Skills & Tools</h2>
            </div>

            <div className="skills-groups">
               {skillGroups.map((group) => (
                  <article className="skill-group" key={group.title}>
                     <h3>{group.title}</h3>
                     <div className="skill-icon-grid">
                        {group.items.map((item) => (
                           <div className="skill-tile" key={item.name}>
                              <div className="skill-logo-wrap">
                                 <item.icon
                                    className="skill-logo"
                                    style={{ color: item.color }}
                                 />
                              </div>
                              <span className="skill-name">{item.name}</span>
                           </div>
                        ))}
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Skills;
