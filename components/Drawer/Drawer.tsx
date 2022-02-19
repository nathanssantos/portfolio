import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { Menu } from "../";

import StyledBox from "./Styles";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button onClick={toggleDrawer} className="bt-drawer">
        Drawer
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <StyledBox role="presentation">
          <Menu />
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
