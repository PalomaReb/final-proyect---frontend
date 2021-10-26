
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    greyContainer: {
        backgroundColor: "#908b89",
        minHeight: "75vh",
    },
    finalSentence: {
        padding: ".7rem"
    },

    inputs: {
        padding: "2rem"
    },
    userInputs: {
        margin: "1rem",
        width: "80%",
    },

    userContainer: {
        justifyContent: "space-between",
        margin: "2.5rem 0",
        width: "100%",
    },

    textArea: {
        width: "80%",
        marginBottom: "1rem",
        padding: ".6rem",
        backgroundColor: "rgb(230, 218, 218, .3)",
    },

    formContainer: {
        textAlign: "center",
    },

    imgContainer: {
        textAlign: "center"
    },
    registerButton: {
        margin: "1rem"
    },

    teethIMG: {
        borderRadius: "4.5rem",
        height: "18rem",
        margin: "45px 2rem",
        boxShadow: "25px 10px 8px 10px #3c3b3b",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    //______________________VIEW REVIEWS __________________________//
    container: {
        margin: "1rem"
    },



    cardContainer: {
        height: "auto",
        width: "18rem",
        display: "flex",
        flexDirection: "column",
        margin: ".5rem auto",
        borderRadius: "40px",

    },

    aliasPosition: {
        marginTop: "2rem"
    },

    thankYouIMG: {
        width: "18rem",
        margin: "0",
        height: "8rem",

    },
    viewContainer: {
        minHeight: "80vh",
        paddingTop: "2rem",
        paddingBottom: "1rem"
    },
}));
