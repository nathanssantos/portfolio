import MUIButton from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import { Button } from "../";
import Styles from "./Styles";

const Menu = () => {
  return (
    <Styles className="menu">
      <ul>
        <li>
          <FadeInContainer delay={350}>
            <MUIButton color="primary" component="a" href="/#about">
              About
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={500}>
            <MUIButton component="a" href="/#experience">
              Experience
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={650}>
            <MUIButton component="a" href="/#projects">
              Projects
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={800}>
            <MUIButton component="a" href="/#contact">
              Contact
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={950}>
            <Button
              size="medium"
              href="/assets/Resume-Nathan_Silva_Santos.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </FadeInContainer>
        </li>
      </ul>
    </Styles>
  );
};

export default Menu;
