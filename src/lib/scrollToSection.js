// Smooth-scrolls to the element with the given id if it exists.
// Respects prefers-reduced-motion.
export function scrollToSection(id) {
   if (!id) return;
   const el = document.getElementById(id);
   if (!el) return;

   const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
   ).matches;

   el.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
   });
}
