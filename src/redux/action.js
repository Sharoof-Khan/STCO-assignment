import Axios from "axios";
import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_ORDER_FAILURE, ADD_PRODUCT_ORDER_REQUEST, ADD_PRODUCT_ORDER_SUCCESS, CART_COUNTER_FAILURE, CART_COUNTER_REQUEST, CART_COUNTER_SUCCESS, CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, EMPTY_CART_FAILURE, EMPTY_CART_REQUEST, EMPTY_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_ORDER_FAILURE, FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS,  REMOVE_PRODUCT_FROM_CART_FAILURE, REMOVE_PRODUCT_FROM_CART_REQUEST, REMOVE_PRODUCT_FROM_CART_SUCCESS, REMOVE_PRODUCT_FROM_ORDER_FAILURE, REMOVE_PRODUCT_FROM_ORDER_REQUEST, REMOVE_PRODUCT_FROM_ORDER_SUCCESS } from "./actionTypes";

const fetchDataRequest = (payload) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure = (payload) => { 
    return {
        type: FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchdata = (payload) => { 
    return (dispatch) => { 
        dispatch(fetchDataRequest());
        Axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch(fetchDataSuccess(response?.data));
            }).catch(error => {
                dispatch(fetchDataFailure(error?.data));
            }
        );

    }
}


// *******************For Filter ********************

const categoryRequest = (payload) => { 
    return {
        type: CATEGORY_REQUEST,
        payload
    }
}


const categorySuccess = (payload) => { 
    return {
        type: CATEGORY_SUCCESS,
        payload
    }
}

const categoryFailure = (payload) => { 
    return {
        type: CATEGORY_FAILURE,
        payload
    }
}


export const category = (payload) => { 
    return (dispatch) => { 
        // console.log( payload,'pload');
        dispatch(categoryRequest());
        Axios.get(`https://fakestoreapi.com/products/category/${payload}`)
            .then(response => {
                dispatch(categorySuccess(response?.data));
            }).catch(error => {
                dispatch(categoryFailure(error?.data));
            }
        );


    }
}



// *******************For Single Product ********************
const getSingleProductRequest = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess = (payload) => {

    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
    
}

const getSingleProductFailure = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}



export const getSingleProduct = (id) => {

    return (dispatch) => {
        dispatch(getSingleProductRequest())
        Axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => dispatch(getSingleProductSuccess(res.data)))
            .catch(e => dispatch(getSingleProductFailure(e.data)))
            
    };
};

// *******************For Add To Cart ********************

const addProductCartRequest = (payload) => {
    return {
        type: ADD_PRODUCT_CART_REQUEST,
        payload
    }
}

const addProductCartSuccess = (payload) => {

    return {
        type: ADD_PRODUCT_CART_SUCCESS,
        payload
    }
    
}

const addProductCartFailure = (payload) => {
    return {
        type: ADD_PRODUCT_CART_FAILURE,
        payload
    }
}




export const addProductCart = (product) => dispatch => {
    
    try {
        dispatch(addProductCartRequest())
        dispatch(addProductCartSuccess(product))
        
    } catch (error) {
        dispatch(addProductCartFailure(error))
        
    }



    


    // console.log(product,'produt');

}


const fetchCartRequest = (payload) => {
    return {
        type: FETCH_CART_REQUEST,
        payload
    }
}

const fetchCartSuccess = (payload) => {

    return {
        type: FETCH_CART_SUCCESS,
        payload
    }
    
}

const fetchCartFailure = (payload) => {
    return {
        type: FETCH_CART_FAILURE,
        payload
    }
}

export const fetchCart = (payload) => dispatch => { 
    

    try {
        dispatch(fetchCartRequest())
        dispatch(fetchCartSuccess(payload))
        
    } catch (error) {
        dispatch(fetchCartFailure(error))
        
        
    }
    
}



// *****************************************Remove Item From Cart *************************************
const removeProductFromCartRequest = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_REQUEST,
        payload
    }
}

const removeProductFromCartSuccess = (payload) => {

    return {
        type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
        id:payload
    }
    
}

const removeProductFromCartFailure = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_FAILURE,
        payload
    }
}

export const removeProductFromCart = (payload) => dispatch => { 
    
    try {
        dispatch(removeProductFromCartRequest())
        dispatch(removeProductFromCartSuccess(payload))
        // dispatch(fetchCart())
        
    } catch (error) {
        dispatch(removeProductFromCartFailure(error))
        
        
        
    }


}
// *****************************************Remove Item From Cart AND SEND TO ORDER *************************************



// *****************************************Send Order *************************************

const addProductOrderRequest = (payload) => {
    return {
        type: ADD_PRODUCT_ORDER_REQUEST,
        payload
    }
}

const addProductOrderSuccess = (payload) => {

    return {
        type: ADD_PRODUCT_ORDER_SUCCESS,
        payload
    }
    
}

const addProductOrderFailure = (payload) => {
    return {
        type: ADD_PRODUCT_ORDER_FAILURE,
        payload
    }
}




export const addProductOrder = (payload) => dispatch => {


    
    
    try {
        dispatch(addProductOrderRequest())
        dispatch(addProductOrderSuccess(payload))
        
    } catch (error) {
        dispatch(addProductOrderFailure(error))
        
        
        
    }

    
}



// *****************************************Empty Cart *************************************
const emptyCartRequest = (payload) => {
    return {
        type: EMPTY_CART_REQUEST,
        payload
    }
}

const emptyCartSuccess = (payload) => {

    return {
        type: EMPTY_CART_SUCCESS,
        payload
    }
    
}

const emptyCartFailure = (payload) => {
    return {
        type: EMPTY_CART_FAILURE,
        payload
    }
}




export const emptyCart = (payload) => dispatch => {
    
    try {
        dispatch(emptyCartRequest())
        dispatch(emptyCartSuccess())
        // dispatch(fetchCart())
        
        
    } catch (error) {
        dispatch(emptyCartFailure(error))
        
        
        
        
    }

    
}

const fetchOrderRequest = (payload) => {
    return {
        type: FETCH_ORDER_REQUEST,
        payload
    }
}

const fetchOrderSuccess = (payload) => {

    return {
        type: FETCH_ORDER_SUCCESS,
        payload
    }
    
}

const fetchOrderFailure = (payload) => {
    return {
        type: FETCH_ORDER_FAILURE,
        payload
    }
}

export const fetchOrders = (payload) => {

    return (dispatch) => {
        try {
            dispatch(fetchOrderRequest())
            dispatch(fetchOrderSuccess(payload))
    
        } catch (error) {
            dispatch(fetchOrderFailure(error))
    
        }
    
            }

           };




// *****************************************Remove Order *************************************


const removeFromOrderRequest = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_ORDER_REQUEST,
        payload
    }
}

const removeFromOrderSuccess = (payload) => {

    return {
        type: REMOVE_PRODUCT_FROM_ORDER_SUCCESS,
        payload
    }
    
}

const removeFromOrderFailure = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_ORDER_FAILURE,
        payload
    }
}

export const removeFromOrder = (id) => dispatch => { 
    
    try {
        dispatch(removeFromOrderRequest())
        dispatch(removeFromOrderSuccess(id))
        
    } catch (error) {
        dispatch(removeFromOrderFailure(error))
        
        
        
        
    }

    // Axios.delete(`/orders/${id}`)
    //     .then(res => dispatch(removeFromOrderSuccess(res.data)))
    //     .then(()=> dispatch(fetchOrders()))
    // .catch(e => dispatch(removeFromOrderFailure(e.data)))
}








