import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { defaultProps } from "../App";
import NavBar from "../components/NavBar";
import { Typography } from "@mui/material";
import "./Program.css";

interface props extends defaultProps {}

const OmOss: React.FC<props> = () => {
  var text = `Tim og Shænko \n 
                Wifi-passord \n 
                Musikkprodusenten \n
                Meeen-sketsjen \n
                Hvitløk er digg ass \n 
                Sketsjen hvor gutta røyker og blir
                høye \n
                Helsestasjon-sketsjen \n
                Vekterhøyskolen\n
                Baggen \n
                Ingen Kim(s) ingen kos \n
                Sketsjen hvor gutta er på tur i skogen\n
                Knullegutta Referansegruppe... \n
                Hjeeeeelp \n 
                Alt går til helvette \n 
                Sketsjen der alt er fett og null stress \n
                Helene skal bytte studie og tester ut nytt materiale \n
                Begravelsen \n 
                Jobbintervjuet \n
                Når man mister gode venner til dumme verv man ikke er med i selv \n
                Sketsjen med moshpit \n
                Forbudt kjærlighet \n
                LEGENDEN \n
                Fortellingen om en het kveld på sal \n
                En heeelt vanlig flytur \n
                Sketsjen fra gründer expo 2022 \n
                "Vi har et stort problem i bedriften"-sketsjen`;
  return (
    <div>
      {/* <NavBar /> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "90%",
              height: "auto",
              minHeight: 500,
            },
          }}
        >
          <Paper elevation={24}>
            <Grid container justifyContent="center">
              <Box m={2}>
                <Typography variant="h3">Program</Typography>
              </Box>
            </Grid>
            <Box m={4}>
              <Typography align="center" style={{ wordWrap: "break-word" }}>
                {text.split("\n").map((i, key) => {
                  return <div key={key}>{i}</div>;
                })}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </div>
  );
};

export default OmOss;
