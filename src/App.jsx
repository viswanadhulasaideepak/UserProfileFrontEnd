import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Menu from './FinalComponents/Menu'
import Home from './FinalComponents/Home'
import About from './FinalComponents/About'
import Contact from './FinalComponents/Contact'
import { CartProvider } from './assets/Context/ContextCart'
import Cart from './assets/Context/Cart'
import FoodDetails from './FinalComponents/FoodDetails'
import './index.css'

//Import
export default function App() {
  //Functionality
  return (
    <div>
      <CartProvider> 
        <BrowserRouter>
      <div className='main'>
        <Link to={'/Home'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Menu'}>Menu</Link>
        <Link to={'/Contact'}>Contact</Link>
        <Link to={'/Cart'}>Cart</Link>
      </div>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu />} />
          <Route path=":id" element={<FoodDetails />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}
