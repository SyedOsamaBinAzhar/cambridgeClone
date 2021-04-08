import {combineReducers} from "redux"
import UiUxFunctionalityReducer from "../Redux/UiUxFunctionality/UiUxFunctionalityReducer"
import CartDivStateReducer from "./CartDivState/CartDivStateReducer"
import CategoriesReducer from "./Categories/CategoriesReducer"


var rootReducer=combineReducers({
  UiUxFunctionality:UiUxFunctionalityReducer,
  cartDivStateReducer:CartDivStateReducer,
  filteredCategoriesReducer: CategoriesReducer
})

export default rootReducer