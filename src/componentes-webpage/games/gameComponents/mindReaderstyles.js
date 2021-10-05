import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: "90%",
    margin: "1rem auto",
    background: "rgb(0, 0, 0, .6)",
  },
  td: {
    padding: ".3rem .1rem",
    maxWidth: "1rem",
    color: "white",
    borderColor: "grey",
    "&:nth-child(odd)": {
      color: "red",
    },
    "&:nth-child(even)": {
      fontFamily: "Verdana, Arial, Helvetica",
      fontSize: "1.2rem",
    },
  },
  respContainer: {
    margin: "1rem auto",
    cursor: "pointer",
  },
  tdResp: {
    border: "1px solid grey",
    padding: "1rem",
    backgroundColor: "darkgrey",
    fontSize: "3rem",
    color: "red",
  },
  open: {
    marginTop: ".5rem",
    color: "white",
    textDecoration: "underline",
  },
  close: {
    display: "none",
  },
}));
