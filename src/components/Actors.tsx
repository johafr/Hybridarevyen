import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { createStyles, makeStyles, Theme, Box } from "@material-ui/core";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// import elise from "../bilderr/nyebilder/elise.jpg";
import sverre from "../bilderr/nyebilder/sverre.jpg";
import mo from "../bilderr/nyebilder/MO.jpg";
import helene from "../bilderr/nyebilder/helene.jpg";
import oscar from "../bilderr/nyebilder/timm.jpg";
import steph from "../bilderr/nyebilder/steph.jpg";
import kris from "../bilderr/nyebilder/kris.jpg";
import even from "../bilderr/nyebilder/even.jpg";
import logo from "../bilderr/logo.png";
import elise from "../bilderr/nyebilder/elise.jpg";

const actors = [
  {
    Name: "Elise Raaen Bø",
    pic: elise,
  },
  {
    Name: "Sverre Kjuus",
    pic: sverre,
  },
  {
    Name: "Mads Olav Eek",
    pic: mo,
  },
  {
    Name: "Helene Maria Tellefsen",
    pic: helene,
  },
  {
    Name: "Oscar Timm Marcussen",
    pic: oscar,
  },
  {
    Name: "Stephanie Huynh",
    pic: steph,
  },
  {
    Name: "Kristoffer Seyffarth",
    pic: kris,
  },
  {
    Name: "Even Eielsen",
    pic: even,
  },
];

const Actors: React.FC<any> = ({ history }) => {
  return (
    <div>
      <div>
        <h1 className="h1-actors">Skuespillerne</h1>
      </div>
      <div className="">
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
            {actors.map((actor) => (
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
                    image={actor.pic}
                    alt="bilde"
                  />
                  <CardContent>
                    <Typography>
                      <h3>{actor.Name}</h3>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Actors;
