import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Article = styled.article`
  header {
    h1 {
      margin: var(--spacing-0) var(--spacing-0) var(--spacing-4)
        var(--spacing-0);
    }
    p {
      font-size: var(--fontSize-3);
      font-family: var(--font-heading);
    }
  }
`;

const FooterNextPrevious = styled.nav`
  ul {
    margin: var(--spacing-0);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`;

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
  markdownRemark(id: { eq: $id }) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
    }
  }
  previous: markdownRemark(id: { eq: $previousPostId }) {
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
  next: markdownRemark(id: { eq: $nextPostId }) {
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
    markdownRemark: any;
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
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  // TODO: time to read, table of contents, tags
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </Article>
      <FooterNextPrevious>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {/* TODO: make these stack */}
          <li>
            {previous && (
              <Link to={`/projects${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/projects${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </FooterNextPrevious>
    </Layout>
  );
};

export { ProjectPost as default, pageQuery };
