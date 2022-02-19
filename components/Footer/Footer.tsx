import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

const Footer = () => {
  return (
    <section className="footer">
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>Footer</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default Footer;
