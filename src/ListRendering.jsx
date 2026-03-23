import React from 'react'

export default function ListRendering() {
    const fruits=["Apple", "Banana", "Mango", "Orange", "Grapes"]
    const veggie=["Carrot","Onion","Tomato","Cucumber","Potato"]
    const person=[
        {id:1, name:"john"},
        {id:2, name:"hari"},
        {id:3, name:"Dhoni"}]
  return (
    <div className="ListRendering">
      <h2>List Rendering</h2>
      <h2>Example1 Fruit Data</h2>
      <ul>
        {fruits.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
      </ul>
      <h2>Example2 Vegetable Data</h2>
      <ul>
        {veggie.map((name1,index1)=>(
            <li key={index1}>{name1}</li>
        ))}
      </ul>
       <h2>Example with Object</h2>
       {person.length < 0 ? (
        <ul>
        {person.map((name2)=>(
            <li key={name2.id}>{name2.name}</li>
        ))} 
      </ul>
       ) : (
        <p>No data found</p>
       )}
      
      
    </div>
  )
}
