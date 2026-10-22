# Portfolio rebuild

The site introduces Jeremy Zheng to engineering recruiters, research groups, and collaborators through embedded firmware, edge AI, and connected-device projects.

## Direction

Charcoal and off-white surfaces, a restrained blue accent, large project photography, Libre Franklin headings, and Source Serif 4 reading text. Both fonts are served locally with their OFL licenses. Chinese uses the device's available Chinese fonts.

The design-taste direction was “Type and nothing else,” seed 1084751981. The waterline hero was redrawn once because a saturated half-page color field conflicted with the restrained accent direction. The replacement uses a two-line, full-width name. Motion is moderate and respects the user's reduced-motion preference.

The idea: Jeremy's actual split between ESP32 real-time control and Raspberry Pi edge computation becomes an explorable system, alongside the photographs of the projects themselves. Visitors can filter by technical interest and explore AuraBot's sensing, computation, and response responsibilities.

## Structure and content

- Homepage: introduction, filtered projects, AuraBot system explorer, expertise, personal introduction, and contact.
- About: existing outdoor photo, background, education, research and teaching, and interests.
- Three case studies: AuraBot, Bincredible, and ZotFitness. Each explains context, contribution, decisions, outcome, and reflection.
- AuraBot and Bincredible appear in the default project view. ZotFitness appears when Embedded or IoT is selected.
- Background topics use native expandable sections with a short preview. Action and system icons reinforce their adjacent labels; copying the email changes its icon to a checkmark.
- Section links scroll smoothly after a click, with immediate navigation for reduced-motion preferences and direct page loads.
- English is the default; English/Chinese and light/dark selections persist locally.
- Existing hash-based project and About links continue to work on GitHub Pages.
- The existing résumé remains downloadable. A separate research CV was not supplied.
- No writing section, contact backend, analytics, or new project claims were added.

The old pages are the source for project content. Performance claims with inconsistent explanations were omitted. Recognition and leadership labels were not expanded. The owner explicitly requested “Incoming Spring 2027” in English and “在读” in Chinese after the differing meanings were explained; the content preserves that choice.

## Archive and publishing

The previous local source, exact deployed branch, and all local Git history are preserved under `archive/2026-10-22/`. The live homepage was compared byte for byte with the archived deployed homepage. The archive is excluded from Git and production output. GitHub Pages was unpublished and its publishing branch set to None before the rebuild.

Only optimized versions of the selected existing photographs and the existing résumé are shipped. Original images remain in the offline source archive.
