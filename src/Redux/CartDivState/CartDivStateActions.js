import {CART_DIV_STATUS} from "../CartDivState/CartDivStateConstants";

export var openCartDiv = (cartDivStatus) => {
    return {type: CART_DIV_STATUS,
    payload:{
        cartDivStatus
    }}
}
