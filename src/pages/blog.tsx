import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { MarkdownRemarkNode } from "../common/types";
import PostListItem from "../components/post-list-item";
import PostList from "../components/post-list";

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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

// TODO: compact/archive view
const Blog = ({ data, location }: Props) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <PostList>
        {posts.map((post: MarkdownRemarkNode) => (
          <li key={post.fields.slug}>
            <Link to={`/blog${post.fields.slug}`} itemProp="url">
              <PostListItem post={post} />
            </Link>
          </li>
        ))}
      </PostList>
    </Layout>
  );
};

export { Blog as default, pageQuery };
