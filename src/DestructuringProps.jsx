import React from 'react'
import style from './Destructuring.module.css'

export default function DestructuringProps({Fullname, num, gmail, city1, qualifications, number1, experiences}) {
  return (
    <div className={style.destructure}>
      <h1>DestructuringProps</h1>
      <h2>Name: {Fullname}</h2>
      <h2>Age: {num}</h2>
      <h2>Gmail: {gmail}</h2>
      <h2>City: {city1}</h2>
      <h2>Qualification: {qualifications}</h2>
      <h2>number: {number1}</h2>
      <h2>Experience: {experiences}</h2>
    </div>
  )
}
 