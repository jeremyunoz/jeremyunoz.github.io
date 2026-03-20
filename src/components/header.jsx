import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const [activeItem, setActiveItem] = useState("home");

   const navItems = [
      { id: "about", label: "About", href: "#about" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "contact", label: "Contact", href: "#contact" },
      { id: "home", label: "Home", href: "/" },
   ];

   const goTo = (hash) => {
      if (!hash || !hash.startsWith("#")) return;
      const id = hash.slice(1);
      if (id === "about") navigate("/about");
      else navigate(`/?section=${id}`);
   };

   useEffect(() => {
      if (location.pathname === "/about") {
         setActiveItem("about");
         return;
      }

      if (location.pathname !== "/") {
         setActiveItem("");
         return;
      }

      const updateActiveSection = () => {
         const sectionIds = ["skills", "projects", "contact"];
         const threshold = 150;
         let currentSection = "home";

         for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (!section) continue;

            const rect = section.getBoundingClientRect();
            if (rect.top <= threshold) {
               currentSection = id;
            }
         }

         setActiveItem(currentSection);
      };

      updateActiveSection();
      window.addEventListener("scroll", updateActiveSection, { passive: true });
      window.addEventListener("resize", updateActiveSection);

      return () => {
         window.removeEventListener("scroll", updateActiveSection);
         window.removeEventListener("resize", updateActiveSection);
      };
   }, [location.pathname, location.search]);

   return (
      <header>
         <nav className="navbar">
            <h1
               className="logo"
               style={{
                  background: "#2b5d4d",
                  fontFamily: "'Bungee Shade', cursive",
               }}
            >
               Jeremy Zheng
            </h1>

            <ul className={`nav-links ${open ? "show" : ""}`}>
               {navItems.map((item) => (
                  <li key={item.id}>
                     <a
                        href={item.href}
                        className={activeItem === item.id ? "active" : ""}
                        onClick={(e) => {
                           e.preventDefault();
                           setOpen(false);
                           setActiveItem(item.id);

                           if (item.id === "home") {
                              navigate("/");
                              return;
                           }

                           goTo(item.href);
                        }}
                     >
                        {item.label}
                     </a>
                  </li>
               ))}
            </ul>

            <button
               type="button"
               className="hamburger"
               aria-label={open ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={open}
               onClick={() => setOpen(!open)}
            >
               <div></div>
               <div></div>
               <div></div>
            </button>
         </nav>
      </header>
   );
}

export default Header;
