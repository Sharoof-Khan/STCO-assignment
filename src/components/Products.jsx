import React, { useEffect } from 'react'
import { Box, Heading, Stack,Center,useColorModeValue,Text,
  Image,
  Flex, } from '@chakra-ui/react'
import FilterComponents from './FilterComponents.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../redux/action'
import { Link, useSearchParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'




const Products = (id) => {

    const products = useSelector((store) => store.ecommerceData.products);
    const fltr = useSelector((store) => store.ecommerceData.filtersValue);
    // console.log(fltr,'filter');
    const loading = useSelector((store) => store.ecommerceData.loading);
    // console.log(products,'prod');
  const dispatch = useDispatch()
  
    // const [searchParams] = useSearchParams();
    // 


    useEffect(() => {
        if (products?.length === 0) {
          
          
            dispatch(fetchdata())
            
        }
    }, [])
    
    // console.log(products,'prod');

    if (loading) { 
        return <Spinner
  thickness='5px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  mt={'40vh'}
            
/>
    }
  return (

    // <Link to={`/products/${id}`}>
      <Box>
          <Stack display={{md:"flex"}} flexDirection = {{md:"row"}}>

          <Box minWidth={"15rem"}>
              <FilterComponents   />
          </Box>
              <Box>{/*Products*/}
                  <Heading as={'h3'}>Products : { products.length >15 ? "ALL": fltr.toUpperCase()}</Heading>
                  <Flex flexWrap="wrap" justifyContent='space-around'>
                      {products.map((product) => {
                        return (
                          <Link key={product.id} to={`/products/${product.id}`} target="_blank">

                            < ProductSimple key={product.id} image={product.image} title={product.title} price={product.price} />
                            
                          </Link>
                        )
                      })}
                  </Flex>
                  {/* <ProductSimple/> */}
                  
              </Box>
          </Stack>
    </Box>
// </Link>
  )
}

 function ProductSimple({image,title,price}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
            <Image
                      marginTop={'50px'}
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            STCO
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} overflow='hidden' textOverflow={'ellipsis'} width='300px' whiteSpace={'nowrap'}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${Math.round(price)}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ${Math.round((0.12*price)+price)}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
export default Products