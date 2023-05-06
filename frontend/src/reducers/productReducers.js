import { CLEAR_ERRORS } from '../constants/productConstants'
import {    
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL

} from '../constants/productConstants'

export const productsReducer = (state = { products: [] }, action) => {
    switch(action.type){
        
        case ALL_PRODUCTS_REQUEST:
            return{
                loading: true,
                procuts: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading: false,
                procuts: action.payload.products,
                productsCount: action.payload.productsCount
            }
        
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
                

        default:
            return state;
    }
}