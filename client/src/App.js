import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Products/Home'
import Admin from './Products/Admin'
import Products from './Products/Products'

const App = () => {
  return (
    <div>
    <Router>
             <Navbar/>
    <Routes>
      <Route path='/index' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
    </Routes>
    </Router>
    
    </div>
  )
}

export default App