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

const NotFound = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export { NotFound as default, pageQuery };
