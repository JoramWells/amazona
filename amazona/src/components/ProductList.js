import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productActions";
import {Rating, Skeleton} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  link: {
    textDecorationLine: "none",
  },
}));

function ProductLists(props) {
  const classes = useStyles();

  const ProductList = useSelector((state) => state.productList);
  const { products, loading, error } = ProductList;


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());

    return () => {
      //
    };
  }, []);
  console.log(products);

  return (
    <div>
      {loading ? (
            <div>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                <Skeleton variant="rect" width={180} height={200} mb="8" />

                </Grid>
                <Grid item xs={2}>
                <Skeleton variant="rect" width={180} height={200} mb={8} />

                </Grid>
                <Grid item xs={2}>
                <Skeleton variant="rect" width={180} height={200} mb={8} />

                </Grid>
                <Grid item xs={2}>
                <Skeleton variant="rect" width={180} height={200} mb={8} />

                </Grid>
                <Grid item xs={2}>
                <Skeleton variant="rect" width={180} height={200} mb={8} />

                </Grid>
                <Grid item xs={2}>
                <Skeleton variant="rect" width={180} height={200} mb={8} />

                </Grid>
                

                
              </Grid>
          </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={3} style={{ alignItems: "center" }}>
            {products.map((item) => (

              <Grid key={item._id} style={{ textAlign: "center" }} item xs={2}>
                <Link
                  to={"/product-detail/" + item._id}
                  className={classes.link}
                >
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={item.title}
                        height="140"
                        image={item.imgPath}
                        title="Contemplative Reptile"
                      />

                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          {item.shop}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.title}
                        </Typography>
                        <Box
                          component="fieldset"
                          mb={0}
                          borderColor="transparent"
                        >
                          <Rating name="read-only" value={item.rating} />
                          <Typography>
                            <b>$ {item.price}</b>
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </div>
  );
}

export default ProductLists;
