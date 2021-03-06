import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Buttons from "../../../componentes-webpage/buttons/";
import {
  Typography,
  Grid,
  Container,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import creep from "../../../assets/images/creep.jpg";
import { useTranslation } from "react-i18next";

function Register() {
  const ptitle = "Register";
  useEffect(() => {
    document.title = ptitle;
  }, []);

  const [t] = useTranslation("global");
  const [emailVerified, setEmailVerified] = useState("");
  const [colorVer, setColorVer] = useState("secondary");
  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      if (e.target.pass.value === e.target.repeated_pass.value) {
        // solo ejecuto el registro si las passwords son iguales
        // genero el objeto options para llamar al login
        const options = {
          method: "POST",
          headers: {
            "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
          },
          body: JSON.stringify({
            // Genero el body como string
            email: e.target.email.value, // obtengo el value de un input por su name
            alias: e.target.alias.value,
            password: e.target.pass.value,
            date: new Date(),

          }),
        };
        // llamo al registro
        fetch(
          "https://code-or-die-backend.herokuapp.com/auth/register",
          options
        )
          .then(function (response) {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response;
          })
          .then((data) => {
            setEmailVerified(t("Register.emailCheckyes"));
          })
          .catch(function (error) {
            setEmailVerified(t("Register.emailCheckno"));
            setColorVer("primary");
          });
      } else {
        // Muestro al usuario el error de que las passwords no coinciden
        setEmailVerified(t('Register.pwdNotMatch'));
        setColorVer("primary");
      }
    } else {
      // mostrar error al usuario con el campo que no es v??lido
      setEmailVerified(e.target.validationMessage);
    }
  };

  const classes = useStyles();
  return (
    <Grid className={classes.greyContainer}>
      <Container>
        <Grid container className={classes.userContainer}>
          <Grid item xs={12} md={6} className={classes.formContainer}>
            <Typography variant="h1" color="primary">
              {t("Register.title")}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                className={classes.userInputs}
                required
                type="email"
                name="email"
                label={t("Register.email")}
                variant="outlined"
              />
              <TextField
                className={classes.userInputs}
                required
                type="text"
                name="alias"
                label={t("Register.alias")}
                variant="outlined"
              />
              <TextField
                required
                className={classes.userInputs}
                type="password"
                name="pass"
                label={t("Register.password")}
                inputProps={{ minLength: 8 }}
                variant="outlined"
              />
              <TextField
                required
                className={classes.userInputs}
                type="password"
                name="repeated_pass"
                label={t("Register.rPassword")}
                variant="outlined"
              />
              <Typography component="p" color={colorVer}>{emailVerified}</Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submitBtn}
              >
                {t("Register.btnReg")}
              </Button>
              <FormControlLabel
                value="end"
                control={<Checkbox required={true} color="primary" />}
                label={t("Register.privacy")}
                labelPlacement="end"
              />
            </form>
            <Link to="/howitworks">
              <Buttons buttonInfo={t("Register.btnContinue")}> </Buttons>
            </Link>
            <Link to="/login">
              <Buttons buttonInfo={t("Register.btnLogin")}> </Buttons>
            </Link>
          </Grid>

          <Grid item xs={6} className={classes.imgContainer}>
            <img src={creep} alt="creep" className={classes.creepIMG} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
export default Register;
