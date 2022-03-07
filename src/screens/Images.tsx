import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { defaultProps } from "../App";
import NavBar from "../components/NavBar";

import Casper2 from "../bildepagebilder/Casper2.jpg";
import Johannes1 from "../bildepagebilder/Johannes1.jpg";
import Rebecca2 from "../bildepagebilder/Rebecca2.jpg";

interface props extends defaultProps {}

const Images: React.FC<props> = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          maxWidth: 380,
          height: 200,
          borderRadius: 1
        }}
      >
        <Card
          sx={{
            width: "auto",
            height: "auto",
            maxWidth: "50%",
            maxHeight: "50%"
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image={Casper2}
              alt="bilde"
            />
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};
export default Images;
