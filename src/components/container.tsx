import styled from "styled-components";
import { fontSize, spacing } from "../common";
import { devices } from "../common/breakpoints";

const Container = styled.div`
  @media ${devices.phone} {
    max-width: 20rem;
    padding-left: ${spacing[1]};
    padding-right: ${spacing[1]};
  }
  @media ${devices.tablet_portrait} {
    max-width: 40rem;
    padding-left: ${spacing[6]};
    padding-right: ${spacing[6]};
    padding-top: 10rem;
  }
  @media ${devices.tablet_landscape} {
    max-width: 50rem;
  }
  margin: 0 auto;
  padding-top: 5rem;
`;

export default Container;
