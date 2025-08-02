import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

const ProfileCard = () => {
   return (
      <StyledWrapper>
         <div className="container">
            <div className="card">
               <div className="front">
                  <div className="card-top">
                     <p className="card-top-para">Profile</p>
                  </div>
                  <img
                     src="./assets/author2.png"
                     alt="Profile"
                     className="profile-img"
                  />
                  <p className="heading">Embedded Systems Enthusiast</p>
                  <p className="follow">Follow me for more...</p>
               </div>
               <div className="back">
                  <p className="heading">Follow Me</p>
                  <svg
                     viewBox="0 0 16 16"
                     className="bi bi-person-add"
                     fill="currentColor"
                     height={100}
                     width={100}
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                     <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>
                  <div className="icons">
                     <a
                        href="https://www.instagram.com/jeremyz_uno/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaInstagram size={32} />
                     </a>

                     <a
                        href="https://www.linkedin.com/in/jeremy-zheng-a207aa278/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaLinkedin size={32} />
                     </a>

                     <a
                        href="./assets/qrcodeWechat.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <IoLogoWechat size={32} />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </StyledWrapper>
   );
};

const StyledWrapper = styled.div`
   .container {
      height: 380px;
      width: 300px;
      color: #1db954;
      perspective: 800px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

   .card {
      width: 100%;
      height: 100%;
      background: linear-gradient(
         135deg,
         #def5e5 0%,
         #bcead5 33%,
         #9ed5c5 66%,
         #8ec3b0 100%
      );
      border-radius: 2rem;
      position: relative;
      transition: transform 1500ms;
      transform-style: preserve-3d;
   }

   .card-top {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10%;
      position: absolute;
      width: 50%;
      background-color: transparent;
      border: 1px solid #1db954;
      top: 0;
      border-top: none;
      border-radius: 0 0 1rem 1rem;
      box-shadow: 0px 0px 10px 2px rgba(29, 185, 84, 0.5);
   }

   .card-top-para {
      font-size: 16px;
      font-weight: bold;
   }

   .container:hover > .card {
      cursor: pointer;
      transform: rotateX(180deg) rotateZ(-180deg);
   }

   .front,
   .back {
      height: 100%;
      width: 100%;
      border-radius: 2rem;
      box-shadow: 0px 0px 10px 2px rgba(29, 185, 84, 0.3);
      position: absolute;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
   }

   .front {
      /* background-color removed to inherit gradient */
   }

   .back {
      /* background-color removed to inherit gradient */
      color: #000000;
      transform: rotateX(180deg) rotateZ(-180deg);
   }

   .heading {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 4px;
   }

   .follow {
      font-size: 16px;
      font-weight: 500;
      margin-top: 0;
   }

   .icons {
      display: flex;
      flex-direction: row;
      gap: 20px;
      margin-top: 20px;
   }
   .profile-img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #76a48e; /* brighter contrasting color */
      box-shadow: 0px 0px 12px rgba(118, 164, 142, 0.6); /* subtle glow matching brighter color */
   }
   .front .profile-img {
      margin-top: 70px; /* Adjusted for better centering */
   }

   .card-top {
      padding-bottom: 8px;
   }
`;

export default ProfileCard;
