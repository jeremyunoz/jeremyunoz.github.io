import React from "react";
import "./Skills.css";
import { IconLayersIntersect } from "@tabler/icons-react";
import {
   SiArduino,
   SiCplusplus,
   SiJavascript,
   SiPlatformio,
   SiPostman,
   SiPytorch,
   SiRaspberrypi,
   SiRust,
   SiTailwindcss,
} from "react-icons/si";
import {
   FaAws,
   FaBootstrap,
   FaCss3Alt,
   FaGithub,
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
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
         ],
      },
      {
         title: "Embedded & Platforms",
         items: [
            { name: "Arduino", icon: SiArduino, color: "#00979D" },
            { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
            { name: "PlatformIO", icon: SiPlatformio, color: "#F5822A" },
            { name: "Linux", icon: FcLinux, color: "#222222" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#181717" },
            { name: "AWS", icon: FaAws, color: "#181717" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
         ],
      },
      {
         title: "Frontend",
         items: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "jQuery", icon: DiJqueryLogo, color: "#0769AD" },
            { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
         ],
      },
      {
         title: "Backend & Data",
         items: [
            { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
            { name: "MySQL", icon: DiMysql, color: "#4479A1" },
            { name: "PostgreSQL", icon: DiPostgresql, color: "#4169E1" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
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
