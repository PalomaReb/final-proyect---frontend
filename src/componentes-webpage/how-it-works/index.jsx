import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/index.js";
import Footer from "../footer/index.js";
import Header from "../header/index.js";
import { useStyles } from "../main-style/styles.js";
import { Link } from "react-router-dom";

function HowItWorks() {
  const ptitle = "how it works";
  useEffect(() => {
    document.title = ptitle;
  }, []);

  const [name, setName] = useState("anonymous");
  const classes = useStyles();

  useEffect(() => {
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
  });

  return (
    <React.Fragment>
      <Header></Header>
      <Grid className={classes.howItWorks}>
        <Typography
          className={classes.howItWorksH1}
          variant="h1"
          color="primary"
        >
          CODE OR DIE
        </Typography>
        <Typography className={classes.howItWorksP} color="primary">
          {`Hola, ${name}, bienvenido al juego de tu vida. Estas aqui por algo. Crees que
          entiendes de la programación, pero yo estoy aqui para ponerte
          a prueba. Se te dará un tiempo para completar cada nivel, si no lo
          consigues, lastimosamente, no podrás continuar. La única forma de
          salir de este juego es completando todos los niveles. Te sugiero que
          no salgas de la pantalla, o no se guardará tu progreso y no podrás
          salir. Es hora de poner tus conocimientos a prueba... si te atreves.`}
        </Typography>

        <Link
          className={`${classes.center} ${classes.headerLink}`}
          to="/game/1"
        >
          <Typography color="secondary">Comenzar??</Typography>
        </Link>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HowItWorks;
