import Container from "@mui/material/Container";
import { Social } from "../";
import { FadeInContainer } from "../";
import Styles from "./Styles";

const Footer = () => {
  return (
    <Styles className="footer">
      <Social />
      <Container>
        <div>
          Design inspired by{" "}
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
            className="underline-hover"
          >
            Brittany Chiang
          </a>{" "}
          and built by Nathan S. Santos
        </div>
      </Container>
    </Styles>
  );
};

export default Footer;
