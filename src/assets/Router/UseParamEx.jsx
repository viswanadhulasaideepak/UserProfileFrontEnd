import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'

export default function UseParamEx() {
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(obj=>obj.json())
        .then(data=>{
            setUser(data)
        })
    },[user])
  return (
    <div>
      <h1>User Name List</h1>
      <ul>
        {user.map((curE)=>(
            <li key={curE.id}>
             <Link to={`/Blog/${curE.email}`}>
               {curE.id}.{curE.name}
             </Link>  
            </li>
        ))}
      </ul>
      
    </div>
  )
}
