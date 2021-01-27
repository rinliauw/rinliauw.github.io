import React from "react";
import styled from "styled-components";
import { fontSize } from "../common";

export const LogoContainer = styled.span`
  display: flex;
`;

export const TealSquare = styled.span`
  width: ${fontSize[4]};
  height: ${fontSize[4]};
  display: inline-block;
  background-color: lightgrey;
  border-radius: 3px;
`;

export const LogoText = styled.h2`
  font-size: ${fontSize[3]};
  font-family: "Noto Sans";
  font-weight: lighter;
`;

const Logo = () => {
  return (
    <LogoContainer>
      {/* <TealSquare /> */}
      <LogoText>Jonathan Jauhari</LogoText>
    </LogoContainer>
  );
};

export default Logo;
