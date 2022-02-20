import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const About = () => {
  return (
    <Styles id="about" className="about">
      <Container maxWidth="lg">
        <FadeInContainer lazyLoad>
          <article>About</article>
        </FadeInContainer>
      </Container>
    </Styles>
  );
};

export default About;
