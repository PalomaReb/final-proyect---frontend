import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { useAuth } from "../../hooks/index.js";
import Footer from "../footer/index.js";
import Header from "../header/index.js";
import { useStyles } from "../main-style/styles.js";

function HowItWorks() {
  // const checkUser = useAuth();
  // const [name, setName] = useState("anonymous");
  const classes = useStyles();

  // useEffect(() => {
  //   if (checkUser) {
  //     fetch();
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <div className={classes.howItWorks}>
        <Typography className={classes.howItWorksP} color="primary">
          Hello , you are here for a reason. You think you understand coding and
          programming but I am here to put you to the test. You will be given
          some time to complete each level and if you do not pass, I am afraid I
          cannot let you continue. The only way out is to complete all the
          levels.... Put your skills to the test.... if you dare.
        </Typography>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HowItWorks;
