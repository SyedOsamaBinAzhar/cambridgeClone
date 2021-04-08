import {firestore,serverTimestamp, storage} from "../Firebase/Firebase"
import { v4 as uuid } from 'uuid';



//a function that accepts data from CategoryForm.js and creates a new collection i.e category and a doc i.e sub-category in firestore
//each sub-category has 
//1) category name 2) Category Image 3) sub category name 4) sub category image
export let createACategoryAndSubCategoryInFirestore = async(categoryObj) => {
    try {
        let {mainCategoryCover,subCategoryCover,mainCategoryName,subCategoryName,id} = categoryObj;

        //had issues in file name while sending to firestore so had to edit it over here.
        categoryObj.mainCategoryCover = mainCategoryCover.name;
        categoryObj.subCategoryCover = subCategoryCover.name;
    
    
        //sending data to firestore making a separate collection for each category
        await firestore.collection("Categories").doc(`${id}`).set(categoryObj);
    
        //creating image reference in storage
    
        let storageRef = storage.ref();
        
    
        var spaceRef1 = storageRef.child(`Main Category Covers/${categoryObj.mainCategoryCover}`);
        var spaceRef2 = storageRef.child(`Sub Category Covers/${categoryObj.subCategoryCover}`);
        spaceRef1.put(categoryObj.mainCategoryCover);
        spaceRef2.put(categoryObj.subCategoryCover);
    } catch (error) {
        console.log(error)
    }

}

let uniqueMainCategoriesArray = []
let mainCategoriesArray = [];
export var filterUniqueCategories = (categoriesArray) => {


        //storing categoryNames in another array
        for(var i = 0; i < categoriesArray.length; i++){
            mainCategoriesArray.push(categoriesArray[i].mainCategoryName);
        }

        //filtering unique category from the mainCategory
        mainCategoriesArray.forEach((mainCategoryName) => {
            if(!uniqueMainCategoriesArray.includes(mainCategoryName)){
                uniqueMainCategoriesArray.push(mainCategoryName)
            }
        })
         return uniqueMainCategoriesArray
}

export let createANewProductInFirestore = async(productObj) => {
    console.log(productObj)
    let id = uuid();

     // 1 - send file to storage and get download Url
     var imageRef = storage.child(`products/img-${uuid()}`) 
     //image k names same nai hone chahye kabhi
 
     var fileListener = imageRef.put(productObj.productCover);
 
     //fileListener.on takes 4 arguments
     //fileListener.on(event_type,
     //callback-fileStateoOfUploading
     //, callback-error
     //,callback-trigger after file upload)
     fileListener.on('state_changed'
     , 
     (snapshot) => {
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         progress = parseInt(progress);
         console.log('Upload is ' + progress + '% done');
     }
     ,
     (error) => {
         console.log(error)
     }
     ,
     async()=>{
         //will trigger on completion of upload 
         //downloadUrl ab milega
         var downloadURL = await imageRef.getDownloadURL()
 
         //2 - modify productObj with cover photo url and created At
         productObj.productCover = downloadURL;
         productObj.createdAt = serverTimestamp();
         productObj.price=parseFloat(productObj.price);
         productObj.quantity=parseInt(productObj.quantity)
         productObj.productId = id;

 
         //3 - create doc in firestore 
         await firestore.collection("products").doc(`${id}`).set(productObj)
     }
     )
}