import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../backgroundImages";
import { Grid } from "@material-ui/core";
import SandTimer from "../../assets/images/reloj-arena.gif";

export const RenderTime = ({ remainingTime }) => {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  if (remainingTime === 0) {
    return <div className="timer">{t("game.timerTL")}</div>;
  }
  if (remainingTime < 45) {
    return (
      <div className={classes.timer}>
        <div className={classes.timerTXT}>{t("game.timerHU")}</div>
        <div className={classes.timerVal}>
          <img src={SandTimer} className={classes.timerIMG} alt="sand timer" />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.timer} align="center">
      <div className={classes.timerVal}>
        <img src={SandTimer} className={classes.timerIMG} alt="sand timer" />
      </div>
    </div>
  );
};
