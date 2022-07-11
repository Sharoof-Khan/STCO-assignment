import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
// import {getCartTotal} from '../../redux/reducer/reducer'
import {getCartTotal} from '../redux/reducer'


const Subtotal = ({totalPrice}) => {

    const cartItems = useSelector(state => state.ecommerceData.cart)
    // const cartItems = cartStorage.curr


    
    // console.log(cartItems,'crtItem');
  return (
      <div className='subtotal'>
          {/* Subtotal */}
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                          {/* SubTotal (0 items): */}
                          Total ({ cartItems?.length}items)

                          <strong>{value}</strong>
                      </p>

                  
                  </>
              )}
              decimalScale={2}
            //   value={getCartTotal(cartItems)}
              value={Math.ceil(totalPrice)}
              displayType={'text'}
              thousandSeparator={true}
              prefix = {" $ "}
          />

          {/* <button>Proceed to Checkout</button> */}
          
    </div>
  )
}

export default Subtotal