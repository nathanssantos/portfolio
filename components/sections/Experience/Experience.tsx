import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Experience = () => {
  return (
    <Styles id="experience">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>Experience</h2>
            </FadeInContainer>
          </header>
        </div>
      </Container>
    </Styles>
  );
};

export default Experience;
