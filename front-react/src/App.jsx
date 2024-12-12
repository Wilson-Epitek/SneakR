import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './component/Home'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
import Footer from './component/Footer'

const App=()=> {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
   </Router>
  )
}

export default App;
