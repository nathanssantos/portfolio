import Container from "@mui/material/Container";
import { Social } from "../";
import Styles from "./Styles";

const Footer = () => {
  return (
    <Styles className="footer">
      <Social />
      <Container>
        Design inspired by{" "}
        <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
          Brittany Chiang
        </a>{" "}
        and built by Nathan S. Santos
      </Container>
    </Styles>
  );
};

export default Footer;
