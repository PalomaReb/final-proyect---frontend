import { Link } from "react-router-dom";
import { useStyles } from '../main-style/styles';
import Button from '../buttons';
import { Container, Grid } from '@material-ui/core';

function Footer(props) {
    const classes = useStyles();
    return (
        <Container>
            <Grid container xs={12} className={classes.homeContainer}>
                <Link to='/terms'><Button color="primary" buttonInfo="Legal Terms"></Button></Link>
                <Link to='/cookies'><Button color="primary" buttonInfo="Cookies"></Button></Link>
                <Link to='/gdpr'><Button color="primary" buttonInfo="GDPR"></Button></Link>
            </Grid>
        </Container>
    );

}



export default Footer
