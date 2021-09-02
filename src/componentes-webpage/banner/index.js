import { useStyles } from "../main-style/styles.js";
import clown2 from '../../assets/images/clown2.jpg'




function Banner() {
    const classes = useStyles();

    return (

        <div className={classes.homeContainer}>
            <img className={classes.clownImage} src={clown2} alt="clown"></img>
            <h1 className={classes.bannerFont}>Do you want to play a game?</h1>


        </div>



    );
}




export default Banner