import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { inherits } from "util";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  let history = useHistory();

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 9999 }}>
      <AppBar position="static" style={{ background: "#01529d" }}>
        <Toolbar variant="dense">
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s",
            }}
            onClick={(e) => history.push("/program")}
          >
            Program
          </Button>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ marginLeft: "10px" }}
          >
            <Link href="/" color="inherit">
              Hybridarevyen 2022
            </Link>
          </Typography>
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s",
            }}
          >
            Hvem er vi?
          </Button>
          <a
            className="linkFaceInsta"
            href="https://www.facebook.com/hybridarevyen"
          >
            <FaFacebook
              style={{ float: "right", padding: "10px", transition: "0.2s" }}
            />
          </a>
          <a
            className="linkFaceInsta"
            href="https://instagram.com/hybridarevyen?utm_medium=copy_link"
          >
            <FaInstagram
              style={{ float: "right", padding: "10px", transition: "0.2s" }}
            />
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
