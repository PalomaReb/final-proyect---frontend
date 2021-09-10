import { Grid, Typography, TextField } from "@material-ui/core";
import React from "react";
import Button from "../componentes-webpage/buttons/index";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import { useStyles } from "./backgroundImages";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function GamePage() {
  const history = useHistory();
  const [userAnswer, setAnswer] = useState("");
  const { id } = useParams(); //aqui se crea una variable que recoge el ID del path param
  const [gameInfo, setGameInfo] = useState({}); //use state para pintar lo que se va a recoger de mongo
  useEffect(() => {
    // para que se rederize el juego cuando se refresca la pagina
    fetch(`http://localhost:5463/games/${id}`) //llama al param "game" por id de juego
      .then((r) => r.json()) //promesa que devuelve el json
      .then((data) => {
        setGameInfo(data);
        console.log(data); //promesa que busca los datos de game y usa el setGameInfo para redendizar la pagina
      }); //pinta solo el id del juego
  }, [id]);

  // setTimeout(function () {
  //   window.location.href = "http://localhost:3000/death";
  // }, 9000);

  const classes = useStyles();

  const gameAnswer = gameInfo?.instructions?.answer;

  return (
    <React.Fragment>
      <Header></Header>
      <Grid item xs={12} className={classes.imgForGame}>
        <Grid item xs={12} className={classes.backgroundGame}>
          <Typography className={classes.timer} color="primary"></Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" color="primary" className={classes.acertijo}>
            {gameInfo?.instructions?.body_es[0]}
            {gameInfo?.instructions?.body_es[1]}
            {gameInfo?.instructions?.body_es[2]}
            {gameInfo?.instructions?.body_es[3]}
            {gameInfo?.instructions?.body_es[4]}
            {console.log("Magnum opus")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} className={classes.inputCenter}>
          <TextField
            color="secondary"
            className={classes.inputBackGround}
            type="password"
            name="answer"
            label="RESPUESTA"
            variant="outlined"
            value={userAnswer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button
            onClick={() => {
              if (userAnswer === gameAnswer) {
                //guardar progreso del usuario y mandar a proximo game
                setAnswer("");
                let nextG = "";
                nextG = id < 2 ? parseInt(id) + 1 : "/";
                history.push(`${nextG}`);
              }
            }}
            color="primary"
            buttonInfo="ESCAPAR?????"
          ></Button>
        </Grid>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default GamePage;
