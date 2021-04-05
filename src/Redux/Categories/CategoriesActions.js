import { findRenderedComponentWithType } from "react-dom/test-utils";
import {firestore} from "../../Firebase/Firebase"
import { setCategoriesInRedux } from "./CategoriesConstants";
import {filterUniqueCategories} from "../../FirebaseUtilities/FirebaseUtilities" 

export let fetchMainCategoriesFromFirestore = () => async() => {

    let categoriesArray = [];//array for fetching categories collection from firestore
    let uniqueMainCategoriesArray= [];//array for storing unique mainCategoryNames

    //fetching
    let categoriesDocs = await firestore.collection("Categories").get();

    for(var i = 0 ; i < categoriesDocs.docs.length ; i++ ){
    let categories = await firestore.collection("Categories").doc(`${categoriesDocs.docs[i].id}`).get()
    categoriesArray.push(categories.data())
    }

    var filteredCategoryNames =filterUniqueCategories(categoriesArray)
    
    // console.log(filteredCategoryNames)
    
    return ({
        type : setCategoriesInRedux,
        payload : {
            uniqueMainCategoriesArray
        }
    })

}