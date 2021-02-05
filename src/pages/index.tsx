import { graphql, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

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

const HighlightComplementary = styled.span`
  color: ${({ theme }) => theme.colors.complementary};
`;

const HighlightPrimary = styled.span`
  color: ${({ theme }) => theme.colors.primary};
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

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

interface Props extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Index = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Hero>
        <HeroTitle>
          Hi, I'm <HighlightPrimary>Jonathan</HighlightPrimary>.
        </HeroTitle>
        <HeroSubtitle>
          I build web and mobile applications.
          <HighlightComplementary>*</HighlightComplementary>
        </HeroSubtitle>
        <HeroDetail>
          <HighlightComplementary>*</HighlightComplementary> learning to,
          anyway.
        </HeroDetail>

        <HeroDetail>
          This website is{" "}
          <a
            title="Github Repo for this site"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            a work in progress
          </a>
          . Regardless, enjoy your stay!
        </HeroDetail>
      </Hero>
    </Layout>
  );
};

// Empty component for now. Currently / redirects to /blog. See gatsby-node.js
export { Index as default, pageQuery };
