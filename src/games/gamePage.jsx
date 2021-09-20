import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import Button from "../componentes-webpage/buttons/index";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import { useStyles } from "./backgroundImages";
import { useHistory, useParams } from "react-router";
import BathroomGame from "../games/gameComponents/bathroom";
import ThemeWrapper from "./gameComponents/themeChange";
import MindReader from "./gameComponents/mindReader";
import SandTimer from "../assets/images/reloj-arena.gif";
//import { UserState } from "../functions/index";
import { useAuth } from "../hooks";
import ReactAudioPlayer from "react-audio-player";
import sawSong from "../assets/sound/sawThemeSong.mp3";
// import PlaySound from "./sounds";
import { useTranslation } from "react-i18next";

function calculateRandomIndex() {
  return Math.floor(Math.random() * 7);
}

function GamePage() {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  const history = useHistory();
  const [userAnswer, setAnswer] = useState("");
  const tlapse = useRef(0);
  const [ax, setAx] = useState(calculateRandomIndex()); //Para el juego de MindReader
  const [showReload, setShowReload] = useState(false);
  const alphaArray = [
    "C",
    "o",
    "d",
    "-",
    "e",
    "r",
    "i",
    "a",
    "n",
    "b",
    "f",
    "h",
    "{",
    "☘",
    "l",
    "v",
    "x",
    "ℨ",
    "℘",
    "☢",
    "z",
    "I",
    "J",
    "M",
    ":)",
    "Ω",
    "℧",
    "N",
    "R",
    "S",
    "T",
    "U",
    "m",
    "6",
    "^",
    "u",
    "☣",
    "☠",
    "☯",
    "]",
  ];

  //const [tlapse, setTlapse] = useState(0); // Cuenta segundos trasncurridos por cada juego
  // Cuenta segundos trasncurridos por cada juego
  const deathTime = 300; //300 serian 5 min
  // logica puntos:
  // tiempo que tienes para adivinar - el timepo que haz tardado en adivinar
  // da el tiempo que sobro
  //tiempo que sobro son los puntos del usuario

  const { id } = useParams(); //aqui se crea una variable que recoge el ID del path param
  const [gameInfo, setGameInfo] = useState({}); //use state para pintar lo que se va a recoger de mongo

  useEffect(() => {
    // para que se rederize el juego cuando se refresca la pagina
    fetch(`http://localhost:5464/games/${id}`) //llama al param "game" por id de juego
      .then((r) => r.json()) //promesa que devuelve el json
      .then((data) => {
        setGameInfo(data);
        document.title =
          t("game.metaTitlePart1") + id + t("game.metaTitlePart2");
        //console.log(data); //promesa que busca los datos de game y usa el setGameInfo para redendizar la pagina
      }); //pinta solo el id del juego y sus controles

    // if (useAuth !== null) { // Hay una función para esto.
    //   const sessionToken = sessionStorage.getItem("sessionToken");
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer ${sessionToken}`,
    //     },
    //   };
    //   console.log("404!!");
    //   fetch("http://localhost:5464/games/user-progress", options)
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   //return data;
    // }

    const intervalo = setInterval(function () {
      // Se crea el Intervalo por segundos y se van acumulando segundos en tlapse.
      tlapse.current++;
      console.log(tlapse.current);
    }, 1000);
    const tiempo = setTimeout(function () {
      // NOTA: No se reinicializa aquí el interval ni el timeout, el contador tlapse continua hasta que llega al final. La forma correcta es en el return del useEffect!!!!!!
      // Funciones a ejecutar cuando se termine el tiempo.
      handleSubmit();
      history.replace("/death"); // Usamos "replace" en lugar de push para evitar reinicializar los tiempos volviendo atrás y adelante con el navegador. NOTA: Si no se limpia el interval o el timeout en el return, estos continuan a pesar de la navegación**
    }, deathTime * 1000);

    return () => {
      clearInterval(intervalo); // Limpiamos el interval ID
      clearTimeout(tiempo); // Limpiamos el timeout ID
      setAnswer(""); // Con esto se prentende limpiar el input en cada juego, pero no se si genera renderizados que no convienen.
      tlapse.current = 0; // Reinicializamos el contador de segundos.
    };
  }, [id, t, history]);

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
          }}
          reload={(e) => {
            e.target.previousSibling.children[0].children[0].cells[0].innerHTML =
              "¿?";
            setShowReload(false);
            setAx(calculateRandomIndex());
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
    fetch("http://localhost:5464/games/user-progress", progress);
    //.then((r) => r.json())
    //.then((d) => {}); // Aquí se podría mostrar un mensaje.
    setAnswer(""); // Se limpia la respuesta del usuario.
    let nextG = id < 4 ? parseInt(id) + 1 : "/alive"; // Se define la siguiente ruta.
    history.replace(`${nextG}`);
  }

  return (
    <React.Fragment>
      <Header></Header>
      <Grid container xs={12} className={gameClasses}>
        <Grid item xs={12} className={classes.backgroundGame}>
          <Typography className={classes.timer} color="primary">
            <img
              src={SandTimer}
              className={classes.timerIMG}
              alt="sand timer"
            />
          </Typography>
          <ReactAudioPlayer
            autoPlay
            loop={true}
            source
            src={sawSong}
            type="audio/mpeg"
          ></ReactAudioPlayer>
          {/* <PlaySound>play</PlaySound> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="primary" className={classes.acertijo}>
            {txt?.map((clue) => clue)}
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
            label={t("game.input")}
            variant="outlined"
            /*value={userAnswer}*/
            onBlur={(e) => setAnswer(e.target.value)}
          />
          <Button
            onClick={() => {
              if (userAnswer === gameAnswer) {
                handleSubmit();
              } else {
                //"Sigue intentandolo!"
              }
            }}
            color="primary"
            buttonInfo={t("game.btnInput")}
          ></Button>
        </Grid>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default GamePage;
