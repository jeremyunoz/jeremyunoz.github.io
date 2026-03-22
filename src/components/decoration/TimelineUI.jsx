import React from "react";
import Timeline from "./Timeline";

function TimelineUI() {
   const data = [
      {
         title: "Mar 2026 - Sep 2026",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  UC Irvine Graduation and Next Academic Step
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Graduated from UC Irvine and deciding between admitted
                     graduate programs
                  </div>
               </div>
               <ul className="list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Graduated from UC Irvine in March 2026 and will begin
                     pursuing a Master&apos;s degree in September 2026.
                  </li>
                  <li>
                     Admitted to UCLA&apos;s Master of Engineering in Internet of
                     Things (IoT) Systems.
                  </li>
                  <li>
                     Admitted to Cornell&apos;s Master of Engineering in Computer
                     Science.
                  </li>
                  <li>
                     Admitted to UC Irvine&apos;s Master of Embedded and
                     Cyber-Physical Systems.
                  </li>
                  <li>
                     Admitted to Northwestern&apos;s Master of Science in Computer
                     Engineering.
                  </li>
               </ul>
            </div>
         ),
      },
      {
         title: "Jan 2025 - Jan 2026",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Undergraduate Research Assistant at the UCI Embedded and
                  Cyber-Physical Systems Lab
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Researched robust embedded computer vision systems for
                     drone perception
                     <span className="text-neutral-500 font-normal">
                        (Jan 2025 - Jan 2026)
                     </span>
                  </div>
               </div>
               <ul className="list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Built Python tooling with a Gradio interface to inject blur,
                     distortion, and other visual perturbations into drone camera
                     feeds for robustness testing.
                  </li>
                  <li>
                     Evaluated YOLOv8 object detection on an embedded drone platform,
                     benchmarking real-time inference from 10 to 40 FPS under
                     simulated sensor noise.
                  </li>
                  <li>
                     Focused on how embedded perception systems degrade in realistic
                     operating conditions and how that affects deployment.
                  </li>
               </ul>
            </div>
         ),
      },
      {
         title: "Sep 2025 - Mar 2026",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  AuraBot - Edge-AI Desk Wellness Companion
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Software Lead and Project Manager for a 5-member team building a
                     distributed edge-AI robotics platform
                     <span className="text-neutral-500 font-normal">
                        (Sep 2025 - Mar 2026)
                     </span>
                  </div>
               </div>
               <ul className="mb-8 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Designed distributed software architecture across edge and
                     embedded nodes using Raspberry Pi 5, ESP32-P4, MQTT, and
                     WebSocket audio streaming.
                  </li>
                  <li>
                     Implemented a real-time presence detection pipeline using an
                     IMX500 AI camera and PIR sensor fusion that achieved about 10 FPS
                     with about 99.9 ms mean latency.
                  </li>
                  <li>
                     Developed a voice interaction pipeline from STT to LLM to TTS,
                     enabling conversational reminders with about 95% command
                     recognition accuracy.
                  </li>
               </ul>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <img
                     src="../assets/aurabot_component.png"
                     alt="AuraBot Prototype"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/aurabot_demo.png"
                     alt="UCI 2026 EECS Undergraduate Senior Design Demo Day"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "May - Oct 2025",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Bincredible - BRDG Innovative Challenge
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Project Manager and Software Lead for a gamified recycling app
                     <span className="text-neutral-500 font-normal">
                        (May - Oct 2025)
                     </span>
                  </div>
               </div>
               <ul className="mb-8 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Developed a mobile app with React Native, TypeScript, and
                     Firebase to encourage real-world recycling behavior.
                  </li>
                  <li>
                     Led Agile development across a six-person team and delivered a
                     working prototype within a 20-week timeline.
                  </li>
                  <li>
                     Improved response latency by about 25% with Firebase indexing
                     and deployed a Raspberry Pi 5 waste-sorting classifier with 93%
                     real-time accuracy.
                  </li>
               </ul>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <img
                     src="../assets/Bincredible.png"
                     alt="Bincredible app preview"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/brdg_pitchday.png"
                     alt="BRDG pitch day"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "2025 Highlights",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Certifications and technical depth
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Expanded cloud, AI, and database foundations through
                     certifications and focused coursework
                     <span className="text-neutral-500 font-normal">
                        (2025)
                     </span>
                  </div>
               </div>
               <ul className="mb-8 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Earned the AWS Certified AI Practitioner and AWS Certified Cloud
                     Practitioner certifications.
                  </li>
                  <li>
                     Completed advanced SQL and database training, including MySQL and
                     PostgreSQL-focused coursework and certification work.
                  </li>
               </ul>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <img
                     src="../assets/aws-certified-ai-practitioner.png"
                     alt="AWS certifications"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/aws-certified-cloud-practitioner.png"
                     alt="AWS certifications"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  
               </div>
            </div>
         ),
      },
      {
         title: "2024",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Smart-Sit Guardian
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Software Engineer on an IoT wellness monitoring system
                     <span className="text-neutral-500 font-normal">
                        (Sep - Dec 2024)
                     </span>
                  </div>
               </div>
               <ul className="list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Built a smart seat prototype that tracked posture, heart rate,
                     SpO2, and sitting duration to help users recognize unhealthy
                     sedentary patterns.
                  </li>
                  <li>
                     Implemented C++ firmware on a LILYGO ESP32 to interface with
                     multiple sensors through I2C and collect data every 3 seconds.
                  </li>
                  <li>
                     Created an IoT pipeline with AWS IoT Core, MQTT, DynamoDB, and
                     S3 to stream metrics and store the 100 most recent records per
                     user.
                  </li>
               </ul>
            </div>
         ),
      },
      {
         title: "2024 Teaching",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Teaching at UC Irvine
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Learning Assistant for ICS 31 and ICS 45C
                     <span className="text-neutral-500 font-normal">
                        (2024)
                     </span>
                  </div>
               </div>
               <ul className="mb-8 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Supported students in programming fundamentals and C++ concepts
                     as a Learning Assistant in UC Irvine ICS courses.
                  </li>
               </ul>
               <div className="grid grid-cols-1 gap-4">
                  <img
                     src="../assets/fall24_clap.png"
                     alt="AWS certifications"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "Early Foundation",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  IEEE Open Project Space
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     Early hands-on hardware projects that shaped my interest in
                     embedded systems
                  </div>
               </div>
               <ul className="mb-8 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Joined the IEEE Student Branch Open Project Space at UC Irvine
                     and worked on practical build-focused projects.
                  </li>
                  <li>
                     Those early experiences with rover-style hardware and team
                     collaboration pushed me toward embedded, IoT, and systems work.
                  </li>
               </ul>
               <div className="grid grid-cols-1 gap-4">
                  <img
                     src="../assets/rover2022.jpg"
                     alt="IEEE Open Project Space Rover 2022"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
            </div>
         ),
      },
   ];
   return (
      <div className="relative w-full overflow-clip">
         <Timeline data={data} />
      </div>
   );
}

export default TimelineUI;
