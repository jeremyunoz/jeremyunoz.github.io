import React from "react";
import { GrGithub } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { IconMail } from "@tabler/icons-react";
import "./Footer.css";

const GITHUB_URL = "https://github.com/jeremyunoz";
const LINKEDIN_URL = "https://www.linkedin.com/in/jeremy-zheng-unoz";
const EMAIL = "jmzheng688@gmail.com";
const MAILTO_HREF = `mailto:${EMAIL}`;

function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="footer-shell">
            <div className="footer-socials" aria-label="Social links">
               <a
                  className="footer-social"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
               >
                  <GrGithub aria-hidden="true" />
               </a>
               <a
                  className="footer-social"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
               >
                  <RiLinkedinFill aria-hidden="true" />
               </a>
               <a
                  className="footer-social"
                  href={MAILTO_HREF}
                  aria-label={`Email ${EMAIL}`}
               >
                  <IconMail size={18} stroke={1.8} aria-hidden="true" />
               </a>
            </div>

            <p className="footer-copy">
               © {currentYear} Jeremy Zheng. All rights reserved.
            </p>
         </div>
      </footer>
   );
}

export default Footer;
