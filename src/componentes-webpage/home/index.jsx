import { useStyles } from "../main-style/styles.js";
import Button from "../buttons";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Home() {
  const classes = useStyles();

  return (
    <div className={`${classes.bannerContainer} ${classes.backgroundHome}`}>
      <Typography variant="h1" color="primary" className={classes.title}>
        Do you want to play a game?
      </Typography>
      <div className={classes.center}>
        <Link to="/register">
          <Button buttonInfo="Yes"></Button>
        </Link>
        <Link to="/404">
          <Button buttonInfo="No"></Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
