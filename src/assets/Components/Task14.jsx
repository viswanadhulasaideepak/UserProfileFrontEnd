import React, { useState } from 'react'
import './Task14.css'
  
export default function Task14() {
    const [input,setInput]=useState("")
    const [task,setTask]=useState([])
    const addtask=()=>{
        setTask([
            ...input,
            task,
        ])
        setInput("")
    }
  return (
    <div className='main'>
      <h1>To-Do List</h1>
      <div>
        <input type="text" value={input} placeholder='Enter the task' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={addtask}>Add</button>
      </div>
      <table>
        <thead>
            <tr>
                <th>SerialNo</th>
                <th>Task</th>
            </tr>
        </thead>
        <tbody>
            {task.map((curE,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{curE}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
