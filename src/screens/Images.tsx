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

import img1 from "../bilderr/bilder/img1.jpg";
import img2 from "../bilderr/bilder/img2.jpg";
import img3 from "../bilderr/bilder/img3.jpg";
import img4 from "../bilderr/bilder/img4.jpg";
import img5 from "../bilderr/bilder/img5.jpg";
import img6 from "../bilderr/bilder/img6.jpg";
import img7 from "../bilderr/bilder/img7.jpg";
import img8 from "../bilderr/bilder/img8.jpg";
import img9 from "../bilderr/bilder/img9.jpg";
import img10 from "../bilderr/bilder/img10.jpg";
import img11 from "../bilderr/bilder/img11.jpg";
import img12 from "../bilderr/bilder/img12.jpg";
import img13 from "../bilderr/bilder/img13.jpg";
import img14 from "../bilderr/bilder/img14.jpg";
import img15 from "../bilderr/bilder/img15.jpg";
import img16 from "../bilderr/bilder/img16.jpg";
import img17 from "../bilderr/bilder/img17.jpg";
import img18 from "../bilderr/bilder/img18.jpg";
import img19 from "../bilderr/bilder/img19.jpg";
import img20 from "../bilderr/bilder/img20.jpg";
import img21 from "../bilderr/bilder/img21.jpg";
import img22 from "../bilderr/bilder/img22.jpg";
import img23 from "../bilderr/bilder/img23.jpg";
import img24 from "../bilderr/bilder/img24.jpg";
import img25 from "../bilderr/bilder/img25.jpg";
import img26 from "../bilderr/bilder/img26.jpg";
import img27 from "../bilderr/bilder/img27.jpg";
import img28 from "../bilderr/bilder/img28.jpg";
import img29 from "../bilderr/bilder/img29.jpg";
import img30 from "../bilderr/bilder/img30.jpg";
import img31 from "../bilderr/bilder/img31.jpg";
import img32 from "../bilderr/bilder/img32.jpg";
import img33 from "../bilderr/bilder/img33.jpg";
import img34 from "../bilderr/bilder/img34.jpg";
import img35 from "../bilderr/bilder/img35.jpg";
import img36 from "../bilderr/bilder/img36.jpg";
import img37 from "../bilderr/bilder/img37.jpg";
import img38 from "../bilderr/bilder/img38.jpg";
import img39 from "../bilderr/bilder/img39.jpg";
import img40 from "../bilderr/bilder/img40.jpg";
import img41 from "../bilderr/bilder/img41.jpg";
import img42 from "../bilderr/bilder/img42.jpg";

interface props extends defaultProps {}

const imgs = [
  {
    Bilde: img1,
  },
  {
    Bilde: img2,
  },
  {
    Bilde: img3,
  },
  {
    Bilde: img4,
  },
  {
    Bilde: img5,
  },
  {
    Bilde: img6,
  },
  {
    Bilde: img7,
  },
  {
    Bilde: img8,
  },
  {
    Bilde: img9,
  },
  {
    Bilde: img10,
  },
  {
    Bilde: img11,
  },
  {
    Bilde: img12,
  },
  {
    Bilde: img13,
  },
  {
    Bilde: img14,
  },
  {
    Bilde: img15,
  },
  {
    Bilde: img16,
  },
  {
    Bilde: img17,
  },
  {
    Bilde: img18,
  },
  {
    Bilde: img19,
  },
  {
    Bilde: img20,
  },
  {
    Bilde: img21,
  },
  {
    Bilde: img22,
  },
  {
    Bilde: img23,
  },
  {
    Bilde: img24,
  },
  {
    Bilde: img25,
  },
  {
    Bilde: img26,
  },
  {
    Bilde: img27,
  },
  {
    Bilde: img28,
  },
  {
    Bilde: img29,
  },
  {
    Bilde: img30,
  },
  {
    Bilde: img31,
  },
  {
    Bilde: img32,
  },
  {
    Bilde: img33,
  },
  {
    Bilde: img34,
  },
  {
    Bilde: img35,
  },
  {
    Bilde: img36,
  },
  {
    Bilde: img37,
  },
  {
    Bilde: img38,
  },
  {
    Bilde: img39,
  },
  {
    Bilde: img40,
  },
  {
    Bilde: img41,
  },
  {
    Bilde: img42,
  },
];

const Images: React.FC<props> = () => {
  return (
    <div className="">
      {/* <NavBar /> */}
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 2,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {imgs.map((img) => (
            <Grid item xs={12} sm={4} md={4}>
              <Card
                sx={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "20px",
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
