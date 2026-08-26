# Kaun Banega CodePathi — ACM VIT-AP Student Chapter

Event website built with React + Vite + React Router.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
```

The output goes to `dist/` — deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Replace the Mentimeter links (only file you need to edit)

Open **`src/config/mentiLinks.js`**. Lines **12–15** hold the four placeholder URLs:

```js
export const MENTI_LINK_1 = "https://www.menti.com/REPLACE_ME_1";
export const MENTI_LINK_2 = "https://www.menti.com/REPLACE_ME_2";
export const MENTI_LINK_3 = "https://www.menti.com/REPLACE_ME_3";
export const MENTI_LINK_4 = "https://www.menti.com/REPLACE_ME_4";
```

Replace each placeholder string with the real Menti room URL. Nothing else in the codebase needs to change — every button on the `/join` page reads from this one file.

> If you later edit `mentiLinks.js` and add code above these lines, the line numbers will shift — the four `MENTI_LINK_` constants are always the ones to look for.

## Routes

- `/` — homepage
- `/join` — Menti room selection (linked from the "JOIN THE QUIZ" button)

## Project structure

```
src/
├── components/     Navbar, Hero, FeatureCard, PrizePool, LifelineCard,
│                    Lifelines, InfoSections, Footer, Starfield, Icons
├── pages/          Home.jsx, JoinQuiz.jsx
├── config/         mentiLinks.js  <- edit this one file
├── styles/         tokens.css (design tokens), base.css, page.css
├── assets/         ACM logo, CodePathi emblem
├── App.jsx         Route definitions
└── main.jsx        Entry point, global CSS imports
```

## Notes

- Placeholder sections for About / Schedule / Contact are in `src/components/InfoSections.jsx` — replace the bracketed placeholder text there with real event copy whenever it's ready.
- The Menti buttons open in the **same tab**, as specified.
- Fonts (Cinzel, Manrope) load from Google Fonts — an internet connection is needed at runtime for the exact typography; there are system-font fallbacks defined in `src/styles/tokens.css` if you'd rather self-host the fonts.
