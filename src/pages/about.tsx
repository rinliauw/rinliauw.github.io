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
      <SEO title="All posts" />
      About
    </Layout>
  );
};

export { About as default, pageQuery };
