import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { HOME_ITEM, NAV_ITEMS } from "./nav/navItems";
import { useActiveNavId } from "./nav/useActiveNavId";
import { resolveHref, useNavItemClick } from "./nav/useNavItemClick";

// Header order: section nav, then Home last (matches the FloatingNav).
const HEADER_ITEMS = [...NAV_ITEMS, HOME_ITEM];

function Header() {
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();
   const activeId = useActiveNavId();
   const onItemClick = useNavItemClick();

   const handleLogo = () => {
      setOpen(false);
      navigate("/");
   };

   return (
      <header>
         <nav className="navbar">
            <h1
               className="logo"
               onClick={handleLogo}
               onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                     e.preventDefault();
                     handleLogo();
                  }
               }}
               role="button"
               tabIndex={0}
               aria-label="Jeremy Zheng — go to home page"
            >
               <span className="logo-mark" aria-hidden="true">
                  <span className="logo-mark-letter logo-mark-letter-j">J</span>
                  <span className="logo-mark-letter logo-mark-letter-z">Z</span>
               </span>
               <span className="logo-wordmark">
                  <span className="logo-wordmark-name">Jeremy Zheng</span>
                  <span className="logo-wordmark-tag">Embedded · Edge AI</span>
               </span>
            </h1>

            <ul className={`nav-links ${open ? "show" : ""}`}>
               {HEADER_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  const baseHandler = onItemClick(item);
                  return (
                     <li key={item.id}>
                        <a
                           href={resolveHref(item)}
                           aria-current={isActive ? "page" : undefined}
                           className={isActive ? "active" : ""}
                           onClick={(event) => {
                              setOpen(false);
                              baseHandler(event);
                           }}
                        >
                           {item.label}
                        </a>
                     </li>
                  );
               })}
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
