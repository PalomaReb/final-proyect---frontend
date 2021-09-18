
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    greyContainer: {
        backgroundColor: "#908b89",
        minHeight: "90vh",
    },
    finalSentence: {
        padding: "1.7rem"
    },

    inputs: {
        padding: "2rem"
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
        height: "18rem",
        margin: "10px 2rem",
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
        height: "18rem",
        width: "18rem",
        display: "flex",
        flexDirection: "column",
        margin: ".5rem",
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


}));
