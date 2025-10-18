import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { FloatingNav } from "./components/decoration/Floating_navbar";
import TimelineUI from "./components/decoration/TimelineUI";
import Skills from "./components/Skills";

const navItems = [
   { name: "About", link: "#about", icon: "👤" },
   { name: "Skills", link: "#skills", icon: "💪" },
   { name: "Projects", link: "#projects", icon: "📂" },
   { name: "Contact", link: "#contact", icon: "✉️" },
];

function App() {
   return (
      <>
         <FloatingNav navItems={navItems} />
         <div className="App">
            <Header />
            <Hero />
            <About />
            <TimelineUI />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
         </div>
      </>
   );
}

export default App;
