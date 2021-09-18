import { Link } from "react-router-dom";
import { useStyles } from '../main-style/styles';
import Button from '../buttons';
import { Container, Grid } from '@material-ui/core';
import { useTranslation } from "react-i18next";

function Footer(props) {
    const classes = useStyles();
    const [t, i18n] = useTranslation("global");
    return (
        <Container>
            <Grid container xs={12} className={classes.homeContainer}>
                <Link to='/terms'><Button color="primary" buttonInfo={t("Footer.legalTerms")}></Button></Link>
                <Link to='/cookies'><Button color="primary" buttonInfo={t("Footer.cookies")}></Button></Link>
                <Link to='/gdpr'><Button color="primary" buttonInfo={t("Footer.gdpr")}></Button></Link>
            </Grid>
        </Container>
    );

}



export default Footer
