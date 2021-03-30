import React, { useState } from 'react'
import "./CategoryForm.css";
import {createACategoryAndSubCategoryInFirestore} from "../../FirebaseUtilities/FirebaseUtilities"
import { v4 as uuid } from 'uuid';

//This component has a form which contains fields for setting dynamic categories and sub-categories along with few properties in firestore
//the data object is passed to createAcategoryfn which is present in firebaseUtilities.js

const CategoryForm = () => {


  let [categoryName,setCategoryName] = useState("");
  let [categoryImage,setCategoryImage] = useState("");
  let [subCategoryName,setSubCategoryName] = useState("");
  let [subCategoryImage,setSubCategoryImage] = useState("");


  let categorySubmitHandler = (e) => {
    e.preventDefault(); 
      let categoryDetails = {
        mainCategoryName : categoryName,
        mainCategoryCover : categoryImage,
        subCategoryName : subCategoryName,
        subCategoryCover : subCategoryImage,
        // createdAt : new Date(),
        id : uuid()
      }
      createACategoryAndSubCategoryInFirestore(categoryDetails)
  }



    return (
        <form className="categoryFormStyle" onSubmit={categorySubmitHandler}>
            <h1>Add Category Form</h1>
  <div className="form-group">
    <label >Category Name</label>
    <input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="">
    <label >Category Image</label>
    <input onChange={(e) => setCategoryImage(e.target.files[0])}  type="file"/>

  </div>

  <div className="form-group">
    <label>Sub Category Name</label>
    <input value={subCategoryName} onChange={(e) => setSubCategoryName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className="">
    <label >Sub Category Image</label>
    <input  onChange={(e) => setSubCategoryImage(e.target.files[0])} type="file" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


)
}



export default CategoryForm
