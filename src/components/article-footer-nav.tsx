import styled from "styled-components";

const ArticleFooterNav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    font-size: ${({ theme }) => theme.fontSize[0]};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    a {
      border-radius: 4px;
      padding: ${({ theme }) => theme.spacing[2]};
      color: ${({ theme }) => theme.colors.primary};
      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundLight};
        color ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
`;

export default ArticleFooterNav;