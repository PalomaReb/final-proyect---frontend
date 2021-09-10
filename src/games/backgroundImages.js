import { makeStyles } from '@material-ui/core/styles';
import face from '../../src/assets/images/face.jpg';
import doll from '../assets/images/doll.jpg';

export const useStyles = makeStyles((theme) => ({
    imgForGame: {
        background: `url(${face})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "340px",
        backgroundColor: "black",
        margin: ".5rem",
        minHeight: "50vh",
    },

    inputCenter: {
        textAlign: "center",
        margin: "4rem 0",
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
    },

    //--------------------------GAME OVER PAGE--------------------------------------

    gameOverBGI: {
        background: `url(${doll})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100%"
    },
    fontChange: {
        textAlign: "right",
        fontSize: "4.3rem",
        color: "black"

    }
}));