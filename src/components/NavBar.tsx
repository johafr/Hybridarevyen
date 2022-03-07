import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  let history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#01529d" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ marginLeft: "10px" }}
          >
            <Button
              variant="text"
              style={{
                color: "white",
                margin: "auto",
                marginTop: "20px",
                transition: "0.2s"
              }}
              onClick={e => history.push("/")}
            >
              Hybridarevyen 2022
            </Button>
          </Typography>
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s"
            }}
            onClick={e => history.push("/program")}
          >
            Program
          </Button>
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s"
            }}
          >
            Hvem er vi?
          </Button>
          <FaFacebook
            style={{ float: "right", padding: "10px", transition: "0.2s" }}
            href="#"
          />
          <FaInstagram
            style={{ float: "right", padding: "10px", transition: "0.2s" }}
            href="#"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
