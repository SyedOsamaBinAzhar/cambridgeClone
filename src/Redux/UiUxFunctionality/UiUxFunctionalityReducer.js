import { HANDLE_LOGIN_BOX } from "./UiUxFunctionalityConsctants";

var initialState={
    openLoginBox : false
};

var UiUxFunctionalityReducer=(state=initialState,action)=>{
    // console.log(`actions`)
    var {type,payload}=action
    switch (type) {
        case HANDLE_LOGIN_BOX:
            return {
                ...state,openLoginBox:action.payload
            }
        default:
        return state
    }
}

export default UiUxFunctionalityReducer 