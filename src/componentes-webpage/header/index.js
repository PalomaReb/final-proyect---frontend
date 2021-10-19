import React from "react";
import { useStyles } from '../main-style/styles';
import Button from '../buttons'
import { NavLink } from "react-router-dom";
import { Container, Grid } from '@material-ui/core';
import { useAuth } from '../hooks';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

function Header(props) {
    const classes = useStyles();
    const [t, i18n] = useTranslation("global")
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const isAuth = useAuth();
    const history = useHistory();

    let loggedclasses = `${classes.headerLink} `;
    let notLoggedClasses = `${classes.headerLink} `;

    if (isAuth) {
        loggedclasses += `${classes.displayNone}`;
    }
    else {
        notLoggedClasses += `${classes.displayNone}`;
    }

    function logout() {
        sessionStorage.removeItem('sessionToken');
        history.push('/');
    }

    return (
        <Container>
            <header className={classes.homeContainer}>

                <nav className={classes.headerContainer}>
                    <Grid container>
                        <Grid item align="left" xs={9}>
                            <NavLink activeClassName={classes.active} exact={true} to='/'><Button spacing={2} className={classes.headerLink} color="primary" buttonInfo={t("Header.home")}></Button></NavLink>
                            <NavLink activeClassName={classes.active} to='/register'><Button className={loggedclasses} color="primary" buttonInfo={t("Header.register")}></Button></NavLink>
                            <NavLink activeClassName={classes.active} to='/login'><Button className={loggedclasses} color="primary" buttonInfo={t("Header.logIn")}></Button></NavLink>
                            <NavLink activeClassName={classes.active} to='/reviews'><Button className={notLoggedClasses} color="primary" buttonInfo={t("Header.review")}></Button></NavLink>
                            <NavLink activeClassName={classes.active} to='/view-reviews'><Button className={classes.headerLink} color="primary" buttonInfo={t("Header.usrRvw")}></Button></NavLink>
                            <Button onClick={() => { logout() }} className={notLoggedClasses} color="primary" buttonInfo={t("Header.logout")}></Button>

                        </Grid>
                        <Grid item xs={3} align="right">
                            <Button buttonInfo="En" onClick={() => { i18n.options.lng = "en"; changeLanguage('en') }}></Button>
                            <Button buttonInfo="Es" onClick={() => { i18n.options.lng = "es"; changeLanguage('es') }}></Button>
                        </Grid>
                    </Grid>

                </nav>

            </header >
        </Container>


    );
}
export default Header
