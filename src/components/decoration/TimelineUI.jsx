import React from "react";
import Timeline from "./Timeline";

function TimelineUI() {
   const data = [
      {
         title: "May - October 2025",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  BRDG Program - Built my first app, Bincredible
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     <span className="text-green-600 text-lg">🚀</span> BRDG Program Participant — Project Manager and Software Lead <span className="text-neutral-500 font-normal">(May - Oct 2025)</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <img
                     src="../assets/Bincredible.png"
                     alt="Bincredible App"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/brdg_pitchday.png"
                     alt="BRDG Pitch Day"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/BRDG_LOGO.png"
                     alt="BRDG Program Logo"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "Early 2025",
         content: (
            <div>
               <p
                  className="mb-4 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Key achievements and certifications this year
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     <span className="text-blue-600 text-lg">☁️</span> AWS Certified AI Practitioner <span className="text-neutral-500 font-normal">(Jul 2025)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     <span className="text-orange-600 text-lg">🗄️</span> MySQL Implementation Certified Associate <span className="text-neutral-500 font-normal">(Jun 2025)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     <span className="text-blue-600 text-lg">☁️</span> AWS Certified Cloud Practitioner <span className="text-neutral-500 font-normal">(May 2025)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200 mb-2">
                     <span className="text-purple-600 text-lg">🗄️</span> PostgreSQL for Everybody Specialization <span className="text-neutral-500 font-normal">(May 2025)</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <img
                     src="../assets/aws-certified-ai-practitioner.png"
                     alt="AWS Certified AI Practitioner"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/aws-certified-cloud-practitioner.png"
                     alt="AWS Certified Cloud Practitioner"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <img
                     src="../assets/Mich_SQL_Cert.png"
                     alt="University of Michigan PostgreSQL Certification"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <img
                     src="../assets/mysql_oracle.png"
                     alt="MySQL Implementation Certified Associate from Oracle"
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
                  className="mb-4 p-2 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Served as a Learning Assistant for ICS 31 and ICS 45C at UC
                  Irvine, supporting students with programming fundamentals and
                  C++ concepts.
               </p>
               <div className="mb-8 mt-2"></div>
               <div className="grid grid-cols-2 gap-4">
                  <img
                     src="../assets/fall24_clap.png"
                     alt="CLAP Fall 2024 at UC Irvine"
                     width={500}
                     height={500}
                     className="max-w-full max-h-60 rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "Changelog",
         content: (
            <div>
               <p
                  className="mb-4 p-2 text-lg font-bold text-neutral-900 md:text-xl dark:text-neutral-100"
                  style={{ lineHeight: "1.4", color: "#1a1a1a", letterSpacing: "0.025em" }}
               >
                  Open Project Space Member at the IEEE Student Branch, UC
                  Irvine
               </p>

               <div className="mb-8 mt-2"></div>
               <div className="grid grid-cols-2 gap-4">
                  <img
                     src="../assets/rover2022.jpg"
                     alt="Freshman year built rover"
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
