import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { SCTheme, Section } from "../../style";
const { colors, fonts } = SCTheme;

const Styles = styled(Button)`
  position: relative;
  background: linear-gradient(
    94.23deg,
    ${colors.green} 12.41%,
    ${colors.green} 52.55%,
    ${colors.blue} 89.95%
  );

  .background-cover {
    background-color: #1a1e22;
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    border-radius: 4px;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .children {
    z-index: 1;
    background: linear-gradient(
      94.23deg,
      ${colors.green} 12.41%,
      ${colors.green} 52.55%,
      ${colors.blue} 89.95%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    .background-cover {
      left: 3px;
      right: 3px;
      top: 3px;
      bottom: 3px;
    }
  }
`;

export default Styles;
