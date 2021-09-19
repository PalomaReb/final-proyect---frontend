import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useAuth } from "../../hooks/index.js";
import Footer from "../footer/index.js";
import Header from "../header/index.js";
import { useStyles } from "../main-style/styles.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HowItWorks() {
  const [t, i18n] = useTranslation("global");
  const [name, setName] = useState("anonymous");
  const classes = useStyles();

  useEffect(() => {
    document.title = t("HowItWorks.metaTitle");
    if (useAuth !== null) {
      const sessionToken = sessionStorage.getItem("sessionToken");
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
          // aviso a mi servidor que le envio los datos en formato JSON
        },
      };
      fetch("http://localhost:5464/user/userInfo", options)
        .then((r) => r.json())
        .then((data) => setName(data.alias));
    }
  },[t]);

  return (
    <React.Fragment>
      <Header></Header>
      <Grid className={classes.howItWorks}>
        <Typography
          className={classes.howItWorksH1}
          variant="h1"
          color="primary"
        >
          {t("HowItWorks.title")}
        </Typography>
        <Typography className={classes.howItWorksP} color="primary">
          {t("HowItWorks.hello") + name + t("HowItWorks.mainText")}
        </Typography>

        <Link
          className={`${classes.center} ${classes.headerLink}`}
          to="/game/1"
        >
          <Typography color="secondary">{t("HowItWorks.btn")}</Typography>
        </Link>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HowItWorks;
