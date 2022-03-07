import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import { Link } from "react-router-dom";
import styrebilde from "../bilderr/styrebilde.jpg";
import logo from "../bilderr/logo.png";
import bottom from "../bilderr/bottom.jpg";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Theme,
} from "@material-ui/core";
import { isPropertySignature } from "typescript";

interface Props {
  history: History<any>;
}


const Home: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <div>
      {/*<AppBar onOmOss={() => history.push("/OmOss")} history={history}></AppBar>*/}
      
      <div className="front">
        <img className="header" src={logo} ></img>
       </div>
      <div className="btns">
      <a href="https://www.youtube.com/watch?v=67ulkWeWlNM"><button className="promo" >PROMOVIDEOEN</button></a>
      <a href="https://tikkio.com/tickets/28027-hybridarevyen-2022-bare-revy?fbclid=IwAR1310KnEqsoF-gYpNwWKt89DreCbEREfmDUZ1WORYWE1xgp-idOaDSbU-I"><button className="scroll" >KJØP BILETTER</button></a>
      </div>


    <div className="main_box">
      <div className="sub_box">
      <h1>Om oss</h1>
      <hr/>
      <p>
      For første gang i verdenshistorien arrangerer studentene ved Ingeniørvitenskap & IKT ved NTNU en revy! 
      </p>

      <p>Revyen er et resultatet av arbeidet til over 100 revyglade studenter, og det er med stolthet vi kan invitere nettopp deg til Verkstedhallen for å bivåne resultatet i egen person!
      Bare Revy har ingen aldersgrense, hverken øvre eller nede. Den inneholder med andre ord noe for alle. Kom da vel, så får du ta del i et lite stykke av verdenshistorien!
      Billetter slippes 14. februar Kl: 14:00!</p>

      <p>Vel møtt, vi sees!</p>
      
      </div>
      <header className="header">Styret 2022</header>
      <img src={styrebilde} alt="test" className="styrebilde"></img>
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

export default Home;
