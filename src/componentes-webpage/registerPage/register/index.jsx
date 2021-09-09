import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles/styles";
import "../styles/style.css";
import Button from "@material-ui/core/Button";
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
    <div className={classes.personalDataBigcontainer}>
      <div className={classes.personalDataInputTitelcontainer}>
        <h3 className="data_title">Register</h3>
        <div className="input_container">
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.bigInputData}
              required
              type="email"
              name="email"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              required
              className={classes.bigInputData}
              type="password"
              name="pass"
              label="Password"
              variant="outlined"
            />
            <TextField
              required
              className={classes.bigInputData}
              type="password"
              name="repeated_pass"
              label="Repeate Password"
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
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className={classes.creepIMG}>
        <img src={creep} alt="creep" className={classes.creepIMG} />
      </div>
    </div>
  );
}
export default Register;
