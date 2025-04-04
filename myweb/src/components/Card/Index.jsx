import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className="col-lg-4">
    <div class="card" style={{width: "18rem"}}>
    <img src="" class="card-img-top"></img>
    <div class="card-body">
      <h5 class="card-title">{props.name}</h5>
      <p class="card-text">{props.age}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

    </div>
    </>
  )
}
// Set-ExecutionPolicy RemoteSigned