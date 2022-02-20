import styled from "styled-components";
import { theme } from "../../style";
const { colors, fonts } = theme;

const Styles = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;

    a {
      color: ${colors.green};
      font-family: ${fonts.mono};
    }
  }
`;

export default Styles;
