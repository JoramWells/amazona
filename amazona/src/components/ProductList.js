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
import Carousel from 'react-elastic-carousel'

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
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: false },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]

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
          <Carousel itemsToShow={4} breakPoints={breakPoints}  enableAutoPlay autoPlaySpeed={2500}>
            {products.map((item) =>(
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
                      image={item.image}
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
            

            ))}
          
          </Carousel>

        </Paper>
      )}
    </div>
  );
}

export default ProductLists;
