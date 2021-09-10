import { makeStyles } from '@material-ui/core/styles';
import clownOnWheel from '../assets/images/clownOnWheels.jpg'

export const useStyles = makeStyles((theme) => ({
    crazy: {
        background: `url(${clownOnWheel})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "70vh",
    },

    fourofour: {
        width: "100%",
        justifyContent: "space-between",
        padding: "2.7rem 2rem",
    },

    center: {
        textAlign: "center",
        color: "#20130a",
        overflowWrap: "break-word",
        opacity: ".5",
        '&:hover': {
            cursor: "default",
        },
        [theme.breakpoints.down('sm')]: {
            opacity: ".2",
        }

    },

    FoFbtn: {
        margin: "1rem 2rem",
    },

    title: {
        padding: "2rem",
    },
}));