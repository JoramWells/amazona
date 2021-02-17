import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import displayItems from "./items";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { detailsProduct } from "../actions/productActions";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ProductDetails(props) {
  /**
 *   const product = displayItems.displayItems.find(
    (x) => x._id === props.match.params.id
  );
 */

  const [qty, setQty] = useState(1);
  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  console.log(props);
  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <Grid container spacing={3} style={{ marginTop: "60px" }}>
            <Grid item xs={4}>
              <Card elevation={0} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="250"
                    image={product.imgPath}
                    title=""
                  />
                  <CardContent></CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h5" style={{ color: "black" }}>
                  {" "}
                  <b>{product.title}</b>{" "}
                </Typography>
                  <Box component="fieldset" mb={0} borderColor="transparent" style={{ display: "flex", flex: 1 }}>

                   Brand:{product.category} |
                    <Rating name="read-only" value={product.rating} size="small" /> | {product.reviews} reviews
                  </Box>

                <Typography style={{ dispaly: "flex", flex: 1 }}>
                  <b>
                    Status:
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </b>
                  <hr />
                </Typography>

                <Typography variant="h6" style={{ color: "#ff3333" }}>
                  <b>$ {product.price}</b>
                </Typography>
                <Typography variant="h6">
                  <b>Qty: </b>
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </Typography>

                <Typography>
                  Sold by:{" "}
                  <b color="textPrimary">
                    <Link style={{ textDecoration: "none", color: "#0066ff" }}>
                      {product.shop}
                    </Link>
                  </b>
                </Typography>
                <Card elevation={0} style={{ backgroundColor: "whitesmoke" }}>
                  <CardContent>
                    <Typography>
                      <Typography>Desc:</Typography>
                      <Typography>Available Colors:</Typography>
                      <Typography>Available Sizes:</Typography>
                    </Typography>
                  </CardContent>
                </Card>
                {product.countInStock > 0 ? (
                  <Button mt={2} onClick={handleAddToCart} style={{backgroundColor:"#ff9933"}} >Add to cart</Button>
                ) : (
                  <Button disabled>Add to cart</Button>
                )}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography>Shipping Worldwide.</Typography>
                <Typography>Return if faulty.</Typography>
                <Typography>Pay online</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                {" "}
                <b>Related products</b>{" "}
              </Paper>
            </Grid>
          </Grid>

          
        </div>
      )}
    </div>
  );
}
