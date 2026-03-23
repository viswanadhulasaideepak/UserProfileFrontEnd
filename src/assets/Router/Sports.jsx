import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Sports() {
  return (
    <div>
      <h1>Sports</h1><br />
      <p>
        Sports lovers can watch live matches and highlights on Disney+ Hotstar. 
        It broadcasts major sports events like cricket tournaments, football leagues, and other international competitions.
      </p>
      <div className='nested-head'>
        <Link to={"Cricket"}>Cricket</Link>
        <Link to={"Kabaddi"}>Kabaddi</Link>
        <Link to={"Football"}>FootBall</Link>
        <Outlet/>
      </div>
    </div>
  )
}
