import React from "react";
import { FaSquareFull } from "react-icons/fa";
import styled from "styled-components";
import { fontSize, spacing } from "../common";
import theme from "../common/theme";

const LogoWrapper = styled.div`
  display: flex;
`;

const TealSquareWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TealSquare = styled(FaSquareFull)`
  border-radius: 2px;
  color: #197060;
  width: ${fontSize[4]};
  height: ${fontSize[4]};
  margin-left: ${spacing[3]};
`;

const LogoText = styled.h2`
  font-size: ${fontSize[3]};
  font-family: "Noto Sans";
  font-weight: lighter;
  margin-left: ${spacing[3]};
  margin-right: ${spacing[3]};
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <TealSquareWrapper>
        <TealSquare />
      </TealSquareWrapper>
      <LogoText>
        Jonathan Jauhari
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;
