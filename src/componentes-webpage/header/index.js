import { useStyles } from '../main-style/styles';
import Button from '../buttons'
import { Link } from "react-router-dom";
import { Container, Grid } from '@material-ui/core';
import { useAuth } from '../../hooks';
import { useTranslation } from "react-i18next";

function Header(props) {
    const classes = useStyles();
    // const userRoute = useAuth ? "/reviews" : "/view-reviews";
    const [t, i18n] = useTranslation("global");

    let loggedclasses = `${classes.headerLink} `;
    let notLoggedClasses = `${classes.headerLink} `;

    if (useAuth !== null) {
        loggedclasses += `${classes.displayNone}`;
    }
    else {
        notLoggedClasses += `${classes.displayNone}`;
    }

    return (
        <Container>
            <header className={classes.homeContainer}>

                <nav className={classes.headerContainer}>
                    <Grid>
                        <Link to='/'><Button spacing={2} className={classes.headerLink} color="primary" buttonInfo={t("Header.home")}></Button></Link>
                        <Link to='/register'><Button className={loggedclasses} color="primary" buttonInfo={t("Header.register")}></Button></Link>
                        <Link to='/login'><Button className={loggedclasses} color="primary" buttonInfo={t("Header.logIn")}></Button></Link>
                        <Link to='/reviews'><Button className={notLoggedClasses} color="primary" buttonInfo={t("Header.review")}></Button></Link>
                        <Link to='/view-reviews'><Button className={classes.headerLink} color="primary" buttonInfo={t("Header.usrRvw")}></Button></Link>
                        <Link to='/game/1'><Button className={notLoggedClasses} color="primary" buttonInfo={t("Header.game")}></Button></Link>
                    </Grid>
                </nav>

            </header >
        </Container>


    );
}
export default Header











