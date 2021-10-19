import React, { useEffect } from "react";
import { useStyles } from "../../componentes-webpage/main-style/styles.js";
import { Grid } from "@material-ui/core";
import ButtonHome from "../../componentes-webpage/buttons/buttonHome";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useAuth } from "../../componentes-webpage/hooks";
import { useTranslation } from "react-i18next";
import Button from "../../componentes-webpage/buttons/index.jsx";

function Home() {
  const classes = useStyles();
  const isAuth = useAuth();
  const userRoute = isAuth ? "/howitworks" : "/register";
  const [t, i18n] = useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    document.title = t("Home.title");
  }, [t]);

  return (
    <React.Fragment>
      <Grid item xs={12} align="right">
        <Button buttonInfo="En" onClick={() => { i18n.options.lng = "en"; changeLanguage('en') }}></Button>
        <Button buttonInfo="Es" onClick={() => { i18n.options.lng = "es"; changeLanguage('es') }}></Button>
      </Grid>
      <Grid className={`${classes.bannerContainer} ${classes.backgroundHome}`}>
        <Typography variant="h1" color="primary" className={classes.title}>
          {t("Home.title")}
        </Typography>
        <Grid className={classes.center}>
          <Link to={userRoute}>
            <ButtonHome
              color="secondary"
              buttonInfo={t("Home.btnYes")}
            ></ButtonHome>
          </Link>
          <Link to="/404">
            <ButtonHome buttonInfo={t("Home.btnNo")}></ButtonHome>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
