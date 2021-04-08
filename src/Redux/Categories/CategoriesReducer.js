import {setCategoriesInRedux} from "./CategoriesConstants";

let initialState = [];
// console.log(`initialState`)

const CategoriesReducer = (state=initialState,actions) => {
  // console.log(`actions`)
  var {type,payload} = actions;
  switch (type) {
    case setCategoriesInRedux:
      return [...state,payload.filteredCategoryNames]
      break;
  
    default: return state
      break;
  }
}

export default CategoriesReducer



