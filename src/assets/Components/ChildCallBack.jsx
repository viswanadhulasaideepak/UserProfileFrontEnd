import React from 'react'

export default function ChildCallBack({onclick}) {
    console.log("Child Render");
    
  return (
    <div>
      <button onClick={onclick}>Click</button>
    </div>
  )
}
