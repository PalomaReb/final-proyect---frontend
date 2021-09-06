import { useStyles } from "../404-page/styles";
import React from "react";
import { Typography } from "@material-ui/core";
import Button from "../componentes-webpage/buttons";
import { Link } from "react-router-dom";

function NotFound() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.crazy}>
        <div className={classes.center}>
          <Typography variant="h1" color="primary">
            404! This is not the exit you are looking for.
          </Typography>
        </div>
        <div className={classes.baseText}>
          <Typography color="secondary" className={classes.center}>
            aWYgeW91IGFyZSBoZXJlLCB5b3UgaGF2ZSBtYWRlIGl0IHZlcnkgZmFy
          </Typography>
          <Typography color="secondary" className={classes.center}>
            YnV0IHRoYXQgZG9lcyBub3QgbWVhbiB5b3UgYXJlIHNhZmU=
          </Typography>
          <Typography color="secondary" className={classes.center}>
            b25seSBieSBrbm93aW5nIHdoYXQgdGhpcyBmb3JtYXQgaXM={" "}
          </Typography>
          <Typography color="secondary" className={classes.center}>
            d2lsbCB5b3UgYmUgYWJsZSB0byBjb21wbGV0ZSB0aGlzIGxldmVs
          </Typography>
        </div>
      </div>
      <div>
        <Link to="/">
          <Button buttonInfo="back home"> </Button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
