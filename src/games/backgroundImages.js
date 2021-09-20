import { makeStyles } from '@material-ui/core/styles';
import face from '../../src/assets/images/face.jpg';
import bathroom from "../assets/images/SAW-Bathroom.jpg";
import doll from '../assets/images/doll.jpg';
import alive from '../assets/images/alive.jpg';

export const useStyles = makeStyles((theme) => ({
    genericIMG: {
        background: `url(${face})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "340px",
    },
    bathroomIMG: {
        background: `url(${bathroom})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    gameContainer: {
        minHeight: "76vh",
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
        margin: "0rem 2rem",
        float: "right"
    },
    timerIMG: {
        width: "3.2rem",
    },
    inputBackGround: {
        backgroundColor: "#424242",
        borderRadius: "1rem",
        color: "#d50102",
    },
    acertijo: {
        marginLeft: "2rem",
        padding: "2rem",
        background: "rgb(32 31 31 / 75%)"
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
        textAlign: "center",
        fontSize: "4.3rem",
        color: "black",
        padding: "1rem",
        background: "rgb(255 255 255 / 40%)",
        [theme.breakpoints.down('sm')]: {
            color: "red",
            background: "rgb(32 31 31 / 60%)",
        },
    },
    btnGameOver: {
        backgroundColor: "black",
        fontSize: "1.5rem",
        margin: "2rem auto",
        '&:hover': {
            backgroundColor: "red",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem",
        },
    },

    //______________________________ALIVE__________________________________

    aliveIMG: {
        background: `url(${alive})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
        minWidth: "100%",
    },
    text: {
        margin: "auto",
        width: "50%",
        padding: "10px"
    }
}));
