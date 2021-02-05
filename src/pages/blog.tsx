import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { MdxNode } from "../common/types";
import { SectionDescription, SectionTitle } from "../components/section";
import { PostList, PostListItem } from "../components/post-list";

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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
        timeToRead
      }
    }
  }
`;

interface Props extends PageProps {
  data: {
    allMdx: {
      nodes: MdxNode[];
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
  const posts = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <SectionTitle>Blog</SectionTitle>
      <SectionDescription>
        I mainly write about programming and software development. The RSS
        feed for this blog is <a href="/rss.xml">here</a>.
      </SectionDescription>
      <PostList>
        {posts.map((post: MdxNode) => (
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
