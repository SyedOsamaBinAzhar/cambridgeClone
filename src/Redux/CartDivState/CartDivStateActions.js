import {CART_DIV_STATUS} from "../CartDivState/CartDivStateConstants";

export var openCartDiv = (cartDivStatus) => {
    // console.log(cartDivStatus)
    return {type: CART_DIV_STATUS,
    payload:{
        cartDivStatus
    }}
}