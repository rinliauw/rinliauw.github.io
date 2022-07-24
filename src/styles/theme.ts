import defaults from "./defaults";

// lighten color: https://pinetools.com/lighten-color
const theme = {
  ...defaults,

  colors: {
    background: "#f2f2f0",
    backgroundLight: "#E6E6E3", // 5% darker
    backgroundLighter: "#C5C5BC", // 20% darker
    backgroundDark: "#f8f8f7", // 50% lighter
    backgroundDarker: "#fcfcfb", // 80% lighter

    logo: "#CA93B0",
    primary: "#CA93B0", // 20% lighter from logo
    primaryLight: "#997086", // 20% lighter from primary

    complementary: "#AEC8D4",
     // 
    text: "#A19A91",
    textLight: "#696664", // 100% lighter
    textDark: "#857F77", // 25% darker
  },

  // 'monospace' does not affect generated code blocks: the prism theme does.
  fonts: {
    sans: "'Noto Sans', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'",
    serif: "'Noto Serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'",
    monospace: "'Consolas', 'Menlo', 'Monaco', 'Courier New', 'monospace'",
  },
};

export default theme;
