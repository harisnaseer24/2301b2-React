import React, { useState,useEffect } from 'react'

const Table = () => {
    const [myPosts,setMyPosts]=useState([]);

    useEffect(()=>{
        getPosts()
    }, [])


async function  getPosts(){
const response= await fetch('https://67f5f969913986b16fa619c2.mockapi.io/movies');
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
   Movie Id
      </th>
      <th scope="col">Title</th>
   
      <th scope="col">Description</th>
      <th scope="col">Genre</th>
      <th scope="col">Year</th>
      <th scope="col">Rating</th>
      <th scope="col">Director</th>
      <th scope="col">Poster</th>
  
    </tr>
  </thead>
  <tbody>
    
     {
 myPosts.length>0?
            myPosts.map((post)=>(
               
              

                   <tr key={post.id} >
                   <th scope="row" >{post.id}</th>
                   <td >{post.title}</td>
                   <td>{post.description}</td>
                   <td>{post.genre}</td>
                   <td>{post.year}</td>
                   <td>{post.rating}</td>
                   <td>{post.director}</td>
                   <td><img src={post.poster} alt="" className="rounded-circle"style={{width:'50px',}}/></td>
                
                   </tr>
                
            )):<>No data</>
    
     }  

  </tbody>
</table>
     


    </div>
  )
}

export default Table
