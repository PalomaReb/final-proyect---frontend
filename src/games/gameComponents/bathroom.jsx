import { Grid, Switch, Typography } from "@material-ui/core";
import { useStyles } from "./bathroom";
import { ThemeContext } from "./themeChange";
import { useState, useContext } from "react";

import React from "react";

function BathroomGame(props) {
  const classes = useStyles();
  const { isDark, changeTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme((prevDark) => !prevDark); // cambiamos el check del boton del tema
  };

  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Switch
            checked={isDark}
            onChange={handleChangeTheme}
            color="secondary"
          />
        </Grid>
        <Grid item xs={5} className={classes.firstFont}>
          <Typography variant="p" component="p" color="primary">
            01100101
          </Typography>
          <Typography color="primary">01110011</Typography>
          <Typography color="primary">01100011</Typography>
        </Grid>
        <Grid item xs={5} className={classes.secondFont}>
          <Typography color="primary"> 01100001</Typography>
          <Typography color="primary"> 01110000</Typography>
          <Typography color="primary">01100101 </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BathroomGame;
