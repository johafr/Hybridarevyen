import React from "react";
import AppBar from "../components/AppBar";
import { History } from "history";
import styrebilde from "../styrebilde.jpg";
import Person from "../placeholder.png";
import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Theme,
} from "@material-ui/core";

interface Props {
  history: History<any>;
}

const styremedlemmer = [
  {
    Bilde: Person,
    Navn: "Casper Faarlund",
    Tekst:
      "Det er lite vits i å ha en revy dersom ingen vet at den finnes. Som PR sjef skal jeg, sammen med en PR-gruppe jeg tar opp, sørge for at flest mulig får vite at Hybrida nå har en revy, og at det er en revy de ønsker å enten jobbe med, eller se på. PR-gruppen omfatter selvfølgelig litt grafisk design og filmlaging, men også ikke-tekniske oppgaver som å planlegge markedsføringen, eventuelle stands, og generelt alle mulige ideer folk skulle ha! Her trengs ingen forkunnskaper, og om du ønsker å lære mer av det tekniske arrangeres det seff opplæring;) Her er det bare å søke enten du er kreativ eller ikke, for PR er som kjent den uoffisielle kosegruppa<3",
  },
  {
    Bilde: Person,
    Navn: "Johannes Reinseth",
    Tekst:
      "Det er lite vits i å ha en revy dersom ingen vet at den finnes. Som PR sjef skal jeg, sammen med en PR-gruppe jeg tar opp, sørge for at flest mulig får vite at Hybrida nå har en revy, og at det er en revy de ønsker å enten jobbe med, eller se på. PR-gruppen omfatter selvfølgelig litt grafisk design og filmlaging, men også ikke-tekniske oppgaver som å planlegge markedsføringen, eventuelle stands, og generelt alle mulige ideer folk skulle ha! Her trengs ingen forkunnskaper, og om du ønsker å lære mer av det tekniske arrangeres det seff opplæring;) Her er det bare å søke enten du er kreativ eller ikke, for PR er som kjent den uoffisielle kosegruppa<3",
  },
];

const Home: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar onOmOss={() => history.push("/OmOss")} history={history}></AppBar>
      <header className="header">Om Oss</header>
      <p className="intro">
        I år har Hybrida stått på for å få igang en revy for aller første gang!
        På bilde ser du oss i revystyret. Men det er ikke så viktig. Det viktige
        er at vi trenger deg for å få til en skikkelig bra revy. For selv om vi
        brenner veldig for å få til en revy, er ikke dette noe vi kan klare
        alene. Så hva kan du hjelpe til med i en revy spør du? Alt, absolutt
        alt, nesten. Vi trenger hvert fall folk til både små og store verv. Er
        det en ting vi kan garantere, så er virkelig gode muligheter til å bli
        kjent med folk på linja! Revyen består av oss i styret, skuespillere,
        band, PR-gruppe, kosegruppe, manusgruppe, scenegruppe. Det beste? Revyen
        har plass til alle som vil. Enten du har mye tid for hånd og vil
        dypdykke deg inn i revyarbeidet, eller om du kanskje ikke har så mye
        tid, men vil hjelpe til der det trengs, null problem! Å få til en bra
        revy er selvfølgelig dritkult, men enda kulere er det å få til masse
        sosialt for hybrider og skape et godt sosialt miljø for alle som vil
        delta! Så enten du ønsker en stor skuespillerrolle, vil lage kostymer,
        planlegge revyfester, snekre rekvisitter, spille tuba, temme slanger
        eller være ledningssorterer så håper vi at du benytter muligheten til å
        bli med i dette fantastiske felleskapet Hybridarevyen skal være!
      </p>
      <header className="header">Styret 2022</header>
      <img src={styrebilde} alt="test" className="styrebilde"></img>
      <Table className={classes.Table}>
        <TableBody>
          {styremedlemmer.map((member) => (
            <TableRow key={member.Navn} className="Table">
              <TableCell
                className="personBilde"
                style={{ borderBottom: "none" }}
              >
                <img
                  src={member.Bilde}
                  alt="test"
                  className="personBilde"
                ></img>
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                <header className="subHeader">{member.Navn}</header>
                <p>{member.Tekst}</p>
              </TableCell>
            </TableRow>
          ))}
          ;
        </TableBody>
      </Table>
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
