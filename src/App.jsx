import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
   return (
      <div className="App">
         <Header />
         <Hero />
         <About />
         <Projects />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
