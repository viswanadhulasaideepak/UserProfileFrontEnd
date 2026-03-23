import React from 'react'
import Good  from './Good'

export default function Greeting(props) {
  return (
    <div>
      <h1 style={{color: "crimson", backgroundColor:"red" }}>Greeting</h1>
      <h2>{props.Firstname}  {props.aged}</h2>
      <Good /> 
    </div>
  )
}
