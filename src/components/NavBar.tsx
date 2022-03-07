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
          <Typography variant="h6" color="inherit" component="div" style={{ marginLeft: "10px"}}>
            Hybridarevyen 2022
          </Typography>
          <Button variant="text" style={{ color: "black" , margin: "auto", marginTop: "20px", 
    transition: "0.2s"}}>
            Program
          </Button>
          <Button variant="text" style={{ color: "black" , margin: "auto", marginTop: "20px", transition: "0.2s"}}>
            Hvem er vi?
          </Button>
          <FaFacebook style={{ float: "right", padding: "10px", transition: "0.2s"}} href="#" />
          <FaInstagram style={{ float: "right", padding: "10px", transition: "0.2s" }} href="#" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
