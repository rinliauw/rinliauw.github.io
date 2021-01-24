import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/blog.scss";
import { ThemeProvider } from "styled-components";
import theme from "../common/theme";

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

interface MarkdownRemarkNode {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: Date;
    title: string;
    description: string;
  };
}

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
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <ThemeProvider theme={theme}>
      <Layout location={location} title={siteTitle}>
        <SEO title="Blog" />
        <ol style={{ listStyle: `none` }}>
          {posts.map((post: MarkdownRemarkNode) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <Link to={`/blog${post.fields.slug}`} itemProp="url">
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="post-list-item-headline">
                        {/* relative link to e.g. /posts/post1-slug/ */}
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <small className="post-list-item-headline-date">
                        {post.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        className="post-list-item-description"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </Link>
              </li>
            );
          })}
        </ol>
      </Layout>
    </ThemeProvider>
  );
};

export { Blog as default, pageQuery };
