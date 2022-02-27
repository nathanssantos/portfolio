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
          <FadeInContainer lazyLoad offset={-50} delay={300}>
            <p>
              Feel free to contact me, my inbox is always open. Whether you have
              a question or just want to say hi, I’ll do my best to answer you!
            </p>
          </FadeInContainer>
          <FadeInContainer lazyLoad offset={-50} delay={400}>
            <a href="mailto:nathansilvasantos@gmail.com">
              <Button>Say Hello</Button>
            </a>
          </FadeInContainer>
        </div>
      </Container>
    </Styles>
  );
};

export default Contact;
