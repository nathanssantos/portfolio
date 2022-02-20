import Styles from "./Styles";
import { Drawer, Logo, Menu } from "../";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <AppBar className="header" position="sticky">
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
