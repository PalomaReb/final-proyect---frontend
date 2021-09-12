import { Grid, Typography, TextField } from "@material-ui/core";
import React from "react";
import Button from "../componentes-webpage/buttons/index";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import { useStyles } from "./backgroundImages";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../hooks";
// import face from "../../src/assets/images/face.jpg";
import BathroomGame from "./gameComponents/bathroom";
import ThemeWrapper from "./gameComponents/themeChange";

function GamePage() {
  const history = useHistory();
  const [userAnswer, setAnswer] = useState("");

  const deathTime = 30; //300 serian 5 min
  const t = deathTime * 1000;

  // logica puntos:
  // tiempo que tienes para adivinar - el timepo que haz tardado en adivinar
  // da el tiempo que sobro
  //tiempo que sobro son los puntos del usuario

  let tlapse = 0; // Cuenta segundos
  //  const intervalo = setInterval(function () {
  //   tlapse++;
  //   console.log(tlapse); //Que alguien nos explieque esto, pls.
  // }, 1000);
  // const tiempo = setTimeout(function () {
  //   clearTimeout(tiempo);
  //   clearInterval(intervalo);
  //   handleSubmit();
  //   history.push("/death");
  // }, t);

  const { id } = useParams(); //aqui se crea una variable que recoge el ID del path param
  const [gameInfo, setGameInfo] = useState({}); //use state para pintar lo que se va a recoger de mongo
  let printNewGameSection = "";
  useEffect(() => {
    // para que se rederize el juego cuando se refresca la pagina
    fetch(`http://localhost:5463/games/${id}`) //llama al param "game" por id de juego
      .then((r) => r.json()) //promesa que devuelve el json
      .then((data) => {
        setGameInfo(data);
        //console.log(data); //promesa que busca los datos de game y usa el setGameInfo para redendizar la pagina
      }); //pinta solo el id del juego
  }, [id]);
  //eligiendo componentes opciones segun el juego

  if (id === "2") {
    printNewGameSection = (
      <ThemeWrapper>
        <BathroomGame></BathroomGame>
      </ThemeWrapper>
    );
  }
  // if (gameInfo?.instructions?.logic) {
  //   printNewGameSection = <MindReader></MindReader>;
  // }

  function handleSubmit() {
    //e.preventDefault();
    // clearTimeout(tiempo);
    // clearInterval(intervalo);
    //guardar progreso del usuario y mandar a proximo game
    const gameMethod = id === "1" ? "POST" : "PUT";
    const gameStatus =
      deathTime - tlapse > 0 && userAnswer === gameAnswer
        ? "completed"
        : "dead";
    const gameList = {
      // Añadir objeto por cada juego que realiza el usuario. Se debe realacionar con el usuario
      gameId: id,
      timeEnded: tlapse,
      status: gameStatus,
      date: new Date(),
      points: deathTime - tlapse,
    };
    const userProgress = {
      //Se inserta solo la primera vez, despues se tiene que relacionar con cada juego y actualizar el level
      level: id,
      user: useAuth,
    };
    const progress = {
      method: gameMethod,
      headers: {
        "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
      },
      body: JSON.stringify({ gameList: gameList, userProgress: userProgress }), //A partir del segundo juego tengo dudas de cómo gestionar estas inserciones en Mongo
    };
    //console.log(progress);
    // inserto en su collection
    fetch("http://localhost:5463/games/user-progress", progress);
    //.then((r) => r.json())
    //.then((d) => {});
    setAnswer("");
    let nextG = id < 3 ? parseInt(id) + 1 : "/";
    history.push(`${nextG}`);
  }

  const classes = useStyles();

  const gameAnswer = gameInfo?.instructions?.answer;

  let gameClasses = `${classes.gameContainer} `;

  if (id === "1" || id === "3") {
    gameClasses += `${classes.genericIMG}`;
  }
  if (id === "2") {
    gameClasses += `${classes.bathroomIMG}`;
  }

  return (
    <React.Fragment>
      <Header></Header>
      <Grid container xs={12} className={gameClasses}>
        <Grid item xs={12} className={classes.backgroundGame}>
          <Typography className={classes.timer} color="primary"></Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="primary" className={classes.acertijo}>
            {gameInfo?.instructions?.body_es[0]}
            {gameInfo?.instructions?.body_es[1]}
            {gameInfo?.instructions?.body_es[2]}
            {gameInfo?.instructions?.body_es[3]}
            {gameInfo?.instructions?.body_es[4]}
            {console.log("Magnum opus")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {printNewGameSection}
        </Grid>

        <Grid item xs={12} md={6} className={classes.inputCenter}>
          <TextField
            color="secondary"
            className={classes.inputBackGround}
            type="password"
            name="answer"
            label="RESPUESTA"
            variant="outlined"
            /*value={userAnswer}*/
            onBlur={(e) => setAnswer(e.target.value)}
          />
          <Button
            onClick={() => {
              console.log(userAnswer, gameAnswer);
              if (userAnswer === gameAnswer) {
                // Paramos los contadores temporales (de las distintas dimensiones)
                // clearTimeout(tiempo);
                // clearInterval(intervalo);
                handleSubmit();
              } else {
                //"Sigue intentandolo!"
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
