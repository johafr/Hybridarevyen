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
import { fontGrid } from "@mui/material/styles/cssUtils";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

interface props extends defaultProps {}

const Images: React.FC<props> = () => {
  const imgs = [
    { Bilde: Casper2 },
    { Bilde: Johannes1 },
    { Bilde: Rebecca2 },
    { Bilde: Casper2 },
    { Bilde: Casper2 },
    { Bilde: Casper2 },
    { Bilde: Casper2 },
    { Bilde: Casper2 },
    { Bilde: Casper2 },
    { Bilde: Casper2 }
  ];
  return (
    <div className="">
      <NavBar />
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 2
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {imgs.map(img => (
            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  image={img.Bilde}
                  alt="bilde"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default Images;
