import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "../styles/styles";
import "../styles/style.css";
import Button from "@material-ui/core/Button";
import hands from "../../../assets/images/hands.png";
import { useHistory } from "react-router";
import Buttons from "../../buttons";
import { Typography, Grid, Container } from "@material-ui/core";
import { useAuth } from '../../../hooks/index'
import { useTranslation } from "react-i18next";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Login() {
  const isAuth = useAuth();
  const history = useHistory();
  const classes = useStyles();
  const query = useQuery(); // obtengo los query params
  const [isLoading, setLoading] = useState(true); // state variable para controlar si estoy llamando al API o no
  const [isEmailValid, setEmailValidity] = useState(false);
  // use state para controlar si el email es válido o no
  const [t] = useTranslation("global");


  useEffect(() => {
    document.title = t("Login.title");
    // solo la primera vez llamo a la validación del token, recogiendo el valor por parámetro
    const token = query.get("token"); // obtengo el query param del token
    if (token !== null) {
      // llamamos a nuestro API para hacer check del validity
      fetch(`http://localhost:5464/auth/validate?token=${token}`) // validamos tipo GET pasando el token por query param
        .then((r) => {
          setLoading(false); // dejamos de cargar
          if (!r.ok) throw new Error("No se ha validado correctamente"); // si no okey lanzamos error que captura el catch
          setEmailValidity(true); // si estamos aqui es que el API nos ha dicho que OK al token
        })
        .catch((err) => setEmailValidity(false)); // si capturamos el error ponemos a false el validity
    } else {
      setLoading(false); // dejamos de cargar
      setEmailValidity(false); // mostramos error
    }
  }, [t, query]);
  console.log(isAuth)

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      // genero el objeto options para llamar al login
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",

          // aviso a mi servidor que le envio los datos en formato JSON
        },
        body: JSON.stringify({
          // Genero el body como string
          email: e.target.email.value, // obtengo el value de un input por su name
          password: e.target.pass.value,
        }),
      };
      fetch("http://localhost:5464/auth/login", options)
        .then((r) => r.json())
        .then((d) => {
          sessionStorage.setItem("sessionToken", d.access_token);
          history.push("/howitworks");
        }); // aqui tendríamos el access token
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  return (
    <Grid className={classes.backgroundContainer}>
      <Container>
        <Grid container className={classes.loginContainer}>
          <Grid item xs={12} md={6} className={classes.formContainer}>
            <Typography variant="h1" color="primary">
              {t("Login.title")}
            </Typography>
            <Grid className={classes.inputContainer}>
              <form onSubmit={handleSubmit}>
                <TextField
                  className={classes.inputContainer}
                  required
                  type="email"
                  name="email"
                  label={t("Login.Email")}
                  variant="outlined"
                />
                <TextField
                  className={classes.inputContainer}
                  required
                  type="password"
                  name="pass"
                  label={t("Login.password")}
                  inputProps={{ minLength: 8 }}
                  variant="outlined"

                />
                <div className={classes.registerButton}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {t("Login.btnLogin")}
                  </Button>
                </div>
              </form>
              <Link to="/register">
                <Buttons buttonInfo={t("Login.btnAccount")}> </Buttons>
              </Link>
            </Grid>
          </Grid>
          <Grid className={classes.imgContainer} item xs={6} md={6} >
            <img src={hands} alt="creep" className={classes.handsIMG} />
          </Grid>
        </Grid>
      </Container >
    </Grid >
  );
}

export default Login;
