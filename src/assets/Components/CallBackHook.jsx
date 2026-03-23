import React, { useCallback, useId, useState } from 'react'
import CallBackChild from './CallBackChild'

export default function CallBackHook() {
    const [num,setNum]=useState(1)
    const [light,setLight]=useState(true)

    //const getItems=()=>{
    //    return [num,num+1,num+2,num+3,num+4]
    //}
    const name=useId()
    const email=useId()
    const getItems=useCallback(()=>{
        return [num,num+1,num+2,num+3,num+4,num+5]
    },[num])
    const theme={
        backgroundColor: light? "#fff" : "#333",
        color: light? "#333" : "#fff",
        paddingTop: "55px", borderRadius:"13px", width:"700px", height:"100vh", textAlign:"start",
        fontSize:"30px",color:"teal",fontWeight:"bold",
    }
  return (
    <div style={theme}>
      <h1>UseCallBack Hook</h1>
      <label htmlFor={name}>Name:
        <input type="text" id='name' placeholder='Enter name' />
      </label><br />
      <label htmlFor={email}>Email:
        <input type="email" id='email' placeholder='Enter email' />
      </label><br />
      <label htmlFor="Number">Number:
        <input type="number" value={num}
      onChange={(e)=>setNum(parseInt(e.target.value))} />
      </label><br />
      <button onClick={()=>setLight(!light)}>Switch to {light? "Black" : "White"}</button>
      <CallBackChild getItems={getItems} />
    </div>
  )
}
