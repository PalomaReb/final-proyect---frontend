import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

function LegalContent(props){
  const classes = useStyles();
  return (
    <Container className={classes.legalContainer}>
      <Typography color="secondary" variant="h1" className={classes.legalTitle} align="center">
        {props.pageTitle}
      </Typography>
      <Grid item xs={12} className={classes.legalContent}>
        {props.pageHTMLContent}
      </Grid>
    </Container>
  );
}
export default LegalContent;
