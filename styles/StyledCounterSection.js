import styled from "styled-components";
import { StyledSlideAnimation } from "./StyledSlideAnimation";

export const StyledCounterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 3rem;
  animation: ${StyledSlideAnimation} 1s ease 0s 1 normal forwards;
`;
