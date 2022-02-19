import React, { useEffect, useState } from "react";

import Styles from "./Styles";

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
    <Styles className="transition-container" visible={visible}>
      {children}
    </Styles>
  );
};

export default TransitionContainer;
