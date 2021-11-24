// used for (blog) posts
export interface MdxNode {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: Date;
    title: string;
    description: string;
    featured: any;
  };
  timeToRead: number;
}
