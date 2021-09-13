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


            <Login></Login>

            <Link to="/howitworks">
                <Button buttonInfo="Continue without registering"> </Button>
            </Link>

            <Footer></Footer>
        </React.Fragment>
    );
}

export default LoginUser;
