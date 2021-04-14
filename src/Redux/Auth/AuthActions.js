import {auth, firestore, serverTimestamp} from "../../Firebase/Firebase"
import { v4 as uuid } from 'uuid';

export let createUser = async({firstName,lastName,email,password,createdAt}) => {
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
console.log(userInfo)
await auth.createUserWithEmailAndPassword(email,password);
await firestore.collection("Users").doc(`${userInfo.userId}`).set(userInfo)

}