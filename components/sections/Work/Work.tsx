import { Container } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Work = () => {
  return (
    <Styles id="work">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>Work</h2>
            </FadeInContainer>
          </header>
        </div>
      </Container>
    </Styles>
  );
};

export default Work;
