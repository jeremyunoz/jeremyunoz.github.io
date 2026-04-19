import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

// HomePage stays in the main chunk (it's the first paint).
// About and the case study are split so visitors who never leave / don't pay for them.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AuraBotCaseStudy = lazy(() => import("./pages/AuraBotCaseStudy"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageFallback() {
   return (
      <div
         aria-hidden="true"
         style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-bg)",
         }}
      />
   );
}

function App() {
   return (
      <>
         <ScrollToTop />
         <Suspense fallback={<PageFallback />}>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/projects/aurabot" element={<AuraBotCaseStudy />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Suspense>
      </>
   );
}

export default App;
