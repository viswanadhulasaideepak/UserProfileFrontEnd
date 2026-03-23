import React from 'react'
import APIintegrationFetch from '../Components/APIintegrationFetch'

export default function Movies() {
  return (
    <div>
      <h1>Movies</h1><br />
      <p>The platform provides a large collection of movies from Bollywood, Hollywood, and regional industries. 
        On Disney+ Hotstar, viewers can enjoy action, comedy, romance, thriller, and family films in multiple languages.</p>
        <APIintegrationFetch />
    </div>
  )
}

