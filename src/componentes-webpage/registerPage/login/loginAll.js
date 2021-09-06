import React from "react";
import Login from "./index";
import Header from "../../header";
import Footer from "../../footer";
import { useStyles } from "../../main-style/styles";
import Button from "../../buttons";
import { Link } from "react-router-dom";

function LoginUser() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header></Header>
            <div className={classes.registerContainer}>
                <div>
                    <Login></Login>
                </div>
                <Link to="/howitworks">
                    <Button buttonInfo="Continue without registering"> </Button>
                </Link>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default LoginUser;