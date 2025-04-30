import React from 'react'

const Child1 = ({gamefromParent}) => {
  return (
    <div>
        <h1>Displaying the game here in child1</h1>
      <h1>{gamefromParent}</h1>
    </div>
  )
}

export default Child1
