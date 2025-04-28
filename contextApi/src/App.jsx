import Navbar from "./components/navbar/Navbar"
import ProductCard from "./components/productCard/productCard"
import { useState } from "react";
import { CartData } from "./DataContext";

function App() {
const [mycart,setMyCart]=useState([]);

const AddtoCart=()=>{

console.log(mycart)
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
    <>
    <h1>Context API</h1>
    {/* <ProductCard/> */}
    <CartData.Provider value={mycart}>
    <Navbar/>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          
          <button className="btn btn-primary" onClick={()=>{AddtoCart()}}>
    
          Add to Cart 
          </button>
        </div>
      </div>
      
          </CartData.Provider>
    </>
  )
}

export default App
