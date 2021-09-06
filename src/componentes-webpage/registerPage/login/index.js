import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles/styles";
import "../styles/style.css";
// import { useRef } from "react";
import Button from "@material-ui/core/Button";
import hands from "../../../assets/images/hands.png";

function Login() {

    const classes = useStyles();
    return (
        <div className={classes.personalDataBigcontainerLogin}>
            <div className={classes.personalDataInputTitelcontainer}>
                <h3 className="data_title">Log in</h3>
                <div className="input_container">
                    <form>
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
