import { ADD_TO_CART_SUCCESS } from "../constants/cartConstants"

export const add_to_cart_Action = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: item
    })
}