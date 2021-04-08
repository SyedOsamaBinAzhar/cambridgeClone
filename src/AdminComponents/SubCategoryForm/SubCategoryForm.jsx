import React, { useEffect, useState } from 'react'
import "./SubCategoryForm.css"
import {connect} from "react-redux"
import {fetchMainCategoriesFromFirestore} from "../../Redux/Categories/CategoriesActions"
import { createANewProductInFirestore } from '../../FirebaseUtilities/FirebaseUtilities'
import { serverTimestamp } from '../../Firebase/Firebase'

const SubCategoryForm = ({fetchMainCategoriesFromFirestore}) => {

  var [category,setCategory] = useState("");
  let [subCategory,setSubCategory] = useState("");
  let [productName,setProductName] = useState("");
  let [price,setPrice] = useState(""); 
  let [quantity,setQuantity] = useState(""); 
  let [description,setDescription] = useState(""); 
  let [color,setColor] = useState(""); 
  let [fabric,setFabric] = useState("");
  let [image,setImage] = useState(""); 




  // useEffect(async () => {
  //   var b = await fetchMainCategoriesFromFirestore();
  //   // console.log(b)

    
  //   return () => {
  //   }
  // }, [])

  var formSubmitHandler = (e) => {
    e.preventDefault();
    var productObj = {
      name: productName,
      price: price,
      description: description,
      category: category,
      subCategory: subCategory,
      fabric: fabric,
      quantity: quantity,
      image: image.name,
      color: color,
      productId: "",
      createdAt: serverTimestamp()
    }
    createANewProductInFirestore(productObj)

  }


    return (
            <form className="addSubCategForm" onSubmit={formSubmitHandler}>
                <h1>Add Product Form</h1>
                <div className="flex">
                {/* <div className="dropdown">
 
  <select value={category} name="cars" id="cars">
  <option className="btn btn-secondary" value="volvo">Formal Shirts</option>
  <option >Casual Shirts</option>
</select>
</div> */}

{/* <div className="dropdown">

<select value={subCategory}>
  <option  className="btn btn-secondary" value="volvo">check</option>
  <option value="saab">collar</option>
</select>
 
</div> */}
                </div>


                <div className="form-group">
    <label >Category Name</label>
    <input value={category} onChange={(e) => setCategory(e.target.value)}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>


  <div className="form-group">
    <label >Sub Category Name</label>
    <input value={subCategory} onChange={(e) => setSubCategory(e.target.value)}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label >Product Name</label>
    <input value={productName} onChange={(e) => setProductName(e.target.value)}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label >Enter Price</label>
    <input value={price} onChange={(e) => setPrice(e.target.value)}   className="form-control"  aria-describedby="emailHelp"/>
  </div>



  <div className="form-group">
    <label >Quantity</label>
    <input value={quantity} onChange={(e) => setQuantity(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label >Description</label>
    <input value = {description} onChange={(e) => setDescription(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label >Color</label>
    <input value={color} onChange={(e) => setColor(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label>Fabric</label>
    <input value={fabric} onChange={(e) => setFabric(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div >
    <label>Select PRoduct Image</label>
  <input  onChange={(e) => setImage(e.target.files[0])} type="file"/>
  <label className="custom-file-label" >Choose file</label>
</div>

<button type="submit" className="btn btn-dark">Submit</button>
            </form>
    )
}

var actions ={
  fetchMainCategoriesFromFirestore
}

export default connect(null,actions)(SubCategoryForm)
