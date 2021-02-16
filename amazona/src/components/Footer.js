import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} >
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <Typography variant="h6 b" component="h2" gutterBottom>
          {'Online Shops'}
        </Typography>
        <Typography>
          {'Open shop'}
        </Typography>
        <Typography>
          {'Available shops'}
        </Typography>
        <Typography>
          {'Register Shop'}
        </Typography>

          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6 b" component="h2" gutterBottom>
          {'Make money'}
        </Typography>
        <Typography>
          {'Sell product'}
        </Typography>
        <Typography>
          {'Be a distributer'}
        </Typography>
        <Typography>
          {'Sell product'}
        </Typography>
        
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6 b" component="h2" gutterBottom>
          {'Products'}
        </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6 b" component="h2" gutterBottom>
          {'Contact Us'}
        </Typography>
          </Grid>

        </Grid>


        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
