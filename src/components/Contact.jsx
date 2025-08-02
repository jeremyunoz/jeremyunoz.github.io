import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { GrGithub } from "react-icons/gr";
import { SiGmail, SiLinkedin } from "react-icons/si";

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
         <p style={{ textAlign: "center", marginTop: "0.5rem", fontSize: "1rem" }}>
            Based in Irvine, CA
         </p>
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               gap: "2rem",
               marginTop: "1rem",
            }}
         >
            <a href="mailto:jianmiz1@uci.edu" style={{ fontSize: "2rem" }}>
               <SiGmail />
            </a>

            <a
               href="https://github.com/jeremyunoz"
               target="_blank"
               rel="noopener noreferrer"
               style={{ fontSize: "2rem" }}
            >
               <GrGithub />
            </a>
            <a
               href="https://www.linkedin.com/in/jeremy-zheng-a207aa278/"
               target="_blank"
               rel="noopener noreferrer"
               style={{ fontSize: "2rem" }}
            >
               <SiLinkedin />
            </a>
         </div>
      </section>
   );
}

export default Contact;
