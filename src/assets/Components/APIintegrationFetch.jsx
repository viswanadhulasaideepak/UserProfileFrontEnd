import React, { useEffect, useState } from 'react'
export default function APIintegrationFetch() {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState()
    useEffect(()=>{
        async function fetchuser() {
            try{
                setLoading(true)
                const response= await fetch("https://jsonplaceholder.typicode.com/users") 
                if(!response.ok){
                    throw new Error("Failed to fetch data");    
                }
                const data= await response.json()
                setUser(data)
            }catch(err){
                setError(err.message)  
            }finally{
                setLoading(false)
            }  
        }
        fetchuser()
    },[])
    if(loading)
        return <p>Loading.....</p>
        if(error)  
            return <p>Error:{error}</p>
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        {user.map((curE)=>(
            <li key={curE.id}>{curE.name}</li>
        ))}
      </ul>
    </div>
  )
}
