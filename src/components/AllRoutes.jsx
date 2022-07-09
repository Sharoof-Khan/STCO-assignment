import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Navbar from './Navbar'
// import Cart from '../pages/Cart'
// import {HomePage} from '../pages/HomePage'
// import Order from '../pages/Orders'
// import Product from '../pages/Product'
// import Products from '../pages/Products'
// import WithSubnavigation from './Navbar'

const AllRoutes = () => {
  return (
    <>
          {/* <WithSubnavigation /> */}
          <Navbar/>
      <Routes>
          <Route path='/' element = { <Homepage/>} />
          {/* <Route path='/products' element = { 'ProductPAge'}  /> */}
          <Route path='/products/:id' element = {'SIngle'} />
        <Route path='/cart' element={ "Cart"} />
        <Route path='/orders' element={ "Orders"} />
        <Route path='/about' element={ "About"} />
    </Routes>
    </>
  )
}

export default AllRoutes