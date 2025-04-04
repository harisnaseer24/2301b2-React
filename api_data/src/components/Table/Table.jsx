import React, { useState,useEffect } from 'react'

const Table = () => {
    const [myPosts,setMyPosts]=useState([]);

    useEffect(()=>{
        getPosts()
    }, [])


async function  getPosts(){
const response= await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json()
console.log(data);

// console.log(myPosts.length)
setMyPosts(data)
// console.log(myPosts.length)

//method chaining (2nd way)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {console.log(json)}
    
    
//     )

    }

  return (
    <div>
      <h1>this is table</h1>
      <table class="table-responsive table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">
    Post ID
      </th>
      <th scope="col">Title</th>
   
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    
     {
 myPosts.length>0?
            myPosts.map((post)=>(
               
              

                   <tr key={post.id} >
                   <th scope="row" >{post.id}</th>
                   <td>{post.title}</td>
                   <td>{post.body}</td>
                   </tr>
                
            )):<>No data</>
    
     }  

  </tbody>
</table>
     


    </div>
  )
}

export default Table
