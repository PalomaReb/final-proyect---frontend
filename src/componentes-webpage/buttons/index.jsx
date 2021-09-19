import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

function Buttons(props) {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.Buttons} ${props.className}`}
      variant="text"
      onClick={props.onClick}
      color={props.color}
    >
      {props.buttonInfo}
    </Button>
  );
}

export default Buttons;
