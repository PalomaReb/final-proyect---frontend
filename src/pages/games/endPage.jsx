import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../../componentes-webpage/games/backgroundImages";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import { Link } from "react-router-dom";
import ButtonHome from "../../componentes-webpage/buttons/buttonHome";
import { useTranslation } from "react-i18next";

function SurvivalPage() {
  const [t] = useTranslation("global");

  useEffect(() => {
    document.title = t("alive.metaTitle");
  }, [t]);
  const classes = useStyles();

  return (
    <Grid container>
      <Header></Header>
      <Grid align="center" item xs={12} className={classes.aliveIMG}>
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
