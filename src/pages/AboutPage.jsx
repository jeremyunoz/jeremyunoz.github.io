import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/About";
import { FloatingNav } from "../components/decoration/Floating_navbar";

const navItems = [
   { name: "About", link: "#about", icon: "👤" },
   { name: "Skills", link: "#skills", icon: "💪" },
   { name: "Projects", link: "#projects", icon: "📂" },
   { name: "Contact", link: "#contact", icon: "✉️" },
];

function AboutPage() {
   return (
      <div className="App">
         <FloatingNav navItems={navItems} />
         <Header />
         <About />
         <Footer />
      </div>
   );
}

export default AboutPage;

