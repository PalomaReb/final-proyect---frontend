import React from "react";
import Register from "./index";
import Header from "../../../componentes-webpage/header";
import Footer from "../../../componentes-webpage/footer";
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
