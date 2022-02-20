import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Styles = styled(Box)`
  padding: 1rem;
  width: 100vw;
  max-width: 15rem;

  .menu {
    ul {
      flex-direction: column;
    }
  }
`;

export default Styles;
