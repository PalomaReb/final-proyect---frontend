import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    backgroundContainer: {
        backgroundColor: "#908b89",
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
        flexDirection: "columns",
        margin: "1rem"
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
        height: "26rem",
        marginLeft: "4rem",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    imgContainer: {
        textAlign: "center"
    },

}));





