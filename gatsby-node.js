const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  // make / ("index") point to /blog
  createRedirect({
    fromPath: "/",
    toPath: "/blog",
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Get all markdown posts in the the subfolder category in /content/{category}
  // (defined in gatsby-config.js)
  const createPagesFromMarkdownFiles = async (category, postComponent) => {
    // Sorted by date, reverse chrono, ad arbitrary limit of 1000 pages
    const postsResult = await graphql(
      `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/${category}/" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
      `
    );

    if (postsResult.errors) {
      reporter.panicOnBuild(
        `There was an error loading your posts in category '${category}'`,
        postsResult.errors
      );
      return;
    }

    const posts = postsResult.data.allMarkdownRemark.nodes;

    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      // `context` is available in the template as a
      // prop and as a variable in GraphQ
      createPage({
        // slug starts with a '/'
        path: `/${category}${post.fields.slug}`,
        component: postComponent,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  };

  // Templates for a blog post and a project post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const projectPost = path.resolve(`./src/templates/project-post.tsx`);

  await createPagesFromMarkdownFiles("blog", blogPost);
  await createPagesFromMarkdownFiles("projects", blogPost);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
