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
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <PostList>
        {posts.map((post: MarkdownRemarkNode) => (
          <li key={post.fields.slug}>
            <Link to={`/projects${post.fields.slug}`} itemProp="url">
              <PostListItem post={post} />
            </Link>
          </li>
        ))}
      </PostList>
    </Layout>
  );
};

export { Projects as default, pageQuery };
