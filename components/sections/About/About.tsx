import Container from "@mui/material/Container";
import Image from "next/image";
import { FadeInContainer } from "../../";
import Styles from "./Styles";
import me from "../../../public/assets/me.jpg";

const About = () => {
  return (
    <Styles id="about" className="about">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad delay={100}>
              <h2>About</h2>
            </FadeInContainer>
          </header>
          <div className="about__body">
            <FadeInContainer lazyLoad delay={200}>
              <div className="about__image">
                <Image
                  src={me}
                  alt="Nathan S. Santos"
                  width={200}
                  height={200}
                />
                <div className="about__image__mask" />
              </div>
            </FadeInContainer>
            <FadeInContainer lazyLoad delay={300}>
              <p>
                Passionate about learning, applying new technologies, constantly
                challenging myself and improving my skills. As a developer, I
                aim to write clean code which can be easily read, tested,
                maintained, reused, and extended. I am highly committed to my
                work, always doing my best to push initiatives to successful
                completion.
              </p>
            </FadeInContainer>
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default About;
