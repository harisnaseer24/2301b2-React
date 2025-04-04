import React from 'react'
import './User.css'

export default function User(props){
    return (

<>

<div className="usercard">
    <h1>Hello this is {props.username}</h1>
</div>

</>

    )
}