import LazyLoad from "react-lazyload";
import Styles from "./Styles";
import { Drawer, Logo, Menu, TransitionContainer } from "../";
import Container from "../Container/Container";

const Header = () => {
  return (
    <Styles>
      <Container>
        <div className="header__content">
          <LazyLoad height={50} once>
            <TransitionContainer delay={100}>
              <Logo />
            </TransitionContainer>
          </LazyLoad>
          <Menu />
          <Drawer />
        </div>
      </Container>
    </Styles>
  );
};

export default Header;
