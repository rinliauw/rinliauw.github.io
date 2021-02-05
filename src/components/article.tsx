import styled from "styled-components";

const Article = styled.article`
  font-size: ${({theme}) => theme.fontSize[0]};
  @media (min-width: ${({theme}) => theme.breakpoints.tablet_portrait}) {
    font-size: ${({theme}) => theme.fontSize[1]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};

    border-bottom-style: dotted;
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.colors.primary};

    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.primaryLight};

      border-bottom-style: solid;
      border-bottom-width: 3px;
      border-bottom-color: ${({ theme }) => theme.colors.complementary};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
    padding: 0;
  }

  ul,
  ol {
    margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
    padding: 0 0 0 ${({ theme }) => theme.spacing[4]};
    list-style-position: outside;
    list-style-image: none;

    li {
      padding-left: ${({ theme }) => theme.spacing[2]};
      margin-bottom: ${({ theme }) => theme.spacing[4]};
    }
  }

  li {
    > {
      p {
        margin-bottom: ${({ theme }) => theme.spacing[4]};
      }
      ul {
        margin-left: ${({ theme }) => theme.spacing[8]};
        margin-top: ${({ theme }) => theme.spacing[4]};
      }
    }
    *:last-child {
      margin-bottom: 0;
    }
  }

  blockquote {
    color: ${({ theme }) => theme.colors.textDark};
    margin-left: -${({ theme }) => theme.spacing[6]};
    margin-right: ${({ theme }) => theme.spacing[8]};
    padding: 0 0 0 ${({ theme }) => theme.spacing[6]};
    border-left: 0.25rem solid ${({ theme }) => theme.colors.complementary};
    font-size: ${({ theme }) => theme.fontSize[1]};
    margin-bottom: ${({ theme }) => theme.spacing[8]};

    > {
      :last-child {
        margin-bottom: ${({ theme }) => theme.spacing[0]};
      }

      ul,
      ol {
        list-style-position: inside;
      }
    }
  }

  table {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing[8]};
    border-collapse: collapse;
    border-spacing: ${({ theme }) => theme.spacing[1]};
    thead {
      tr {
        th {
          border-bottom: 1px solid ${({ theme }) => theme.colors.text};
        }
      }
      border-bottom: 1px solid white;
    }
  }
`;

export default Article;
