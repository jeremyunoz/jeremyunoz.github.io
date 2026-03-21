"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Timeline = ({ data }) => {
   const timelineRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: timelineRef,
      offset: ["start 28%", "end 78%"],
   });
   const progressOpacity = useTransform(scrollYProgress, [0, 0.08], [0.2, 1]);
   const indicatorY = useTransform(scrollYProgress, [0, 1], ["2%", "98%"]);

   return (
      <div ref={timelineRef} className="w-full font-sans md:px-10">
         <div className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
               <div
                  key={index}
                  className={`flex justify-start pt-10 md:pt-40 md:gap-10`}
               >
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                     <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white/90 flex items-center justify-center shadow-[0_10px_24px_rgba(43,93,77,0.12)]">
                        <div className="h-4 w-4 rounded-full border border-[#8ec3b0] bg-[#bcead5] p-2" />
                     </div>
                     <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#6a9486] [font-family:var(--font-display)]">
                        {item.title}
                     </h3>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                     <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#6a9486] [font-family:var(--font-display)]">
                        {item.title}
                     </h3>
                     {item.content}{" "}
                  </div>
               </div>
            ))}
            <div className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] overflow-hidden rounded-full bg-[linear-gradient(to_bottom,rgba(142,195,176,0.08),rgba(142,195,176,0.4)_12%,rgba(142,195,176,0.34)_88%,rgba(142,195,176,0.08))] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />
            <motion.div
               aria-hidden="true"
               className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] origin-top overflow-hidden rounded-full bg-gradient-to-b from-[#dff7ed] via-[#9ed5c5] to-[#79bfa9] shadow-[0_0_18px_rgba(142,195,176,0.45)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
               style={{
                  scaleY: scrollYProgress,
                  opacity: progressOpacity,
               }}
            />
            <motion.div
               aria-hidden="true"
               className="absolute md:left-8 left-8 z-10 h-4 w-4 rounded-full border border-white/80 bg-[#ecfbf4] shadow-[0_0_0_4px_rgba(188,234,213,0.32),0_0_18px_rgba(142,195,176,0.45)]"
               style={{
                  top: indicatorY,
                  x: "-43%",
                  y: "-50%",
                  opacity: progressOpacity,
               }}
            />
         </div>
      </div>
   );
};

export default Timeline;
