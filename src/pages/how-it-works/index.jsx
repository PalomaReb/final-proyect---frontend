import React, { useEffect, useState } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { useAuth } from "../../componentes-webpage/hooks/index";
import Footer from "../../componentes-webpage/footer/index.js";
import Header from "../../componentes-webpage/header/index.js";
import { useStyles } from "../../componentes-webpage/main-style/styles.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HowItWorks() {
  const [t] = useTranslation("global");
  const [name, setName] = useState("anonymous");
  const classes = useStyles();
  const isAuth = useAuth();

  useEffect(() => {
    document.title = t("HowItWorks.metaTitle");
  }, [t]);

  useEffect(() => {
    if (isAuth) {
      const sessionToken = sessionStorage.getItem("sessionToken");
      const options = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      };
      fetch("http://localhost:5464/user/userInfo", options)
        .then((r) => r.json())
        .then((data) => setName(data.alias));
    }
  }, [isAuth]);

  return (
    <React.Fragment>
      <Header></Header>
      <Grid item xs={12} className={classes.howItWorks}>
        <Container>
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
        </Container>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HowItWorks;
