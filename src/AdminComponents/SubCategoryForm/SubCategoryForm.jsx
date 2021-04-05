import React, { useEffect } from 'react'
import "./SubCategoryForm.css"
import {connect} from "react-redux"
import {fetchMainCategoriesFromFirestore} from "../../Redux/Categories/CategoriesActions"

const SubCategoryForm = ({fetchMainCategoriesFromFirestore}) => {

  useEffect(() => {
    fetchMainCategoriesFromFirestore();
    // console.log(uniqueCategories)

    
    return () => {
    }
  }, [])



    return (
        <div>
            <form className="addSubCategForm">
                <h1>Add Product Form</h1>
                <div className="flex">
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Category
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sub Category
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                </div>



                <div className="form-group">
    <label >Enter Product Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

                <div className="form-group">
    <label >Enter Price</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>



  <div className="form-group">
    <label >Quantity</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label >Description</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label >Color</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="form-group">
    <label>Fabric</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="custom-file">
    <label>Select PRoduct Image</label>
  <input type="file" className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" >Choose file</label>
</div>

<button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

var actions ={
  fetchMainCategoriesFromFirestore

}

export default connect(null,actions)(SubCategoryForm)
