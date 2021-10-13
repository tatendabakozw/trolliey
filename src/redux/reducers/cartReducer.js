import {ADD_TO_CART_SUCCESS} from '../constants/cartConstants'

// add items to cart reducer
export const add_to_cart_Reducer = (state = { basket: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        default:
            return  state 
    }
}