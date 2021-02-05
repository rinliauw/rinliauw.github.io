import styled from "styled-components";

const HighlightComplementary = styled.span`
  color: ${({ theme }) => theme.colors.complementary};
`;

const HighlightPrimary = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export { HighlightComplementary, HighlightPrimary };
