import React from 'react'

export default function Good() {
  const liquid=["Tea","Milk","Coffee","Water"]
  return (
    <div className="Good">
      <h1>Good Evening</h1>
      <ul>
        {liquid.map((form)=>(
          <li>{form}</li>
        ))}
      </ul>
    </div>
  )
}
