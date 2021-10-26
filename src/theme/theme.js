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
        fontSize: 16,
        h1: {
            fontSize: 40,
            letterSpacing: "5px",
            marginBottom: "1rem",
        },
        h2: {
            fontSize: 19,
            letterSpacing: "5px",

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