import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import theme from "../common/theme";
import { fontSize, spacing, lineHeight } from "../common";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArticleHeader = styled.header`
  font-family: ${theme.fonts.serif};
  h1 {
    margin: 0 ${spacing[4]} 0 0;
  }
  p {
    font-size: ${fontSize[3]};
  }
`;

const HorizontalRule = styled.hr`
    background-color: ${theme.colors.complementary};
    height: 0.25rem;
    margin-bottom: ${spacing[4]};
    border: 0;
`;

const Article = styled.article`
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    :hover,
    :focus {
      color: ${theme.colors.primaryLight};
      text-decoration: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.serif};
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
    padding: 0 0 0 ${spacing[4]};
    list-style-position: outside;
    list-style-image: none;

    li {
      padding-left: ${spacing[2]};
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
    color: ${theme.colors.textDark};
    margin-left: -${spacing[6]};
    margin-right: ${spacing[8]};
    padding: 0 0 0 ${spacing[6]};
    border-left: 0.25rem solid ${theme.colors.complementary};
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
          border-bottom: 1px solid ${theme.colors.text};
        }
      }
      border-bottom: 1px solid white;
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
    a {
      color: ${theme.colors.primary};
      &:hover {
        color ${theme.colors.primaryLight};
      }
    }
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
        <ArticleHeader>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <HorizontalRule />
        </ArticleHeader>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <HorizontalRule />
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
      </FooterNextPrevious>
    </Layout>
  );
};

export { ProjectPost as default, pageQuery };
