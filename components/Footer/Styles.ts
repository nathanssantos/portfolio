import styled from "styled-components";
import { SCTheme } from "../../style";
const { fonts, colors } = SCTheme;

const Styles = styled.footer`
  text-align: center;
  font-family: ${fonts.mono};
  font-size: 0.75rem;
  padding: 8rem 0 2.5rem;

  a {
    color: ${colors.green};

    &:hover {
    }
  }
`;

export default Styles;
