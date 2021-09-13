import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    // inputData: {
    //     width: "11.87rem",
    //     height: "3.12rem",
    //     borderRadius: "0.25rem",
    // },
    backgroundContainer: {
        backgroundColor: "#908b89",
    },
    bigInputData: {
        width: "24.75rem",
        marginTop: "1rem",
        borderRadius: "0.25rem"
    },
    checkBoxElement: {
        padding: "0.25rem"
    },

    // personalDataBigcontainer: {
    //     display: "flex",
    //     justifyContent: "space-evenly",
    //     marginLeft: "6rem",
    //     padding: "3rem",
    // },
    // personalDataInputTitlecontainerRegister: {
    //     width: "25.56rem",
    //     marginRight: "3.12rem",


    // },
    loginContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: "2.5rem 0",
        width: "100vh",
        // marginLeft: "6rem",
        // paddingBottom: "0",
        // padding: "6rem",
    },
    formContainer: {
        textAlign: "center",
    },

    personalDataInputTitelcontainerRegister: {
        width: "25.56rem",
        marginRight: "3.12rem",
    },


    registerButton: {
        marginTop: "3rem",
        [theme.breakpoints.down('sm')]: {
            width: "50%"
        }

    },
    // creepIMG: {
    //     borderRadius: "4.5rem",
    //     margin: "10px",
    //     boxShadow: "25px 10px 8px 10px #3c3b3b",
    // },

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





