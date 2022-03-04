import styled from "styled-components";
import { Section } from "../../style";

const Styles = styled(Section)`
  .MuiList-root {
    display: grid;
    gap: 1rem;
    > .fade-in-container-wrapper {
      .transition-container {
        display: flex;
      }
    }
  }
`;

export default Styles;
