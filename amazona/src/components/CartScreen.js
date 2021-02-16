import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from 'react-browser-router'
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia, Container } from "@material-ui/core";
import cookie from 'js-cookie'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const classes = useStyles();
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) =>{
    dispatch(removeFromCart(productId))
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }

    return () => {};
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping")
  }
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card className={classes.root} style={{ marginTop: "80px" }}>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    <div>
                      {item.title}
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={item.image}
                        title="Contemplative Reptile"
                      />
                    </div>
                  </Typography>
                  <Typography variant="h5" component="h2">

                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Qty:{" "}
                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    <button onClick={()=>removeFromCartHandler(item.product)}>Delete</button>
                  </Typography>

                </CardContent>
              ))
            )}

          </Card>
        </Grid>
        <Grid item xs={6} style={{marginTop:"60px"}}>
          <Card>
            <CardContent>
            <Typography variant="body2" component="p">
                    <br />
                    Sub-total:({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    <button disabled={cartItems.length === 0} onClick={checkoutHandler}>
                      Proceed to Checkout
                    </button>
                  </Typography>
            </CardContent>
          </Card>
          
        </Grid>
      </Grid>
    </Container>
  );
}
export default CartScreen;
