/**
 * Returns [start, end)
 */
const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_val, key) => key + start);

// "0rem", "0.25rem", ..., "8rem", where 8 is from 32 * 0.25.
export const spacing = range(0, 62).map((i) => `${i * 0.25}rem`);

/* 1.200 Minor Third Type Scale */
export const fontSize = [
  "0.833rem",
  "1rem",
  "1.2rem",
  "1.44rem",
  "1.728rem",
  "2.074rem",
  "2.488rem",
  "2.986re",
];

export const lineHeight = {
  none: 1,
  tight: 1.1,
  normal: 1.5,
  relaxed: 1.625,
};
