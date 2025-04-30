import Navbar from "./components/navbar/Navbar"
import ProductCard from "./components/productCard/productCard"
import { useState } from "react";
import { CartData } from "./DataContext";
import Child2 from "./components/uplifiting/Child2";
import Child1 from "./components/uplifiting/Child1";

function App() {

// const [mycart,setMyCart]=useState([]);

// const AddtoCart=()=>{

// console.log(mycart)
// let productDetails={
//     id:1,
//     name:"Product 1",
//     price:100,
//     quantity:1
// }

// setMyCart([...mycart,productDetails]);
// console.log(mycart)

// }

//Derived State work 30-4-2025 (topic 1)
// const [user,setUser]=useState("");
// const [users,setUsers]=useState([]);

// const totalUsers=users.length;

// const lastUser=users[users.length-1];//users[4]

// const handleAddUser=()=>{
//   setUsers([...users,user]);
//   console.log(users)
// }
//State uplifting work 30-4-2025 (topic 2)
const [game, setGame]=useState("");

  return (
    <>
    {/* <h1>Context API</h1>
    <CartData.Provider value={mycart} >
    <Navbar/>
    {/* <ProductCard/> */}
      {/* <div className="card" style={{ width: "18rem" }}>
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
      
          </CartData.Provider> */} 

          {/* <h1>Derived State</h1>
          {/* derived state */}
          {/* <h1>Total Users: {totalUsers}</h1>
          <h1>Last User: {lastUser}</h1>

          <input type="text" onChange={(e)=>{setUser(e.target.value)}} />
          <button onClick={handleAddUser}>Add User</button> */}

       
{/* {
  users.map((user,index)=>{
          return(
            <div key={index}>
              <h1>{user}</h1>
            </div>
          )
        })
      }  */}
{/* State Uplifting */}
      <Child2 setGame={setGame}/>
      <Child1 gamefromParent={game}/>

    </>
  )
}

export default App
