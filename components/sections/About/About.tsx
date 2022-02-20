import { Container } from "@mui/material";
import LazyLoad from "react-lazyload";
import { TransitionContainer } from "../../";
import Styles from "./Styles";

const About = () => {
  return (
    <Styles id="about" className="about">
      <Container maxWidth="lg">
        <LazyLoad height={200} once>
          <TransitionContainer>
            <article>About</article>
          </TransitionContainer>
        </LazyLoad>
      </Container>
    </Styles>
  );
};

export default About;
