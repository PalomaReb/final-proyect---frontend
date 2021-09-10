import { useStyles } from '../main-style/styles';
import Button from '../buttons'
import { Link } from "react-router-dom";
import { Container, Grid } from '@material-ui/core';

function Header(props) {
    const classes = useStyles();

    return (
        <Container>
            <header className={classes.homeContainer}>

                <nav className={classes.headerContainer}>
                    <Grid>
                        <Link className={classes.headerLink} to='/'><Button spacing={2} className={classes.headerLink} color="primary" buttonInfo="Home"></Button></Link>
                        <Link className={classes.headerLink} to='/register'><Button className={classes.headerLink} color="primary" buttonInfo="Register"></Button></Link>
                        <Link to='/login'><Button className={classes.headerLink} color="primary" buttonInfo="Log in"></Button></Link>
                        <Link to='/reviews'><Button className={classes.headerLink} color="primary" buttonInfo="Reviews"></Button></Link>
                    </Grid>
                </nav>

            </header >
        </Container>


    );
}
export default Header









