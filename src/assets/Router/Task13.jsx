import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Task13.css'

export default function Task13() {
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(obj=>obj.json())
        .then((data)=>{
            setUser(data)
        })
    },[])
  return (
    <div>
      <h1>User Names</h1>
      <ul>
            {user.map((CurE,index)=>(
                <li key={CurE.id}>
                    <Link to={`/Task13/${CurE.id}`}>
                    {CurE.name}
                    </Link>
                </li>
            ))}
      </ul>
      
    </div>
  )
}
