import { CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes";

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
        
        
        default:
            return state;
    }
}


export default reducer