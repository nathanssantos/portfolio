import styled, { css } from "styled-components";

const TransitionContainerStyles = styled.div<{ visible: Boolean }>`
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
  filter: blur(3px);
  transform: translate3d(0, 20px, 0);

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      filter: none;
      transform: none;
    `}
`;

export default TransitionContainerStyles;
