import React from 'react'
import Category from '../category/Category'
import './categoryList.scss'

function CategoryList({categories}) {
  return (
    <div className="categories-container">
      {categories.map((category)=>{
        return  <Category key={category.id} category={category}/>
      })}
    </div>
  )
}

export default CategoryList
