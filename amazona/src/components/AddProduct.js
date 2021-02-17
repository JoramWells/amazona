import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux'
import { saveProduct, listProduct } from '../actions/productActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddProduct(props) {
  const classes = useStyles();
  const[name,setName] = useState('')
  const[price,setPrice] = useState('')
  const[image,setImage] = useState('')
  const[brand,setBrand] = useState('')
  const[category,setCategory] = useState('')
  const[countInStock,setCountInStock] = useState('')
  const[description,setDescription] = useState('')
  const productList = useSelector(state => state.productList)
  const{loading, products,error} = productList;
  const productSave = useSelector(state=>state.productSave);
  const{loading:loadingSave, success:successSave,error:errorSave} = productSave;

  const dispatch = useDispatch();

  useEffect(() =>{
      dispatch(listProduct())
//
    return() =>{

    }
  }, [])

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(saveProduct({name,price, image, brand, category, countInStock, description}))
  }

  return (loading? <div>Loading...</div>:
     error? <div>{error}</div>: 
     <> 
    <div style={{marginTop:"100px"}}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>(
                                    <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.countInStock}</td>
                                </tr>
                ))}


            </tbody>
        </table>
    </div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Add Product
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
        {loadingSave && <div>Loading...</div>}
        {errorSave && <div>{errorSave}</div>}
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name "
            type="text"
            name="name"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price "
            name="price"
            type="text"
            autoComplete="price"
            onChange={(e) => setPrice(e.target.value)}
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="brand"
            label="brand "
            name="brand"
            type="text"
            autoComplete="brand"
            onChange={(e) => setBrand(e.target.value)}
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            type="text"
            label="category "
            name="category"
            autoComplete="category"
            onChange={(e) => setCategory(e.target.value)}
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="countInStock"
            type="text"
            label="In Stock"
            name="countInStock"
            autoComplete="countInStock"
            onChange={(e) => setCountInStock(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Product Description"
            type="text"
            id="description"
            onChange={(e) =>setDescription(e.target.value)}
            autoComplete="current-password"
          />


          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
