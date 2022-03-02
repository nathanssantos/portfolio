/* eslint-disable react/no-unescaped-entities */
import Container from "@mui/material/Container";
import { Button, FadeInContainer } from "../../components";
import Styles from "./Styles";

const Contact = () => {
  return (
    <Styles id="contact">
      <Container maxWidth="lg">
        <div className="content">
          <header className="align-center">
            <FadeInContainer lazyLoad offset={-50}>
              <h2>Get in Touch</h2>
            </FadeInContainer>
          </header>
          <FadeInContainer lazyLoad offset={-50}>
            <p>
              Feel free to contact me. My inbox is always open. I'll get back to
              you as soon as possible, that's a promise!
            </p>
          </FadeInContainer>
          <FadeInContainer lazyLoad offset={-50}>
            <Button href="mailto:nathansilvasantos@gmail.com">Say Hello</Button>
          </FadeInContainer>
        </div>
      </Container>
    </Styles>
  );
};

export default Contact;
