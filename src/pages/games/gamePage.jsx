import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import Button from "../../componentes-webpage/buttons/index";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import { useStyles } from "../../componentes-webpage/games/backgroundImages";
import { useHistory, useParams } from "react-router";
import BathroomGame from "../../componentes-webpage/games/gameComponents/bathroom";
import ThemeWrapper from "../../componentes-webpage/games/gameComponents/themeChange";
import MindReader from "../../componentes-webpage/games/gameComponents/mindReader";
import ReactAudioPlayer from "react-audio-player";
import sawSong from "../../assets/sound/sawThemeSong.mp3";
import { useTranslation } from "react-i18next";

import RenderTime from "../../componentes-webpage/games/gameComponents/timer"; // componente común de los juegos ( timer )
import { alphaArray } from "../../componentes-webpage/games/gameComponents/alphaArray"; // array de símbolos para el juego 4
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function calculateRandomIndex() {
  return Math.floor(Math.random() * 7);
}

function GamePage() {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  const history = useHistory();
  const [userAnswer, setAnswer] = useState("");
  const tlapse = useRef(0); //tiempo para calcular los puntos.
  const [ax, setAx] = useState(calculateRandomIndex()); //Para el juego de MindReader
  const [showReload, setShowReload] = useState(false);
  const numGames = 4;
  const [tryAgain, setTryAgain] = useState('');

  //const [tlapse, setTlapse] = useState(0); // Cuenta segundos trasncurridos por cada juego
  // Cuenta segundos trasncurridos por cada juego
  const deathTime = 180; //300 serian 5 min
  // logica puntos:
  // tiempo que tienes para adivinar - el timepo que haz tardado en adivinar
  // da el tiempo que sobro
  //tiempo que sobro son los puntos del usuario

  const { id } = useParams(); //aqui se crea una variable que recoge el ID del path param
  const [gameInfo, setGameInfo] = useState({}); //use state para pintar lo que se va a recoger de mongo

  useEffect(() => {
    document.title = t("game.metaTitlePart1") + id + t("game.metaTitlePart2");
  }, [t, id]);

  useEffect(() => {
    // para que se rederize el juego cuando se refresca la pagina
    if (id > 0 && id <= numGames) {
      fetch(`https://code-or-die-backend.herokuapp.com/games/${id}`) //llama al param "game" por id de juego
        .then((r) => r.json()) //promesa que devuelve el json
        .then((data) => {
          setGameInfo(data);
          setAnswer("");
        }); //pinta solo el id del juego y sus controles
      const intervalo = setInterval(function () {
        // Se crea el Intervalo por segundos y se van acumulando segundos en tlapse.
        tlapse.current++;
        console.log(tlapse.current);
      }, 1000);
      const tiempo = setTimeout(function () {
        // NOTA: No se reinicializa aquí el interval ni el timeout, el contador tlapse continua hasta que llega al final. La forma correcta es en el return del useEffect!!!!!!
        // Funciones a ejecutar cuando se termine el tiempo.
        handleSubmit();
      }, deathTime * 1000);

      return () => {
        clearInterval(intervalo); // Limpiamos el interval ID
        clearTimeout(tiempo); // Limpiamos el timeout ID
        tlapse.current = 0; // Reinicializamos el contador de segundos.
      };
    } else {
      history.replace("/404");
    }
  }, [id, history]);

  let printNewGameSection = ""; // Sección dinámica para algunos juegos.
  //eligiendo componentes opciones segun el juego
  let gameClasses = `${classes.gameContainer} `; // Clases dinámicas para Material UI
  switch (id) {
    case "1":
      gameClasses += `${classes.genericIMG}`;
      console.log("Magnum opus");
      break;

    case "2":
      gameClasses += `${classes.bathroomIMG}`;
      printNewGameSection = (
        <ThemeWrapper>
          <BathroomGame></BathroomGame>
        </ThemeWrapper>
      );
      break;

    case "4":
      //if (gameInfo?.instructions?.logic) { // Este If puede sobrar si se controla todo por ID. Aunque la configuración desde BBDD es útil para cuando crezca el volumen de juegos.
      printNewGameSection = (
        <MindReader
          ax={ax}
          arr={alphaArray}
          showReload={showReload}
          response={(e) => {
            e.preventDefault();
            e.target.innerHTML = alphaArray[ax];
            setShowReload(true);
            setAx(calculateRandomIndex());
          }}
          reload={(e) => {
            e.target.previousSibling.children[0].children[0].cells[0].innerHTML =
              "?";
            setShowReload(false);
          }}
        ></MindReader>
      );
      //}
      break;

    default:
      gameClasses += `${classes.genericIMG}`;
  }
  const gameAnswer = gameInfo?.instructions?.answer; // Respuesta correcta de cada juego. REcuperado de la BBDD.
  let txt = []; // Array donde insertamos el texo del juego desde el backend y en su idioma correposndiente.
  switch (i18n.options.lng) {
    case "es":
      txt = gameInfo?.instructions?.body_es;
      break;
    default:
      txt = gameInfo?.instructions?.body_eng;
  }

  function handleSubmit() {
    const sessionToken = sessionStorage.getItem("sessionToken");
    //guardar progreso del usuario y mandar a proximo game
    const gameMethod = id === "1" ? "POST" : "PATCH";
    const gameStatus =
      deathTime - tlapse.current > 0 && userAnswer === gameAnswer
        ? "completed"
        : "dead";
    const newUserProgress = {
      gameList: [
        {
          // Añadir objeto por cada juego que realiza el usuario. Se debe realacionar con el usuario
          gameId: id,
          level: id,
          timeEnded: tlapse.current,
          status: gameStatus,
          date: new Date(),
          points: deathTime - tlapse.current,
        },
      ],
    };
    const progress = {
      method: gameMethod,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
        // aviso a mi servidor que le envio los datos en formato JSON
      },
      body: JSON.stringify(newUserProgress), //A partir del segundo juego tengo dudas de cómo gestionar estas inserciones en Mongo
    };
    // inserto en su collection
    fetch(
      "https://code-or-die-backend.herokuapp.com/userProgress/userProgressData",
      progress
    );
    //.then((r) => r.json())
    //.then((d) => {}); // Aquí se podría mostrar un mensaje.
    setAnswer(""); // Se limpia la respuesta del usuario.
    //controlamos las posibles sitauciones de redirección 
    if (id < numGames && gameStatus === "completed") {
      history.replace(`${parseInt(id) + 1}`);
    } else if (gameStatus === "dead") {
      history.replace("/death");
    } else {
      history.replace("/alive");
    }
  }
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container className={gameClasses}>
        <Grid item xs={12} className={classes.backgroundGame}>
          <Grid className={classes.timer} align="center">
            <CountdownCircleTimer
              key={id}
              isPlaying
              size="74"
              strokeWidth="4"
              strokeLinecap="square"
              trailColor="rgb(0,0,0,.2)"
              duration={deathTime - 3}
              colors={[
                ["#000000", 0.2],
                ["#332f2f", 0.2],
                ["#906363", 0.1],
                ["#bf5555", 0.2],
                ["#a30000"],
              ]}
              onComplete={() => [true, 5000]}
            >
              {RenderTime}
            </CountdownCircleTimer>
          </Grid>

          <ReactAudioPlayer
            autoPlay
            key={id}
            // loop={true}
            source
            src={sawSong}
            type="audio/mpeg"
          ></ReactAudioPlayer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="primary" className={classes.acertijo}>
            {txt?.map((clue) => clue)}
          </Typography>
          <Grid item xs={12} className={classes.inputCenter}>
            <TextField
              color="secondary"
              className={classes.inputBackGround}
              type="password"
              name="answer"
              label={t("game.input")}
              variant="outlined"
              value={userAnswer}
              onChange={(e) => setAnswer(e.target.value)}
              onBlur={(e) => {
                if (id === 1) console.log('Magnum opus');
              }}
            />
            <Button
              onClick={() => {
                if (userAnswer === gameAnswer) {
                  handleSubmit();
                } else {
                  setTryAgain(t('game.tryAgain'))
                  setTimeout(() => setTryAgain(''), 5000);
                }
              }}
              color="primary"
              buttonInfo={t("game.btnInput")}
            ></Button>
            <Typography component="p" color="primary">
              {tryAgain}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {printNewGameSection}
        </Grid>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default GamePage;
