import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useLocation } from "react-router-dom"
import { useStyles } from "../styles/styles";
import "../styles/style.css";
import Button from "@material-ui/core/Button";
import hands from "../../../assets/images/hands.png";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Login() {
    const classes = useStyles();
    const query = useQuery(); // obtengo los query params
    const [isLoading, setLoading] = useState(true); // state variable para controlar si estoy llamando al API o no
    const [isEmailValid, setEmailValidity] = useState(false); // use state para controlar si el email es válido o no


    useEffect(() => {
        // solo la primera vez llamo a la validación del token, recogiendo el valor por parámetro
        const token = query.get("token"); // obtengo el query param del token
        if (token !== null) {
            // llamamos a nuestro API para hacer check del validity
            fetch(`http://localhost:5463/auth/validate?token=${token}`) // validamos tipo GET pasando el token por query param
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
    }, []);

    const handleSubmit = (e) => { // gestiono el submit del formulario
        e.preventDefault();
        if (e.target.checkValidity()) { // compruebo que todos los campos del formulario son validos
            // genero el objeto options para llamar al login
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
                },
                body: JSON.stringify({ // Genero el body como string
                    email: e.target.email.value, // obtengo el value de un input por su name
                    password: e.target.pass.value
                })
            }
            // llamo al login
            fetch('http://localhost:5463/auth/login', options)
                .then(r => r.json())
                .then(d => console.log(d)) // aqui tendríamos el access token
        } else {
            // mostrar error al usuario con el campo que no es válido
        }

    }
    return (
        <div className={classes.personalDataBigcontainerLogin}>
            <div className={classes.personalDataInputTitelcontainer}>
                <h3 className="data_title">Log in</h3>
                <div className="input_container">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className={classes.bigInputData}
                            required
                            type="email"
                            name="email"
                            label="Email Address"
                            // ref={emailRef}
                            // defaultValue="Email Adress"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.bigInputData}
                            required
                            type="password"
                            name="pass"
                            label="Password"
                            // ref={passwordRef}
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
                                Login in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <img src={hands} alt="creep" className={classes.handsIMG} />
        </div>
    );
}


export default Login;
