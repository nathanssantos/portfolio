import Link from "next/link";
import Button from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import Styles from "./Styles";

const Menu = () => {
  return (
    <Styles className="menu">
      <ul>
        <li>
          <FadeInContainer delay={100}>
            <Link href="/#about" passHref>
              <Button color="primary">About</Button>
            </Link>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={200}>
            <Link href="/#experience" passHref>
              <Button>Experience</Button>
            </Link>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={300}>
            <Link href="/#work" passHref>
              <Button>Work</Button>
            </Link>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={400}>
            <Link href="/#contact" passHref>
              <Button>Contact</Button>
            </Link>
          </FadeInContainer>
        </li>
      </ul>
    </Styles>
  );
};

export default Menu;
