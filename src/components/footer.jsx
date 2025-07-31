import React from "react";

function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="footer">
         <p>© {currentYear} Jianming Zheng. All rights reserved.</p>
      </footer>
   );
}

export default Footer;
