import { List, ListItem } from "@mui/material";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import TransitionContainer from "../TransitionContainer/TransitionContainer";
import Styles from "./Styles";

const Menu = () => {
  return (
    <Styles className="menu">
      <List>
        <ListItem button>
          <LazyLoad height={20} once>
            <TransitionContainer delay={200}>
              <Link href="/#about">About</Link>
            </TransitionContainer>
          </LazyLoad>
        </ListItem>
        <ListItem button>
          <LazyLoad height={20} once>
            <TransitionContainer delay={300}>
              <Link href="/#experience">Experience</Link>
            </TransitionContainer>
          </LazyLoad>
        </ListItem>
        <ListItem button>
          <LazyLoad height={20} once>
            <TransitionContainer delay={400}>
              <Link href="/#work">Work</Link>
            </TransitionContainer>
          </LazyLoad>
        </ListItem>
        <ListItem button>
          <LazyLoad height={20} once>
            <TransitionContainer delay={500}>
              <Link href="/#contact">Contact</Link>
            </TransitionContainer>
          </LazyLoad>
        </ListItem>
      </List>
    </Styles>
  );
};

export default Menu;
