import React from "react";

import styled from "styled-components";

import { spacing, fontSize } from "../common";
import theme from "../common/theme";
import { MarkdownRemarkNode } from "../common/types";

const Header = styled.header`
  margin-bottom: ${spacing[4]};
`;

const Headline = styled.h2`
  font-size: ${fontSize[3]};
  color: ${theme.colors.primary};
  margin-bottom: ${spacing[2]};
  margin-top: 0;
`;

const Dateline = styled.p`
  font-size: ${fontSize[0]};
`;

const Section = styled.section`
  margin-bottom: 0;
`;

const Description = styled.p``;

const Article = styled.article`
  margin-bottom: ${spacing[8]};
  margin-top: ${spacing[8]};
  padding: ${spacing[3]};
  border-radius: 4px;
  color: ${theme.colors.text};

  transition: background-color 0.1s;

  // x:hover and x :hover are not the same.
  &:hover {
    background-color: ${theme.colors.backgroundBright};
    ${Headline} {
      color: ${theme.colors.primaryBright};
    }
    ${Dateline} {
      color: ${theme.colors.textBright};
    }
    ${Description} {
      color: ${theme.colors.textBright};
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
