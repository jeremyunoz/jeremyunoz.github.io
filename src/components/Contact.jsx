import React from "react";
import "./Contact.css";

function Contact() {
   return (
      <section id="contact" className="contact">
         <h2>Contact Me</h2>
         <p>
            Email me at:{" "}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
         </p>
      </section>
   );
}

export default Contact;
