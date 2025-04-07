import React, { useState } from 'react'
const ProductForm = () => {
const brands=[
    {id:1,name:'Nike'},
    {id:2,name:'Adidas'},
    {id:3,name:'Puma'},
    {id:4,name:'Reebok'},
    {id:5,name:'Under Armour'},
    {id:6,name:'New Balance'},
    {id:7,name:'Asics'},
    {id:8,name:'Saucony'},
    {id:9,name:'Brooks'},
    {id:10,name:'Hoka One One'}
]
const [product,setProduct]= useState({});
const [showProduct,setshowProduct]= useState(false)
const getProductData=()=>{
    alert('Product data submitted successfully!')
    setshowProduct(true)    
}
  return (
    <div className="container">
        <h1 className='text-center display-3'>Enter Product Details</h1>
        <form action="" onSubmit={(event)=>{
event.preventDefault();
getProductData();
        }}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={
                    (e)=>{
                        setProduct({...product, name:e.target.value});
                } 
                    } aria-describedby="emailHelp"/>
             
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Product Description</label>
                <input type="text" className="form-control" id="exampleInputEmail1"  onChange={
                    (e)=>{   
                        setProduct({...product, desc:e.target.value}); 
                }
                    } aria-describedby="emailHelp"/>
              
            </div>
            <div className="mb-3">
                <select name="brand" id="brand" className='form-select'  onChange={
                    (e)=>{
                        
                        setProduct({...product, brand:e.target.value});
                        console.log(product)
                }} aria-label="Default select example">
                    <option value="" className='' selected disabled>Choose brand</option>
                   {
                    brands.map((brand)=>(
                        <option value={brand.id} key={brand.id}>{brand.name}</option>
                    ))
                   }

                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"  >Product Price</label>
                <input type="number" className="form-control" id="exampleInputPassword1" onChange={
                    (e)=>{
                        
                        setProduct({...product, price:e.target.value});
                        console.log(product)
                }}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

       {showProduct?
        <div className="container">
        <h1>Product Details</h1>
        <h2>{product.name}</h2>
        <h2>Rs. {product.price}</h2>
        <h2>{product.desc}</h2>
        <h2>{product.brand}</h2>
    </div>:
    <h3>Enter details first</h3>
}
    </div>
  )
}

export default ProductForm
