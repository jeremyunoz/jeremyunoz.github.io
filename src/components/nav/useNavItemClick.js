import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../lib/scrollToSection";

// Returns a click handler for a NAV_ITEMS/HOME_ITEM entry.
//
// Behavior:
//   - If `item.scrollTo` is set:
//       * on "/" already → scroll smoothly to that section.
//       * elsewhere     → navigate("/", { state: { scrollTo } }) and let
//                         HomePage perform the scroll after mount.
//   - Else (plain route item):
//       * navigate to item.to.
//       * If clicking Home (to === "/") while already on "/", smooth-scroll
//         to the top so it's not a no-op.
export function useNavItemClick() {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   return (item) => (event) => {
      if (!item) return;
      // Allow modifier-click / middle-click to open in new tab naturally.
      if (
         event &&
         (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1)
      ) {
         return;
      }
      if (event) event.preventDefault();

      if (item.scrollTo) {
         if (pathname === "/") {
            scrollToSection(item.scrollTo);
         } else {
            navigate("/", { state: { scrollTo: item.scrollTo } });
         }
         return;
      }

      if (item.to === "/" && pathname === "/") {
         window.scrollTo({ top: 0, behavior: "smooth" });
         return;
      }

      navigate(item.to);
   };
}

// URL an item renders into (for anchor hrefs). Section-scroll items all point
// at "/" since that's where the section lives.
export function resolveHref(item) {
   return item?.to ?? "/";
}
