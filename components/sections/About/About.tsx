import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const About = () => {
  return (
    <Styles id="about">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>About</h2>
            </FadeInContainer>
          </header>
        </div>
      </Container>
    </Styles>
  );
};

export default About;
