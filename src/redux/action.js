import Axios from "axios";
import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_ORDER_FAILURE, ADD_PRODUCT_ORDER_REQUEST, ADD_PRODUCT_ORDER_SUCCESS, CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, EMPTY_CART_FAILURE, EMPTY_CART_REQUEST, EMPTY_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_PRODUCT_FROM_CART_FAILURE, REMOVE_PRODUCT_FROM_CART_REQUEST, REMOVE_PRODUCT_FROM_CART_SUCCESS } from "./actionTypes";

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
    
    // Axios.post('/cart', product)
    //     .then(res => dispatch(addProductCartSuccess(res.data)))
    // .then(res => dispatch(addProductCartFailure(res.data)))
    
    try {
        dispatch(addProductCartRequest())
        dispatch(addProductCartSuccess(product))
        
    } catch (error) {
        dispatch(addProductCartFailure(error))
        
    }



    


    console.log(product,'produt');

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
    // Axios.get('/cart').then(res => dispatch(fetchCartSuccess(res.data)))
    // .catch(e => dispatch(fetchCartFailure(e.data)))
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
        payload
    }
    
}

const removeProductFromCartFailure = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_FAILURE,
        payload
    }
}

export const removeProductFromCart = (id) => dispatch => { 
    dispatch(removeProductFromCartRequest())
    Axios.delete(`/cart/${id}`)
        .then(res => dispatch(removeProductFromCartSuccess(res.data)))
        .then(()=> dispatch(fetchCart()))
    .catch(e => dispatch(removeProductFromCartFailure(e.data)))
}
// *****************************************Remove Item From Cart AND SEND TO ORDER *************************************
const removeFromCartRequest = (payload) => {
    return {
        type: REMOVE_FROM_CART_REQUEST,
        payload
    }
}

const removeFromCartSuccess = (payload) => {

    return {
        type: REMOVE_FROM_CART_SUCCESS,
        payload
    }
    
}

const removeFromCartFailure = (payload) => {
    return {
        type: REMOVE_FROM_CART_FAILURE,
        payload
    }
}

export const removeFromCart = (id) => dispatch => { 
    dispatch(removeFromCartRequest())
    Axios.delete(`/cart/${id}`)
        .then(res => dispatch(removeFromCartSuccess(res.data)))
        .then(()=> dispatch(fetchCart()))
    .catch(e => dispatch(removeFromCartFailure(e.data)))
}



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
    dispatch(addProductOrderRequest())

    const orderPayload = [];

    for (let product of payload) {
        
        product && orderPayload.push(Axios.post('/orders', product))
    }

    Promise.all(orderPayload)
        .then(() => dispatch(addProductOrderSuccess()))
        .then(() => dispatch(emptyCart(payload)))
        // .then(() =>
            
        //     setTimeout(() => { 

        //         alert('Your Order has been Successfully Placed')
        //     }, 100)

        
    // )
        .catch((e) => dispatch(addProductOrderFailure()))

    // // Axios.post('/orders', product)
    //     .then(res => dispatch(addProductOrderSuccess(res.data)))
    // .then(res => dispatch(addProductOrderFailure(res.data)))
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
    dispatch(emptyCartRequest())

    const deleteOrders = [];

    for (let item of payload) {
        
        let temp = dispatch(removeFromCart(item.id))
        
        deleteOrders.push(temp)
        // product && orderPayload.push(Axios.delete('/cart', product))
    }

    Promise.all(deleteOrders)
        .then(() => dispatch(emptyCartSuccess()))
        .catch((e) => dispatch(emptyCartFailure()))

    // // Axios.post('/orders', product)
    //     .then(res => dispatch(addProductOrderSuccess(res.data)))
    // .then(res => dispatch(addProductOrderFailure(res.data)))
}


