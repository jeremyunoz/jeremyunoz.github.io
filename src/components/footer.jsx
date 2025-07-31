import React from "react";

function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer>
         <p>&copy; {currentYear} My Website</p>
      </footer>
   );
}

export default Footer;
