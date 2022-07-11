import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/action';
import {getCartCount} from '../redux/reducer'


const CartCounter = () => {

    const cart = useSelector((store) => store.ecommerceData.cart);

    const dispatch = useDispatch();

    useEffect(() => { 
        if (cart?.length === 0) {
            dispatch(fetchCart())
            
        }

    }, [cart?.length,dispatch])
  return (
      <Box backgroundColor='black' textColor='white' borderRadius='50%' width = '20px' height = '20px' textAlign='center' paddingBottom='20px' position='absolute' top='0' right='0'>
          {cart?.length? cart.length:0}



          {/* {getCartCount(cart)} */}
    </Box>
  )
}

export default CartCounter