import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { MintSectionBackdrop } from "../components/decoration/MintSectionBackdrop";
import { FloatingNav } from "../components/decoration/Floating_navbar";
import { ProjectContactBridge } from "../components/decoration/ProjectContactBridge";

const navItems = [
   { name: "About", link: "#about", icon: "👤" },
   { name: "Skills", link: "#skills", icon: "💪" },
   { name: "Projects", link: "#projects", icon: "📂" },
   { name: "Contact", link: "#contact", icon: "✉️" },
];

function scrollToSection(sectionId) {
   const el = document.getElementById(sectionId);
   if (!el) return;
   el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HomePage() {
   const location = useLocation();
   const section = new URLSearchParams(location.search).get("section");

   useEffect(() => {
      if (!section) return;
      // Ensure layout is settled before scrolling.
      requestAnimationFrame(() => scrollToSection(section));
   }, [section]);

   return (
      <div className="App">
         <FloatingNav navItems={navItems} />
         <Header />
         <main className="page-sections mint-section-surface">
            <MintSectionBackdrop />
            <Hero />
            {/* About is intentionally not rendered on home; it lives on /about */}
            <Skills />
            <Projects />
            <ProjectContactBridge />
            <Contact />
         </main>
         <Footer />
      </div>
   );
}

export default HomePage;

