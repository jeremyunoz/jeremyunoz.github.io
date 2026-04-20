"use client";
import React, { useRef, useState } from "react";
import {
   motion,
   useScroll,
   useMotionValueEvent,
} from "motion/react";
import { FiDownload } from "react-icons/fi";
import { cn } from "../../lib/utils";
import { HOME_ITEM, NAV_ITEMS } from "../nav/navItems";
import { useActiveNavId } from "../nav/useActiveNavId";
import { resolveHref, useNavItemClick } from "../nav/useNavItemClick";

const NAV_REVEAL_OFFSET = 72;
const NAV_COMPACT_OFFSET = 220;
const SCROLL_DIRECTION_THRESHOLD = 4;

// Render order: section nav first, then Home as the last pill.
const FLOATING_ITEMS = [...NAV_ITEMS, HOME_ITEM];

export const FloatingNav = ({ className }) => {
   const { scrollY } = useScroll();
   const lastScrollY = useRef(0);
   const [visible, setVisible] = useState(false);
   const [compact, setCompact] = useState(false);
   const activeId = useActiveNavId();
   const onItemClick = useNavItemClick();

   useMotionValueEvent(scrollY, "change", (current) => {
      if (typeof current !== "number") return;
      const previous = lastScrollY.current;
      const delta = current - previous;
      const isScrollingUp = delta < -SCROLL_DIRECTION_THRESHOLD;
      const hasPassedRevealOffset = current > NAV_REVEAL_OFFSET;
      const nextVisible = hasPassedRevealOffset ? isScrollingUp : false;
      const nextCompact = current > NAV_COMPACT_OFFSET;
      setVisible((prev) => (prev === nextVisible ? prev : nextVisible));
      setCompact((prev) => (prev === nextCompact ? prev : nextCompact));
      lastScrollY.current = current;
   });

   return (
      <motion.nav
         initial={{ opacity: 0, y: -20, scale: 0.98 }}
         animate={{
            y: visible ? 0 : -20,
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.98,
         }}
         transition={{ duration: 0.22, ease: "easeOut" }}
         aria-label="Section navigation"
         style={{ pointerEvents: visible ? "auto" : "none" }}
         className={cn(
            "fixed inset-x-0 top-4 z-[5000] mx-auto flex w-[calc(100%-1rem)] max-w-3xl items-center rounded-[28px] border border-white/70 bg-white/70 shadow-[0_18px_45px_rgba(17,24,39,0.14)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/62",
            compact ? "px-2 py-2" : "px-3 py-3",
            className
         )}
      >
         <div className="flex w-full items-center gap-1 overflow-x-auto pr-1">
            {FLOATING_ITEMS.map((item) => {
               const { id, label, Icon } = item;
               const isActive = activeId === id;
               return (
                  <a
                     key={id}
                     href={resolveHref(item)}
                     aria-label={label}
                     aria-current={isActive ? "page" : undefined}
                     onClick={onItemClick(item)}
                     className={cn(
                        "group relative flex min-w-fit flex-1 items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66b89a] focus-visible:ring-offset-2",
                        compact ? "sm:px-3" : "sm:px-4",
                        isActive
                           ? "bg-[#eef8f2] text-[#16352b] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_18px_rgba(118,180,150,0.18)] ring-1 ring-[#c7e8d9]"
                           : "text-neutral-600 hover:bg-white/80 hover:text-neutral-900"
                     )}
                  >
                     {Icon ? (
                        <Icon
                           className="text-lg leading-none sm:hidden"
                           aria-hidden="true"
                        />
                     ) : null}
                     <span className="hidden sm:inline">{label}</span>
                  </a>
               );
            })}
         </div>
         <a
            href="/assets/Jeremy_Zheng_EmbeddedFirmware_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Jeremy_Zheng_EmbeddedFirmware_Resume.pdf"
            aria-label="Download resume"
            className={cn(
               "ml-1 flex shrink-0 items-center gap-1.5 rounded-full bg-[#27453c] px-3 py-2 text-sm font-semibold text-[#f3fff9] shadow-[0_8px_20px_rgba(39,69,60,0.25)] transition-all duration-200 hover:bg-[#1d352e] hover:shadow-[0_10px_24px_rgba(39,69,60,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66b89a] focus-visible:ring-offset-2",
               compact ? "sm:px-3" : "sm:px-4"
            )}
         >
            <FiDownload className="text-base leading-none" aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
         </a>
      </motion.nav>
   );
};
