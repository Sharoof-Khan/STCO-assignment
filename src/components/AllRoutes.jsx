import React from 'react'

import {Routes,Route} from 'react-router-dom'
import AboutPage from '../pages/About'
import Cart from '../pages/Cart'
import Homepage from '../pages/Homepage'
import Order from '../pages/Orders'
import Product from '../pages/Product'
import Footer from './Footer'
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
          <Route path='/products/:id' element = {<Product/>} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path='/orders' element={ <Order/>} />
        <Route path='/about' element={ <AboutPage/>} />
          </Routes>
          <Footer/>
    </>
  )
}

export default AllRoutes