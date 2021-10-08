import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../../componentes-webpage/games/backgroundImages";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import { Link } from "react-router-dom";
import ButtonHome from "../../componentes-webpage/buttons/buttonHome";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../componentes-webpage/hooks";
import { useHistory } from "react-router";

function SurvivalPage() {
  const [t] = useTranslation("global");
  const isAuth = useAuth();
  const history = useHistory();

  useEffect(() => {
    document.title = t("alive.metaTitle");
  }, [t]);
  const classes = useStyles();
  function experience() {
    if (isAuth) {
      history.push("/reviews");
    } else {
      history.push("/view-reviews");
    }
  }

  return (
    <Grid container>
      <Header></Header>
      <Grid align="center" item xs={12} className={classes.aliveIMG}>
        <Typography className={classes.text} variant="h1" color="secondary">
          {t("alive.text")}
        </Typography>
        <ButtonHome
          onClick={(e) => experience()}
          color="secondary"
          className={classes.buttonClass}
          buttonInfo={t("alive.btnReviews")}
        ></ButtonHome>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
}

export default SurvivalPage;
