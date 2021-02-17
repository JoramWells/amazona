import { productListReducer, productDetailReducer, productSaveReducer } from "./reducers/productReducers";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";
import Cookie from 'js-cookie'
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {cart:{cartItems}, userSignin:{userInfo}}
const reducer = combineReducers({
    productList: productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;