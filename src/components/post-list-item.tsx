import React from "react";

import styled from "styled-components";

import { MarkdownRemarkNode } from "../common/types";

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

const Article = styled.article`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};

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
