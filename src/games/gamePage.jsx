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
import BathroomGame from "../games/gameComponents/bathroom";
import ThemeWrapper from "./gameComponents/themeChange";

function GamePage() {
  const history = useHistory();
  const [userAnswer, setAnswer] = useState("");
  //const [tlapse, setTlapse] = useState(0); // Cuenta segundos trasncurridos por cada juego
  let tlapse = 0; // Cuenta segundos trasncurridos por cada juego
  const deathTime = 30; //300 serian 5 min
  const t = deathTime * 1000;
  // logica puntos:
  // tiempo que tienes para adivinar - el timepo que haz tardado en adivinar
  // da el tiempo que sobro
  //tiempo que sobro son los puntos del usuario

  const { id } = useParams(); //aqui se crea una variable que recoge el ID del path param
  const [gameInfo, setGameInfo] = useState({}); //use state para pintar lo que se va a recoger de mongo

  useEffect(() => {
    // para que se rederize el juego cuando se refresca la pagina
    fetch(`http://localhost:5463/games/${id}`) //llama al param "game" por id de juego
      .then((r) => r.json()) //promesa que devuelve el json
      .then((data) => {
        setGameInfo(data);
        const ptitle = "LEVEL " + id;
        document.title = ptitle;
        //console.log(data); //promesa que busca los datos de game y usa el setGameInfo para redendizar la pagina
      }); //pinta solo el id del juego y sus controles

    const intervalo = setInterval(function () {
      // Se crea el Intervalo por segundos y se van acumulando segundos en tlapse.
      tlapse++;
      console.log(tlapse);
    }, 1000);
    const tiempo = setTimeout(function () {
      // NOTA: No se reinicializa aquí el interval ni el timeout, el contador tlapse continua hasta que llega al final. La forma correcta es en el return del useEffect!!!!!!
      // Funciones a ejecutar cuando se termine el tiempo.
      handleSubmit();
      history.replace("/death"); // Usamos "replace" en lugar de push para evitar reinicializar los tiempos volviendo atrás y adelante con el navegador. NOTA: Si no se limpia el interval o el timeout en el return, estos continuan a pesar de la navegación**
    }, t);

    return () => {
      clearInterval(intervalo); // Limpiamos el interval ID
      clearTimeout(tiempo); // Limpiamos el timeout ID
      setAnswer(""); // Con esto se prentende limpiar el input en cada juego, pero no se si genera renderizados que no convienen.
      tlapse = 0; // Reinicializamos el contador de segundos.
    };
  }, [id]);

  let printNewGameSection = ""; // Sección dinámica para algunos juegos.
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
    //guardar progreso del usuario y mandar a proximo game
    const gameMethod = id === "1" ? "POST" : "PUT";
    const gameStatus =
      deathTime - tlapse > 0 && userAnswer === gameAnswer
        ? "completed"
        : "dead";
    const gameList = [
      {
        // Añadir objeto por cada juego que realiza el usuario. Se debe realacionar con el usuario
        gameId: id,
        timeEnded: tlapse,
        status: gameStatus,
        date: new Date(),
        points: deathTime - tlapse,
      },
    ];
    const userProgress = [
      {
        //Se inserta solo la primera vez, despues se tiene que relacionar con cada juego y actualizar el level
        level: id,
        user: useAuth,
      },
    ];
    const progress = {
      method: gameMethod,
      headers: {
        "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
      },
      body: JSON.stringify({ gameList: gameList, userProgress: userProgress }), //A partir del segundo juego tengo dudas de cómo gestionar estas inserciones en Mongo
    };
    // inserto en su collection
    fetch("http://localhost:5463/games/user-progress", progress);
    //.then((r) => r.json())
    //.then((d) => {}); // Aquí se podría mostrar un mensaje.
    setAnswer(""); // Se limpia la respuesta del usuario.
    let nextG = id < 3 ? parseInt(id) + 1 : "/reviews"; // Se define la siguiente ruta.
    history.replace(`${nextG}`);
  }

  const classes = useStyles();

  const gameAnswer = gameInfo?.instructions?.answer;

  let gameClasses = `${classes.gameContainer} `; // Clases dinámicas para Material UI
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
