import { Button, Container } from "@mui/material";
import { FadeInContainer } from "../../";
import { Section } from "../../../style";
import Styles from "./Styles";

const Contact = () => {
  return (
    <Section id="contact">
      <Container maxWidth="lg">
        <div className="content">
          <FadeInContainer lazyLoad delay={200}>
            <h2>Get in Touch</h2>
          </FadeInContainer>
          <FadeInContainer lazyLoad delay={300}>
            <p>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
          </FadeInContainer>
          <FadeInContainer lazyLoad delay={400}>
            <Button>Say Hello</Button>
          </FadeInContainer>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
