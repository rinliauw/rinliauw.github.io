import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const Article = styled.article`
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
`;

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;

interface Props extends PageProps {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const About = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">Hi, I'm Jonathan 👋</h1>
        </header>
        <section itemProp="articleBody">
          <p>
            I'm a computer science student at the University of Melbourne
            graduating 2021, and an aspiring&trade; software developer.
          </p>
          <p>
            Recently I've been exploring full-stack web development, working
            with React on the front end and Spring Boot and Node.js on the
            server side. Of course, I look to gain more practical experience
            working with other technology stacks, mainly so I'll have more to
            write here...
          </p>

          <h2>Links</h2>
          <p>
            I'm always down to collaborate on a project. Check me out on&nbsp;
            <a href="https://github.com/jonjau">Github</a> and &nbsp;
            <a href="https://www.linkedin.com/in/jonathanjauhari/">LinkedIn</a>,
            and feel free to contact me through my email&nbsp;
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6A%6F%6E%63%6A%61%75%68%61%72%69%40%67%6D%61%69%6C%2E%63%6F%6D">
              joncjauhari [at] gmail [dot] com
            </a>
            . You can find my face elsewhere.
          </p>
          <ul>
            <li>BTC: 1FrKqLmrRCTuVjq9pYRADCYXRBdVsHQmtY</li>
            <li>ETH: 0x43d5aE1Bce42210EB742486Cd3e3331011b7c454</li>
          </ul>
        </section>
      </Article>
    </Layout>
  );
};

export { About as default, pageQuery };
