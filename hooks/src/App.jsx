import { useFormStatus } from 'react-dom'

import Test from "./useTransition"
import { useId } from 'react'


const handleSubmit=async()=>{
await
  new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("form submitted");
     resolve();
    },2000)
  })
}

function MyForm(){

  let uniquiId= useId();
  const {pending} = useFormStatus();
  return(
<div>
    <input type="text"  placeholder='enter name' id={"name"+uniquiId}/>
    <label htmlFor={"name"+uniquiId}>Name</label>

<br />
<input type="password"  placeholder='enter pasword' id={"pass"+uniquiId}/>
<label htmlFor={"pass"+uniquiId}>Password</label>
<br />
<button disabled={pending} >Submit</button>
  </div>
  
  )
}

function App() {


  return (
    <>
    <h1>Use Form Status Hook</h1>
<form action={handleSubmit}>
<MyForm/>
<MyForm/>
<MyForm/>
</form>

    <h1>Use Transition Hook</h1>
    <Test/>
     
    </>
  )
}

export default App
