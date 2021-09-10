import { createTheme } from "@material-ui/core";


const theme = createTheme({

    palette: {
        primary: {
            backgroundColor: {
                default: "#black"
            },
            main: '#d50102',
        },
        secondary: {
            main: '#fafafa',
        },
    },
    typography: {
        fontFamily: "'computer', 'sans-serif'",
        letterSpacing: "5px",
        fontSize: "1.25rem",
        h1: {
            fontSize: "2.5rem",
            letterSpacing: "5px",
            marginBottom: "1rem",
        },
        h2: {
            fontSize: "1.4rem",
            letterSpacing: "5px",

        },
        p: {


        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

export default theme