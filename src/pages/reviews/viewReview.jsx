import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import ReviewCard from "./cardComponent";
import { useStyles } from "./styles";
import red from "../../assets/images/red.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

function ViewReview(props) {
  const classes = useStyles();
  const [review, setReview] = useState([]);
  const [t] = useTranslation("global");
  const theme = useTheme();
  const showCards = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    document.title = t("Reviews.title");
    fetch("https://code-or-die-backend.herokuapp.com/user/reviews")
      .then((r) => r.json())
      .then((data) => setReview(data));
  }, [t]);

  return (
    <React.Fragment>
      <Header></Header>
      <Container className={classes.viewContainer}>
        <Grid>
          <Typography variant="h1" color="primary">
            {t("Reviews.title")}
          </Typography>
          {review.length > 0 ? (
            <Carousel
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              centerMode={true}
              interval={8000}
              centerSlidePercentage={showCards ? 33 : 80}
              showStatus={false}
            >
              {review.slice(0).reverse().map((userReview, i) => (
                <ReviewCard
                  key={i}
                  img={red}
                  alias={userReview?.alias}
                  review={userReview?.review}
                ></ReviewCard>
              ))}
            </Carousel>
          ) : (
            <Typography color="primary" variant="p" content="inherit">
              {t("Reviews.mainText")}
            </Typography>
          )}
        </Grid>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ViewReview;
