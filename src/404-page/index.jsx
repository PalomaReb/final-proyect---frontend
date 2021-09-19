import React, { useEffect } from "react";
import { useStyles } from "../404-page/styles";
import Header from "../componentes-webpage/header/index";
import Footer from "../componentes-webpage/footer/index";
import { Container, Typography, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = t("404.metaTitle");
  }, [t]);

  return (
    <React.Fragment>
      <Header></Header>

      <Grid className={classes.crazy}>
        <Container>
          <Grid container className={classes.fourofour}>
            <Grid item xs={12} md={5} className={classes.title}>
              <Typography variant="h1" color="primary">
                {t("404.title")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.baseText}>
              <Typography color="secondary" className={classes.center}>
                aWYgeW91IGFyZSBoZXJlLCB5b3UgaGF2ZSBtYWRlIGl0IHZlcnkgZmFy
              </Typography>
              <Typography color="secondary" className={classes.center}>
                YnV0IHRoYXQgZG9lcyBub3QgbWVhbiB5b3UgYXJlIHNhZmU=
              </Typography>
              <Typography color="secondary" className={classes.center}>
                b25seSBieSBrbm93aW5nIHdoYXQgdGhpcyBmb3JtYXQgaXM={" "}
              </Typography>
              <Typography color="secondary" className={classes.center}>
                d2lsbCB5b3UgYmUgYWJsZSB0byBjb21wbGV0ZSB0aGlzIGxldmVs
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link to="/">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.FoFbtn}
                >
                  {t("404.btnHome")}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default NotFound;
