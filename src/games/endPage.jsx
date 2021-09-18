import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./backgroundImages";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonHome from "../componentes-webpage/buttons/buttonHome";
import { useTranslation } from "react-i18next";

function SurvivalPage() {
  const ptitle = "Survived";
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = ptitle;
  }, []);
  const classes = useStyles();
  return (
    <Grid container>
      <Header></Header>
      <Grid item xs={12} className={classes.aliveIMG}>
        <Typography className={classes.text} variant="h1" color="secondary">
          {t("alive.text")}
        </Typography>
        <Link to="/reviews">
          <ButtonHome
            color="secondary"
            className={classes.buttonClass}
            buttonInfo={t("alive.btnReviews")}
          ></ButtonHome>
        </Link>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
}

export default SurvivalPage;
