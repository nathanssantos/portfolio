import { List, ListItem } from "@mui/material";
import Link from "next/link";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import Styles from "./Styles";

const Menu = () => {
  return (
    <Styles className="menu">
      <List>
        <ListItem button>
          <FadeInContainer delay={100}>
            <Link href="/#about">About</Link>
          </FadeInContainer>
        </ListItem>
        <ListItem button>
          <FadeInContainer delay={200}>
            <Link href="/#experience">Experience</Link>
          </FadeInContainer>
        </ListItem>
        <ListItem button>
          <FadeInContainer delay={300}>
            <Link href="/#work">Work</Link>
          </FadeInContainer>
        </ListItem>
        <ListItem button>
          <FadeInContainer delay={400}>
            <Link href="/#contact">Contact</Link>
          </FadeInContainer>
        </ListItem>
      </List>
    </Styles>
  );
};

export default Menu;
