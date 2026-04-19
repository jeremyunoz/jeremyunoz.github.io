import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AuraBotCaseStudy from "./pages/AuraBotCaseStudy.jsx";

function App() {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/projects/aurabot" element={<AuraBotCaseStudy />} />
      </Routes>
   );
}

export default App;
