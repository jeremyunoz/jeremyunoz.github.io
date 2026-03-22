import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/About";
import { FloatingNav } from "../components/decoration/Floating_navbar";
import { MintSectionBackdrop } from "../components/decoration/MintSectionBackdrop";

const navItems = [
   { name: "About", link: "#about" },
   { name: "Skills", link: "#skills" },
   { name: "Projects", link: "#projects" },
   { name: "Contact", link: "#contact" },
];

function AboutPage() {
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
   }, []);

   return (
      <div className="App">
         <FloatingNav navItems={navItems} />
         <Header />
         <main className="page-sections mint-section-surface">
            <MintSectionBackdrop />
            <About />
         </main>
         <Footer />
      </div>
   );
}

export default AboutPage;

