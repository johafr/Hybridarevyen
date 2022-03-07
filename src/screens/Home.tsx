import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import { Link } from "react-router-dom";
import styrebilde from "../bilderr/styrebilde.jpg";
import logo from "../bilderr/logo.png";
import bottom from "../bilderr/bottom.jpg";
<<<<<<< HEAD
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

=======
import ReactPlayer from "react-player";
import { FaBeer } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Undergruppe from "../screens/Undergrupper";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
>>>>>>> 49ee9d1c7b5ef94d9353307b4627d292e8857f1c

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
          <button className="promo">SE PROMOVIDEOEN VÅR HER</button>
        </a>
        <a href="https://tikkio.com/tickets/28027-hybridarevyen-2022-bare-revy?fbclid=IwAR1310KnEqsoF-gYpNwWKt89DreCbEREfmDUZ1WORYWE1xgp-idOaDSbU-I">
          <button className="scroll">KJØP BILETTER</button>
        </a>
      </div>

      <div className="main_box">
        <div className="sub_box">
          <h1>Om oss</h1>
          <hr />
          <p>
            I år har Hybrida stått på for å få igang en revy for aller første
            gang! På bilde ser du oss i revystyret. Men det er ikke så viktig.
            Det viktige er at vi trenger deg for å få til en skikkelig bra revy.
          </p>
          <p>
            For selv om vi brenner veldig for å få til en revy, er ikke dette
            noe vi kan klare alene. Så hva kan du hjelpe til med i en revy spør
            du? Alt, absolutt alt, nesten. Vi trenger hvert fall folk til både
            små og store verv. Er det en ting vi kan garantere, så er virkelig
            gode muligheter til å bli kjent med folk på linja! Revyen består av
            oss i styret, skuespillere, band, PR-gruppe, kosegruppe,
            manusgruppe, scenegruppe. Det beste? Revyen har plass til alle som
            vil. Enten du har mye tid for hånd og vil dypdykke deg inn i
            revyarbeidet, eller om du kanskje ikke har så mye tid, men vil
            hjelpe til der det trengs, null problem!
          </p>
          <p>
            {" "}
            Å få til en bra revy er selvfølgelig dritkult, men enda kulere er
            det å få til masse sosialt for hybrider og skape et godt sosialt
            miljø for alle som vil delta! Så enten du ønsker en stor
            skuespillerrolle, vil lage kostymer, planlegge revyfester, snekre
            rekvisitter, spille tuba, temme slanger eller være ledningssorterer
            så håper vi at du benytter muligheten til å bli med i dette
            fantastiske felleskapet Hybridarevyen skal være!
          </p>
        </div>
        <header className="header">Styret 2022</header>
        <img src={styrebilde} alt="test" className="styrebilde"></img>
        <Undergruppe />
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
