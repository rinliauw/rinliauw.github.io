import { createGlobalStyle } from "styled-components";
import { fontSize, lineHeight, spacing } from ".";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
*,
:after,
:before {
  box-sizing: border-box;
}

::selection {
  // background light
}

html {
  line-height: ${lineHeight.normal};
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-color: grey ${theme.colors.backgroundDark};
}

body {
  font-family: ${theme.fonts.sans};
  font-size: ${fontSize[1]};
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
}

html,
body,
#___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
}

a {
  color: ${theme.colors.text};
  text-decoration: none;
  :hover,
  :focus {
    color: ${theme.colors.primary};
    text-decoration: none;
  }
}

/* Custom classes */

.gatsby-highlight {
  margin-bottom: ${spacing[8]};
}

.gatsby-resp-image-wrapper {
  margin: ${spacing[6]};
}

@media (max-width: 42rem) {
  blockquote {
    padding: 0 0 0 ${spacing[4]};
    margin-left: ${spacing[0]};
  }
  ul,
  ol {
    list-style-position: inside;
  }
}

`;
