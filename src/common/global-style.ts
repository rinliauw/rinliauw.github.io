import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
a {
  color: var(--color-text);
  text-decoration: none;
  :hover,
  :focus {
    color: var(--color-primary-bright);
    text-decoration: none;
  }
}
`;
