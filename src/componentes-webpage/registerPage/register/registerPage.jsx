import React from "react";
import Register from "./index";
import Header from "../../header";
import Footer from "../../footer";
import { useStyles } from "../../main-style/styles";
import Button from "../../buttons";
import { Link } from "react-router-dom";

function RegisterUser() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header></Header>
      <div className={classes.registerContainer}>
        <div>
          <Register></Register>
        </div>
        <Link to="/howitworks">
          <Button buttonInfo="Continue without registering"> </Button>
        </Link>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default RegisterUser;
