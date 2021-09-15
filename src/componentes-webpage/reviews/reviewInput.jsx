import {
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import Buttons from "../buttons";
import { Link } from "react-router-dom";
import teeth from "../../assets/images/teeth.jpg";
import Header from "../header";
import Footer from "../footer";
import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks";
import { useEffect } from "react";

function Reviewsinput() {
  const ptitle = "user review page";
  useEffect(() => {
    document.title = ptitle;
  }, []);

  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      // genero el objeto options para llamar al login
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${useAuth}`, // aviso a mi servidor que le envio los datos en formato JSON
        },
        body: JSON.stringify({
          // Genero el body como string
          alias: e.target.alias.value,
          review: e.target.review.value,
        }),
      };
      // llamo al login
      fetch("http://localhost:5464/user/reviews", options)
        .then((r) => r.json())
        .then((d) => {
          history.push("/userReviews");
        }); // aqui tendríamos el access token
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Grid className={classes.greyContainer}>
        <Container>
          <Grid container className={classes.userContainer}>
            <Grid item xs={12} md={6} className={classes.formContainer}>
              <Typography variant="h1" color="primary">
                Reviews
              </Typography>
              <Typography
                className={classes.finalSentence}
                variant="h5"
                color="black"
              >
                Haz jugado con valentia y honor. Deja un review sobre tu
                experencia! Gracias por participar!
              </Typography>
              <form onSubmit={handleSubmit} className={classes.inputs}>
                <TextField
                  required
                  type="text"
                  name="alias"
                  label="alias"
                  variant="outlined"
                />

                <TextareaAutosize
                  className={classes.textArea}
                  aria-label="minimum height"
                  minRows={6}
                  placeholder="Write review here"
                  name="review"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submitBtn}
                >
                  Submit
                </Button>
              </form>
              <Link to="/">
                <Buttons buttonInfo="Home"> </Buttons>
              </Link>
              <Link to="/">
                <Buttons buttonInfo="Ver reviews"> </Buttons>
              </Link>
            </Grid>
            <Grid item xs={6} md={6} className={classes.imgContainer}>
              <img src={teeth} alt="teeth" className={classes.teethIMG} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default Reviewsinput;
