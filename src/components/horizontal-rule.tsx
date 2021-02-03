import styled from "styled-components";

const HorizontalRule = styled.hr`
  background-color: ${({ theme }) => theme.colors.complementary};
  height: 0.25rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border: 0;
`;

export default HorizontalRule;