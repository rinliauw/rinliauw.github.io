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
          Hi, I'm <HighlightPrimary>Karina</HighlightPrimary>,
        </HeroTitle>
        <HeroSubtitle>
         an aspiring data scientist.
          
        </HeroSubtitle>

        <HeroDetail>
          Click{" "}
          <a
            title="My resume"
            href="https://drive.google.com/file/d/1CYXj3EuhDbibj3W1ZlndMxtYyOgW9wXx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here to view my resume
          </a>
        . Let's get connected!
        </HeroDetail>
      </Hero>
    </Layout>
  );
};

export { Index as default, pageQuery };
