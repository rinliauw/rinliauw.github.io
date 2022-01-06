import { graphql, PageProps } from "gatsby";
import React from "react";
import { Hero, HeroTitle, HeroSubtitle, HeroDetail } from "../components/hero";
import {
  HighlightPrimary,
  HighlightComplementary,
} from "../components/highlight";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
          I build web applications.
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
            href="https://github.com/jonjau/jonjauhari.com"
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

export { Index as default, pageQuery };
