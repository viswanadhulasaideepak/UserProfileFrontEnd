import React, { useState } from 'react'

export default function MultipleFields() {
    const [formData,setFormData]=useState({
        name:"",
        id: "",
        email:"",
        age:""
    });
    const handleInput=(e)=>{
      const {name,value}=e.target
      setFormData({
        ...formData,
        [name]:value,
        //[e.target.name] : e.target.value
      });
    }
    const[error,setError]=useState("")
  return (
    <div>
      <h2>Multiple Fields</h2>
      <input
       type="text" name="name" value={formData.name} 
       onChange={handleInput} placeholder='Enter your name:'/><br></br>

      <input
       type="text" name="id" value={formData.id}
       onChange={handleInput} placeholder="Enter your id:"/><br></br>

      <input
       type="email" name="email" value={formData.email}
       onChange={handleInput} placeholder="Enter your email:"/><br></br>

      <input
       type="number" name="age" value={formData.age}
       onChange={handleInput} placeholder="Enter your age:"/>
    </div>
  )
}
