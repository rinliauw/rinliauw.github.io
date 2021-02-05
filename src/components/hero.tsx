import styled from "styled-components";

const Hero = styled.div``;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSize[6]};
  font-weight: lighter;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    font-size: ${({ theme }) => theme.fontSize[9]};
  }
`;

const HeroSubtitle = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSize[5]};
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.textDark};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    font-size: ${({ theme }) => theme.fontSize[8]};
  }
`;

const HeroDetail = styled.p`
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

  margin-top: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize[2]};
  max-width: 560;
`;

export { Hero, HeroTitle, HeroSubtitle, HeroDetail };
