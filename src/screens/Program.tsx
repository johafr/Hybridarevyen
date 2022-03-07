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
  return (
    <div>
      <NavBar />
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
              width: "55%",
              height: "auto",
              minHeight: 500
            }
          }}
        >
          <Paper elevation={24}>
            <Grid container justifyContent="center">
              <Box m={2}>
                <Typography variant="h3">Program</Typography>
              </Box>
            </Grid>
            <Box m={4}>
              <Grid container className="divide-container" spacing={4}>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Tim og Shænko</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <Typography variant="subtitle1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    commodo dui nibh, nec placerat eros lacinia sed. Vestibulum
                    luctus euismod erat id congue. Duis eget euismod felis.
                    Proin ac auctor ligula, venenatis tincidunt dui. Integer ut
                    tortor a risus dapibus tempus. Donec hendrerit sit amet elit
                    sit amet faucibus. Nulla diam nibh, auctor non magna a,
                    efficitur ornare elit. Donec vestibulum pellentesque orci et
                    imperdiet. Donec sit amet dui eu erat pulvinar faucibus.
                    Integer congue commodo sapien id maximus. Cras tempor
                    posuere tincidunt. Maecenas pulvinar vel enim sed
                    vestibulum. Donec fermentum erat non dui euismod suscipit.
                    Aenean consectetur tempus lorem ut maximus. Phasellus
                    consectetur metus dapibus neque tristique commodo. Phasellus
                    id urna consectetur, placerat felis eget, ultrices sem.
                  </Typography>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Wifi-passord</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Musikkprodusenten</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Meeen-sketsjen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Hvitløk er digg ass</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Sketsjen hvor gutta røyker og blir høye</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Helsestasjon-sketsjen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Vekterhøyskolen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Baggen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Ingen Kim(s) ingen kos</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Sketsjen hvor gutta er på tur i skogen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Knullegutta</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Referansegruppe...</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Hjeeeeelp</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Alt går til helvette</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>PAUSE</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Sketsjen der alt er fett og null stress</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Helene skal bytte studie og tester ut nytt materiale</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Begravelsen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Jobbintervjuet</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>
                    Når man mister gode venner til dumme verv man ikke er med i
                    selv
                  </h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Sketsjen med moshpit</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Forbudt kjærlighet</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>LEGENDEN</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Fortellingen om en het kveld på sal</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>En heeelt vanlig flytur</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>Sketsjen fra gründer expo 2022</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>"Vi har et stort problem i bedriften"-sketsjen</h3>
                </Grid>
                <Grid className="divide-container" item xs={12} sm={6} md={6}>
                  <h3>hei</h3>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </div>
  );
};

export default OmOss;
