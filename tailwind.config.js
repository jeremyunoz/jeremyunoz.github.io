/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         animation: {
            move: "move 5s linear infinite",
         },
         keyframes: {
            move: {
               "0%": { transform: "translateX(-200px)" },
               "100%": { transform: "translateX(200px)" },
            },
         },
      },
   },

   plugins: [],
};
