
// lighten color: https://pinetools.com/lighten-color

const theme = {
  colors: {
    background: "#252525",
    backgroundLight: "#2f2f2f", // 5% lighter
    logo: "#197060",
    primary: "#26ac94", // 20% lighter from logo
    primaryLight: "#3ad3b8", // 20% lighter from primary
    // complementary: "#c05b5b",
    complementary: "#ac263e",
    text: "#cfcfcf",
    textLight: "#ffffff", // 100% lighter
    textDark: "#afafaf", // 15% darker
    heading: "#f1f1f1",
  },

  // 'monospace' does not affect generated code blocks: the prism theme does.
  fonts: {
      sans: "'Noto Sans', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'",
      serif: "'Noto Serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'",
      monospace: "'Consolas', 'Menlo', 'Monaco', 'Courier New', 'monospace'",
  }
};

export default theme;
