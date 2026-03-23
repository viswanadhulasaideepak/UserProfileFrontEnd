import React, {useState} from 'react'

export default function PracTog() {
    const [showPassword,setShowPassword]=useState(false)
    const [password,setPassword]=useState("")

    const togglePassword=()=>{
        setShowPassword(!showPassword)
    }

  return (
    <div className='main'>
        <h1>Show / Hide Password</h1>
        <div className='input-box'>
            <input type={showPassword ? "text" : "password"} placeholder='Enter your password' 
            value= {password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={togglePassword}>
                {showPassword? "Hide Password" : "Show Password"}
            </button>
        </div>
    </div>
  )
}
