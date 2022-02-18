import React from "react";
import LazyLoad from "react-lazyload";

import { TransitionContainer } from ".";

import HeroStyles from "./style/HeroStyles";

const Hero = () => {
  return (
    <HeroStyles className="hero">
      <div className="hero__content">
        <LazyLoad height={200} once>
          <TransitionContainer delay={200}>
            <article>1</article>
          </TransitionContainer>
        </LazyLoad>
        <LazyLoad height={200} once>
          <TransitionContainer delay={400}>
            <article>2</article>
          </TransitionContainer>
        </LazyLoad>
        <LazyLoad height={200} once>
          <TransitionContainer delay={600}>
            <article>3</article>
          </TransitionContainer>
        </LazyLoad>
        <LazyLoad height={200} once>
          <TransitionContainer delay={800}>
            <article>4</article>
          </TransitionContainer>
        </LazyLoad>
      </div>
    </HeroStyles>
  );
};

export default Hero;
