import { useStyles } from "../main-style/styles.js";

function HowItWorks() {

    const classes = useStyles();
    return (
        <div className={classes.howItWorks}>
            <p className={classes.descriptionText} >
                Hello (anonimo o nombre de usuario si esta logeado), you are here for a reason. You think you understand coding and
                programming but I am here to put you to the test.
                You will be given some time to complete each level and if you do not pass, I am afraid I cannot let you continue.
                The only way out is to complete all the levels....
                Put your programming skills to the test.... if you dare.

            </p>

        </div >


    );

}

export default HowItWorks













