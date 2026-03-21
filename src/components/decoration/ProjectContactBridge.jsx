import React from "react";
import { motion } from "motion/react";
import "./ProjectContactBridge.css";

const bridgeItems = [
   "Open to embedded systems roles",
   "Edge AI",
   "AIoT",
   "Embedded Software Engineering",
   "Firmware Engineering",
   "Let's build something useful",
];

function renderItems(items, keyPrefix) {
   return items.map((item, index) => (
      <span className="project-contact-bridge__item" key={`${keyPrefix}-${index}`}>
         {item}
      </span>
   ));
}

export function ProjectContactBridge() {
   return (
      <div className="project-contact-bridge" aria-hidden="true">
         <motion.div
            className="project-contact-bridge__glow"
            animate={{
               x: ["-14%", "14%", "-14%"],
               scaleX: [0.9, 1.08, 0.9],
               opacity: [0.7, 1, 0.7],
            }}
            transition={{
               duration: 7,
               repeat: Infinity,
               ease: "easeInOut",
            }}
         />

         <div className="project-contact-bridge__track">
            <div className="project-contact-bridge__marquee">
               <div className="project-contact-bridge__row">
                  {renderItems(bridgeItems, "bridge-a")}
               </div>
               <div className="project-contact-bridge__row">
                  {renderItems(bridgeItems, "bridge-b")}
               </div>
            </div>
         </div>
      </div>
   );
}
