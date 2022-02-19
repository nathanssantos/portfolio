import styled, { css } from "styled-components";

const LayoutStyles = styled.div`
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
  filter: blur(3px);
  transform: translate3d(0, 20px, 0);
`;

export default LayoutStyles;
