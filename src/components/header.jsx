import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();

   const goTo = (hash) => {
      if (!hash || !hash.startsWith("#")) return;
      const id = hash.slice(1);
      if (id === "about") navigate("/about");
      else navigate(`/?section=${id}`);
   };

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
               MyPortfolio
            </h1>

            <ul className={`nav-links ${open ? "show" : ""}`}>
               <li>
                  <a
                     href="#about"
                     onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        goTo("#about");
                     }}
                  >
                     About
                  </a>
               </li>
               <li>
                  <a
                     href="#skills"
                     onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        goTo("#skills");
                     }}
                  >
                     Skills
                  </a>
               </li>
               <li>
                  <a
                     href="#projects"
                     onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        goTo("#projects");
                     }}
                  >
                     Projects
                  </a>
               </li>
               <li>
                  <a
                     href="#contact"
                     onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        goTo("#contact");
                     }}
                  >
                     Contact
                  </a>
               </li>
            </ul>

            <div className="hamburger" onClick={() => setOpen(!open)}>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </nav>
      </header>
   );
}

export default Header;
