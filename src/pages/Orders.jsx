import React, { useEffect } from 'react'
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import{DeleteIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders, removeFromOrder} from '../redux/action'
// import Subtotal from '../components/SubTotal'
// import { Checkout } from '../components/Checkout'
import Marquee from "react-fast-marquee";
import { nanoid } from 'nanoid'
import { Spinner } from '@chakra-ui/react'



const Order = () => {
    const order = useSelector(store => store.ecommerceData.orders)
    // console.log(order, 'orderCheck');
    const loading = useSelector(store => store.ecommerceData.loading)
    // console.log(loading,'load');
    const dispatch = useDispatch()
    //   console.log(order, 'order');

  
    useEffect(() => {

        dispatch(fetchOrders())
    
    
    }, [dispatch])

    const cancelOrder = (id) => {
        console.log("Going to remove product from Order", id);
        dispatch(removeFromOrder(id))
    
    }
    
    // { !order && loading && <Spinner /> }
    if (!order && loading) {
        
        return <Spinner />
    } else {
        
    

  
    return (
        <Box>
            <Heading as={'h2'} size='xl' textAlign={'center'}>
                Your Order
            </Heading>

            {!order.length && !loading &&
                <Marquee speed={'80'} >
        
                    <Text fontSize={'3xl'} color='red' fontStyle={'italic'} fontWeight='bold' > No Order !!!, Continue Shopping... </Text>
                </Marquee>
            }

            {/* { loading && order.length && <Box>
        <Spinner />
      </Box>
      } */}
            <Box minHeight={'75vh'}>
        
                {order?.length >=1 && order[0].map(item => {
                  return <CartItem key={nanoid()} title={item.title} image={item.image} description={item.description} price={item.price} cancelOrder={cancelOrder} id={item.id}/>
               })}
              
              
        
            </Box>
      

        </Box >
    
    )
}
}


function CartItem({title,image,description,price,cancelOrder,id}) { 



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
              ${price}
            </Text>

            <Button  variant={'outline'} leftIcon = {<DeleteIcon/>} onClick={()=>cancelOrder(id)}>Cancel Order </Button>
          </Stack>
            
          

      </Box>
      </Stack>
      
    </Box>
  )

}

export default Order