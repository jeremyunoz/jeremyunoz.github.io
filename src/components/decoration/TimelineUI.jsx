import React from "react";
import Timeline from "./Timeline";

const datePillStyle = {
   display: "inline-flex",
   alignItems: "center",
   padding: "0.34rem 0.78rem",
   borderRadius: "999px",
   background: "rgba(142, 195, 176, 0.2)",
   border: "1px solid rgba(142, 195, 176, 0.45)",
   color: "#2f5f50",
   fontFamily: "var(--font-display)",
   fontSize: "0.72rem",
   fontWeight: 700,
   letterSpacing: "0.14em",
   textTransform: "uppercase",
   whiteSpace: "nowrap",
};

const itemTitleStyle = {
   lineHeight: "1.4",
   color: "#1a1a1a",
   letterSpacing: "0.025em",
};

const subheadingStyle = {
   color: "#2f5f50",
   lineHeight: "1.55",
};

const committedBadgeStyle = {
   display: "inline-flex",
   alignItems: "center",
   padding: "0.34rem 0.78rem",
   borderRadius: "999px",
   background: "linear-gradient(135deg, #B3A369, #857437)",
   color: "#ffffff",
   fontFamily: "var(--font-display)",
   fontSize: "0.72rem",
   fontWeight: 700,
   letterSpacing: "0.14em",
   textTransform: "uppercase",
   whiteSpace: "nowrap",
   boxShadow: "0 4px 10px rgba(133, 116, 55, 0.25)",
};

const rationaleStyle = {
   padding: "0.9rem 1.05rem",
   borderRadius: "14px",
   background: "rgba(142, 195, 176, 0.14)",
   border: "1px solid rgba(43, 93, 77, 0.18)",
   borderLeft: "3px solid #5aa389",
   marginBottom: "1rem",
};

const rationaleLabelStyle = {
   display: "inline-block",
   color: "#2f5f50",
   fontFamily: "var(--font-display)",
   fontSize: "0.7rem",
   fontWeight: 700,
   letterSpacing: "0.14em",
   textTransform: "uppercase",
   marginBottom: "0.3rem",
};

const rationaleTextStyle = {
   margin: 0,
   color: "#2d3d36",
   fontSize: "0.92rem",
   lineHeight: "1.6",
};

const alsoAdmittedStyle = {
   margin: 0,
   color: "#7a8a82",
   fontSize: "0.78rem",
   fontStyle: "italic",
   lineHeight: "1.55",
};

const goJacketsStyle = {
   margin: "0.7rem 0 0",
   color: "#857437",
   fontFamily: "var(--font-display)",
   fontSize: "0.82rem",
   fontWeight: 700,
   fontStyle: "italic",
   letterSpacing: "0.04em",
};

const DatePill = ({ children }) => (
   <span style={datePillStyle}>{children}</span>
);

function TimelineUI() {
   const data = [
      {
         title: "Mar 2026 - Sep 2026",
         content: (
            <div>
               <div className="mb-3 flex flex-wrap items-center gap-2">
                  <DatePill>Mar – Sep 2026</DatePill>
                  <span style={committedBadgeStyle}>Committed</span>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  UC Irvine Graduation → Georgia Tech{" "}
                  <span
                     className="gt-buzz"
                     role="img"
                     aria-label="Georgia Tech Yellow Jacket mascot"
                  >
                     🐝
                  </span>
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Committed to Georgia Tech for M.S. in Computational
                  Science and Engineering
               </p>
               <ul className="mb-5 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Graduated from UC Irvine with a B.S. in Computer
                     Science and Engineering in March 2026.
                  </li>
                  <li>
                     Starting Georgia Tech&apos;s M.S. in Computational
                     Science and Engineering in Fall 2026.
                  </li>
                  <li>
                     Focus areas: embedded systems, low-level software, and
                     edge AI.
                  </li>
               </ul>
               <div style={rationaleStyle}>
                  <span style={rationaleLabelStyle}>Why Georgia Tech</span>
                  <p style={rationaleTextStyle}>
                     GT&apos;s CSE program offers the depth in HPC,
                     numerical methods, and systems-level computing I need
                     to keep pushing further into performance-critical,
                     low-level work.
                  </p>
                  <p style={goJacketsStyle}>Go Jackets! 🐝</p>
               </div>
               <p style={alsoAdmittedStyle}>
                  Also admitted to UCLA (M.Eng. IoT Systems), Cornell
                  (M.Eng. CS), UC Irvine (M.S. Embedded &amp; Cyber-Physical
                  Systems), and Northwestern (M.S. Computer Engineering).
               </p>
            </div>
         ),
      },
      {
         title: "Jan 2025 - Jan 2026",
         content: (
            <div>
               <div className="mb-3">
                  <DatePill>Jan 2025 – Jan 2026</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  Undergraduate Research Assistant at the UCI Embedded and
                  Cyber-Physical Systems Lab
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Researched robust embedded computer vision systems for drone
                  perception
               </p>
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
               <div className="mb-3">
                  <DatePill>Sep 2025 – Mar 2026</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  AuraBot - Edge-AI Desk Wellness Companion
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Software Lead and Project Manager for a 5-member team building a
                  distributed edge-AI robotics platform
               </p>
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
               <div className="mb-3">
                  <DatePill>May – Oct 2025</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  Bincredible - BRDG Innovative Challenge
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Project Manager and Software Lead for a gamified recycling app
               </p>
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
               <div className="mb-3">
                  <DatePill>Jan – Dec 2025</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  Certifications and technical depth
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Expanded cloud, AI, and database foundations through
                  certifications and focused coursework
               </p>
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
                     alt="AWS Certified AI Practitioner badge"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/aws-certified-cloud-practitioner.png"
                     alt="AWS Certified Cloud Practitioner badge"
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
               <div className="mb-3">
                  <DatePill>Sep – Dec 2024</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  Smart-Sit Guardian
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Software Engineer on an IoT wellness monitoring system
               </p>
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
               <div className="mb-3">
                  <DatePill>Jan – Dec 2024</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  Teaching at UC Irvine
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Learning Assistant for ICS 31 and ICS 45C
               </p>
               <ul className="mb-8 list-disc space-y-3 pl-5 text-sm font-medium leading-7 text-neutral-700 md:text-base">
                  <li>
                     Supported students in programming fundamentals and C++ concepts
                     as a Learning Assistant in UC Irvine ICS courses.
                  </li>
               </ul>
               <div className="grid grid-cols-1 gap-4">
                  <img
                     src="../assets/fall24_clap.png"
                     alt="Fall 2024 ICS Learning Assistant end-of-quarter applause moment"
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
               <div className="mb-3">
                  <DatePill>2022</DatePill>
               </div>
               <p
                  className="mb-3 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={itemTitleStyle}
               >
                  IEEE Open Project Space
               </p>
               <p
                  className="mb-6 text-sm font-semibold md:text-base"
                  style={subheadingStyle}
               >
                  Early hands-on hardware projects that shaped my interest in
                  embedded systems
               </p>
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
         <style>{`
            @keyframes timeline-gt-buzz {
               0%, 100% { transform: translate(0, 0) rotate(0deg); }
               20% { transform: translate(1px, -1px) rotate(8deg); }
               40% { transform: translate(-1px, 1px) rotate(-5deg); }
               60% { transform: translate(1px, 0) rotate(6deg); }
               80% { transform: translate(-1px, -1px) rotate(-3deg); }
            }
            .gt-buzz {
               display: inline-block;
               margin-left: 0.35rem;
               font-size: 1.05em;
               transform-origin: center;
               animation: timeline-gt-buzz 1.8s ease-in-out infinite;
               filter: drop-shadow(0 1px 2px rgba(179, 163, 105, 0.35));
            }
            @media (prefers-reduced-motion: reduce) {
               .gt-buzz { animation: none; }
            }
         `}</style>
         <Timeline data={data} />
      </div>
   );
}

export default TimelineUI;
