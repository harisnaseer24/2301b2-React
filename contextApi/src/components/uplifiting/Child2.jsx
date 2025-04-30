import React, { useState } from 'react'
const Child2 = ({setGame}) => {
   
  return (
    <div>
      {/*  */}
      <h1>Setting up the game here from child2</h1>
      <input type="text" onChange={(e)=>{setGame(e.target.value)}} />
      
      <hr />
    </div>
  )
}

export default Child2
