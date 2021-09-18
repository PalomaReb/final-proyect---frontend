import { useStyles } from "../main-style/styles.js";
import { Grid } from "@material-ui/core";
import ButtonHome from "../buttons/buttonHome";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useAuth } from "../../hooks/index.js";
import { useEffect } from "react";

function Home() {
  const classes = useStyles();
  const userRoute = useAuth ? "/howitworks" : "/register";

  const ptitle = "Home";
  useEffect(() => {
    document.title = ptitle;
  }, []);

  return (
    <Grid className={`${classes.bannerContainer} ${classes.backgroundHome}`}>
      <Typography variant="h1" color="primary" className={classes.title}>
        Do you want to play a game?
      </Typography>
      <Grid className={classes.center}>
        <Link to={userRoute}>
          <ButtonHome color="secondary" buttonInfo="Yes"></ButtonHome>
        </Link>
        <Link to="/404">
          <ButtonHome buttonInfo="No"></ButtonHome>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
