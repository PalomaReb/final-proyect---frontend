import React from "react";
import Register from "./index";
import Header from "../../header";
import Footer from "../../footer";
// import { useStyles } from "../../main-style/styles";

function RegisterUser() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <Header></Header>
      <Register></Register>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default RegisterUser;
