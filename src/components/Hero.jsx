import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      setVisible(true);
   }, []);

   return (
      <section className={`hero ${visible ? "fade-in" : ""}`}>
         <h1>Hi, I'm Jianming Zheng</h1>
         <p>CS & Engineering Student | Web Developer</p>
         <a href="#projects" className="btn">
            View My Work
         </a>
      </section>
   );
}
