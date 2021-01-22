import {combineReducers} from "redux"
import UiUxFunctionalityReducer from "../Redux/UiUxFunctionality/UiUxFunctionalityReducer"

var rootReducer=combineReducers({
  UiUxFunctionality:UiUxFunctionalityReducer
})

export default rootReducer