import {
   FiBriefcase,
   FiHome,
   FiMail,
   FiUser,
} from "react-icons/fi";
import { GoStack } from "react-icons/go";

// Single source of truth for top-level navigation.
//
// Two shapes exist:
//   - Route-direct items (About): `to` is the full route path.
//   - Section-scroll items (Skills / Projects / Contact): `to` is "/" and
//     `scrollTo` names the section id to scroll to on the home page.
//
// Section-scroll items get two behaviors:
//   - If the user is already on "/", just smooth-scroll to the section.
//   - Otherwise navigate to "/" with `location.state.scrollTo` set, and
//     HomePage picks that up on mount and scrolls.

export const NAV_ITEMS = [
   { id: "about", label: "About", to: "/about", Icon: FiUser },
   {
      id: "skills",
      label: "Skills",
      to: "/",
      scrollTo: "skills",
      Icon: GoStack,
   },
   {
      id: "projects",
      label: "Projects",
      to: "/",
      scrollTo: "projects",
      Icon: FiBriefcase,
   },
   {
      id: "contact",
      label: "Contact",
      to: "/",
      scrollTo: "contact",
      Icon: FiMail,
   },
];

export const HOME_ITEM = {
   id: "home",
   label: "Home",
   to: "/",
   Icon: FiHome,
};

// Section ids that live on the home page and should drive active-nav state
// when the user scrolls through "/".
export const HOME_SECTION_IDS = NAV_ITEMS.filter((item) => item.scrollTo).map(
   (item) => item.scrollTo
);
