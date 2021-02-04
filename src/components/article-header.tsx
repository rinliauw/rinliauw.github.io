import styled from "styled-components";

const ArticleHeader = styled.header`
  font-size: ${({theme}) => theme.fontSize[0]};
  @media (min-width: ${({theme}) => theme.breakpoints.tablet_portrait}) {
    font-size: ${({theme}) => theme.fontSize[1]};
  }

  font-family: ${({ theme }) => theme.fonts.serif};
  h1 {
    margin: 0 ${({ theme }) => theme.spacing[4]} 0 0;
  }
  p {
    font-size: ${({theme}) => theme.fontSize[0]};
    @media (min-width: ${({theme}) => theme.breakpoints.tablet_portrait}) {
      font-size: ${({theme}) => theme.fontSize[1]};
    }
    span {
      color: ${({theme}) => theme.colors.textDark};
    }
  }
`;

export default ArticleHeader;