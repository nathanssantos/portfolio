import LazyLoad from "react-lazyload";
import Styles from "./Styles";
import { Drawer, Logo, Menu } from "../";
import Container from "../Container/Container";

const Header = () => {
  return (
    <Styles className="header">
      <Container>
        <div className="header__content">
          <div className="header__content__logo">
            <Logo />
          </div>
          <div className="header__content__menu">
            <Menu />
          </div>
          <div className="header__content__drawer">
            <Drawer />
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default Header;
