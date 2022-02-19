import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const Projects = () => {
  return (
    <section className="projects">
      {/* <header>Projects</header> */}
      <LazyLoad height={200}>
        <TransitionContainer>
          <article>1</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200}>
        <TransitionContainer>
          <article>2</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200}>
        <TransitionContainer>
          <article>3</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200}>
        <TransitionContainer>
          <article>4</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200}>
        <TransitionContainer>
          <article>5</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200}>
        <TransitionContainer>
          <article>6</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default Projects;
