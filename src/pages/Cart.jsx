import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import{DeleteIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import {addProductOrder, removeFromCart, removeProductFromCart} from '../redux/action'
import Subtotal from '../components/SubTotal'
// import ab from '../c'
import { Checkout } from '../components/Checkout'
import Marquee from "react-fast-marquee";

import { useNavigate } from 'react-router-dom'
// import { getCartCount } from '../redux/reducer'
// import {cartCounter} from '../redux/action'




const Cart = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    
    
    const cart = useSelector(store => store.ecommerceData.cart)
    console.log(cart,'cartStore');
    
    
    useEffect(() => {     
      // dispatch(removeFromCart())
        let items = 0;
        let price = 0;
       cart?.length >= 1 && cart.map(item => {
            items += item.quantity;
            price += item.price * item.quantity;
        })
        
        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice,totalItems,setTotalItems,setTotalPrice])
  const dispatch = useDispatch()

  const nevigate = useNavigate()
  // console.log(cart, 'cart');

  const removeProduct = (id) => { 
      console.log("Going to remove product from Cart", id);

    //   const newCart = cart.filter(item => item.id !== id);
    //   console.log('newCart:', newCart)

      

    dispatch(removeProductFromCart(id))
    
  }
  const handleCheckout = () => {

    console.log("Going to checkout");
    dispatch(addProductOrder(cart))

      setTimeout(() => { 
        
          alert('Order Placed Successfully')

      nevigate('/')
      
    }, 1000);
      
      
    
    
    
}
    return (
    //   <h1>Cart</h1>
        <Box>
            
      
      <Heading as={'h2'} size='xl' textAlign={'center'}>
        Cart
      </Heading>

      {!cart.length &&
        <Marquee speed={'80'} >
        
        <Text fontSize={'3xl'} color='red' fontStyle={'italic'} fontWeight='bold' > No items in cart !!!, Continue Shopping... </Text>
        </Marquee>
      }
      
      <Box minHeight={'75vh'}>
        {/* <FlipMove> */}

        {
          cart.map(item => {
            
            return <CartItem
            id = {item.id}
            key={item.id}
            image={item.image}
            title={item.title}
            quantity = {item.quantity}
            price={Math.ceil(item.price)}
            description={item.description}
            removeProduct={removeProduct}
                // totalPrise={totalPrice}
            />
            
          })
        }
        {/* </FlipMove> */}
        </Box> 
      {cart?.length >= 1 && <Subtotal totalPrice = {totalPrice} />}
            {/* {cart?.length >= 1 &&  <h1>{totalPrice } Total</h1>} */}
      
              {/* handleCheckout = {handleCheckout} */}
      {cart?.length >= 1 && <Checkout totalPrice = {totalPrice} cart={cart }  handleCheckout = {handleCheckout}  />} 
      

    </Box >
    
  )
}

//  const image =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function CartItem({ title, image, description, price, removeProduct, id, quantity, }) {
    
    // console.log(quantity, 'quantityCheck');
    // import { getCartCount } from '../redux/reducer';
    const [count, setCount] = useState(quantity);
    const cart = useSelector(store => store.ecommerceData.cart)
    const dispatch = useDispatch()


    // console.log(count,'cjek');

    const handleInc = () => {
        setCount(Number(count) + 1)
        //  getCartCount(cart+1)
        // dispatch(cartCounter(1))
        
        // dispatch(addProductOrder(id, ttl))
    }

    const handleDec = (e) => {

        
        setCount(count - 1)
        // dispatch(cartCounter(-1))
        //  (getCartCount(cart) -1)

    }



  return (
    // <Box border={'1px solid red'} rounded = 'lg' width={'fit-content'} margin= 'auto' marginBottom={"2rem"}>
    <Box  rounded = 'lg' width={'fit-content'} margin= 'auto' marginBottom={"2rem"}>
      <Stack direction={{base:"column",md:"row"}} justifyContent = 'center' alignItems={'center'}>

        {/* <Box height={"300px"} width={'300px'} border={'1px solid blue'} position = 'relative' _after={{ */}
        <Box height={"300px"} width={'300px'}  position = 'relative' _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '90%',
            h: '90%',
            pos: 'absolute',
            top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
         
          >
           <Image
            rounded={'lg'}
            height={280}
            width={300}
            objectFit={'contain'}
            src={image}
            borderRadius={'10%'}
          />
      </Box>
        {/* <Box height={"300px"} width={'300px'} border={'1px solid green'}> */}
        <Box height={"300px"} width={'300px'} >
          <Stack p={4}>
            <Heading as={'h6'} size='md'>{title}</Heading>
            <Box overflow={"hidden"} whiteSpace = 'nowrap' textOverflow={'ellipsis'} >

            <Text  >{ description}</Text>
            </Box>
             <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {/* ₹ {currentProduct.price} */}
              $ {price*count}
                      </Text>
                      
                      <Box>
                          <Text fontSize={'lg'}>Quantity: {count}</Text>
                          <Button onClick={handleInc}  style= {{marginRight:'10px'}}> +1</Button>
                          
                          {count >1 ? <Button onClick={handleDec} > -1</Button>: <Button disabled> -1</Button>}
            </Box>

            <Button  variant={'outline'} leftIcon = {<DeleteIcon/>} onClick={()=>removeProduct(id)}>Remove </Button>
          </Stack>
            
          

      </Box>
      </Stack>
      
    </Box>
  )

}

export default Cart