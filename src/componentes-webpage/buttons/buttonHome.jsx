import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

function ButtonHome(props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.buttonHome}
      variant="text"
      onClick={props.onClick}
    >
      {props.buttonInfo}
    </Button>
  );
}

export default ButtonHome;
