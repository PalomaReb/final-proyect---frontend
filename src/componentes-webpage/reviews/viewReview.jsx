import { Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import Header from "../header";
import Footer from "../footer";
import ReviewCard from "./cardComponent";
import { useStyles } from "./styles";
import red from "../../assets/images/red.jpg";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ViewReview(props) {
  const classes = useStyles();
  const [review, setReview] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5464/user/userInfo")
  //     .then((r) => r.json())
  //     .then((data) => setName(data.alias));
  // });
  useEffect(() => {
    fetch("http://localhost:5464/user/reviews")
      .then((r) => r.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <Grid container>
        <Container>
          <Grid>
            <Typography variant="h1" color="primary">
              Reviews de usuarios
            </Typography>
          </Grid>
          {review.length > 0 ? (
            <Carousel
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              centerMode={true}
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
            ""
          )}
        </Container>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ViewReview;
