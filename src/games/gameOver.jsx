import { useStyles } from "./backgroundImages";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const innerPageTheme = createTheme({
  typography: {
    fontFamily: ["death"].join(","),
  },
});

function GameOver() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={innerPageTheme}>
      <Grid className={classes.gameOverBGI}>
        <Container>
          <Grid item xs={12} md={12} className={classes.title}>
            <Typography
              variant="h1"
              color="primary"
              className={classes.fontChange}
            >
              You thought you could escape, but there is no escaping your fate.
            </Typography>
          </Grid>
          <Grid container className={classes.fourofour}>
            <Grid item xs={12}>
              <Link to="/">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.FoFbtn}
                >
                  Go Home
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}

export default GameOver;
