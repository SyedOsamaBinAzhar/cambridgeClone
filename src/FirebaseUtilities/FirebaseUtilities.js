//a function that accepts data from CategoryForm.js and creates a new collection i.e category and a doc i.e sub-category in firestore
//each sub-category has 
//1) category name 2) Category Image 3) sub category name 4) sub category image

import {firestore} from "../Firebase/Firebase"


export let createACategoryAndSubCategoryInFirestore = async(categoryObj) => {
    console.log(categoryObj)
    let {mainCategoryCover,subCategoryCover,mainCategoryName,subCategoryName} = categoryObj;

    //had issues in file name while sending to firestore so had to edit it over here.
    categoryObj.mainCategoryCover = mainCategoryCover.name;
    categoryObj.subCategoryCover = subCategoryCover.name;

    console.log(categoryObj)

    //sending data to firestore making a separate collection for each category
    await firestore.collection(`Categories`).doc(`${mainCategoryName}`).set(categoryObj);
}