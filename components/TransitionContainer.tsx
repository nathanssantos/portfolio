import React, { useEffect, useState } from "react";

import TransitonContainerStyles from "./style/TransitionContainerStyles";

interface TransitionContainerProps {
  children: React.ReactElement;
  delay?: number;
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
    <TransitonContainerStyles
      className="transition-container"
      visible={visible}
    >
      {children}
    </TransitonContainerStyles>
  );
};

export default TransitionContainer;
