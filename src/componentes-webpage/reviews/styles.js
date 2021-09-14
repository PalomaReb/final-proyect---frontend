
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    greyContainer: {
        backgroundColor: "#908b89",
    },
    finalSentence: {
        padding: "1.3rem"
    },

    userContainer: {
        justifyContent: "space-between",
        margin: "2.5rem 0",
        width: "100%",
    },

    formContainer: {
        textAlign: "center",
    },

    imgContainer: {
        textAlign: "center"
    },

    teethIMG: {
        borderRadius: "4.5rem",
        height: "20rem",
        margin: "10px 2rem",
        boxShadow: "25px 10px 8px 10px #3c3b3b",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }


}));
