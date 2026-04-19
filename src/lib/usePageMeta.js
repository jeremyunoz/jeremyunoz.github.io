import { useEffect } from "react";

const SITE_SUFFIX = "Jeremy Zheng | Embedded Systems and Edge AI";

function setOrCreateMeta(name, content) {
   if (!content) return;
   let tag = document.head.querySelector(`meta[name="${name}"]`);
   if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
   }
   tag.setAttribute("content", content);
}

// Sets document.title and (optionally) meta description on mount/route change.
// Pass `title` without the site suffix — this hook appends it.
export function usePageMeta({ title, description } = {}) {
   useEffect(() => {
      document.title = title ? `${title} · ${SITE_SUFFIX}` : SITE_SUFFIX;
      if (description) setOrCreateMeta("description", description);
   }, [title, description]);
}
