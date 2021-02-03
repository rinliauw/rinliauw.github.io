import styled from "styled-components";

const ArticleHeader = styled.header`
  font-family: ${({ theme }) => theme.fonts.serif};
  h1 {
    margin: 0 ${({ theme }) => theme.spacing[4]} 0 0;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize[3]};
  }
`;

export default ArticleHeader;