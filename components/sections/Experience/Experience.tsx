import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Experience = () => {
  return (
    <Styles id="experience" className="experience">
      <Container maxWidth="lg">
        <FadeInContainer height={200} once>
          <article>Experience</article>
        </FadeInContainer>
      </Container>
    </Styles>
  );
};

export default Experience;
