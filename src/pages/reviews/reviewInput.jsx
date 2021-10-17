import {
  Container,
  Grid,
  Typography,
  TextareaAutosize,
  Button,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./styles";
import Buttons from "../../componentes-webpage/buttons";
import { Link } from "react-router-dom";
import teeth from "../../assets/images/teeth.jpg";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import React, { useState } from "react";
// import { useHistory } from "react-router";
// import { useAuth } from "../../hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Reviewsinput() {
  const [sendReview, setSendReview] = useState("");

  const [t] = useTranslation("global");

  useEffect(() => {
    document.title = t("usrRvw.title");
  }, [t]);

  const classes = useStyles();
  // const history = useHistory();

  const handleSubmit = (e) => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    e.preventDefault();
    if (e.target.checkValidity()) {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },

        body: JSON.stringify({
          review: e.target.review.value,
          alias: e.target.alias.value,
        }),
      };
      fetch("https://code-or-die-backend.herokuapp.com/user/reviews", options)
        .then((r) => r.json())
        .then(function (response) {
          if (!response.ok) {
            throw Error(response.status);
          }
          return response;
        })
        .then((data) => {
          setSendReview(t("usrRvw.rvwSent"));
        })
        .catch(function (error) {
          setSendReview(t("usrRvw.rvwSent"));
        });
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
                {t("usrRvw.title")}
              </Typography>

              <Typography
                className={classes.finalSentence}
                variant="h3"
                color="#000000"
              >
                {t("usrRvw.mainText")}
              </Typography>
              <form onSubmit={handleSubmit} className={classes.inputs}>
                <TextField
                  className={classes.userInputs}
                  required
                  type="text"
                  name="alias"
                  label={t("usrRvw.btnAlias")}
                  variant="outlined"
                />
                <TextareaAutosize
                  className={classes.textArea}
                  aria-label="minimum height"
                  minRows={6}
                  placeholder={t("usrRvw.txtBox")}
                  name="review"
                />
                <div className={classes.registerButton}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {t("usrRvw.btnReview")}
                  </Button>
                </div>
              </form>
              <Typography>{sendReview}</Typography>
              <Link to="/">
                <Buttons buttonInfo={t("usrRvw.btnHome")}> </Buttons>
              </Link>
              <Link to="/view-reviews">
                <Buttons buttonInfo={t("usrRvw.btnviewReview")}> </Buttons>
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
