import React from 'react'
import { useRef } from 'react'
import './App.css'

const Home = () => {
// const nameRef= useRef(null);
// const handleName=()=>{
//   console.log("handleName invoke")
//   console.log(nameRef.current.value)
// nameRef.current.placeholder="enter password";
// nameRef.current.className="myName";
// }
const ageRef=useRef(null);
const handleSubmit=(e)=>{
e.preventDefault();
alert(ageRef.current.value)
ageRef.current.value="";
}
  return (
    <div>
      {/* <h1>Use Ref</h1>
      <input type="text" placeholder='enter a name' ref={nameRef}  id="name" />
      <button onClick={()=>{
        handleName()
      }}>Add</button> */}
      {/* <h1>Controlled component</h1>  */}
      {/* inputs are handled through States */}
      <h1>Uncontrolled component</h1> 
      {/* inputs are handled through dom or useRef */}
      <form action="" onSubmit={(e)=>{ handleSubmit(e)}}>
        <input type="number" ref={ageRef} id='age' placeholder='Enter your age' />
        <button type='submit'>Add</button>
      </form>


    </div>
  )
}

export default Home
