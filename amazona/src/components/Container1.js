import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Container1() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
      <Grid  container spacing={3}>
    <Grid item xs={3}>

      <Paper className={classes.paper}>
      <AllInclusiveIcon fontSize="large" color="secondary" />

          Current Items</Paper>
    </Grid>
    <Grid item xs={3}>
        <Paper className={classes.paper}>
            <StarIcon fontSize="large" style={{color:"yellowgreen"}} />
            Another Awesome Item</Paper>
    </Grid>
    <Grid item xs={3}>
        <Paper className={classes.paper}>
            <DirectionsCarIcon style={{color:"blue"}} />
            Another awesome item</Paper>

    </Grid>
    <Grid item xs={3}>
        <Paper className={classes.paper}>Another awesome item</Paper>
    </Grid>
    </Grid>
    </div>
  );
}

export default Container1;
