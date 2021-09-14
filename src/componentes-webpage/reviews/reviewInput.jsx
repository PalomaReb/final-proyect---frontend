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

function Reviewsinput() {
  const classes = useStyles();

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
              <form className={classes.inputs}>
                <TextField
                  required
                  type="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                />

                <TextareaAutosize
                  className={classes.textArea}
                  aria-label="minimum height"
                  minRows={6}
                  placeholder="Write review here"
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
            <Grid item xs={6} className={classes.imgContainer}>
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
