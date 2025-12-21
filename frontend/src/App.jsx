import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home/Index'
import Activities from './pages/Activities/Index'
import Gallery from './pages/Gallery/Index' 
import Contact from './pages/Contact/Index'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Activities' element={<Activities />}></Route>
        <Route path='/Gallery' element={<Gallery />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>

      </Routes>

    </>
  )
}

export default App