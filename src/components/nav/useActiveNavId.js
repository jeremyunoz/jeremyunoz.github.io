import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HOME_SECTION_IDS } from "./navItems";

const ACTIVE_THRESHOLD = 150;

// Returns the NAV_ITEMS id that should appear active for the current route
// and scroll position.
//
//  - /about                 -> "about"
//  - /projects/*            -> "projects" (any project detail page)
//  - / + scrolled past a section -> that section id
//  - / + at the top         -> "home"
//  - anything else          -> null
export function useActiveNavId() {
   const { pathname } = useLocation();
   const [homeSection, setHomeSection] = useState("home");

   useEffect(() => {
      if (pathname !== "/") return undefined;

      const update = () => {
         let current = "home";
         for (const id of HOME_SECTION_IDS) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (el.getBoundingClientRect().top <= ACTIVE_THRESHOLD) {
               current = id;
            }
         }
         setHomeSection((prev) => (prev === current ? prev : current));
      };

      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
         window.removeEventListener("scroll", update);
         window.removeEventListener("resize", update);
      };
   }, [pathname]);

   if (pathname === "/about") return "about";
   if (pathname.startsWith("/projects/")) return "projects";
   if (pathname !== "/") return null;
   return homeSection;
}
