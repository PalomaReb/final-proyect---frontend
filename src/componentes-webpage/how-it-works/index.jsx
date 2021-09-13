import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { useAuth } from "../../hooks/index.js";
import Footer from "../footer/index.js";
import Header from "../header/index.js";
import { useStyles } from "../main-style/styles.js";
import { Link } from "react-router-dom";

function HowItWorks() {
  // const checkUser = useAuth();
  // const [name, setName] = useState("anonymous");
  const classes = useStyles();

  // useEffect(() => {
  //   if (checkUser) {
  //     fetch();
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <div className={classes.howItWorks}>
        <Typography className={classes.howItWorksP} color="primary">
          {" "}
          Hola, bienvenido al juego de tu vida. Estas aqui por algo. Crees que
          entiendes de la programación, pero yo estoy aqui para decirte ponerte
          a prueba. Se te dará un tiempo para completar cada nivel, si no lo
          consigues, lastimosamente, no podrás continuar. La única forma de
          salir de este juego es completando todos los niveles. Te sugiero que
          no salgas de la pantalla, o no se guardará tu progreso y no podrás
          salir. Es hora de poner tus conocimientos a prueba... si te atreves.
        </Typography>

        <Link
          className={`${classes.center} ${classes.headerLink}`}
          to="/game/1"
        >
          <Typography color="secondary">Start now??</Typography>
        </Link>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HowItWorks;
