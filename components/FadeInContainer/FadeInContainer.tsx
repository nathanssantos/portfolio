import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

import Styles from "./Styles";

interface TransitionContainerProps {
  children: React.ReactElement;
  delay: number;
}

interface FadeInContainerProps {
  children: React.ReactElement;
  lazyLoad?: Boolean;
  height?: number;
  delay?: number;
  once?: boolean;
  offset?: number;
}

const TransitionContainer = (props: TransitionContainerProps) => {
  const { children, delay } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, delay);
  }, []);

  return (
    <Styles className="transition-container" visible={visible}>
      {children}
    </Styles>
  );
};

const FadeInContainer = (props: FadeInContainerProps) => {
  const {
    children,
    lazyLoad = false,
    height = 16,
    delay = 200,
    once = true,
    offset = -150,
  } = props;

  if (lazyLoad) {
    return (
      <LazyLoad
        height={height}
        once={once}
        offset={offset}
        classNamePrefix="fade-in-container"
      >
        <TransitionContainer delay={delay}>{children}</TransitionContainer>
      </LazyLoad>
    );
  }

  return <TransitionContainer delay={delay}>{children}</TransitionContainer>;
};

export default FadeInContainer;
