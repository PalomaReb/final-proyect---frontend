import { useStyles } from "../main-style/styles.js";
import { Grid } from "@material-ui/core";
import ButtonHome from "../buttons/buttonHome";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Home() {
  const classes = useStyles();

  return (
    <Grid className={`${classes.bannerContainer} ${classes.backgroundHome}`}>
      <Typography variant="h1" color="primary" className={classes.title}>
        Do you want to play a game?
      </Typography>
      <Grid className={classes.center}>
        <Link to="/register">
          <ButtonHome buttonInfo="Yes"></ButtonHome>
        </Link>
        <Link to="/404">
          <ButtonHome buttonInfo="No"></ButtonHome>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
