
import axios from 'axios'
import { PRODUCT_SAVE_FAIL,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_REQUEST,PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQUEST } from "../constants/productConstants"


const listProduct = () => async(dispatch) =>{
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const filter={
            where:{
                name:"Jewels"
            }
        }
        const {data} = await axios.get("http://localhost:5000/api/products?filter" + JSON.stringify(filter))
        
        dispatch({type:PRODUCT_LIST_SUCCESS, payload:data})

        
    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL, payload:error.message})
        
    }
}


const saveProduct = (product) => async(dispatch, getState) =>{
    try {
        dispatch({type:PRODUCT_SAVE_REQUEST, payload:product})
        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.post('/api/products', product,{
            headers: {
                'Authorization' : 'Bearer' + userInfo.token
            }
        });
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:PRODUCT_SAVE_FAIL, payload:error.message})
        
    }
}


const detailsProduct = (productId) => async (dispatch) =>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST, payload:productId})
        const {data} = await axios.get("http://localhost:5000/api/products/" + productId)
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.message})
        
    }
}

export {listProduct, detailsProduct, saveProduct}