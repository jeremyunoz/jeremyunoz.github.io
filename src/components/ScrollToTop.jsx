import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Scrolls to top on route PUSH navigations only, unless the incoming
// navigation carries a `scrollTo` hint (HomePage handles that case so we
// don't fight it here).
export default function ScrollToTop() {
   const location = useLocation();
   const navigationType = useNavigationType();

   useEffect(() => {
      if (navigationType === "POP") return;
      if (location.state?.scrollTo) return;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
   }, [location.pathname, location.state, navigationType]);

   return null;
}
