import Axis from "axios";
import { CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes";

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
        Axis.get('https://fakestoreapi.com/products')
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
        Axis.get(`https://fakestoreapi.com/products/category/${payload}`)
            .then(response => {
                dispatch(categorySuccess(response?.data));
            }).catch(error => {
                dispatch(categoryFailure(error?.data));
            }
        );


    }
}
