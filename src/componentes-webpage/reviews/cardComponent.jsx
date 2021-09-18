import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

function ReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardMedia className={classes.thankYouIMG} image={props.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.alias}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.review}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
