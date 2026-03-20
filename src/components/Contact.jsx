import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { GrGithub } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

function Contact() {
   const ref = useRef();
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (ref.current) {
            const top = ref.current.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) setVisible(true);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <section
         id="contact"
         ref={ref}
         className={`contact ${visible ? "visible" : ""}`}
      >
         <h2 className="font-semibold">Contact Me</h2>
         <p className="contact-location">Based in Irvine, CA</p>
         <div className="contact-links">
            <a href="mailto:jianmiz1@uci.edu">
               <SiGmail />
            </a>

            <a
               href="https://github.com/jeremyunoz"
               target="_blank"
               rel="noopener noreferrer"
            >
               <GrGithub />
            </a>
            <a
               href="https://www.linkedin.com/in/jeremy-zheng-a207aa278/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <RiLinkedinFill />
            </a>
         </div>
      </section>
   );
}

export default Contact;
