import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"15px",
  },
  typography: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#ebebe0",
    fontSize:"20px",
    borderRadius:"5px",
  },
}));

function Wearables() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.typography}>
            <b>Jewellaries</b>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Wearables;
