import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const Social = () => {
  return (
    <section className="social">
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>Social</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default Social;
