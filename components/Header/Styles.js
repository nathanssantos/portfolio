import styled from "styled-components";
import { media } from "../../style";

const Styles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .MuiContainer-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    ${media.bp1400`
      padding: 0 1.5rem;
    `};
  }

  .menu {
    display: none;
    @media (min-width: 56.25rem) {
      display: flex;
    }
  }

  .drawer {
    @media (min-width: 56.25rem) {
      display: none;
    }
  }
`;

export default Styles;
