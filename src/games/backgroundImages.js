import { makeStyles } from '@material-ui/core/styles';
import face from '../../src/assets/images/face.jpg'

export const useStyles = makeStyles((theme) => ({
    imgForGame: {
        background: `url(${face})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "350px",
        backgroundColor: "black",
        margin: ".5rem",
        minHeight: "50vh",
    },

    inputCenter: {
        textAlign: "center",
        margin: "5rem 0",
    },

    centerText: {
        direction: "row",
        padding: "3.6rem",
        maxWidth: "60%",
        minHeight: "16rem",
    },

    timer: {
        color: "#d50102",
        direction: "row",
        textAlign: "right",
        margin: "2rem",
    },

    inputBackGround: {
        backgroundColor: "#424242",
        borderRadius: "1rem",
        color: "#d50102",
    },

    acertijo: {
        marginLeft: "2rem",
    }
}));
