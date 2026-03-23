import React,{useState} from 'react'

export default function DarkMode() {
    const [dark,setDark]= useState(false)
  return (
    <div 
    style={{
        color: dark ? "#fff" : "#333",
        backgroundColor: dark ? "#333": "#fff",
        padding: "30px"
    }}
    >
        <button onClick={()=>setDark(!dark)}>Switch to {dark ? "light" :"dark"} mode</button>
        <p>you are in {dark? "dark":"light"} mode</p>
    </div>
  )
}
