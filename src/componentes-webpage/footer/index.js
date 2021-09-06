import { useStyles } from '../main-style/styles';
import Button from '../buttons'

function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <Button color="primary" buttonInfo="Legal Terms"></Button>
            <Button color="primary" buttonInfo="Cookies"></Button>
            <Button color="primary" buttonInfo="General Data Protection Regulation"></Button>



        </div>
    );

}



export default Footer




