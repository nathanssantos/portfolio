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
                  Fullstack engineer focused on clean architecture, performance,
                  and delivering polished user experiences. I've led major
                  migrations (React 16 → 19), built design systems from scratch,
                  and shipped products across web, mobile, and desktop platforms.
                  Self-taught and coding daily since 2018.
                </p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <p>The technologies I’ve been working with recently:</p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <ul className="about__skills">
                  <li>TypeScript</li>
                  <li>React 19</li>
                  <li>Next.js</li>
                  <li>React Native</li>
                  <li>Electron</li>
                  <li>Node.js</li>
                  <li>Fastify / tRPC</li>
                  <li>PostgreSQL</li>
                  <li>Chakra UI</li>
                  <li>Canvas API</li>
                  <li>Vitest / Cypress</li>
                  <li>Vite</li>
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
