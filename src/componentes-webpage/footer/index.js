import { useStyles } from "../main-style/styles";
import { Button } from '@material-ui/core'



function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <Button className={classes.footerButton} variant="text">Legal Terms</Button>
            <Button className={classes.footerButton} variant="text">Cookies </Button>
            <Button className={classes.footerButton} variant="text">General Data Protection Regulation</Button>

        </div>
    );

}



export default Footer




