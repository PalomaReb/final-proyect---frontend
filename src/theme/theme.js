import { createTheme } from "@material-ui/core";


const theme = createTheme({
    palette: {
        primary: {
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
            fontSize: "2rem",
        },
        p: {

        },
    },


})

export default theme