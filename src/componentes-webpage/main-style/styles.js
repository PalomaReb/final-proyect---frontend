import { makeStyles } from '@material-ui/core/styles';
import neonClown from '../../assets/images/neonClown.png'

export const useStyles = makeStyles((theme) => ({

    homeContainer: {
        maxWidth: "100%",
        backgroundColor: "black",

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
    },
    headerContainer: {
        display: "flex",
    },
    center: {
        textAlign: "center",
        textDecoration: "none",
        '&:hover': {
            cursor: "pointer",
        },
    },
    title: {
        textAlign: "center",
        fontSize: "2.5rem",
        fontWeight: "600",
    },
    howItWorks: {
        maxWidth: "100%",
        backgroundColor: "black",
        minHeight: "80vh",
        letterSpacing: "5px",
    },
    howItWorksP: {
        margin: "2rem auto",
        textAlign: "justify",
        maxWidth: "60%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "90%",
        }
    },
    howItWorksH1: {
        textAlign: "center",
        margin: "3rem auto",
        maxWidth: "60%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "90%",
        }
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
        textDecoration: "none",
        '&:hover': {
            color: "black",
            backgroundColor: theme.palette.primary.main,
        },
    },
    active: {
        // backgroundColor: theme.palette.primary.main,
        // paddng: "8rem 0 rem",
        // borderRadius: "5px"
        textDecoration: "underline",
        color: theme.palette.primary.main
    },

    displayNone: {
        display: "none"
    },

}));

