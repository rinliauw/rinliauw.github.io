import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">About Me</h1>
        </header>
        <section itemProp="articleBody">
          <p>Hi, I'm Jonathan 👋</p>

          <p>
            I'm a computer science student at the University of Melbourne
            (graduating 2021). Recently I've been exploring full-stack web
            development, working with React on the front end and Spring Boot and
            Node.js on the server side. I'm looking to gain more experience
            working with other technology stacks.
          </p>
          <h2>Links</h2>

          <p>
            I'm always down to collaborate on a project. Feel free to contact me
            through my email:
            <br />
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6A%6F%6E%63%6A%61%75%68%61%72%69%40%67%6D%61%69%6C%2E%63%6F%6D">
              joncjauhari [at] gmail [dot] com].
            </a>
          </p>

          <ul>
            <li>
              <a href="https://github.com/jonjau">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jonathanjauhari/">
                LinkedIn
              </a>
            </li>
            <li>BTC: 1FrKqLmrRCTuVjq9pYRADCYXRBdVsHQmtY</li>
            <li>ETH: 0x43d5aE1Bce42210EB742486Cd3e3331011b7c454</li>
          </ul>
          <h2>Interests</h2>

          <ul>
            <li>Data visualisation</li>
            <li>Languages (natural / programming / constructed)</li>
            <li>Logic puzzles (à la Nikoli)</li>
            <li>https://www.linkedin.com/in/jonathanjauhari/</li>
          </ul>
        </section>
        <hr />
      </article>
    </Layout>
  );
};

export { About as default, pageQuery };
