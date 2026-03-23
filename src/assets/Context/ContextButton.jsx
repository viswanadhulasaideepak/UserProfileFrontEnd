import React, { useContext } from 'react'
import { Move } from '../../App'

export default function ContextButton() {
  const {mode,setMode}=useContext(Move)
  return (
    <div>
      <button onClick={()=>setMode(mode==="light"? "black": "light")}>Theme--{mode}</button>
    </div>
  )
}
