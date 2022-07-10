import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  Spinner
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import { addProductCart, getSingleProduct } from '../redux/action';

export default function Product() {

  // const params = useParams()
    
    let quantity = [1, 2, 3, 4, 5, 6,];
    const [quantitySelect, setQuantitySelect] = useState(1);

    const handleQuantity = (e) => {
        setQuantitySelect(e.target.value)
        // console.log(e.target.value);
    }
  const {id} = useParams()
//   console.log(id,'params');
  const dispatch = useDispatch()

  const currentProduct = useSelector(store => store.ecommerceData.currentProduct)
  // console.log(currentProduct,'product');
  const loading = useSelector(store => store.ecommerceData.loading)
  // console.log('loadding:', loadding)

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id))
    }
    
  }, [dispatch, id])
  

    const addToCartHandler = () => {

        // currentProduct && dispatch(addProductCart({"curr": currentProduct, "quantity": quantitySelect}))
    // currentProduct && dispatch(addProductCart(currentProduct))
        // { currentProduct && currentProduct?.quantity = quantitySelect }
        if(currentProduct) {
            currentProduct.quantity = quantitySelect
            console.log(currentProduct,'currentProductQuantity');
            dispatch(addProductCart(currentProduct))
        }


    }


    if (loading) {
        return (
            <div style={{"minHeight":'82vh'}}>

        <Spinner
            thickness='5px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            mt={'40vh'}
            
            
            />
            </div>
        )
    } 
        
    
    
        return (
  
            <div >

                <Container maxW={'7xl'} >
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 18, md: 24 }}>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'product image'}
                                src={currentProduct.image}
                                fit={'contain'}
                                align={'center'}
                                w={'100%'}
                                h={{ base: '100%', sm: '400px', lg: '500px' }}
                            />
                        </Flex>
                        <Stack spacing={{ base: 6, md: 10 }}>
                            <Box as={'header'}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                    {currentProduct.title}
                                </Heading>
                                <Text
                                    color={'gray'}
                                    fontWeight={300}
                                    fontSize={'2xl'}>
                                    ₹ {currentProduct.price}
                                </Text>
                            </Box>
                            <Box >
              

                                {Rating({ rating: Number(currentProduct?.rating?.rate) })}
                

                            </Box>

                            <Stack
                                spacing={{ base: 4, sm: 6 }}
                                direction={'column'}
                                divider={
                                    <StackDivider
                                        borderColor={'gray'}
                                    />
                                }>
                                <VStack spacing={{ base: 4, sm: 6 }}>
                                    <Text
                                        color={'gray'}
                                        fontSize={'2xl'}
                                        fontWeight={'300'}>
                                        {currentProduct.description}
                                    </Text>
              
                                </VStack>
            
           
                            </Stack>

                            <Box>
                                <Text>Select Quantity</Text>
                                <select value={quantitySelect} onChange={handleQuantity}>
                                    {quantity.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </Box>

                            <Button
                                rounded={'none'}
                                w={'full'}
                                mt={8}
                                size={'lg'}
                                py={'7'}
                                bg={'gray'}
                                color={'white'}
                                textTransform={'uppercase'}
                                _hover={{
                                    transform: 'translateY(2px)',
                                    boxShadow: 'lg',
                                }}
                                onClick={addToCartHandler}>
                                Add to cart
                            </Button>

                            <Stack direction="row" alignItems="center" justifyContent={'center'}>
                                <MdLocalShipping />
                                <Text>2-3 business days delivery</Text>
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                </Container>
      
            </div>
    
        );
    
}


function Rating({ rating }) {
  return (
    <Box display={"flex"} alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      
    </Box>
  );
}
