import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Styles = styled(Box)`
  padding: 16px;
  width: 100vw;
  max-width: 240px;

  .menu {
    ul {
      flex-direction: column;
    }
  }
`;

export default Styles;
