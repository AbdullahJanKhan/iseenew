import React from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import iseelogo from "../Assets/whiteisee.png";
import view from "../Assets/view.svg";
import guideline from "../Assets/guideline.svg";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
export function RetinaScan() {
  const useStyles = makeStyles({
    DialogBox: {
      width: "100%",
      borderRadius: "12px",
      background:
        "linear-gradient(45deg,#1061b0 0%, #1f74bb 17.4%, #4eb2df 72.29%, #59c1e8 100%)",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      padding: "25px",
    },
    headerfont: {
      fontSize: "33px",
      color: "#fff",
      fontWeight: "bold",
      marginTop: "15px",
    },
    guideline: {
      fontSize: "15px",
      color: "#fff",
      textDecorationLine: "underline",
    },
    Button: {
      width: "93%",
      borderRadius: "12px",
      background: "#3585da",
      color: "#fff",
      fontWeight: "bold",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      marginTop: "20px",
    },
    butpos: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
    },
    guidepos: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "50px",
    },
  });
  const classes = useStyles();
  return (
    <div className="dashdiv">
      <Grid item md={6} sm={8} xs={11} className={classes.DialogBox}>
        <img src={iseelogo} className="iseewhitelogo" alt="error found"></img>
        <Typography className={classes.headerfont}>
          DISEASE DETECTION SYSTEM
        </Typography>
        <img src={view} className="view" alt="error found"></img>
        <Grid item md={4} className={classes.butpos}>
          <Button className={classes.Button}>UPLOAD IMAGE</Button>
          <Button className={classes.Button}>CLASSIFY IMAGE</Button>
        </Grid>
        <div className={classes.guidepos}>
          <img src={guideline} className="guideimg" alt="error found"></img>
          <Typography className={classes.guideline}>
            HOW TO USE ISEE.
          </Typography>
        </div>
      </Grid>
    </div>
  );
}