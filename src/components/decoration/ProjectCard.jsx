import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Card = ({
   imageSrc,
   altText = "Project Image",
   title,
   description,
   impact = [],
   delay = 0,
}) => {
   const cardRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      if (!cardRef.current) return undefined;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.disconnect();
            }
         },
         { threshold: 0.25 }
      );

      observer.observe(cardRef.current);

      return () => observer.disconnect();
   }, []);

   return (
      <StyledWrapper style={{ "--card-delay": `${delay}ms` }}>
         <article
            ref={cardRef}
            className={`card ${isVisible ? "is-visible" : ""}`}
         >
            <div className="card-media">
               <div className={`image-shell ${isLoaded ? "is-loaded" : ""}`}>
                  <img
                     src={imageSrc}
                     alt={altText}
                     loading="lazy"
                     decoding="async"
                     onLoad={() => setIsLoaded(true)}
                  />
               </div>
            </div>
            <div className="card-content">
               <p className="card-label">Project</p>
               <h3>{title}</h3>
               <p className="card-description">{description}</p>
               {impact.length > 0 && (
                  <div className="card-impact">
                     <p className="card-impact-title">Impact</p>
                     <ul>
                        {impact.map((item) => (
                           <li key={item}>{item}</li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
         </article>
      </StyledWrapper>
   );
};

const StyledWrapper = styled.div`
   .card {
      width: min(100%, 980px);
      display: grid;
      grid-template-columns: minmax(272px, 400px) minmax(0, 1fr);
      gap: clamp(1.4rem, 4vw, 2.5rem);
      align-items: center;
      padding: clamp(1rem, 3vw, 1.5rem);
      border-radius: 28px;
      background: rgba(255, 255, 255, 0.58);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(43, 93, 77, 0.14);
      box-shadow: 0 16px 40px rgba(43, 93, 77, 0.08);
      overflow: hidden;
      opacity: 0;
      transform: translateY(42px);
      transition:
         opacity 700ms ease,
         transform 700ms ease,
         box-shadow 300ms ease;
      transition-delay: var(--card-delay, 0ms);
   }

   .card.is-visible {
      opacity: 1;
      transform: translateY(0);
   }

   .card:hover {
      box-shadow: 0 22px 48px rgba(43, 93, 77, 0.12);
   }

   .card-media,
   .card-content {
      opacity: 0;
      transform: translateY(24px);
      transition:
         opacity 650ms ease,
         transform 650ms ease;
   }

   .card.is-visible .card-media {
      opacity: 1;
      transform: translateY(0);
      transition-delay: calc(var(--card-delay, 0ms) + 80ms);
   }

   .card.is-visible .card-content {
      opacity: 1;
      transform: translateY(0);
      transition-delay: calc(var(--card-delay, 0ms) + 180ms);
   }

   .card-media {
      min-width: 0;
   }

   .image-shell {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 3;
      border-radius: 24px;
      overflow: hidden;
      background:
         linear-gradient(
            110deg,
            rgba(255, 255, 255, 0.75) 8%,
            rgba(229, 244, 235, 0.92) 18%,
            rgba(255, 255, 255, 0.75) 33%
         ),
         #dbeee2;
      background-size: 200% 100%;
      animation: shimmer 1.8s linear infinite;
      box-shadow: inset 0 0 0 1px rgba(43, 93, 77, 0.08);
   }

   .image-shell::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
         180deg,
         rgba(255, 255, 255, 0.08) 0%,
         rgba(255, 255, 255, 0) 45%,
         rgba(43, 93, 77, 0.08) 100%
      );
      pointer-events: none;
   }

   .image-shell.is-loaded {
      animation: none;
   }

   .image-shell img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      transform: scale(1.04);
      filter: blur(12px);
      opacity: 0;
      transition:
         opacity 500ms ease,
         transform 800ms ease,
         filter 800ms ease;
   }

   .image-shell.is-loaded img {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
   }

   .card-content {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 0.95rem;
      padding: 0.25rem 0.15rem;
   }

   .card-label,
   .card-impact-title {
      font-size: var(--section-label-size);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #4b7a6a;
   }

   .card-label {
      margin: 0;
   }

   .card-content h3 {
      font-size: clamp(1.4rem, 3vw, 2rem);
      line-height: 1.08;
      margin: 0;
      color: #2b5d4d;
   }

   .card-description {
      margin: 0;
      font-size: clamp(1rem, 0.94rem + 0.35vw, 1.08rem);
      line-height: 1.7;
      color: #355b4d;
   }

   .card-impact {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
   }

   .card-impact-title {
      margin: 0;
   }

   .card-impact ul {
      margin: 0;
      padding-left: 1.2rem;
      color: #2f4f43;
      display: grid;
      gap: 0.7rem;
   }

   .card-impact li {
      font-size: clamp(0.94rem, 0.9rem + 0.2vw, 1rem);
      line-height: 1.55;
   }

   @keyframes shimmer {
      0% {
         background-position: 200% 0;
      }
      100% {
         background-position: -200% 0;
      }
   }

   @media (max-width: 767px) {
      .card {
         grid-template-columns: 1fr;
         gap: 1.25rem;
         padding: 1rem;
         border-radius: 24px;
      }

      .card-content {
         text-align: left;
      }

      .card-description {
         line-height: 1.6;
      }
   }

   @media (min-width: 768px) and (max-width: 1023px) {
      .card {
         grid-template-columns: minmax(256px, 360px) minmax(0, 1fr);
      }
   }
`;

export default Card;
