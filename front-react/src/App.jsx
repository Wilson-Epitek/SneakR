import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './component/Home'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
import Footer from './component/Footer'
import Wishlist from './component/Wishlist'
import Profil from './component/Profil'
const App=()=> {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
        <Route path='/Profil' element={<Profil/>} />
      </Routes>
      <Footer/>
   </Router>
  )
}

export default App;
