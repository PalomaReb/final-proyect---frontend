import { makeStyles } from '@material-ui/core/styles';
import neonClown from '../../assets/images/neonClown.png'

export const useStyles = makeStyles((theme) => ({

    homeContainer: {
        maxWidth: "100%",
        backgroundColor: "black",
        margin: "0",
    },
    bannerContainer: {
        maxWidth: "100%",
        margin: "0",
        padding: "5rem",
        height: "100vh",
    },
    backgroundHome: {
        background: `url(${neonClown})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "380px",
        backgroundColor: "black"
    },
    headerContainer: {
        display: "flex",
    },
    center: {
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        fontSize: "2.5rem",
        fontWeight: "600",
    },
    howItWorks: {
        maxWidth: "100%",
        backgroundColor: "black",
        margin: "0",
        minHeight: "79vh",
        padding: "70px",
        letterSpacing: "5px",
    },
    howItWorksP: {
        margin: "3rem auto",
        maxWidth: "60%",
    },

    descriptionText: {
        margin: "0",
        fontWeight: "normal",
        fontSize: "1.5rem",
    },
    registerContainer: {
        display: "flex",
        backgroundColor: "#908b89",
        margin: " 0 auto",
    },
    linkStyle: {
        textDecoration: "none",
    },
    headerLink: {
        '&:hover': {
            color: "black",
            // backgroundColor: "#d50102",
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

