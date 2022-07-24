import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Article } from "../components/article";

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
          <h1 itemProp="headline">About</h1>
        </header>
        <section itemProp="articleBody">
          <p>
            I'm a data science graduate from the University of
            Melbourne, currently working as a junior data engineer in
            a business management consultant company.
          </p>
          <p>
            My studies is focused in data processing, analyzing and predicting modelling,
            with a minor in software development and computer science. I'm proficient in 
            programming languages such as Python, SQL and R. My work is closely 
            related to working with PostgreSQL, Pentaho and python ansible scripts to troubleshoot
            developed data engineering platforms and ETL's.
            In the future, I would be interested in exploring Tableau and other BI frameworks.
          </p>

          <h2>Links</h2>
          <p>
            View my portfolio on&nbsp;
            <a title="My Github profile" href="https://github.com/rinliauw">
              Github
            </a>{" "}
            and&nbsp;
            <a
              title="My LinkedIn profile"
              href="https://www.linkedin.com/in/rinliauw/"
            >
              LinkedIn
            </a>
            , contact me via e-mail:&nbsp;
            <a
              title="Send me an email"
              href="mailto:karinaliauw@gmail.com"
            >
              karinaliauw@gmail.com
            </a>
            .
          </p>
        </section>
      </Article>
    </Layout>
  );
};

export { About as default, pageQuery };
