import React from "react";

import styled from "styled-components";

import { spacing, fontSize } from "../common";
import theme from "../common/theme";
import { MarkdownRemarkNode } from "../common/types";
import { devices } from "../common/breakpoints";

const Header = styled.header`
  margin-bottom: ${spacing[4]};
`;

const Headline = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: ${fontSize[3]};
  font-weight: lighter;
  color: ${theme.colors.primary};
  margin-bottom: ${spacing[1]};
  margin-top: 0;
`;

const Dateline = styled.p`
  font-family: ${theme.fonts.serif};
  font-size: ${fontSize[0]};
`;

const Section = styled.section`
  margin-bottom: 0;
`;

const Description = styled.p``;

const Article = styled.article`
  margin-bottom: ${spacing[4]};
  margin-top: ${spacing[4]};
  padding: ${spacing[4]};
  border-radius: 4px;
  color: ${theme.colors.text};

  transition: background-color 0.1s;

  background-color: ${theme.colors.backgroundLight};
  @media ${devices.tablet_portrait} {
    background-color: ${theme.colors.background};
  }

  // x:hover and x :hover are not the same.
  &:hover {
    background-color: ${theme.colors.backgroundLight};
    ${Headline} {
      color: ${theme.colors.primaryLight};
    }
    ${Dateline} {
      color: ${theme.colors.textLight};
    }
    ${Description} {
      color: ${theme.colors.textLight};
    }
  }
`;

interface Props {
  post: MarkdownRemarkNode;
}

const PostListItem = ({ post }: Props) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <Article itemScope itemType="http://schema.org/Article">
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
    </Article>
  );
};

export default PostListItem;
