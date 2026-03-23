import React from 'react'
import ContextFields from './ContextFields'
import { Move } from '../../App'
import { useContext } from 'react'

export default function ContextForm() {
  const {mode}=useContext(Move)
  return (
    <div className={mode}>
      <h1>Application Form</h1>
      <ContextFields />
    </div>
  )
}
