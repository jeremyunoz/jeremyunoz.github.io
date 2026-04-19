import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../lib/usePageMeta";

const LINKS = [
   { label: "Home", to: "/" },
   { label: "About", to: "/about" },
   { label: "Projects", to: "/", state: { scrollTo: "projects" } },
   { label: "Contact", to: "/", state: { scrollTo: "contact" } },
];

export default function NotFoundPage() {
   usePageMeta({ title: "Not found" });

   return (
      <PageShell>
         <section
            className="visible"
            style={{
               minHeight: "60vh",
               padding: "8rem 1.5rem 4rem",
               textAlign: "center",
            }}
         >
            <p
               style={{
                  margin: 0,
                  color: "#4b7a6a",
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--section-label-size)",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
               }}
            >
               404
            </p>
            <h1
               style={{
                  marginTop: "0.5rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--section-heading-size)",
               }}
            >
               Page not found
            </h1>
            <p
               style={{
                  margin: "0.75rem auto 2rem",
                  maxWidth: 520,
                  color: "var(--color-text-muted)",
               }}
            >
               That URL doesn't match anything here. Try one of the main sections:
            </p>
            <div
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.75rem",
               }}
            >
               {LINKS.map((item) => (
                  <Link
                     key={item.label}
                     to={item.to}
                     state={item.state}
                     style={{
                        padding: "0.6rem 1.1rem",
                        borderRadius: "999px",
                        background: "#eef8f2",
                        color: "#16352b",
                        fontWeight: 600,
                        border: "1px solid #c7e8d9",
                     }}
                  >
                     {item.label}
                  </Link>
               ))}
            </div>
         </section>
      </PageShell>
   );
}
