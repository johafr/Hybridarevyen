import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import { Grid, Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import pic1 from "../bilderr/logo.png";
import pic2 from "../bilderr/Casper1.png";

const actors = [
  {
    Name: "hei",
    pic: pic1,
  },
  {
    Name: "hei2",
    pic: pic2,
  },
  {
    Name: "hei3",
    pic: pic1,
  },
  {
    Name: "hei4",
    pic: pic1,
  },
  {
    Name: "hei5",
    pic: pic1,
  },
  {
    Name: "hei",
    pic: pic1,
  },
  {
    Name: "hei",
    pic: pic1,
  },
  {
    Name: "hei",
    pic: pic1,
  },
];

const Actors: React.FC<any> = ({ history }) => {
  return (
    <div className="actors">
      <Card>
        <Grid container spacing={5} className="container">
          {actors.map((actor) => (
            <>
              <Grid className="" item xs={12} sm={4} md={4} key={actor.Name}>
                <img className="actors-pic" src={actor.pic} />
                <h2>{actor.Name}</h2>
              </Grid>
            </>
          ))}
        </Grid>
      </Card>
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
