import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Work = () => {
  return (
    <Styles id="work" className="work">
      <Container maxWidth="lg">
        <FadeInContainer lazyLoad>
          <article>Work</article>
        </FadeInContainer>
      </Container>
    </Styles>
  );
};

export default Work;
