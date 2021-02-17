import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import ClothingList from "./ClothingList";
import Container1 from "./Container1";
import OtherProducts from "./OtherProducts";
import OtherProducts2 from "./OtherProducts2";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "./ProductList";
import TrendingProducts from "./TrendingProducts";
import Wearables from "./Wearables";
import ReactLeaf from "./ReactLeaf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(7),
    margin: "auto",
  },
}));

export default function HomepageRoutes(props) {

  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <Grid spacing={2}>
          <Wearables />
          <ProductList />
        </Grid>
      </Paper>

    </>
  );
}
