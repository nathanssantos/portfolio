import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Contact = () => {
  return (
    <Styles id="contact" className="contact">
      <Container maxWidth="lg">
        <FadeInContainer lazyLoad>
          <article>Contact</article>
        </FadeInContainer>
      </Container>
    </Styles>
  );
};

export default Contact;
