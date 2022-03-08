import React, { RefObject } from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import { Link } from "react-router-dom";
import styrebilde from "../bilderr/styrebilde.jpg";
import logo from "../bilderr/logo.png";
import bottom from "../bilderr/bottom.jpg";
import ReactPlayer from "react-player";
import { FaBeer } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Undergruppe from "../screens/Undergrupper";
import NavBar from "../components/NavBar";
import Actors from "../components/Actors";
import Footer from "../components/footer/Footer";
import Genus from "../bilderr/genuslogo.png";

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
      <NavBar />
      {/*<AppBar onOmOss={() => history.push("/OmOss")} history={history}></AppBar>*/}

      <div className="front">
        <img className="header" src={logo}></img>
      </div>
      <div className="btns">
        <a href="https://www.youtube.com/watch?v=67ulkWeWlNM">
          <button className="promo">PROMOVIDEOEN</button>
        </a>
        <a href="https://tikkio.com/tickets/28027-hybridarevyen-2022-bare-revy?fbclid=IwAR1310KnEqsoF-gYpNwWKt89DreCbEREfmDUZ1WORYWE1xgp-idOaDSbU-I">
          <button className="scroll">KJØP BILETTER</button>
        </a>
      </div>
      <div>
        <img className="genus-logo" src={Genus} />
      </div>
      <div className="main_box">
        <div className="sub_box">
          <h1>Om oss</h1>
          <hr />
          <p>
            For første gang i verdenshistorien arrangerer studentene ved
            Ingeniørvitenskap & IKT ved NTNU en revy! Revyen er et resultatet av
            arbeidet til over 100 revyglade studenter, og det er med stolthet vi
            kan invitere nettopp deg til Verkstedhallen for å bivåne resultatet
            i egen person!
          </p>
          <p>
            Bare Revy har ingen aldersgrense, hverken øvre eller nede. Den
            inneholder med andre ord noe for alle. Kom da vel, så får du ta del
            i et lite stykke av verdenshistorien! Les mer om oss{" "}
            <a href="/styret"> her</a>.
          </p>
          <p>
            <br></br>
            Vel møtt, vi sees!
          </p>
        </div>
        <header className="header">Styret 2022</header>
        <img src={styrebilde} alt="test" className="styrebilde"></img>
      </div>
      <div className="actors">
        <Actors />
      </div>
      <Undergruppe />
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
