module.exports = {
  // metadata for SEO and also accessible by components/pages
  siteMetadata: {
    title: `Karina Liauw`,
    author: {
      name: `Karina Liauw`,
      summary: `Data Science student at the University of Melbourne`,
    },
    description: `The personal website of Karina Liauw.`,
    siteUrl: `https://rinliauw.github.io/`,
  },
  plugins: [
    // include files and make them available as data nodes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          // processes images in .md: add wrappers and blurred placeholders
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          // wraps iframes in .md files in responsive elastic containers
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // code highlighting
          `gatsby-remark-prismjs`,
          // copies local files linked from .md files to public/
          `gatsby-remark-copy-linked-files`,
          // implements smartypants: better punctuation marks
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // RSS feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                });
              });
            },
            query: `
              {
                allMdx(
                  filter: { fileAbsolutePath: { regex: "/blog/" } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        description
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Karina Liauw's Blog Posts",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp to test
            // if pathname of current page satisfies it.
            // If not provided or `undefined`, all pages will have feed
            // reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    // Creates ImageSharp nodes from image files supported by Sharp
    `gatsby-transformer-sharp`,
    // low-level plugin for image processing functions of the Sharp library
    `gatsby-plugin-sharp`,
    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // for web manifest:
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karina Liauw`,
        short_name: `Karina Liauw`,
        start_url: `/`,
        background_color: `#252525`,
        theme_color: `#197060`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic-512.png`,
      },
    },
    // to set document <head />, which contains meta tags for SEO
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
};
