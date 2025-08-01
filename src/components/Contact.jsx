import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { GrGithub } from "react-icons/gr";

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
         <h2>Contact Me</h2>
         <p>
            Feel free to email me at{" "}
            <a href="mailto:your-email@example.com">jianmiz1@uci.edu</a>
         </p>
         <a
            href="https://github.com/jeremyunoz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "2rem", marginLeft: "10px" }}
         >
            <GrGithub />
         </a>
      </section>
   );
}

export default Contact;
