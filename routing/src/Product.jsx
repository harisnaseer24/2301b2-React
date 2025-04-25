import React from 'react'
import { Outlet,NavLink } from 'react-router'

const Product = () => {
  return (
    <div>
      <h1>this is product</h1>
       <NavLink to="feedback">feedback</NavLink> 
       <NavLink to="/">Home</NavLink> 
     <Outlet/>
    </div>
  )
}

export default Product
