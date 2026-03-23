import React from 'react'
import './ConditionalRendering.css'

export default function ConditionalRendering() {
    const user= true
    
  return (
    <div className='Conditional'>
      <h2>Conditional Rendering</h2>
      <h2>Ternary Operator</h2>
      {user?<p>WelcomeBack</p>:<p>PleaseLogin</p>}
      <h2>Logical Operator</h2>
      {user && (
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quis blanditiis eaque facere hic rerum laboriosam dolorem magni 
          repudiandae! Iste consequuntur ipsa molestiae laboriosam aliquid 
          facilis, quas ullam eum nemo rerum!</p>
      )}
      
    </div>
  )
}
