import styled from "styled-components";
import { SCTheme } from "../../style";
const { colors, fonts } = SCTheme;

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
