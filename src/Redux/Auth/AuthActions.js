import {auth, firestore, serverTimestamp} from "../../Firebase/Firebase"
import { v4 as uuid } from 'uuid';

export let createUser = ({firstName,lastName,email,password,createdAt}) => async(dispatch) => {
// console.log(userDetailsObject.userId = uuid());
// delete userDetailsObject['password'];
console.log(firstName)
var userInfo = {
    firstName,
    lastName,
    email,
    userId: uuid(),
    createdAt: serverTimestamp()
}
// console.log(userInfo)
await auth.createUserWithEmailAndPassword(email,password);
await firestore.collection("Users").doc(`${userInfo.userId}`).set(userInfo)

}

export let loginUser = ({email,password}) => async(dispatch) => {
//sigining in user
await auth.signInWithEmailAndPassword(email, password);

//Get the currently signed-in user
auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("hi")
    } else {
      // No user is signed in.
      console.log("signout")
    }
  });
}