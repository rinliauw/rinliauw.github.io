import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { fontSize, lineHeight, spacing } from "../common";
import theme from "../common/theme";

const Article = styled.article`
  header {
    font-family: ${theme.font.serif};
    h1 {
      margin: 0 ${spacing[4]} 0 0;
    }
    p {
      font-size: ${fontSize[3]};
    }
  }

  /* Prose */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.serif};
    color: ${theme.colors.primary};
  }

  p {
    line-height: ${lineHeight.relaxed};
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 0 0 ${spacing[8]} 0;
    padding: 0;
  }

  ul,
  ol {
    margin: 0 0 ${spacing[8]} 0;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;

    li {
      padding-left: 0;
      margin-bottom: ${spacing[4]};
    }
  }

  li {
    > {
      p {
        margin-bottom: ${spacing[4]};
      }
      ul {
        margin-left: ${spacing[8]};
        margin-top: ${spacing[4]};
      }
    }
    *:last-child {
      margin-bottom: 0;
    }
  }

  blockquote {
    color: ${theme.colors.textLight};
    margin-left: -${spacing[6]};
    margin-right: ${spacing[8]};
    padding: 0 0 0 ${spacing[6]};
    border-left: 0.25rem solid ${theme.colors.primary};
    font-size: ${fontSize[1]};
    // font-style: italic;
    margin-bottom: ${spacing[8]};

    > {
      :last-child {
        margin-bottom: ${spacing[0]};
      }

      ul,
      ol {
        list-style-position: inside;
      }
    }
  }

  table {
    width: 100%;
    margin-bottom: ${spacing[8]};
    border-collapse: collapse;
    border-spacing: 0.25rem;
    thead {
      tr {
        th {
          border-bottom: 1px ${theme.colors.accent};
        }
      }
    }
  }
`;

const FooterNextPrevious = styled.nav`
  ul {
    margin: ${spacing[0]};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`;

const pageQuery = graphql`
  query BlogPostBySlug(
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

const BlogPost = ({ data, location }: Props) => {
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
      <Article itemScope itemType="http://schema.org/Article">
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
        <ul>
          {/* TODO: make these stack */}
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </FooterNextPrevious>
    </Layout>
  );
};

export { BlogPost as default, pageQuery };
