import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import styrebilde from "../bilderr/styrebilde.jpg";
import header from "../bilderr/header.jpg";
import bottom from "../bilderr/bottom.jpg";
import kose from "../bilderr/undergrupper/kose.jpg";
import skuespiller from "../bilderr/undergrupper/skuespiller.jpg";
import manus from "../bilderr/undergrupper/manus.jpg";
import band from "../bilderr/undergrupper/band.jpg";
import dans from "../bilderr/undergrupper/dans.jpg";
import logo from "../bilderr/logo.png";

import {
  createStyles,
  makeStyles,
  Container,
  Grid,
  Card,
  CardContent,
  Theme,
  Table,
  TableRow,
  TableCell,
  TableBody,
  CardHeader,
} from "@material-ui/core";

const groups = [
  {
    Bilde: skuespiller,
    Reverse: false,
    Navn: "Skuespillere",
    Tekst:
      "Skuespillerne/skådisene/køddegutta det er oss!! Stikkord: lek, impro, sang, dans, generell kødding, rawr. Vi er de som prøver og få dere til å le, og så hadde det jo vært veldig gøy om dere gjorde det også XD. Chill og spill, skådis out",
  },
  {
    Bilde: dans,
    Reverse: true,
    Navn: "Dans",
    Tekst:
      "Disse søte tullingene er Hybridarevyens dansere 💃🕺 Stephanie, Kaia og Jemima har stått for koreografi, og sammen med Siri, Kristina og Jonas er de blitt the dreamteam 🤩⭐️ Kom på revyen for å se denne fine gjengen svinge og hoie rundt på scenen 🤗",
  },
  {
    Bilde: manus,
    Reverse: false,
    Navn: "Manus",
    Tekst:
      "Halla mann! Vi er manusgjengen og det er oss som har skrevet denne greia her. Vi har jobbet med sketsjeskriving i et par måneder nå og er riiimelig stoked på å vise det frem til dere (håper det er bra heheh). Vi er en artig clique som trives best i køddehjørnet. Håper sketsjene ikke er for interne og rare tihi. YOLO",
  },
  {
    Bilde: band,
    Reverse: true,
    Navn: "Band",
    Tekst:
      "Denne herlige gjengen med meg på bildet er Hybridas aller første Revy-band. De siste 4 månedene har denne gjengen skrevet musikk, øvd inn smakfulle melodier og samspilt alt dette i en svett kjeller på ISAK. Med gjengen her ved min side og et par-3 årsverk med øvingstimer er det ingen tvil om gjengen her vil ta dere gjennnom en musikals reise under Revyen hvor dere får gjennsyn med gamle rockeslagere, disney musikk og kanskje en TV-serei eller to. Grunnmuren her er Daniel og Tobias på bass og trommer. De akkoponeres av Kasper og Boyan på hennodsvis gitar og piano. I front er vår egen blåsedue med Simen og Kasper på trombone og alt saxofon. Et fullkomment revyband!",
  },
  {
    // ikke bilde her
    Bilde: kose,
    Reverse: false,
    Navn: "Kosegruppa",
    Tekst:
      "Kosegruppa lager fester, kos og jammer! Det er en gruppe full av koselige personer som har gjort sitt aller beste for å gjøre revyen gøy for alle, koselig sett. Kosen vår har lyst opp ansikter mange ganger de siste månedene og vi kommer til å savne å kunne gjøre det… MEN nå er det revvvyyy og håper dere koser dere som bare rakkern!!!!",
  },
  {
    Bilde: band,
    Reverse: true,
    Navn: "PR",
    Tekst: "MANGLER PR SIN TEKST",
  },
  {
    // Ikke bilde her
    Bilde: kose,
    Reverse: false,
    Navn: "Scene",
    Tekst: "MANGLER SCENEEEEE",
  },
];

const Undergrupper: React.FC<any> = ({ history }) => {
  return (
    // <>
    //   <img src={logo} alt="test" className="topp1"></img>
    //   <header className="header2">Undergrupper</header>
    //   <Grid container spacing={1}>
    //     <Grid item xs={12} sm={4} md={12}>
    //       <Card>
    //         <Grid container spacing={1}>
    //           {groups.map((group) => (
    //             <Grid key={group.Navn} item xs={12} sm={4} md={4}>
    //               <CardContent className="undergruppecss">
    //                 <h2 className="undergrupperheader">{group.Navn}</h2>
    //                 <p>{group.Tekst}</p>
    //                 <img src={group.Bilde} className="undergruppebilde" />
    //               </CardContent>
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Card>
    //     </Grid>
    //   </Grid>
    //   <img src={bottom} alt="test" className="bottomPicture"></img>
    // </>
    <div>
      <header className="undergruppeheader">Undergrupper</header>
      <Grid container spacing={5} className="container">
        {groups.map((group) => (
          <>
            {/* Reverse */}
            {group.Reverse && (
              <>
                <Grid container className="container">
                  <Grid
                    className="undergruppetekstreverse"
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    key={group.Navn}
                  >
                    <div className="undergruppetekstreverse">
                      <h2>{group.Navn}</h2>
                      <p>{group.Tekst}</p>
                    </div>
                  </Grid>
                  <Grid
                    className="undergruppecard undergruppecardreverse"
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    key={group.Bilde}
                  >
                    <img className="undergruppebilde" src={group.Bilde} />
                  </Grid>
                </Grid>
              </>
            )}
            {/* IkkeReverse */}
            {group.Reverse == false && (
              <>
                <Grid container className="container undergruppetekst">
                  <Grid
                    className="undergruppecard"
                    item
                    justify="center"
                    xs={12}
                    sm={6}
                    md={6}
                    key={group.Bilde}
                  >
                    <img className="undergruppebilder" src={group.Bilde} />
                  </Grid>
                  <Grid
                    className="undergruppecard undergruppecardmaincolor"
                    item
                    justify="center"
                    xs={12}
                    sm={6}
                    md={6}
                    key={group.Navn}
                  >
                    <div className="undergruppetekst">
                      <h2>{group.Navn}</h2>
                      <p className="undergruppetekst">{group.Tekst}</p>
                    </div>
                  </Grid>
                </Grid>
              </>
            )}
          </>
        ))}
      </Grid>
    </div>
    // <Table>
    //   <TableBody>
    //     {groups.map((group) => (
    //       <TableRow key={group.Navn} className="Table">
    //         <TableCell
    //           className="personBilde"
    //           style={{
    //             borderBottom: "none",
    //           }}
    //         >
    //           <img src={group.Bilde} alt="test" className="personBilde"></img>
    //         </TableCell>
    //         <TableCell style={{ borderBottom: "none" }} className="content">
    //           <header className="subHeader">{group.Navn}</header>
    //           <p className="description">{group.Tekst}</p>
    //         </TableCell>
    //       </TableRow>
    //     ))}
    //     ;
    //   </TableBody>
    // </Table>
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

export default Undergrupper;
