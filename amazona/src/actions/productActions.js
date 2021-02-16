
import axios from 'axios'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQUEST } from "../constants/productConstants"


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

const detailsProduct = (productId) => async (dispatch) =>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST, payload:productId})
        const {data} = await axios.get("http://localhost:5000/api/products/" + productId)
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.message})
        
    }
}

export {listProduct, detailsProduct}