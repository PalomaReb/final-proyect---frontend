import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    backgroundContainer: {
        backgroundColor: "#908b89",
        height: "80vh"
    },
    userInputs: {
        width: "100%",
        margin: "1rem 0",
        borderRadius: "0.25rem",
        [theme.breakpoints.down('sm')]: {
            width: "fit-content",
        }
    },
    inputContainer: {
        width: "80%",
        flexDirection: "columns",
        margin: "1rem auto",
        justifyContent: "center"
    },

    loginContainer: {
        justifyContent: "space-between",
        margin: "2.5rem 0",
        width: "100%",
    },
    formContainer: {
        textAlign: "center",
    },

    registerButton: {
        marginTop: "3rem",
        [theme.breakpoints.down('sm')]: {
            width: "50%"
        }

    },
    handsIMG: {
        height: "34rem",
        position: "absolute",
        right: "12%",
        bottom: "11vh",
        marginLeft: "4rem",

    },
    imgContainer: {
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },

}));





