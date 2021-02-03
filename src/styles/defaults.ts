/**
 * Returns [start, end)
 */
const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_val, key) => key + start);

const defaults = {
  breakpoints: {
    phone: "320px",
    tablet_portrait: "600px",
    tablet_landscape: "900px",
    desktop: "1200px",
    large_desktop: "1800px",
  },

  // "0rem", "0.25rem", ..., "8rem", where 8 is from 32 * 0.25.
  spacing: range(0, 62).map((i) => `${i * 0.25}rem`),

  lineHeights: {
    none: 1,
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.625,
  },

  /* 1.200 Minor Third Type Scale */
  fontSize: [
    "0.833rem",
    "1rem",
    "1.2rem",
    "1.44rem",
    "1.728rem",
    "2.074rem",
    "2.488rem",
    "2.986rem",
    "3.583rem",
    "4.3rem",
  ],
};

export default defaults;
