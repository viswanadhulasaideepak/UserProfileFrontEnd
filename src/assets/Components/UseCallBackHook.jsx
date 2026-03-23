import React, { useState } from 'react'
import ChildCallBack from './ChildCallBack'

export default function UseCallBackHook() {
    //const[count,setCount]=useState(0)
    //const handleClick=()=>{
    //    console.log("clicked");
        
    // }
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        console.log("Hello Everyone");
        
    }
  return (
    <div>
    {/*<h1>Count:{count}</h1>
    <button onClick={handleClick}>Click</button>  
    <button onClick={()=>setCount(count + 1)}>Increment</button>*/}

    <h1>Count:{count}</h1>
    <ChildCallBack onclick={handleClick}/>
    <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}
