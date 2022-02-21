import Container from "@mui/material/Container";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Hero = () => {
  return (
    <Styles>
      <Container maxWidth="lg">
        <div className="content">
          <FadeInContainer delay={500}>
            <h3>Hi, my name is</h3>
          </FadeInContainer>
          <FadeInContainer delay={600}>
            <h1>Nathan Santos.</h1>
          </FadeInContainer>
          <FadeInContainer delay={700}>
            <h2>I create things for the web.</h2>
          </FadeInContainer>
          <FadeInContainer delay={800}>
            <h4>
              I’m a Front-end engineer with 5 years of experience specialized in
              building exceptional digital products. Currently, I’m Tech Lead at{" "}
              <a href="https://w16.dev/" target="_blank" rel="noreferrer">
                W16 Software House
              </a>
              .
            </h4>
          </FadeInContainer>
        </div>
      </Container>
    </Styles>
  );
};

export default Hero;
