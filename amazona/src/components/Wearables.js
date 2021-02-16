import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Wearables() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{backgroundColor:"#ebebe0", fontSize:"20px"}}  elevation={0} className={classes.paper}> <b>Jewellaries</b> </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Wearables;
