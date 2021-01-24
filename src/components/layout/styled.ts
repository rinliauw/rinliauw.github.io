import styled from "styled-components";
import { spacing, fontSize } from "../../common";

export const GlobalWrapper = styled.div`
  margin: ${spacing[0]} auto;
  max-width: 52rem;
  padding: ${spacing[5]};
`;

export const GlobalHeader = styled.div`
  margin-bottom: ${spacing[2]};
`;

export const MainHeading = styled.h2`
  font-size: ${fontSize[5]};
  margin: ${spacing[0]};
`;
