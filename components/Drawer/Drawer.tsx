import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>Drawer</Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          Drawer
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
