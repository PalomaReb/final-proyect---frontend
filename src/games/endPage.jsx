import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./backgroundImages";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import { useEffect } from "react";
function SurvivalPage() {
  const ptitle = "Survived";
  useEffect(() => {
    document.title = ptitle;
  }, []);
  const classes = useStyles();
  return (
    <Grid container>
      <Header></Header>
      <Grid item xs={12} className={classes.aliveIMG}>
        <Typography className={classes.text} variant="h2" color="secondary">
          Has logrado un MUY buen trabajo... Sobreviviste gracias a tus
          conocimientos y tu sabiduría. Felicidades... por ahora....
        </Typography>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
}

export default SurvivalPage;
