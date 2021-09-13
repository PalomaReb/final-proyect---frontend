import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    greyContainer: {
        backgroundColor: "#908b89",
    },

    userContainer: {
        justifyContent: "space-between",
        margin: "2.5rem 0",
        width: "100%",
    },

    formContainer: {
        textAlign: "center",
    },

    userInputs: {
        width: "80%",
        margin: "1rem 0",
        borderRadius: "0.25rem",


        [theme.breakpoints.down('sm')]: {
            // width: "fit-content",
        }
    },

    submitBtn: {
        marginTop: "1rem"
    },

    imgContainer: {
        textAlign: "center"
    },

    creepIMG: {
        borderRadius: "4.5rem",
        margin: "10px 2rem",
        boxShadow: "25px 10px 8px 10px #3c3b3b",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }
}));
