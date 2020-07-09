import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import virus from "../images/virus.png";
import death from "../images/death.png";
import resilience from "../images/resilience.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 950,

    margin: "0 auto",
    marginTop: "40px",
    fontFamily: "Montserrat",
  },

  heading: {
    color: "white",
  },
  totalCases: {
    backgroundColor: "#28c7fa",
    padding: theme.spacing(2),
    textAlign: "center",
    textTransform: "capitalize",
    maxHeight: "25vh",
    minWidth: "250px",
    color: "white",
  },
  totalDeaths: {
    backgroundColor: "#ff304f",
    padding: theme.spacing(2),
    textAlign: "center",
    textTransform: "capitalize",
    maxHeight: "25vh",
    minWidth: "250px",
    color: "white",
  },
  totalRec: {
    backgroundColor: "#22eaaa",
    padding: theme.spacing(2),
    textAlign: "center",
    textTransform: "capitalize",
    maxHeight: "25vh",
    minWidth: "250px",
    color: "white",
  },
}));

export default function InfoGrids() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );

      let data = await response.json();

      delete data.results[0].source;
      setGlobalData(data.results[0]);
      //console.log(data.results[0]);
    }
    getData();
  }, []);
  //console.log(globalData);

  return (
    // <div className={classes.root}>
    //   <Grid container spacing={2}>
    //     {Object.keys(globalData).map((key, ind) => {

    //       return (
    //         <Grid item xs={12} sm={4} key={ind}>
    //           <Paper className={classes.paper} elevation={3}>
    //             <h3 className={classes.heading}>{key.replace(/_/g, " ")}</h3>
    //             <h3> {globalData[key]}</h3>
    //           </Paper>
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    // </div>

    <div className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.totalCases} elevation={3}>
            <img src={virus} height="35px" alt="virus icon" />
            <h4 className={classes.heading}>Total Cases</h4>
            <h4> {globalData["total_cases"]}</h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.totalDeaths} elevation={3}>
            <img src={death} height="35px" alt="virus icon" />
            <h4 className={classes.heading}>Total Deaths</h4>
            <h4> {globalData["total_deaths"]}</h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.totalRec} elevation={3}>
            <img src={resilience} height="40px" alt="virus icon" />
            <h4 className={classes.heading}>Total Recovered</h4>
            <h4> {globalData["total_recovered"]}</h4>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
