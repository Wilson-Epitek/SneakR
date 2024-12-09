import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import home from './component/home'
import navbar from './component/navbar'
import login from './component/login'
import register from './component/register'

const App=()=> {
  return (
    <Router>
      <navbar/>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/login' element={<login/>} />
        <Route path='/register' element={<register/>} />
      </Routes>
   </Router>
  )
}

export default App;
