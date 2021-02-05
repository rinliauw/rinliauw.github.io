import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HorizontalRule from "../components/horizontal-rule";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Article, ArticleHeader, ArticleFooterNav } from "../components/article";

const pageQuery = graphql`
  query ProjectPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

interface Props {
  location: Location;
  data: {
    mdx: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
    previous: any;
    next: any;
  };
  pageContext: any;
}

const ProjectPost = ({ data, location }: Props) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  // TODO: table of contents, tags
  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        url={location.href}
      />
      <Article itemScope itemType="http://schema.org/Article">
        <ArticleHeader>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <HorizontalRule />
        </ArticleHeader>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
        <HorizontalRule />
      </Article>
      <ArticleFooterNav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/projects${previous.fields.slug}`} rel="prev">
                <FaArrowLeft /> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/projects${next.fields.slug}`} rel="next">
                {next.frontmatter.title} <FaArrowRight />
              </Link>
            )}
          </li>
        </ul>
      </ArticleFooterNav>
    </Layout>
  );
};

export { ProjectPost as default, pageQuery };
