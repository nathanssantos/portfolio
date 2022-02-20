import styled, { css } from "styled-components";

const Styles = styled.div<{ visible: Boolean }>`
  transition: all 250ms ease-in-out;
  opacity: 0;
  transform: translate3d(0, 0.625rem, 0);

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: none;
    `}
`;

export default Styles;
