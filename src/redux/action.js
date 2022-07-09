import Axios from "axios";
import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";

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
    
    // try {
    //     dispatch(addProductCartRequest())
    //     dispatch(addProductCartSuccess(product))
        
    // } catch (error) {
    //     dispatch(addProductCartFailure(error))
        
    // }

    console.log(product,'produt');

}

