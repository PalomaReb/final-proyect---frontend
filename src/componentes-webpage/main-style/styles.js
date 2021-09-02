import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    homeContainer: {
        maxWidth: "100%",
        backgroundColor: "black",
        margin: "0",
    },
    bannerContainer: {
        maxWidth: "100%",
        backgroundColor: "black",
        margin: "0",
    },
    clownImage: {
        opacity: "0.65",
        width: "70%",
        height: "100%",
    },
    fontColor: {
        color: "#8d0a15",
        margin: "0",
        fontSize: "3rem"

    },
    headerContainer: {
        display: "flex",

    },
    headerButton: {
        color: "#a20417",
        background: 'linear-gradient(45deg, #252527  30%, #000000 90%)',
        margin: ".6rem",
    },
    howItWorks: {
        maxWidth: "100%",
        backgroundColor: "black",
        margin: "0",
        minHeight: "16rem",
        padding: "70px"
    },
    descriptionText: {
        color: "#8d0a15",
        margin: "0",
        fontWeight: "normal",
        fontSize: "1.5rem",
    },
    footerButton: {
        color: "white",
        background: 'linear-gradient(45deg, #252527  30%, #000000 90%)',
        margin: ".6rem",
    },
}));

