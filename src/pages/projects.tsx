import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { MdxNode } from "../common/types";
import { PostList, PostListItem } from "../components/post-list";
import { SectionDescription, SectionTitle } from "../components/section";

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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
          featured {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
              )
            }
          }
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

const Projects = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <SectionTitle>Projects</SectionTitle>
      <SectionDescription>
        Here I write about notable projects that I've undertaken.
      </SectionDescription>
      <PostList>
        {posts.map((post: MdxNode) => (
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
