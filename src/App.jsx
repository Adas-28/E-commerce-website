import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Main from './component/Admin/Main'
import Product from './component/Admin/pages/Product'
import AddProduct from './component/Admin/pages/AddProduct'
import LoginA from './component/Admin/pages/Login'
import Order from './component/Admin/pages/Order'


import Productp from './component/User/Productp'
import Login from './component/User/Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/User/Login' element={<Login/>}></Route>
          <Route path='/User/Productp' element={<Productp/>}></Route>
          <Route path='/Admin' element={<Main/>}></Route>
          <Route path='/pages/Product' element={<Product/>}></Route>
          <Route path='/pages/AddProduct' element={<AddProduct/>}></Route>
          <Route path='/pages/Login' element={<LoginA/>}></Route>
          <Route path='/pages/Order' element={<Order/>}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default App
