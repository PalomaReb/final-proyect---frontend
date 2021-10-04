import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from '../main-style/styles';
import Button from '../buttons';
import { Container, Grid } from '@material-ui/core';
import { useTranslation } from "react-i18next";

function Footer(props) {
    const classes = useStyles();
    const [t] = useTranslation("global");
    return (
        <Container>
            <Grid item xs={12} className={classes.homeContainer}>
                <NavLink activeClassName={classes.active} to='/terms'><Button color="primary" buttonInfo={t("Footer.legalTerms")}></Button></NavLink>
                <NavLink activeClassName={classes.active} to='/cookies'><Button color="primary" buttonInfo={t("Footer.cookies")}></Button></NavLink>
                <NavLink activeClassName={classes.active} to='/gdpr'><Button color="primary" buttonInfo={t("Footer.gdpr")}></Button></NavLink>
            </Grid>
        </Container>
    );

}

export default Footer
