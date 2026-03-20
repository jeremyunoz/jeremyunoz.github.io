import React, { useEffect, useState } from "react";
import "./Hero.css";
import TextType from "./decoration/TextType";
import Button from "./decoration/Button";
import BackgroundBeamsWithCollision from "./background/BeamBackground";
import ProfileCard from "./background/ProfileCard";
import { useNavigate } from "react-router-dom";

function Hero() {
   const [visible, setVisible] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      setVisible(true);
   }, []);

   return (
      <BackgroundBeamsWithCollision>
         <section id="hero" className={`hero ${visible ? "fade-in" : ""}`}>
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
               <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <Button
                     label="Download CV"
                     href="/assets/resume.pdf"
                     download
                  />
                  <Button
                     label="View My Work"
                     onClick={() => navigate("/?section=projects")}
                  />
               </div>
            </div>

            {/* <div className={`hero-image ${visible ? "fade-in" : ""}`}>
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
                  <img src={"./assets/author2.png"} alt="Author Jeremy Zheng" />
               </div>
            </div> */}
            <ProfileCard />
         </section>
      </BackgroundBeamsWithCollision>
   );
}

export default Hero;
