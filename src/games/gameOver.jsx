import { useStyles } from "./backgroundImages";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const innerPageTheme = createTheme({
  typography: {
    fontFamily: ["death"].join(","),
  },
});

function GameOver() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

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
              {t("deathPage.title")}
            </Typography>
          </Grid>
          <Grid container className={classes.fourofour}>
            <Grid item align="center" xs={12}>
              <Link className={classes.link} to="/">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnGameOver}
                >
                  {t("deathPage.btnHome")}
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
