import React from 'react'
import { useContext } from 'react'
import { use } from 'react'
import { CartData } from '../../DataContext'
import { useState } from 'react'

const ProductCard = () => {
    const cart = useContext(CartData);
    const [mycart,setMyCart]=useState([]);

const AddtoCart=()=>{

setMyCart([...cart])

let productDetails={
    id:1,
    name:"Product 1",
    price:100,
    quantity:1
}


setMyCart([...mycart,productDetails]);
console.log(mycart)

}



  return (
    <div className="card" style={{ width: "18rem" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </p>
        <CartData.Provider value={mycart}>
      
      <button className="btn btn-primary" onClick={()=>{AddtoCart()}}>

      Add to Cart 
      </button>
      </CartData.Provider>
    </div>
  </div>
  
  )
}

export default ProductCard
