document.addEventListener("DOMContentLoaded", () => {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".hamburger-icon");

   console.log("Script loaded");
   console.log("menu:", menu);
   console.log("icon:", icon);

   function toggleMenu() {
      if (!menu || !icon) {
         console.warn("Menu or icon not found");
         return;
      }
      console.log("Toggling menu");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
   }

   if (icon && menu) {
      icon.addEventListener("click", toggleMenu);
   }
});
