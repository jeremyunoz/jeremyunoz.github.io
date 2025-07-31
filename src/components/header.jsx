import React, { useState } from "react";
import "./Header.css";

function Header() {
   const [open, setOpen] = useState(false);

   return (
      <header>
         <nav className="navbar">
            <h1 className="logo">MyPortfolio</h1>

            <ul className={`nav-links ${open ? "show" : ""}`}>
               <li>
                  <a href="#about" onClick={() => setOpen(false)}>
                     About
                  </a>
               </li>
               <li>
                  <a href="#projects" onClick={() => setOpen(false)}>
                     Projects
                  </a>
               </li>
               <li>
                  <a href="#contact" onClick={() => setOpen(false)}>
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
