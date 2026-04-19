import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ProjectContactBridge } from "../components/decoration/ProjectContactBridge";
import { scrollToSection } from "../lib/scrollToSection";
import { usePageMeta } from "../lib/usePageMeta";

export default function HomePage() {
   usePageMeta({
      title: "Home",
      description:
         "Jeremy Zheng — embedded firmware and edge-AI engineer. Skills, projects, and contact.",
   });

   const location = useLocation();
   const navigate = useNavigate();
   const lastHandledRef = useRef(null);

   useEffect(() => {
      const target = location.state?.scrollTo;
      if (!target) return;
      // Guard against re-running when state hasn't changed but the effect
      // re-fires (e.g. React strict-mode double invoke in dev).
      if (lastHandledRef.current === target) return;
      lastHandledRef.current = target;

      const handle = requestAnimationFrame(() => scrollToSection(target));
      // Clear the state so a refresh or later re-render doesn't re-trigger.
      navigate(".", { replace: true, state: null });
      return () => cancelAnimationFrame(handle);
   }, [location.state, navigate]);

   return (
      <PageShell>
         <Hero />
         <Skills />
         <Projects />
         <ProjectContactBridge />
         <Contact />
      </PageShell>
   );
}
