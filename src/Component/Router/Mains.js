import React from 'react'
import Home from './All/Home'
import Services from './All/Services'
import Contact from './All/Contact'
import { Routes,Route,Link } from 'react-router-dom'

const Mains = () => {
  return (
    <div>
        <Link to="/">Home </Link>
        <Link to="services">Services </Link>
        <Link to="contact">contact  </Link>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/service' element={<Services/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
    </Routes>
  </div>
  )
}

export default Mains
