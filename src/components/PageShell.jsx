import React from "react";
import Header from "./header";
import Footer from "./footer";
import { FloatingNav } from "./decoration/Floating_navbar";
import { MintSectionBackdrop } from "./decoration/MintSectionBackdrop";
import { cn } from "../lib/utils";

export default function PageShell({ children, mainClassName }) {
   return (
      <div className="App">
         <FloatingNav />
         <Header />
         <main className={cn("page-sections mint-section-surface", mainClassName)}>
            <MintSectionBackdrop />
            {children}
         </main>
         <Footer />
      </div>
   );
}
