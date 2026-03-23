import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Task13.css'

export default function ParamHook() {
    const {id}=useParams()
    const [details,setDetails]=useState()
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(obj=>obj.json())
      .then((data)=>{
        setDetails(data)
      })
    },[id])
    if(!details)
      return <h2>Loading.......</h2>
  return (
    <div>
      <h1>User Details</h1>
      <p>Name:{details.name}</p>
      <p>UserName:{details.username}</p>
      <p>Email:{details.email}</p>
      <p>Website:{details.website}</p>
      <p>Phone:{details.phone}</p>
      <p>Company Name:{details.companyname}</p>
      <p>Address(Street):{details.address.street}</p>
      <p>City:{details.address.city}</p>
      <p>Zip Code:{details.address.zipcode}</p>
      <p>Latitude:{details.address.geo.lat}</p>
      <p>Longitude:{details.address.geo.lng}</p>
    </div>
  )
}
