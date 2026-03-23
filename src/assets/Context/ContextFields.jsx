import React from 'react'
import ContextButton from './ContextButton'
import { Move } from '../../App'
import { useContext } from 'react'

export default function ContextFields() {
  const {data}=useContext(Move)
  return (
    <div>
      Name: <input type="text" value={data.name} /><br></br>
      Age: <input type="text" value={data.age} /><br></br>
      Role: <input type="text" value={data.Role} /><br></br>
      Team: <input type="text" value={data.team} />
      <ContextButton />
    </div>
  )
}
