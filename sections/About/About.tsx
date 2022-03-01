import Container from "@mui/material/Container";
import Image from "next/image";
import { FadeInContainer } from "../../components";
import Styles from "./Styles";

const About = () => {
  return (
    <Styles id="about" className="about">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>About</h2>
            </FadeInContainer>
          </header>
          <div className="about__body">
            <FadeInContainer lazyLoad>
              <div className="about__image">
                <Image
                  src="/assets/images/me.jpg"
                  alt="Nathan S. Santos"
                  width={212}
                  height={212}
                />
                <div className="about__image__mask" />
              </div>
            </FadeInContainer>
            <div className="about__text">
              <FadeInContainer lazyLoad>
                <p>
                  Passionate about learning, applying new technologies, and
                  constantly improving my skills. As a developer, I aim to write
                  clean code which can be easily read, tested, maintained,
                  reused, and extended. I am highly committed to my work, always
                  doing my best to push initiatives to successful completion.
                </p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <p>The technologies I’ve been working with recently:</p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <ul className="about__skills">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>React.js</li>
                  <li>React Native</li>
                  <li>Next.js</li>
                  <li>Vue.js</li>
                  <li>WordPress</li>
                  <li>Node.js</li>
                </ul>
              </FadeInContainer>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default About;
