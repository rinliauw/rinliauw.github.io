import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSize[5]};
  font-family: ${({theme}) => theme.fonts.serif};
  font-weight: lighter;
  color: ${({theme}) => theme.colors.primary};
  margin: 0;
`;

const SectionDescription = styled.p`
  font-size: ${({theme}) => theme.fontSize[2]};
  margin-bottom: ${({theme}) => theme.spacing[14]};

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
`;

export { SectionTitle, SectionDescription };
