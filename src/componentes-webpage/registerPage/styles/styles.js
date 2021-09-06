import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // margin: "5px",
        },
    },
    inputData: {
        width: "11.87rem",
        height: "3.12rem",
        borderRadius: "0.25rem",
    },
    bigInputData: {
        width: "24.75rem",
        marginTop: "1rem",
        borderRadius: "0.25rem"
    },
    checkBoxElement: {
        padding: "0.25rem"
    },
    personalDataBigcontainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: "6rem",
        padding: "2rem",
        [theme.breakpoints.down('sm')]: {
            width: "fit-content",
        }
    },
    personalDataBigcontainerLogin: {
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: "6rem",
        paddingBottom: "0",
        padding: "2rem",
        [theme.breakpoints.down('sm')]: {
            width: "fit-content",
        }
    },
    imgContainerPersonal: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    personalDataInputTitelcontainer: {
        width: "25.56rem",
        // maxHeight: "18.75rem",
        marginRight: "3.12rem",
        [theme.breakpoints.down('sm')]: {
            width: "fit-content",
        }
    },
    registerButton: {
        marginTop: "3rem",
    },
    creepIMG: {
        borderRadius: "4.5rem",
        margin: "10px",
        boxShadow: "25px 10px 8px 10px #3c3b3b"
    },
    handsIMG: {
        height: "26rem",
        marginLeft: "4rem",


    }
}));





