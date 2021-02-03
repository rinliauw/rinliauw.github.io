import React from "react";
import { graphql, Link, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { fontSize } from "../common";
import theme from "../common/theme";

const Text404 = styled.h1`
  font-size: ${fontSize[7]};
`;

const Message = styled.div`
  font-size: ${fontSize[2]};
  text-align: center;
`;

const BackToHomeLink = styled(Link)`
  color: ${theme.colors.primary};
  :hover,
  :focus {
    color: ${theme.colors.primaryLight};

    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: ${theme.colors.complementary};
  }
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

const NotFound = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Page Not Found" />
      <Text404>404: Page Not Found</Text404>
      <Message>
        <p>Have you found the void, or has the void found you?</p>
        <BackToHomeLink to="/">Back to Home</BackToHomeLink>
      </Message>
    </Layout>
  );
};

export { NotFound as default, pageQuery };
