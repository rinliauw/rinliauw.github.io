import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MarkdownRemarkNode } from "../common/types";
import theme from "../common/theme";
import { ThemeProvider } from "styled-components";
import PostListItem from "../components/post-list-item";

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    allMarkdownRemark: {
      nodes: MarkdownRemarkNode[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Projects = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <ThemeProvider theme={theme}>
      <Layout location={location} title={siteTitle}>
        <SEO title="Projects" />
        <ol style={{ listStyle: `none` }}>
          {posts.map((post: MarkdownRemarkNode) => (
            <li key={post.fields.slug}>
              <Link to={`/projects${post.fields.slug}`} itemProp="url">
                <PostListItem post={post} />
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </ThemeProvider>
  );
};

export { Projects as default, pageQuery };
