import { useStyles } from '../main-style/styles';
import Button from '../buttons'
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';

function Header(props) {
    const classes = useStyles();

    return (
        <header className={classes.homeContainer}>
            <nav className={classes.headerContainer}>
                <Grid>
                    <Link to='/'><Button spacing={2} className={classes.headerLink} color="primary" buttonInfo="Home"></Button></Link>
                    <Link to='/register'><Button className={classes.headerLink} color="primary" buttonInfo="Register"></Button></Link>
                    <Link to='/login'><Button className={classes.headerLink} color="primary" buttonInfo="Log in"></Button></Link>
                    <Link to='/reviews'><Button className={classes.headerLink} color="primary" buttonInfo="Reviews"></Button></Link>
                </Grid>
            </nav>
        </header >


    );
}
export default Header









