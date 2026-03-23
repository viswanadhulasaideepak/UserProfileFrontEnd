import React, { useState,useEffect } from 'react'

export default function UseEffectAPI() {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json()) // json format  into js format or raw data to object
        .then((data)=>{
            setUser(data)
            setLoading(false)
        })
    },[])
  return (
    <div className="card">
      <h1>User Data</h1>
      {loading ? ( 
        <p>Loading...</p>
      ) : (
        <ul>
        {user.map(user=>(
            <li key={user.id}>
                <li>Name   : {user.name}</li> 
                <li>Email  : {user.email}</li>    
                <li>Phone  : {user.phone}</li>  
                <li>Company: {user.website}</li><br></br></li>
            ))}
        </ul>
      )}
    </div>
  )
}
