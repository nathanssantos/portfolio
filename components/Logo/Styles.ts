import styled from "styled-components";
import { SCTheme } from "../../style";
const { colors } = SCTheme;

const Styles = styled.div`
  /* background: linear-gradient(
    94.23deg,
    ${colors.green} 12.41%,
    ${colors.blue} 52.55%,
    ${colors.blue} 89.95%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: ${colors.green};
  font-weight: 800;
  font-size: 1.875rem;
`;

export default Styles;
