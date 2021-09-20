import React, { useState, useEffect } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Header from "../header";
import Footer from "../footer";
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

  useEffect(() => {
    document.title = t("Reviews.title");
    fetch("http://localhost:5464/user/reviews")
      .then((r) => r.json())
      .then((data) => setReview(data));
  }, [t]);

  return (
    <React.Fragment>
      <Header></Header>
      <Grid container>
        <Container>
          <Grid>
            <Typography variant="h1" color="primary">
              {t("Reviews.title")}
            </Typography>
          </Grid>
          {review.length > 0 ? (
            <Carousel
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={50}
              showStatus={false}
            >
              {review.map((userReview, i) => (
                <ReviewCard
                  key={i}
                  img={red}
                  alias={userReview?.alias}
                  review={userReview?.review}
                ></ReviewCard>
              ))}
            </Carousel>
          ) : (
            <Typography color="primary" variant="h2">
              {t("Reviews.mainText")}
            </Typography>
          )}
        </Container>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ViewReview;
