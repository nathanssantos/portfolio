import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const About = () => {
  return (
    <section className="about">
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>About</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default About;
