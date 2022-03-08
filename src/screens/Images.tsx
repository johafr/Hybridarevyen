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

import 1 from "../../bilderr/";



interface props extends defaultProps {}

const Images: React.FC<props> = () => {
  const imgs = images;
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
