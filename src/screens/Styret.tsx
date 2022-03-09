import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import styrepic from "../bilderr/bilder 2/Johannes2.jpg";
import Sigurd from "../bilderr/bilder 2/Sigurd1.jpg";
import Elise from "../bilderr/bilder 2/Elise1.jpg";
import Johannes from "../bilderr/bilder 2/Johannes1.jpg";
import Casper from "../bilderr/bilder 2/Casper1.jpg";
import Rebecca from "../bilderr/bilder 2/Rebecca1.jpg";
import Torkil from "../bilderr/bilder 2/Torkil1.jpg";
import Oscar from "../bilderr/bilder 2/Oscar1.jpg";
import Helene from "../bilderr/bilder 2/Helene1.jpg";
import Ida from "../bilderr/bilder 2/Ida1.jpg";
// import Sigurd2 from "../bilderr/bilder 2/Sigurd2.jpg";
// import Elise2 from "../bilderr/bilder 2/Elise2.jpg";
// import Johannes2 from "../bilderr/bilder 2/Johannes2.jpg";
// import Casper2 from "../bilderr/bilder/Casper2.jpg";
// import Rebecca2 from "../bilderr/bilder/Rebecca2.jpg";
// import Torkil2 from "../bilderr/bilder 2/Torkil2.jpg";
// import Oscar2 from "../bilderr/bilder 2/Oscar2.jpg";
// import Helene2 from "../bilderr/bilder 2/Helene2.jpg";
// import Ida2 from "../bilderr/bilder 2/Ida2.jpg";

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
  CardHeader
} from "@material-ui/core";

const members = [
  {
    pic: Sigurd,
    // hoverpic: Sigurd2,
    Name: "Sigurd Spildrejorde",
    Text:
      "Revysjef har, som du garantert skjønner, det øverste ansvaret for at Hybridarevyen går bra for seg. Men det klart viktigste ansvaret mitt er at du skal ha en fantastisk tid mens du holder på med Revyen. Du kommer både til å se og høre meg ofte, og ikke se bort ifra at vi kommer til å slå av en prat også! Revyen er et resultat av det unike samholdet som skapes gjennom jobbing og sosiale aktiviteter. Bli med da vel, du kommer ikke til å angre!"
  },
  {
    pic: Elise,
    // hoverpic: Elise2,
    Name: "Elise Bø",
    Text:
      "Som nestleder er jeg revysjefens høyre hånd. Jeg ønsker at revyen skal være et sted for alle som vil. Selv om målet er revy til våren, så er det viktigste at vi har det gøy mens vi holder på. Jeg er her for å ha oversikt over hva som skjer og hjelpe der det trengs. Det er bare å komme til meg for å slå av en prat, hva enn det skulle være. Revyen trenger alle fra A-Å, så har du lyst har du lov! Søksøksøk! <3"
  },
  {
    pic: Johannes,
    // hoverpic: Johannes2,
    Name: "Johannes Reinseth",
    Text:
      "Som scenesjef har jeg ansvar for alt fra kostymer til rekvisitter på scenen. Hvis du ønsker å være med på å forme revyen etter din egen visjon er definitivt scenegruppen noe for deg. Her har du mulighet til å gjøre hva du måtte ønske, enten det er å sy kostymer eller snekre sammen rekvisitter. I tillegg kommer vi selvfølgelig til å ha mye sosialt gøy sammen. Det krever selvfølgelig null forkunnskaper (hvis ikke hadde kanskje ikke jeg sittet her hehe), så hvis du har et ønske om å forme Hybridas aller første revy må du huske å søke scenegruppen!"
  },
  {
    pic: Casper,
    // hoverpic: Casper2,
    Name: "Casper Faarlund",
    Text:
      "Det er lite vits i å ha en revy dersom ingen vet at den finnes. Som PR sjef skal jeg, sammen med en PR-gruppe jeg tar opp, sørge for at flest mulig får vite at Hybrida nå har en revy, og at det er en revy de ønsker å enten jobbe med, eller se på. PR-gruppen omfatter selvfølgelig litt grafisk design og filmlaging, men også ikke-tekniske oppgaver som å planlegge markedsføringen, eventuelle stands, og generelt alle mulige ideer folk skulle ha! Her trengs ingen forkunnskaper, og om du ønsker å lære mer av det tekniske arrangeres det seff opplæring;) Her er det bare å søke enten du er kreativ eller ikke, for PR er som kjent den uoffisielle kosegruppa<3"
  },
  {
    pic: Rebecca,
    // hoverpic: Rebecca2,
    Name: "Rebecca Borch",
    Text:
      "La oss kalle meg limet i en fantastisk gjeng som skal lage en revy. Ansvarsområdene går i å være inkluderende, planlegge ettertraktede revyfester og hytteturer. Kanskje viktigst skal vi bidra med all mulig kos som kan gjøre samholdet i hele revygjengen bedre! I denne gruppen får du jobbet med kreativiteten din, utvikle vennskap på kryss og tvers og kost deg utrolig masse. Dersom du føler dette er noe som passer for deg, så håper jeg virkelig du søker! Dette blir rått."
  },

  {
    pic: Torkil,
    // hoverpic: Torkil2,
    Name: "Torkil Seljestokken",
    Text:
      "Som kapellmester har jeg ansvaret for bandet. Under Revyen kommer vi til å spille små snutter mellom sketsjene, og lengre sanger på de musikalske innslagene. Mitt ansvar er å ta opp musikere til den jobben, koke noter og komponere musikk. Vi skal selvfølgelig ha det masse gøy utenom spillingen og! Vi trenger alt fra nasj-gitarister til mestere i Munnspill, så det er bare å prøve seg på opptak i høst! Det blir så lættis."
  },

  {
    pic: Oscar,
    // hoverpic: Oscar2,
    Name: "Oscar Marcussen",
    Text:
      "Som manus-sjef er jeg selvfølgelig veldig kreativ og flink til å skrive Texter… psyche! Meen, jeg har ansvar for at vi ender opp med en bunch med lættise sketsjer, og DU kan være med å skrive dem! Har du et snev av kreativitet i deg? Liker du å kødde? Er du en edgy motherfucker? Søk manus davel! Dab!"
  },
  {
    pic: Helene,
    // hoverpic: Helene2,
    Name: "Helene Tellefsen",
    Text:
      "Jeg er revyens regissør og det er jeg som har ansvar for alt det kreative på scenen! Til høsten skal vi ta opp skuespillere. Skuespillerne kommer til å stå på scenen, danse og kødde, og de vil delta på revyøvinger med masse leking og impro. Når man jobber sammen for å lage revy, enten som skuespiller eller med en annen rolle, blir man kjent på en helt spesiell måte, og det vil du neppe gå glipp av!"
  },
  {
    pic: Ida,
    // hoverpic: Ida2,
    Name: "Ida Ahlsand",
    Text:
      "Som økonomisjef har du ansvar for å sette opp budsjett for det kommende revyåret, føre regnskap, skaffe sponsor, betale regninger og å holde oversikt over pengeforbruket til revyen. Det krever ingen forkunnskaper, så lenge du er strukturert og engasjert. Husk at uten økonomisjef blir det ingen revy! "
  }
];

const Styret: React.FC<any> = ({ history }) => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="main_box">
        <div className="sub_box">
          <h1 className="">Om oss</h1>
          <p className="">
            I år har Hybrida stått på for å få igang en revy for aller første
            gang! På bilde ser du oss i revystyret. Men det er ikke så viktig.
            Det viktige er at vi trenger deg for å få til en skikkelig bra revy.
            For selv om vi brenner veldig for å få til en revy, er ikke dette
            noe vi kan klare alene. Så hva kan du hjelpe til med i en revy spør
            du? Alt, absolutt alt, nesten. Vi trenger hvert fall folk til både
            små og store verv. Er det en ting vi kan garantere, så er virkelig
            gode muligheter til å bli kjent med folk på linja! Revyen består av
            oss i styret, skuespillere, band, PR-gruppe, kosegruppe,
            manusgruppe, scenegruppe. Det beste? Revyen har plass til alle som
            vil. Enten du har mye tid for hånd og vil dypdykke deg inn i
            revyarbeidet, eller om du kanskje ikke har så mye tid, men vil
            hjelpe til der det trengs, null problem! Å få til en bra revy er
            selvfølgelig dritkult, men enda kulere er det å få til masse sosialt
            for hybrider og skape et godt sosialt miljø for alle som vil delta!
            Så enten du ønsker en stor skuespillerrolle, vil lage kostymer,
            planlegge revyfester, snekre rekvisitter, spille tuba, temme slanger
            eller være ledningssorterer så håper vi at du benytter muligheten
            til å bli med i dette fantastiske felleskapet Hybridarevyen skal
            være!
          </p>
          <img src={styrepic} alt="test" className="styret-pic"></img>
        </div>
      </div>
      <h1 className="h1-styret">Styret 2022</h1>
      <Grid container spacing={2}>
        {members.map(member => (
          <Grid container spacing={1}>
            <Grid item key={member.Name} xs={12} sm={4} md={4}>
              <img src={member.pic} alt="test" className="members-pic" />
              {/* <img src={member.hoverpic} alt="test" className="members-pic2" /> */}
            </Grid>
            <Grid item key={member.pic} xs={12} sm={8} md={8}>
              <header className="subHeader-styret">{member.Name}</header>
              <p className="description-styret">{member.Text}</p>
            </Grid>
          </Grid>
        ))}
        ;
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Table: {
      width: "80%",
      margin: "auto"
    }
  })
);

export default Styret;
