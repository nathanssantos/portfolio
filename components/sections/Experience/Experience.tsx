import { Container } from "@mui/material";
import LazyLoad from "react-lazyload";
import { TransitionContainer } from "../../";
import Styles from "./Styles";

const Experience = () => {
  return (
    <Styles id="experience" className="experience">
      <Container maxWidth="lg">
        <LazyLoad height={200} once>
          <TransitionContainer>
            <article>Experience</article>
          </TransitionContainer>
        </LazyLoad>
      </Container>
    </Styles>
  );
};

export default Experience;
