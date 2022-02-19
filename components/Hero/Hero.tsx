import LazyLoad from "react-lazyload";

import { TransitionContainer } from "../";

import Styles from "./Styles";

const Hero = () => {
  return (
    <Styles className="hero">
      <div className="hero__content">
        <LazyLoad /* height={200} */ once>
          <TransitionContainer delay={100}>
            <article>1</article>
          </TransitionContainer>
        </LazyLoad>
        <LazyLoad /* height={200} */ once>
          <TransitionContainer delay={200}>
            <article>2</article>
          </TransitionContainer>
        </LazyLoad>
        <LazyLoad /* height={200} */ once>
          <TransitionContainer delay={300}>
            <article>3</article>
          </TransitionContainer>
        </LazyLoad>
        <LazyLoad /* height={200} */ once>
          <TransitionContainer delay={400}>
            <article>4</article>
          </TransitionContainer>
        </LazyLoad>
      </div>
    </Styles>
  );
};

export default Hero;
