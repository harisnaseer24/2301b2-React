import React, { useState } from "react";
const Test = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodo] = useState([]);

  function addTask() {
    //"hi","hello", "i want to give assignment as eidi to 2301B2."
    let newTodo= [...todoList,task]
    setTodo(newTodo);
    setTask("");
    // easy way
    // setTodo([...todoList,task])
    console.log(todoList)
  }
  function deleteTask(index){
    console.log(index)
    let newTodo =todoList.filter((task,j)=>{
    return j !==index;
    })
    console.log(newTodo);
    setTodo(newTodo)
  }
  return (
    //Controlled Component
    <div className="container mt-5">
        <h1 className="display-1 text-center text-success">Todo list</h1>
      <input className="form-control my-2"
        type="text"
        value={task}
        id="task"
        onChange={(e)=>{setTask(e.target.value)}}
        placeholder="Enter A Task todo"
      />
      <button className="btn btn-success" onClick={addTask}>Submit</button>
<div className="container">
<h1 className="display-4 text-center text-success my-2">Task Remaining</h1>
</div>
      {
          todoList.length > 0 ?
          todoList.map((task,index)=>{
              return (<>
              <div key={index} className="d-flex justify-content-between align-items-center">
                <p>{index+1} ) {task}</p>
                <div>

                <button className="btn btn-outline-success mx-2" >Edit</button>
                <button className="btn btn-outline-danger mx-2" onClick={()=>{
                    deleteTask(index)
                }}>  Delete</button>
                </div>
      </div>
                </>
            )
          
         })
         :<h2 className="display-5 text-center text-secondary my-2">Yoohoo..! All done</h2> 


      }
    </div>
  );
};

export default Test;
//   const [name, setName] = useState("haris");
//   const [email, setEmail] = useState("abc@gmail.com");

 {/* <input type="text" value={name}onChange={(event)=>{setName(event.target.value)}} placeholder='Enter name' />
      <input type="text" value={email}onChange={(event)=>{setEmail(event.target.value)}} placeholder='Enter email' /> */}
      {/* <button onClick={getData}>Submit</button> */}

      {/* <h1>Form Data</h1>
      <p>{name}</p>
      <p>{email}</p> */}