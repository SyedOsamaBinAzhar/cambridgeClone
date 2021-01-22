
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import RootReducer from "../Redux/RootReducer"


var middleware=[thunk] 

const store = createStore(RootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store 