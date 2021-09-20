import React, { useEffect } from "react";
import { useStyles } from "../main-style/styles.js";
import { Grid } from "@material-ui/core";
import ButtonHome from "../buttons/buttonHome";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useAuth } from "../../hooks/index.js";
import { useTranslation } from "react-i18next";

function Home() {
  const classes = useStyles();
  const isAuth = useAuth();
  const userRoute = isAuth ? "/howitworks" : "/register";
  const [t] = useTranslation("global");

  useEffect(() => {
    document.title = t("Home.title");
  }, [t]);

  return (
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
  );
}

export default Home;
