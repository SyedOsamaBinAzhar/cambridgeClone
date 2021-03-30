import React, { useEffect, useState } from 'react'
import CategoryForm from '../../AdminComponents/CategoryForm/CategoryForm'
import SubCategoryForm from '../../AdminComponents/SubCategoryForm/SubCategoryForm'

import {connect} from "react-redux"

const Admin = ({}) => {

    return (
        <div>
            <CategoryForm/>
            <SubCategoryForm/>
        </div>
    )
}



export default Admin
