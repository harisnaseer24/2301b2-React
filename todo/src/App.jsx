import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from './components/Card/Index'
import Parent from './components/Parent/Index'
import Bulb from './bulb'
import Todo from './components/todo'
import Test from './components/Test/Test'

function App() {

const [count,setCount]=useState(1);
let [name,setName]= useState("haris");

let [fruits,setFruit]= useState(["apple","banana","mango","orange"]);


  let counter=0;
  let incCounter=()=>{
    counter++;
    console.log(counter)
  }

  let incStateCounter=()=>{
    setCount(count+1)
  }

  return (
  <>
{/* 
  <h1>{ count}</h1>
  <button onClick={()=>{setCount(count-1)}}>Change state counter</button>
  <button onClick={incStateCounter}>Change state counter</button>

<h1>{name}</h1>
<button onClick={()=>{setName("Owais")}}>Change name to Owais</button> */}



  {/* <h1>{counter}</h1>
  <button onClick={incCounter}>counter</button> */}
{/* <Parent>

  <Card name="haris" age={25}/>
</Parent> */}


   {/* <Card  age={45}/>
   <Card name="haris" age={25}/> */}
   {/* <Bulb/> */}
   {/* <Todo/> */}

<Test/>


  </>
  )
}

export default App
