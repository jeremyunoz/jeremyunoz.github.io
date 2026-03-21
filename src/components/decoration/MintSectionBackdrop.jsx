import React from "react";
import "./MintSectionBackdrop.css";

/** Decorative layers matching the hero: mint wash, grid, glow, soft orbs. */
export function MintSectionBackdrop() {
   return (
      <>
         <div className="mint-backdrop__orb mint-backdrop__orb--one" aria-hidden="true" />
         <div className="mint-backdrop__orb mint-backdrop__orb--two" aria-hidden="true" />
      </>
   );
}
