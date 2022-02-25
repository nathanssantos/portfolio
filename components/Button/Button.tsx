import { ReactElement } from "react";
import Styles from "./Styles";

interface ButtonProps {
  children: ReactElement | String;
}

const Button = (props: ButtonProps) => {
  const { children } = props;

  return (
    <Styles size="large">
      <div className="background-cover" />
      <div className="children">{children}</div>
    </Styles>
  );
};

export default Button;
