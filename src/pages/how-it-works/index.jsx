import React, { useEffect, useState } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { useAuth } from "../../componentes-webpage/hooks/index";
import Footer from "../../componentes-webpage/footer/index.js";
import Header from "../../componentes-webpage/header/index.js";
import { useStyles } from "../../componentes-webpage/main-style/styles.js";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

function HowItWorks() {
  const [t] = useTranslation("global");
  const [name, setName] = useState("anonymous");
  const classes = useStyles();
  const isAuth = useAuth();
  const history = useHistory();
  const numGames = 4;

  useEffect(() => {
    document.title = t("HowItWorks.metaTitle");
  }, [t]);

  function guideUserToCorrectGame() {
    if (isAuth) {
      const sessionToken = sessionStorage.getItem("sessionToken");
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      };
      fetch(
        "https://code-or-die-backend.herokuapp.com/userProgress/userProgressData",
        options
      )
        .then((r) => {
          if (r) r.json();
        })
        .then((data) => {
          console.log(data.gameList.length);
          if (data && data?.gameList.length > 0) {
            if (data?.gameList[data?.gameList.length - 1].status === "dead") {
              history.push(
                "/game/" + data?.gameList[data?.gameList.length - 1].gameId
              );
              console.log("entre aqui --- status dead");
            } else {
              if (data?.gameList.length === numGames) {
                history.push("/game/1");
                console.log("entre aqui, history push game1 (numgame) ");
              } else {
                history.push("/game/" + parseInt(data?.gameList.length + 1));
                console.log("entre aqui- else history push game +");
              }
            }
          } else {
            history.push("/game/1");
            console.log("else game 1");
          }
        });
      //return data;
    } else {
      history.push("/game/1");
      console.log("else primera vez game 1");
    }
  }

  useEffect(() => {
    if (isAuth) {
      const sessionToken = sessionStorage.getItem("sessionToken");
      const options = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      };
      fetch("https://code-or-die-backend.herokuapp.com/user/userInfo", options)
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

          <Typography
            className={`${classes.center}`}
            color="secondary"
            onClick={(e) => guideUserToCorrectGame()}
          >
            {t("HowItWorks.btn")}
          </Typography>
        </Container>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HowItWorks;
