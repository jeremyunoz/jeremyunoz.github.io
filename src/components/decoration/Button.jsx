import React from "react";
import styled from "styled-components";

const Button = ({ label = "Click Me", href = "#", download = false }) => {
   return (
      <StyledWrapper>
         <a href={href} download={download}>
            <button>{label}</button>
         </a>
      </StyledWrapper>
   );
};

const StyledWrapper = styled.div`
   button {
      color: #090909;
      padding: 0.4em 1em;
      font-size: 14px;
      border-radius: 0.5em;
      background: #e8e8e8;
      cursor: pointer;
      border: 1px solid #e8e8e8;
      transition: all 0.3s;
      box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
   }

   button:active {
      color: #666;
      box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
   }
`;

export default Button;
