import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const ProjectCard = () => {
  return (
    <section className="project-card">
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>ProjectCard</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default ProjectCard;
