import defaults from "./defaults";

// lighten color: https://pinetools.com/lighten-color
const theme = {
  ...defaults,

  colors: {
    background: "#252525",
    backgroundLight: "#2f2f2f", // 5% lighter
    backgroundLighter: "#505050", // 20% lighter
    backgroundDark: "#121212", // 50% darker
    backgroundDarker: "#070707", // 80% darker

    logo: "#197060",
    primary: "#26ac94", // 20% lighter from logo
    primaryLight: "#3ad3b8", // 20% lighter from primary

    complementary: "#ac263e",

    text: "#cfcfcf",
    textLight: "#ffffff", // 100% lighter
    textDark: "#9b9b9b", // 25% darker
  },

  // 'monospace' does not affect generated code blocks: the prism theme does.
  fonts: {
    sans: "'Noto Sans', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'",
    serif: "'Noto Serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'",
    monospace: "'Consolas', 'Menlo', 'Monaco', 'Courier New', 'monospace'",
  },
};

export default theme;
