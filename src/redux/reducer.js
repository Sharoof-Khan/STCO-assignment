import { cartCounter } from "./action";
import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_ORDER_FAILURE, ADD_PRODUCT_ORDER_REQUEST, ADD_PRODUCT_ORDER_SUCCESS, CART_COUNTER_FAILURE, CART_COUNTER_REQUEST, CART_COUNTER_SUCCESS, CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, EMPTY_CART_FAILURE, EMPTY_CART_REQUEST, EMPTY_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_ORDER_FAILURE, FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS,  REMOVE_PRODUCT_FROM_CART_FAILURE, REMOVE_PRODUCT_FROM_CART_REQUEST, REMOVE_PRODUCT_FROM_CART_SUCCESS, REMOVE_PRODUCT_FROM_ORDER_FAILURE, REMOVE_PRODUCT_FROM_ORDER_REQUEST, REMOVE_PRODUCT_FROM_ORDER_SUCCESS } from "./actionTypes";

const initState = {
    products: [],
    filtersValue:'ALL',
    error: "",
    loading: false,
    currentProduct: {},
    cart: [],
    orders: [],
    cartCounter:0,
}
export const getCartTotal = (cart) =>  
    cart?.reduce((amount, payload) => Math.round(payload.price + amount), 0)

export const getCartCount = (item) => item?.reduce((count, payload) => Number(payload.quantity) + count, 0)
    

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
        case FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error : "",
            }
        
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: [...payload],
            }
        case FETCH_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        
        // ********************Remove Individual Product from Cart********************
        case REMOVE_PRODUCT_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case REMOVE_PRODUCT_FROM_CART_SUCCESS:
            
            return {
                ...state,
                loading: false,
                cart: state.cart.filter(product => product.id !== action.id),
                error: "",
                
            }
        case REMOVE_PRODUCT_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }

        // ********************Add Product to Order********************

        case ADD_PRODUCT_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case ADD_PRODUCT_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                orders: [...state.orders, payload]
                
            }
        case ADD_PRODUCT_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        case EMPTY_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case EMPTY_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: [],
                error: "",
            }
        case EMPTY_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        


        // ******************Remove all products from cart********************
        
        
        
        case FETCH_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error : "",
            }
        case FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders:[...payload],
                error: "",
            }
        
        case FETCH_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        case REMOVE_PRODUCT_FROM_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case REMOVE_PRODUCT_FROM_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                orders: state.orders.filter(order => order.id !== action.id),
                
            }
        case REMOVE_PRODUCT_FROM_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        
        default:
            return state;
    }
}


export default reducer