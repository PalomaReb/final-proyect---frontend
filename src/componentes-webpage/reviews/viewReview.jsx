import { Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import Header from "../header";
import Footer from "../footer";
import ReviewCard from "./cardComponent";
import { useStyles } from "./styles";
import red from "../../assets/images/red.jpg";

function ViewReview(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header></Header>
      <Grid>
        <Container>
          <Grid xs={12} md={12} container>
            <Typography variant="h1" color="primary">
              Reviews de usuarios
            </Typography>
          </Grid>
          <Grid className={classes.container} xs={12} md={12} container>
            <ReviewCard
              img={red}
              alias="Pedro"
              review="MEJOR JUEGO DEL MUNDO WOWOWOWOWOWOWOWOW"
            ></ReviewCard>
            <ReviewCard
              img={red}
              alias="Pedro"
              review="MEJOR JUEGO DEL MUNDO WOWOWOWOWOWOWOWOW"
            ></ReviewCard>
            <ReviewCard
              img={red}
              alias="Pedro"
              review="MEJOR JUEGO DEL MUNDO WOWOWOWOWOWOWOWOW"
            ></ReviewCard>
            <ReviewCard
              img={red}
              alias="Pedro"
              review="MEJOR JUEGO DEL MUNDO WOWOWOWOWOWOWOWOW"
            ></ReviewCard>
          </Grid>
        </Container>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ViewReview;
