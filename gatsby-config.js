module.exports = {
  // metadata for SEO and also accessible by components/pages
  siteMetadata: {
    title: `Jonathan Jauhari`,
    author: {
      name: `Jonathan Jauhari`,
      summary: `Computer Science student at the University of Melbourne`,
    },
    description: `The personal website of Jonathan Jauhari.`,
    siteUrl: `https://jonjau.github.io`,
    social: {
      twitter: `jonjauhari`,
    },
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // Creates ImageSharp nodes from image files supported by Sharp
    `gatsby-transformer-sharp`,
    // low-level plugin for image processing functions of the Sharp library
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    // for web manifest:
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Jauhari`,
        short_name: `Jonathan Jauhari`,
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
