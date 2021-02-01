import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { fontSize } from "../common";

const FooterWrapper = styled.div`
  display: flex;
  max-width: 50rem;
  margin: 0px auto;
  padding-bottom: 8rem;
`;

const Copyright = styled.span`
  color: light400;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize[1]};
`;

const SocialLinks = styled.div`
  display: flex;
  margin-left: auto;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize[3]};
  height: 44px;
  width: 44px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>© {new Date().getFullYear()} Jonathan Jauhari </Copyright>
      <SocialLinks>
        <SocialLink title="My Github profile" href="https://github.com/jonjau">
          <FaGithub />
        </SocialLink>
        <SocialLink
          title="My Linkedin profile"
          href="https://www.linkedin.com/in/jonathanjauhari/"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          title="Send me an email"
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6A%6F%6E%63%6A%61%75%68%61%72%69%40%67%6D%61%69%6C%2E%63%6F%6D"
        >
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
    </FooterWrapper>
  );
};

export default Footer;
