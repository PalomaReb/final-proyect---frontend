import { Grid, Typography, TextField } from "@material-ui/core";
import React from "react";
import Button from "../componentes-webpage/buttons/index";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import { useStyles } from "./backgroundImages";

function GamePage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>
      <Grid item xs={12} className={classes.imgForGame}>
        <Grid item xs={12} className={classes.backgroundGame}>
          <Typography className={classes.timer} color="primary">
            Esto es el timer del juego
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" color="primary" className={classes.acertijo}>
            Los errores no siempre tienen porque ser malos. A veces hay que
            tener un error y enfrentarte a el antes de poder seguir adelante. Si
            quieres poder pasar este nivel. Tendras que buscar el error que en
            la web no se puede encontrar. Ten cuidado con lo que haces, no
            tienes mucho tiempo.
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} className={classes.inputCenter}>
          <TextField
            color="secondary"
            className={classes.inputBackGround}
            type="password"
            name="answer"
            label="RESPUESTA"
            // ref={passwordRef}
            variant="outlined"
          />
          <Button color="primary" buttonInfo="ESCAPAR?????"></Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer></Footer>
      </Grid>
    </React.Fragment>
  );
}

export default GamePage;
