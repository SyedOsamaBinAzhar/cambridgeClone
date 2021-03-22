
import { HANDLE_LOGIN_BOX } from "./UiUxFunctionalityConsctants"


// action for display block or None of Login Component
export var displayLoginComp=(loginBoxStatus)=>{
    return {
            type:HANDLE_LOGIN_BOX,
            payload:loginBoxStatus
    }
} 


//action for CLOSE btn
export var closeBtnAction=(btnStatus)=>{
    try {
        console.log(btnStatus)
    } catch (error) {
        console.log(error)
    }
}