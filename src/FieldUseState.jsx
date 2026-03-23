import React,{useState} from 'react'

export default function FieldUseState() {
    const[name,setName]=useState("Deepak")
    console.log(name);
    const [isChecked,setIsChecked]=useState(true)
    
  return (
    <div>
      <h2>Controlled Text</h2>
      <input type="text" 
      value={name}
      onChange={(e)=>setName(e.target.value)} />

      <h2>Check Box</h2>
      <input type="checkbox" 
      checked={isChecked}
      onChange={(e)=>setIsChecked(e.target.checked)} />
    </div>
  )
}
