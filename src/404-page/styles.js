import { makeStyles } from '@material-ui/core/styles';
import clownOnWheel from '../assets/images/clownOnWheels.jpg'

export const useStyles = makeStyles((theme) => ({
    crazy: {
        background: `url(${clownOnWheel})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh"
    },
    center: {
        textAlign: "center",
        color: "#20130a"
    },
    baseText: {

    }

}));