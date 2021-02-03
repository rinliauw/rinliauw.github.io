import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
:after,
:before {
  box-sizing: border-box;
}

// when selected, i.e. with click-drag
::selection {
  background-color: ${({theme}) => theme.colors.backgroundLighter};
  color: ${({theme}) => theme.colors.textLight};
}

html {
  line-height: ${({ theme }) => theme.lineHeights.normal};
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-color: grey ${({ theme }) => theme.colors.backgroundDark};
}

body {
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSize[1]};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
}

html,
body,
#___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
}

a {
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
}

// code
.gatsby-highlight {
  margin-bottom: ${({ theme }) => theme.spacing[8]};
}

.gatsby-resp-image-wrapper {
  margin: ${({ theme }) => theme.spacing[6]};
}

// @media (max-width: 42rem) {
//   blockquote {
//     padding: 0 0 0 ${({ theme }) => theme.spacing[4]};
//     margin-left: ${({ theme }) => theme.spacing[0]};
//   }
//   ul,
//   ol {
//     list-style-position: inside;
//   }
// }

`;
