import { useStyles } from '../main-style/styles';
import Button from '../buttons'
import { Link } from "react-router-dom";

function Header(props) {
    const classes = useStyles();

    return (
        <header className={classes.homeContainer}>
            <nav className={classes.headerContainer}>
                <Link className={classes.linkStyle} to="/"><Button className={classes.headerLink} color="primary" buttonInfo="Home"></Button></Link>
                <Link className={classes.linkStyle} to="/register"> <Button className={classes.headerLink} color="primary" buttonInfo="Register"></Button></Link>
                <Link className={classes.linkStyle} to="/login"> <Button className={classes.headerLink} color="primary" buttonInfo="Log in"></Button></Link>
                <Link className={classes.linkStyle} to="/review"><Button className={classes.headerLink} color="primary" buttonInfo="Reviews"></Button></Link>
            </nav>
        </header >


    );
}
export default Header









