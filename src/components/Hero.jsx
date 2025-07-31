import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      setVisible(true);
   }, []);

   return (
      <section className={`hero ${visible ? "fade-in" : ""}`}>
         <div className="hero-content">
            <h1>Hi, I'm Jeremy Zheng</h1>
            <p>CS & Engineering Student | Code Hunter</p>
            <a href="#projects" className="btn">
               View My Work
            </a>
         </div>

         <div className={`hero-image ${visible ? "fade-in" : ""}`}>
            <img src="/assets/author.png" alt="Jianming Zheng" />
         </div>
      </section>
   );
}
