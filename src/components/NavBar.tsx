import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Hamburger from "hamburger-react";
import { Button } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Hybridarevyen 2022
          </Typography>
          <Button variant="text" style={{ color: "black" }}>
            Program
          </Button>
          <Button variant="text" style={{ color: "black" }}>
            Hvem er vi?
          </Button>
          <FaFacebook style={{ float: "right" }} />
          <FaInstagram style={{ float: "right" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
