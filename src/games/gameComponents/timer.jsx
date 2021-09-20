import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../backgroundImages";
import { Typography } from "@material-ui/core";
import SandTimer from "../../assets/images/reloj-arena.gif";

const RenderTime = ({ remainingTime }) => {
  const [t] = useTranslation("global");
  const classes = useStyles();

  if (remainingTime === 0) {
    return <div className="timer">{t("game.timerTL")}</div>;
  }
  if (remainingTime < 45) {
    return (
      <div className="timer">
        <Typography className="text" variant="span">
          {t("game.timerHU")}
        </Typography>
        <div className="value">
          <img src={SandTimer} className={classes.timerIMG} alt="sand timer" />
          {/*remainingTime*/}
        </div>
      </div>
    );
  }

  return (
    <div className="timer">
      <div className="value">
        <img src={SandTimer} className={classes.timerIMG} alt="sand timer" />
        {/*remainingTime*/}
      </div>
    </div>
  );
};

export default RenderTime;
