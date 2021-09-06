import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

function Buttons(props) {
  const classes = useStyles();
  return (
    <Button className={`${classes.Buttons} ${props.className}`} variant="text">
      {props.buttonInfo}
    </Button>
  );
}

export default Buttons;
