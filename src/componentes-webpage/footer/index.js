import { useStyles } from '../main-style/styles';
import Button from '../buttons'
import { Container, Grid } from '@material-ui/core'

function Footer(props) {
    const classes = useStyles();
    return (
        <Container>
            <Grid container xs={12} className={classes.homeContainer}>
                <Button color="primary" buttonInfo="Legal Terms"></Button>
                <Button color="primary" buttonInfo="Cookies"></Button>
                <Button color="primary" buttonInfo="GDPR"></Button>
            </Grid>
        </Container>
    );

}



export default Footer




