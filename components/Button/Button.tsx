import { ReactElement } from "react";
import Styles from "./Styles";

interface ButtonProps {
  children: ReactElement | string;
  size?: "large" | "small" | "medium";
  component?: unknown;
  href?: string;
  target?: string;
}

const Button = (props: ButtonProps) => {
  const { children, size = "large", component = "a", href, target } = props;

  return (
    <Styles
      size={size}
      component={component}
      href={href}
      target={target}
      rel="noreferrer"
    >
      <div className="background-cover" />
      <div className="children">{children}</div>
    </Styles>
  );
};

export default Button;
