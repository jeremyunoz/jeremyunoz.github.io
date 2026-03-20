import React from "react";
import styled from "styled-components";

const Card = ({ imageSrc, altText = "Project Image", title, description }) => {
   return (
      <StyledWrapper>
         <div className="card">
            <div className="card-text">
               <h3>{title}</h3>
            </div>
            <img src={imageSrc} alt={altText} />
            <div className="card-text">
               <p>{description}</p>
            </div>
         </div>
      </StyledWrapper>
   );
};

const StyledWrapper = styled.div`
   .card {
      width: 420px;·
      height: auto;
      border-radius: 20px;
      background: #f5f5f5;
      box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .card img {
      width: 100%;
      height: 280px;
      object-fit: contain;
      object-position: center;
      border-radius: 20px 20px 0 0;
      background-color: #f5f5f5;
   }

   .card-text {
      padding: 12px 16px;
      text-align: center;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .card-text h3 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      color: #333;
   }

   .card-text p {
      font-size: 0.85rem;
      color: #555;
   }

   @media (max-width: 767px) {
      .card {
         width: 300px;
      }
      .card img {
         height: 200px;
      }
      .card-text {
         min-height: 50px;
      }
      .card-text h3 {
         font-size: 0.9rem;
      }
      .card-text p {
         font-size: 0.8rem;
      }
   }

   @media (min-width: 768px) {
      .card {
         width: 500px;
      }
      .card img {
         height: 320px;
      }
      .card-text {
         min-height: 70px;
      }
      .card-text h3 {
         font-size: 1.05rem;
      }
      .card-text p {
         font-size: 0.92rem;
      }
   }

   @media (min-width: 1024px) {
      .card {
         width: 600px;
      }
      .card img {
         height: 360px;
      }
      .card-text {
         min-height: 80px;
      }
      .card-text h3 {
         font-size: 1.2rem;
      }
      .card-text p {
         font-size: 0.98rem;
      }
   }
`;

export default Card;
