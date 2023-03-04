import Container from "@mui/material/Container";
import { Social } from "../";
import Styles from "./Styles";

const Footer = () => {
  return (
    <Styles className="footer">
      <Social />
      <Container>
        <div>Created by Nathan S. Santos</div>
      </Container>
    </Styles>
  );
};

export default Footer;
