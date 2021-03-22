import {combineReducers} from "redux"
import UiUxFunctionalityReducer from "../Redux/UiUxFunctionality/UiUxFunctionalityReducer"
import CartDivStateReducer from "./CartDivState/CartDivStateReducer"


var rootReducer=combineReducers({
  UiUxFunctionality:UiUxFunctionalityReducer,
  cartDivStateReducer:CartDivStateReducer
})

export default rootReducer