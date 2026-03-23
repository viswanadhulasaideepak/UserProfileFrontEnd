import React,{useState} from 'react'

export default function UseStateHook() {
    const [count,setCount]=useState(0)
    const [user,setUser]=useState(true)
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={()=>setCount(count-1)}>Sub</button>
      <button onClick={()=>setCount(count*2)}>Mul</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <nav>
        {user ? <p>WelcomeBack....</p>: <p>PleaseLogin</p>}
        {user && (
            <p>Glad to see you</p>)}
            <button onClick={()=>setUser(!user)}> Sign {user ? "Out" : "In"} </button>

      </nav>
    </div>
  )
}
