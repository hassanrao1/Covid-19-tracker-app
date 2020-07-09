import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import { fetchDailyData } from "./api";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 950,
    margin: "0 auto",
    marginTop: "40px",
    fontFamily: "Montserrat",
    height: "40vh",
  },
}));

export default function CasesChart({ confirmed, recovered, deaths, country }) {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function fetchApi() {
      const response = await fetchDailyData();

      setGlobalData(response);
    }
    fetchApi();
  });

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = globalData[0] ? (
    <Line
      data={{
        labels: globalData.map(({ date }) => date),
        datasets: [
          {
            data: globalData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#28c7fa",
            fill: true,
          },
          {
            data: globalData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "#ff304f",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={classes.root}> {country ? barChart : lineChart}</div>;
}
