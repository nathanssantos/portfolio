import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Styles from "./Styles";
import { Drawer, Logo, Menu } from "../";

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
          <Container maxWidth="lg">
            <div className="logo">
              <a href="#">
                <Logo />
              </a>
            </div>
            <div className="menu">
              <Menu />
            </div>
            <div className="drawer">
              <Drawer />
            </div>
          </Container>
        </Styles>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
