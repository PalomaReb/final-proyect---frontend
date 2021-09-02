import { useStyles } from '../main-style/styles';
import { Button } from '@material-ui/core'

function Header() {
    const classes = useStyles();

    return (
        <header className={classes.homeContainer}>
            <nav className={classes.headerContainer}>
                <Button className={classes.headerButton} variant="text">Home</Button>
                <Button className={classes.headerButton} variant="text">Log in</Button>
                <Button className={classes.headerButton} variant="text">Sign up</Button>
            </nav>
        </header>


    );
}
export default Header









