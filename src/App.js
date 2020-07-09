import React from "react";
import NavBar from "./Components/NavBar";
import InfoGrids from "./Components/InfoGrids";
import CountriesTable from "./Components/CountriesTable";
import CasesChart from "./Components/CasesChart";
import Countries from "./Components/CountrySelect";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <div>
      <NavBar />
      <Countries />
      <Grid container spacing={4} alignItems="stretch" justify="center">
        <Grid item xs={12} sm={8}>
          <CasesChart />
        </Grid>
        <Grid>
          <InfoGrids />
        </Grid>
      </Grid>
      <CountriesTable />
    </div>
  );
}

export default App;
