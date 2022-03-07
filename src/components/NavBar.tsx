import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Hamburger from "hamburger-react";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Hamburger />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Hybridarevyen 2022
          </Typography>
          <Button>Kjøp Billett</Button>
          <Button>Program</Button>
          <Button>Hvem er vi?</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
