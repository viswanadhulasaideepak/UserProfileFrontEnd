import React, { useEffect, useState } from 'react'

export default function CallBackChild({getItems}) {
    const[item,setItem]=useState([])
    console.log("Updating Items");
    
    useEffect(()=>{
        setItem(getItems)
    },[getItems])
  return (
    <div>
      {item.map(item=>
        <div key={item}>{item}</div>
      )}
    </div>
  )
}
