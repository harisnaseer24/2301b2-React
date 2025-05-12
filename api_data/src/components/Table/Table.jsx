import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Table = () => {
    const [myPosts,setMyPosts]=useState([]);

    useEffect(()=>{
        getPosts()
    }, [])


async function  getPosts(){
// const response= await fetch('http://localhost:3000/products');
// const data = await response.json()
// console.log(data);

// console.log(myPosts.length)
// setMyPosts(data)
// console.log(myPosts.length)

//method chaining (2nd way)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {console.log(json)}
    
    
//     )

// multiple request options( GET, POST , PUT, DELETE, PATCH)

axios.get('http://localhost:3000/products')
      .then(response => {
        const data= response.data
        setMyPosts(data); // Handle response data
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle error
      });

    }

  return (
    <div>
      <h1>this is table</h1>
      <table class="table-responsive table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">
    Id
      </th>
      <th scope="col">Title</th>
   
      <th scope="col">Description</th>
      <th scope="col">Price</th>
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
                   <td>{post.price}</td>
                   <td>{post.stock}</td>
                   <td>{post.category}</td>
                   <td>{post.brand}</td>
                   <td><img src={post.images[0]} alt="" className="rounded-circle"style={{width:'50px',}}/></td>
                
                   </tr>
                
            )):<>No data</>
    
     }  

  </tbody>
</table>
     


    </div>
  )
}

export default Table
