import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Buttons from "../../buttons";
import {
  Typography,
  Grid,
  Container,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import creep from "../../../assets/images/creep.jpg";

function Register() {
  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    console.log(e.target.pass.value);
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
            password: e.target.pass.value,
            alias: e.target.alias.value,
          }),
        };
        // llamo al registro
        fetch("http://localhost:5463/auth/register", options)
          .then((r) => r.json())
          .then((d) => console.log(d));
      } else {
        // Muestro al usuario el error de que las passwords no coinciden
      }
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  const classes = useStyles();
  return (
    <Grid className={classes.greyContainer}>
      <Container>
        <Grid container className={classes.userContainer}>
          <Grid item xs={12} md={6} className={classes.formContainer}>
            <Typography variant="h1" color="primary">
              Register
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                className={classes.userInputs}
                required
                type="email"
                name="email"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                className={classes.userInputs}
                required
                type="text"
                name="alias"
                label="Alias"
                variant="outlined"
              />
              <TextField
                required
                className={classes.userInputs}
                type="password"
                name="pass"
                label="Password"
                variant="outlined"
              />
              <TextField
                required
                className={classes.userInputs}
                type="password"
                name="repeated_pass"
                label="Repeate Password"
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submitBtn}
              >
                Sign up
              </Button>
            </form>
            <Link to="/howitworks">
              <Buttons buttonInfo="Continue without registering"></Buttons>
            </Link>
            <FormControlLabel
              value="end"
              required
              control={<Checkbox color="primary" />}
              label="Acepto los términos y condiciones de uso"
              labelPlacement="end"
            />
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
