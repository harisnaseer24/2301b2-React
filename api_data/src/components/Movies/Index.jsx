import React from 'react'
import {movieList} from './data'

const Movies = () => {
    console.log(movieList);
  return (
    <div>
     <div className="container">
    <div className="row">
        <button className="btn btn-primary col mx-2">ALL</button>
        <button className="btn btn-outline-primary col mx-2">HORROR</button>
        <button className="btn btn-outline-primary col mx-2">ACTION</button>
        <button className="btn btn-outline-primary col mx-2">ADVENTURE</button>
        <button className="btn btn-outline-primary col mx-2">COMEDY</button>
    </div>
<div className="row">
{
    movieList.map((movie)=>(
<div className="col-lg-3 col-md-6 col-sm-12 my-2">
    <div className="card" style={{height:'550px'}} >
  <img src={movie.poster} className="card-img-top img-fluid" alt="..." style={{width:'auto',height:"300px"}}/>
  <div className="card-body">
    <h5 className="card-title">{movie.title} <span class="badge text-bg-primary">{movie.year}</span>  </h5>
    <p className="card-text">Genre: {movie.genre.join(', ')}</p>
    <p className="card-text">Director: {movie.director}</p>
    <p className="card-text">Rating: {movie.rating}</p>
  </div>
  </div>
</div>

    ))
}
</div>
     </div>
    </div>
  )
}

export default Movies
