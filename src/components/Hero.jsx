import React, { useEffect, useState } from "react";
import "./Hero.css";
import ShinyText from "./decoration/ShinyText";
import TextType from "./decoration/TextType";

function Hero() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      setVisible(true);
   }, []);

   return (
      <section className={`hero ${visible ? "fade-in" : ""}`}>
         <div className="hero-content">
            <h1 className="hero-intro">
               <TextType
                  text={["Hi, I'm Jeremy Zheng"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
               />
            </h1>
            <p>CS & Engineering Student | Code Hunter</p>
            <a href="#projects" className="btn">
               <ShinyText text="View My Work" speed={4} />
            </a>
         </div>

         <div className={`hero-image ${visible ? "fade-in" : ""}`}>
            <div
               style={{
                  background:
                     "linear-gradient(135deg, rgb(0, 255, 164), rgb(166, 104, 255))",
                  borderRadius: "50%",
                  padding: "8px",
                  display: "inline-block",
                  boxShadow:
                     "0 0 25px rgba(0, 255, 164, 0.6), 0 0 40px rgba(166, 104, 255, 0.6)",
               }}
            >
               <img src="/assets/author_2.jpg" alt="Jianming Zheng" />
            </div>
         </div>
      </section>
   );
}

export default Hero;
