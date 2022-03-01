import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Styles from "./Styles";
import { Drawer, Menu, FadeInContainer } from "../";

const Header = () => {
  const [headerShown, setHeaderShown] = useState(true);
  let lastScrollTop = 0;

  const detectScrollDirection = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      setHeaderShown(false);
    } else {
      setHeaderShown(true);
    }

    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection, false);

    return () => {
      window.removeEventListener("scroll", detectScrollDirection, false);
    };
  }, []);

  return (
    <AppBar
      className="header"
      position="sticky"
      style={{
        transform: headerShown ? "none" : "translate3d(0, -100%,0)",
        transition: "transform 0.25s cubic-bezier(0.645,0.045,0.355,1)",
      }}
    >
      <Toolbar>
        <Styles>
          <FadeInContainer delay={200}>
            <div className="header__logo"></div>
          </FadeInContainer>
          <div className="header__menu">
            <Menu />
          </div>
          <div className="header__drawer">
            <FadeInContainer delay={400}>
              <Drawer />
            </FadeInContainer>
          </div>
        </Styles>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
