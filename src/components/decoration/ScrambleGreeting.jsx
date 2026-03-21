import React, { useEffect, useMemo, useState } from "react";

const greetings = [
   "Hello",
   "Bonjour",
   "Hola",
   "Ciao",
   "Hallo",
   "Ola",
   "你好",
   "こんにちは",
   "안녕하세요",
];

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const revealStepMs = 36;
const holdMs = 1650;
const pauseMs = 260;

function randomChar() {
   return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
}

function getScrambledText(target, revealedCount) {
   return target
      .split("")
      .map((char, index) => {
         if (char === " ") return " ";
         if (index < revealedCount) return char;
         return randomChar();
      })
      .join("");
}

export function ScrambleGreeting() {
   const items = useMemo(() => greetings, []);
   const [displayText, setDisplayText] = useState(items[0]);

   useEffect(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
         let currentIndex = 0;
         const rotate = window.setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            setDisplayText(items[currentIndex]);
         }, 2200);

         return () => window.clearInterval(rotate);
      }

      let frameTimeout;
      let nextGreetingTimeout;

      const runScramble = (nextIndex) => {
         const target = items[nextIndex];
         let revealedCount = 0;

         setDisplayText(getScrambledText(target, 0));

         const tick = () => {
            revealedCount += 1;

            if (revealedCount >= target.length) {
               setDisplayText(target);
               nextGreetingTimeout = window.setTimeout(() => {
                  const upcoming = (nextIndex + 1) % items.length;
                  runScramble(upcoming);
               }, holdMs);
               return;
            }

            setDisplayText(getScrambledText(target, revealedCount));
            frameTimeout = window.setTimeout(tick, revealStepMs);
         };

         frameTimeout = window.setTimeout(tick, pauseMs);
      };

      runScramble(0);

      return () => {
         window.clearTimeout(frameTimeout);
         window.clearTimeout(nextGreetingTimeout);
      };
   }, [items]);

   return (
      <span className="scramble-greeting" aria-label={`Greeting: ${displayText}`}>
         {displayText}
      </span>
   );
}
