import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const Contact = () => {
  return (
    <section className="contact">
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>Contact</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default Contact;