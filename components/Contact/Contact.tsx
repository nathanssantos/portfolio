import { Container } from "@mui/material";
import LazyLoad from "react-lazyload";
import { TransitionContainer } from "../";
import Styles from "./Styles";

const Contact = () => {
  return (
    <Styles id="contact" className="contact">
      <Container maxWidth="lg">
        <LazyLoad height={200} once>
          <TransitionContainer>
            <article>Contact</article>
          </TransitionContainer>
        </LazyLoad>
      </Container>
    </Styles>
  );
};

export default Contact;
