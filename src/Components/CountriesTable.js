import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontFamily: "Montserrat",
  },
}))(TableCell);
const useStyles = makeStyles({
  table: {
    minWidth: 200,
    marginTop: "50px",
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#efefef",
    },
  },
}))(TableRow);
export default function CountriesTable() {
  const classes = useStyles();

  const [globalData, setGlobalData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      //console.log(data);

      delete data.sitedata;
      setGlobalData(Object.values(Object.values(data.countryitems)[0]));
      console.log(data.countryitems[0]);
    }
    getData();
  }, []);
  //console.log(globalData);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="left">Country</StyledTableCell>
            <StyledTableCell align="left">Total Cases</StyledTableCell>
            <StyledTableCell align="left">Total Active Cases</StyledTableCell>

            <StyledTableCell align="left">Total Deaths</StyledTableCell>
            <StyledTableCell align="left">
              Total New Cases Today
            </StyledTableCell>
            <StyledTableCell align="left">
              Total New Deaths Today
            </StyledTableCell>
            <StyledTableCell align="left">Total Recovered</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {globalData.map((key, ind) => (
            <StyledTableRow key={ind}>
              <StyledTableCell align="left">
                {globalData[ind].title}
              </StyledTableCell>
              <StyledTableCell align="left">
                {globalData[ind].total_cases}
              </StyledTableCell>
              <StyledTableCell align="left">
                {globalData[ind].total_active_cases}
              </StyledTableCell>
              <StyledTableCell align="left">
                {globalData[ind].total_deaths}
              </StyledTableCell>
              <StyledTableCell align="left">
                {globalData[ind].total_new_cases_today}
              </StyledTableCell>
              <StyledTableCell align="left">
                {globalData[ind].total_new_deaths_today}
              </StyledTableCell>
              <StyledTableCell align="left">
                {globalData[ind].total_recovered}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
