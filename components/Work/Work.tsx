import { Container } from "@mui/material";
import LazyLoad from "react-lazyload";
import { TransitionContainer } from "../";
import Styles from "./Styles";

const Work = () => {
  return (
    <Styles id="work" className="work">
      <Container maxWidth="lg">
        <LazyLoad height={200}>
          <TransitionContainer>
            <article>Work</article>
          </TransitionContainer>
        </LazyLoad>
      </Container>
    </Styles>
  );
};

export default Work;
