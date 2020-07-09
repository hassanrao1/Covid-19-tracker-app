import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Montserrat",
    fontSize: "1em",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#39bdc8" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Covid19-Tracker app by Hassan Rao
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
