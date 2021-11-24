import React from "react";

import styled from "styled-components";
import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { MdxNode } from "../common/types";
import theme from "../styles/theme";

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSize[3]};
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  margin-top: 0;
`;

const Dateline = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSize[0]};
`;

const Section = styled.section`
  margin-bottom: 0;
`;

const Description = styled.p``;

const Thumbnail = styled.div`
  margin-right: ${({ theme }) => theme.spacing[0]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    margin-right: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[0]};
  }
  flex-basis: 40%;
`;

const Content = styled.div<ContentProps>`
  flex-basis: ${({ full }) => full ? '100%' : '60%' }
`;

const Article = styled.article`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    flex-direction: row;
  }

  transition: background-color 0.1s;

  background-color: ${({ theme }) => theme.colors.backgroundLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  // x:hover and x :hover are not the same.
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    ${Headline} {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
    ${Dateline} {
      color: ${({ theme }) => theme.colors.textLight};
    }
    ${Description} {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

interface ContentProps {
  full: boolean;
}

interface Props {
  post: MdxNode;
}

const PostListItem = ({ post }: Props) => {
  const title = post.frontmatter.title || post.fields.slug;
  const featuredImage = getImage(post.frontmatter.featured);
  return (
    <Article itemScope itemType="http://schema.org/Article">
      {
        post.frontmatter.featured &&
        featuredImage !== undefined ?
        <Thumbnail>
          {/* <Img
            fluid={post.frontmatter.featured.childImageSharp.fluid}
            alt={post.frontmatter.title}
          /> */}
          <GatsbyImage
            image={featuredImage}
            alt={post.frontmatter.title}
          />
        </Thumbnail>
        : null
      }
      {/* if there is a thumbnail then content is 60% else 100% width */}
      <Content full={featuredImage === undefined}>
        <Header>
          <Headline>
            {/* relative link to e.g. /posts/post1-slug/ */}
            <span itemProp="headline">{title}</span>
          </Headline>
          <Dateline>{post.frontmatter.date}</Dateline>
        </Header>
        <Section>
          <Description
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </Section>
      </Content>
    </Article>
  );
};

const PostList = styled.ol`
  list-style-type: none;

  // remove default margin and padding of list
  margin: 0;
  padding: 0;
`;

export { PostList, PostListItem };

