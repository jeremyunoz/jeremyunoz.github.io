import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { GrGithub } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import {
   IconMail,
   IconCalendarEvent,
   IconCopy,
   IconCheck,
   IconFileText,
} from "@tabler/icons-react";

const EMAIL = "jmzheng688@gmail.com";
const GITHUB_URL = "https://github.com/jeremyunoz";
const LINKEDIN_URL = "https://www.linkedin.com/in/jeremy-zheng-unoz";
const CALENDLY_URL = "https://calendly.com/jmzheng688/30min";
const RESUME_URL = "/assets/Jeremy_Zheng_EmbeddedFirmware_Resume.pdf";
const MAILTO_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(
   "Embedded / Firmware role"
)}`;

function Contact() {
   const ref = useRef();
   const [visible, setVisible] = useState(false);
   const [copied, setCopied] = useState(false);

   useEffect(() => {
      if (!ref.current) return undefined;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true);
               observer.disconnect();
            }
         },
         { threshold: 0.2 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
   }, []);

   const handleCopyEmail = async () => {
      if (!navigator.clipboard?.writeText) return;
      try {
         await navigator.clipboard.writeText(EMAIL);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch {
         setCopied(false);
      }
   };

   return (
      <section
         id="contact"
         ref={ref}
         className={`contact ${visible ? "visible" : ""}`}
      >
         <div className="contact-shell">
            <div className="contact-header">
               <div className="contact-header-icon" aria-hidden="true">
                  <IconMail size={42} stroke={1.6} />
               </div>
               <p className="contact-kicker">Let&apos;s Connect</p>
               <h2 className="contact-title">Contact Me</h2>
            </div>

            <div className="contact-card">
               <p className="contact-availability" aria-label="Response time">
                  <span
                     className="contact-availability-dot"
                     aria-hidden="true"
                  />
                  Usually replies within 24h · Pacific Time
               </p>

               <p className="contact-pitch">
                  If you&apos;re hiring for{" "}
                  <strong>embedded, firmware, or edge-AI roles</strong>,
                  I&apos;d love to hear from you.
               </p>

               <div className="contact-cta-row">
                  <div
                     className="contact-cta contact-cta-primary contact-cta-email"
                     role="group"
                     aria-label="Email Jeremy"
                  >
                     <a
                        className="contact-cta-email-link"
                        href={MAILTO_HREF}
                        aria-label={`Email ${EMAIL}`}
                     >
                        <IconMail size={18} stroke={2} aria-hidden="true" />
                        <span className="contact-cta-email-address">
                           {EMAIL}
                        </span>
                     </a>
                     <button
                        type="button"
                        className="contact-cta-email-copy"
                        onClick={handleCopyEmail}
                        aria-label={
                           copied
                              ? "Email copied to clipboard"
                              : "Copy email to clipboard"
                        }
                     >
                        {copied ? (
                           <IconCheck
                              size={16}
                              stroke={2.2}
                              aria-hidden="true"
                           />
                        ) : (
                           <IconCopy
                              size={16}
                              stroke={2.2}
                              aria-hidden="true"
                           />
                        )}
                     </button>
                  </div>

                  <a
                     className="contact-cta contact-cta-secondary"
                     href={CALENDLY_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Book a 15-minute intro call"
                  >
                     <IconCalendarEvent
                        size={18}
                        stroke={2}
                        aria-hidden="true"
                     />
                     Book 15 min
                  </a>
               </div>

               <div
                  className="contact-divider"
                  role="separator"
                  aria-label="Also here"
               >
                  <span>also here</span>
               </div>

               <div className="contact-socials">
                  <a
                     className="contact-social"
                     href={GITHUB_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Jeremy's GitHub"
                  >
                     <GrGithub aria-hidden="true" />
                     <span className="contact-social-label">GitHub</span>
                  </a>
                  <a
                     className="contact-social"
                     href={LINKEDIN_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Jeremy's LinkedIn"
                  >
                     <RiLinkedinFill aria-hidden="true" />
                     <span className="contact-social-label">LinkedIn</span>
                  </a>
                  <a
                     className="contact-social"
                     href={RESUME_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     download="Jeremy_Zheng_EmbeddedFirmware_Resume.pdf"
                     aria-label="Download Jeremy's resume"
                  >
                     <IconFileText size={18} stroke={1.8} aria-hidden="true" />
                     <span className="contact-social-label">Resume</span>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
