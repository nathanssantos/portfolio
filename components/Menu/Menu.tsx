import Link from "next/link";
import LazyLoad from "react-lazyload";
import TransitionContainer from "../TransitionContainer/TransitionContainer";
import Styles from "./Styles";

const Menu = () => {
  return (
    <Styles>
      <ul>
        <li>
          <LazyLoad height={20} once>
            <TransitionContainer delay={200}>
              <Link href="/#about">About</Link>
            </TransitionContainer>
          </LazyLoad>
        </li>
        <li>
          <LazyLoad height={20} once>
            <TransitionContainer delay={300}>
              <Link href="/#experience">Experience</Link>
            </TransitionContainer>
          </LazyLoad>
        </li>
        <li>
          <LazyLoad height={20} once>
            <TransitionContainer delay={400}>
              <Link href="/#work">Work</Link>
            </TransitionContainer>
          </LazyLoad>
        </li>
        <li>
          <LazyLoad height={20} once>
            <TransitionContainer delay={500}>
              <Link href="/#contact">Contact</Link>
            </TransitionContainer>
          </LazyLoad>
        </li>
      </ul>
    </Styles>
  );
};

export default Menu;
