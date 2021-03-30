import React from 'react'
import "./SubCategoryForm.css"
const SubCategoryForm = () => {
    return (
        <div>
            <form>
                <h1>Add Category Form</h1>
                <div className="flex">
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sub Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                </div>


                <div class="form-group">
    <label for="exampleInputEmail1">Enter Price</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Enter Product Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">Quantity</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Color</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Fabric</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="custom-file">
    <label>Select PRoduct Image</label>
  <input type="file" class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>

<button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}



export default SubCategoryForm
