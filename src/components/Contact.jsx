import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { GrGithub } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { IconMail } from "@tabler/icons-react";

function Contact() {
   const ref = useRef();
   const [visible, setVisible] = useState(false);

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
               <p className="contact-intro">
                  Based in Irvine, CA and open to embedded, edge AI, and systems
                  software opportunities.
               </p>
            </div>

            <div className="contact-card">
               <p className="contact-location">
                  Reach out if you&apos;re building products across devices, AI,
                  and software.
               </p>

               <div className="contact-links">
                  <a href="mailto:jmzheng688@gmail.com" aria-label="Email Jeremy">
                     <SiGmail />
                     <span className="contact-link-label">Email</span>
                  </a>

                  <a
                     href="https://github.com/jeremyunoz"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Jeremy's GitHub"
                  >
                     <GrGithub />
                     <span className="contact-link-label">GitHub</span>
                  </a>
                  <a
                     href="https://www.linkedin.com/in/jeremy-zheng-unoz"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Jeremy's LinkedIn"
                  >
                     <RiLinkedinFill />
                     <span className="contact-link-label">LinkedIn</span>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
