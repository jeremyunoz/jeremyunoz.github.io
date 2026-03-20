"use client";
import React from "react";

const Timeline = ({ data }) => {
   return (
      <div className="w-full font-sans md:px-10">
         <div className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
               <div
                  key={index}
                  className={`flex justify-start pt-10 md:pt-40 md:gap-10`}
               >
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                     <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                     </div>
                     <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                        {item.title}
                     </h3>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                     <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                        {item.title}
                     </h3>
                     {item.content}{" "}
                  </div>
               </div>
            ))}
            <div
               className="absolute md:left-8 left-8 top-0 bottom-0 overflow-hidden w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            />
         </div>
      </div>
   );
};

export default Timeline;
