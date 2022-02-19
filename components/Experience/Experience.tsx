import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const Experience = () => {
  return (
    <section className="experience">
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>Experience</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default Experience;
