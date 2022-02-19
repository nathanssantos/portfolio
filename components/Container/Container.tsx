import React, { useEffect, useState } from "react";

import Styles from "./Styles";

interface ContainerProps {
  children: React.ReactElement;
}

const Container = (props: ContainerProps) => {
  const { children } = props;
  return <Styles className="container">{children}</Styles>;
};

export default Container;
