import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import { Grid, Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import elise from "../bilderr/Casper1.png";
import sverre from "../bilderr/Casper1.png";
import mo from "../bilderr/Casper1.png";
import helene from "../bilderr/Casper1.png";
import oscar from "../bilderr/Casper1.png";
import steph from "../bilderr/Casper1.png";
import kris from "../bilderr/Casper1.png";
import even from "../bilderr/Casper1.png";

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
  // {
  //   Name: "Kristoffer Seyffarth",
  //   pic: pic1,
  // },
  // {
  //   Name: "Even Eielsen",
  //   pic: pic1,
  // },
];

const Actors: React.FC<any> = ({ history }) => {
  return (
    <div>
      <div>
        <h1 className="h1-styret">Skuespillerne</h1>
      </div>
      <div className="">
        <Grid container spacing={5} className="actors-container">
          {actors.map((actor) => (
            <>
              <Grid
                className="actors-name"
                item
                xs={12}
                sm={4}
                md={4}
                key={actor.Name}
              >
                <div className="actors-name">
                  <img className="actors-pic" src={actor.pic} />
                  <h2 className="actors-name">{actor.Name}</h2>
                </div>
              </Grid>
            </>
          ))}
          <Grid className="actors-kris" item xs={12} sm={6} md={6}>
            <img className="actors-kris" src={kris} />
            <h2 className="actors-kris">Kristoffer Seyffarth </h2>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img className="actors-kris" src={even} />
            <h2 className="actors-kris">Even Eilesen</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Table: {
      width: "80%",
      margin: "auto",
    },
  })
);

export default Actors;
