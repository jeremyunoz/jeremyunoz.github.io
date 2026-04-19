import React from "react";
import PageShell from "../components/PageShell";
import About from "../components/About";
import { usePageMeta } from "../lib/usePageMeta";

export default function AboutPage() {
   usePageMeta({
      title: "About",
      description:
         "About Jeremy Zheng — embedded firmware and edge-AI engineer, UC Irvine CS, incoming Georgia Tech M.S.",
   });

   return (
      <PageShell>
         <About />
      </PageShell>
   );
}
