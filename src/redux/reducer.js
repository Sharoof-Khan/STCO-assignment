import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";

const initState = {
    products: [],
    filtersValue:'ALL',
    error: "",
    loading: false,
    currentProduct: {},
    cart: [],
    orders:[],
}
export const getCartTotal = (cart) =>  
    cart?.reduce((amount, payload) => payload.price + amount, 0)
    

const reducer = (state = initState, action) => { 
    const { type, payload } = action;
    switch (type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,

            }
        
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        
        case CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        
        case CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,
                filtersValue: payload[0]?.category,
            }
        case CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        
        case GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                currentProduct: payload,
            }
        case GET_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        
        case ADD_PRODUCT_CART_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }
        
        case ADD_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                cart: [...state.cart, payload]

            }
        case ADD_PRODUCT_CART_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
 
        
        
        default:
            return state;
    }
}


export default reducer