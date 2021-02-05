import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Article from "../components/article";

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

const About = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location}>
      <SEO title="About" />
      <Article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">About me</h1>
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
            .
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
