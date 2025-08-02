import React from "react";
import { useState } from "react";
import "./Skills.css";
import TechStackCard from "./decoration/TechStackCard";
import {
   IoLogoReact,
   IoLogoJavascript,
   IoLogoHtml5,
   IoLogoCss3,
   IoLogoPython,
} from "react-icons/io5";
import {
   DiJqueryLogo,
   DiPostgresql,
   DiRasberryPi,
   DiNodejsSmall,
   DiMysql,
   DiMootoolsBadge,
} from "react-icons/di";

import { FaAws, FaC, FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman, SiArduino, SiPlatformio, SiPytorch } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import Loader from "./decoration/Loader";
import TechButton from "./decoration/TechButton";

function Skills() {
   const [open, setOpen] = useState(false);
   return (
      <div id="skills" className="skills relative w-full overflow-clip">
         <h2 className="font-bold text-3xl mt-4 mb-4">Skills & Tools</h2>
         {/* Show Loader when not open, else show button */}
         {
            // Only show Loader if not open; show button always, but Loader and button are mutually exclusive visually
         }
         {!open && <Loader />}
         {open && (
            <>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center mb-4">
                  <TechStackCard
                     title="Frontend Tools"
                     description="React, Tailwind, and UI libraries"
                     icons={[
                        <DiJqueryLogo
                           className="h-6 w-6 text-blue-400"
                           key="jQuery-logo"
                        />,
                        <IoLogoJavascript
                           className="h-8 w-8 text-yellow-500"
                           key="js-icon"
                        />,
                        <IoLogoReact
                           className="h-10 w-10 text-sky-400"
                           key="react-logo"
                        />,
                        <IoLogoHtml5
                           className="h-8 w-8 text-orange-600"
                           key="html-icon"
                        />,
                        <IoLogoCss3
                           className="h-6 w-6 text-blue-500"
                           key="css-icon"
                        />,
                     ]}
                  />
                  <TechStackCard
                     title="Backend Tools"
                     description="Node.js, Python, MySQL, PostgreSQL, and API testing"
                     icons={[
                        <DiMysql
                           className="h-6 w-6 text-blue-600"
                           key="mysql-logo"
                        />,
                        <DiNodejsSmall
                           className="h-8 w-8 text-green-600"
                           key="nodeJS-icon"
                        />,
                        <IoLogoPython
                           className="h-10 w-10"
                           key="python-logo"
                        />,
                        <DiPostgresql
                           className="h-8 w-8 text-indigo-500"
                           key="postgresql-icon"
                        />,
                        <SiPostman
                           className="h-6 w-6 text-orange-500"
                           key="postman-icon"
                        />,
                     ]}
                  />
                  <TechStackCard
                     title="Embedded Tools"
                     description="Arduino, Linux, Embedded C, Raspberry Pi, and debugging tools"
                     icons={[
                        <SiArduino
                           className="h-6 w-6 text-green-500"
                           key="arduino-logo"
                        />,
                        <FcLinux className="h-8 w-8" key="linux-icon" />,
                        <FaC
                           className="h-10 w-10 text-blue-700"
                           key="embeddedc-logo"
                        />,
                        <DiRasberryPi
                           className="h-8 w-8 text-pink-600"
                           key="rasberrypi-icon"
                        />,
                        <DiMootoolsBadge
                           className="h-6 w-6 text-purple-500"
                           key="debug-icon"
                        />,
                     ]}
                  />
                  <TechStackCard
                     title="Platform Tools & Libraries"
                     description="PlatformIO, Git, GitHub, AWS, and PyTorch"
                     icons={[
                        <SiPlatformio
                           className="h-6 w-6  text-orange-600"
                           key="platformio-logo"
                        />,
                        <FaGitAlt
                           className="h-8 w-8 text-gray-800 dark:text-white"
                           key="git-icon"
                        />,
                        <FaGithub
                           className="h-10 w-10 text-gray-900 dark:text-white"
                           key="github-logo"
                        />,
                        <FaAws className="h-8 w-8" key="aws-icon" />,
                        <SiPytorch
                           className="h-6 w-6 text-red-600"
                           key="pytorch-icon"
                        />,
                     ]}
                  />
               </div>
            </>
         )}
         <TechButton onClick={() => setOpen(!open)}>
            {open ? "Hide Tech Stack" : "Explore My Tech Stack"}
         </TechButton>
      </div>
   );
}

export default Skills;
