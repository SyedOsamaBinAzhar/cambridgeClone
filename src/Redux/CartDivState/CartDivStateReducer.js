import { CART_DIV_STATUS } from "./CartDivStateConstants";

var initialState=false;


const CartDivStateReducer = (state=initialState,actions) => {
    console.log(actions)
    var{type,payload} = actions;
    console.log(payload)
    switch (type) {
        case CART_DIV_STATUS:
            return payload.cartDivStatus
            break;
    
        default: return state
            break;
    }
}

export default CartDivStateReducer
