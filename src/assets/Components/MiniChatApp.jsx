import React, { useState } from 'react'

export default function MiniChatApp() {
    const[input,setInput]=useState("")
    const[chat,setChat]=useState([])

    const handlesendbtn=()=>{
        if(input.trim()==="")
          return
        setChat([
          ...chat,
          input
        ])
        setInput("")
    }

  return (
    <div className='main'>
      <h1>Mini Chat Application</h1>
      <div className='sub1'>
        <input type="text" value={input} placeholder='Type here'
        onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handlesendbtn}>Send</button>
        
      </div>
      <div className='sub2'>
       {chat.map((curE,ind)=>(
          <p key={ind}>{curE}</p>
        ))}
      </div>
    </div>
  )
}
