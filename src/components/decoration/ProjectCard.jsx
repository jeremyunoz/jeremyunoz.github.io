import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const LINK_META = {
   github: { label: "GitHub", Icon: FaGithub },
   demo: { label: "Live demo", Icon: FaExternalLinkAlt },
   devpost: { label: "Devpost", Icon: SiDevpost },
};

const Card = ({
   imageSrc,
   altText = "Project Image",
   title,
   description,
   impact = [],
   role,
   timeframe,
   stack = [],
   links = {},
   projectSite,
   featured = false,
   featuredLabel = "Featured",
   delay = 0,
}) => {
   const cardRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);

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
            className={`card ${isVisible ? "is-visible" : ""} ${
               featured ? "is-featured" : ""
            }`}
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
               <span
                  className={`card-label ${
                     featured ? "card-label-featured" : ""
                  }`}
               >
                  {featured ? featuredLabel : "Project"}
               </span>
               <h3>{title}</h3>
               {(role || timeframe) && (
                  <p className="card-meta">
                     {role && <span className="card-meta-role">{role}</span>}
                     {role && timeframe && (
                        <span className="card-meta-sep" aria-hidden="true">·</span>
                     )}
                     {timeframe && (
                        <span className="card-meta-timeframe">{timeframe}</span>
                     )}
                  </p>
               )}
               <p className="card-description">{description}</p>
               {stack.length > 0 && (
                  <ul className="card-stack" aria-label="Stack">
                     {stack.map((item) => (
                        <li key={item} className="card-stack-chip">
                           {item}
                        </li>
                     ))}
                  </ul>
               )}
               {(Object.keys(links).length > 0 || projectSite) && (
                  <div className="card-links">
                     {projectSite && projectSite.href && (
                        <a
                           className="card-link card-link-primary"
                           href={projectSite.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={`${title} — ${
                              projectSite.label || "Project site"
                           } (opens in a new tab)`}
                        >
                           {projectSite.label || "Project site"}
                           <span aria-hidden="true">↗</span>
                        </a>
                     )}
                     {Object.entries(links).map(([key, href]) => {
                        const meta = LINK_META[key];
                        if (!meta || !href) return null;
                        const { label, Icon } = meta;
                        return (
                           <a
                              key={key}
                              className="card-link"
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${title} on ${label}`}
                           >
                              <Icon aria-hidden="true" />
                              <span>{label}</span>
                           </a>
                        );
                     })}
                  </div>
               )}
               {impact.length > 0 && (
                  <div className="card-impact">
                     <button
                        type="button"
                        className="card-impact-toggle"
                        onClick={() => setIsExpanded((expanded) => !expanded)}
                        aria-expanded={isExpanded}
                     >
                        {isExpanded ? "Hide impact" : "View impact"}
                     </button>
                     {isExpanded ? (
                        <>
                           <p className="card-impact-title">Impact</p>
                           <ul>
                              {impact.map((item) => (
                                 <li key={item}>{item}</li>
                              ))}
                           </ul>
                        </>
                     ) : null}
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

   .card.is-featured {
      position: relative;
      background:
         linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.82) 0%,
            rgba(229, 244, 235, 0.78) 100%
         );
      border-color: rgba(43, 93, 77, 0.28);
      box-shadow:
         0 22px 56px rgba(43, 93, 77, 0.16),
         0 0 0 1px rgba(88, 129, 87, 0.22);
   }

   .card.is-featured::before {
      content: "";
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(
         135deg,
         rgba(88, 129, 87, 0.75),
         rgba(165, 184, 131, 0.55) 45%,
         rgba(58, 90, 64, 0.75)
      );
      -webkit-mask:
         linear-gradient(#000 0 0) content-box,
         linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      opacity: 0.9;
   }

   .card.is-featured:hover {
      transform: translateY(-2px);
      box-shadow:
         0 28px 64px rgba(43, 93, 77, 0.2),
         0 0 0 1px rgba(88, 129, 87, 0.32);
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
      position: relative;
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

   .card-impact-title {
      font-size: var(--section-label-size);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #4b7a6a;
   }

   .card-label {
      align-self: flex-start;
      margin: 0;
      padding: 0.28rem 0.7rem;
      border-radius: 999px;
      background: rgba(88, 129, 87, 0.14);
      color: #355b4d;
      font-size: 0.76rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      line-height: 1.2;
      white-space: nowrap;
   }

   .card-label-featured {
      background: #27453c;
      color: #f3fff9;
      box-shadow: 0 6px 16px rgba(27, 58, 49, 0.22);
   }

   .card-content h3 {
      font-size: clamp(1.4rem, 3vw, 2rem);
      line-height: 1.08;
      margin: 0;
      color: #2b5d4d;
   }

   .card-meta {
      margin: -0.4rem 0 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.45rem;
      color: #4b7a6a;
      font-size: 0.86rem;
      font-weight: 600;
   }

   .card-meta-role {
      color: #2b5d4d;
   }

   .card-meta-sep {
      color: rgba(43, 93, 77, 0.4);
   }

   .card-meta-timeframe {
      font-weight: 500;
      color: #5c7a72;
   }

   .card-description {
      margin: 0;
      font-size: clamp(1rem, 0.94rem + 0.35vw, 1.08rem);
      line-height: 1.7;
      color: #355b4d;
   }

   .card-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin: 0;
      padding: 0;
      list-style: none;
   }

   .card-stack-chip {
      font-size: 0.78rem;
      font-weight: 600;
      color: #355b4d;
      background: rgba(255, 255, 255, 0.72);
      border: 1px solid rgba(43, 93, 77, 0.14);
      padding: 0.3rem 0.6rem;
      border-radius: 999px;
      line-height: 1.1;
      letter-spacing: 0.01em;
   }

   .card-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
   }

   .card-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.5rem 0.85rem;
      border-radius: 999px;
      border: 1px solid rgba(43, 93, 77, 0.14);
      background: rgba(255, 255, 255, 0.82);
      color: #2b5d4d;
      font-size: 0.84rem;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease,
         border-color 0.2s ease;
   }

   .card-link:hover {
      transform: translateY(-1px);
      background: #fff;
      box-shadow: 0 10px 22px rgba(43, 93, 77, 0.1);
      border-color: rgba(43, 93, 77, 0.28);
   }

   .card-link-primary {
      background: #27453c;
      color: #f3fff9;
      border-color: transparent;
   }

   .card-link-primary:hover {
      background: #1d352e;
      color: #ffffff;
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

   .card-impact-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      margin: 0;
      padding: 0.65rem 0.95rem;
      border: 1px solid rgba(43, 93, 77, 0.14);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.82);
      color: #355b4d;
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
   }

   .card-impact-toggle:hover {
      transform: translateY(-1px);
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 10px 22px rgba(43, 93, 77, 0.1);
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
         gap: 0.8rem;
      }

      .card-description {
         line-height: 1.6;
      }

      .card-label {
         font-size: 0.72rem;
         padding: 0.24rem 0.6rem;
      }

      .card-content h3 {
         font-size: 1.45rem;
      }

      .card-impact {
         gap: 0.65rem;
      }

      .card-impact-title {
         font-size: 0.82rem;
      }

      .card-impact ul {
         gap: 0.55rem;
      }

      .card-impact li {
         font-size: 0.93rem;
         line-height: 1.5;
      }
   }

   @media (min-width: 768px) and (max-width: 1023px) {
      .card {
         grid-template-columns: minmax(256px, 360px) minmax(0, 1fr);
      }
   }
`;

export default Card;
