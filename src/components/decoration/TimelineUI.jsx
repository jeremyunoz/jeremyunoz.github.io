import React from "react";
import Timeline from "./Timeline";

function TimelineUI() {
   const data = [
      {
         title: "2025",
         content: (
            <div>
               <p
                  className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
                  style={{ lineHeight: "1.25", color: "#333" }}
               >
                  Key achievements and certifications this year
               </p>
               <div className="mb-8 mt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                     ✅ AWS Certified AI Practitioner (Jul 2025)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                     ✅ MySQL Implementation Certified Associate (Jun 2025)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                     ✅ AWS Certified Cloud Practitioner (May 2025)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                     ✅ PostgreSQL for Everybody Specialization (May 2025)
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
                  className="mb-4 p-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
                  style={{ lineHeight: "1.25", color: "#333" }}
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
                  className="mb-4 p-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
                  style={{ lineHeight: "1.25", color: "#333" }}
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
