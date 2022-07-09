import React, { useEffect, useState } from 'react'
import { Box, Text, Checkbox,Radio, CheckboxGroup, VStack, Menu, MenuButton, MenuList, MenuDivider, Button, Stack,RadioGroup } from '@chakra-ui/react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import {fetchdata} from '../redux/products/action'
import { fetchdata } from '../redux/action';
// import {category} from '../redux/action'
import {category} from '../redux/action'
const FilterComponents = () => {

    const [searchParams, setSearchParams] = useState();

    const dispatch = useDispatch();

    // console.log(searchParams, 'searchParams');

    useEffect(() => {
        if(searchParams === 'all'){
            dispatch(fetchdata())
        }else{
            if (searchParams) {
                dispatch(category(searchParams))
                
            }
        }
        
     }, [searchParams])


    
    

// console.log(searchParams,'searchPar');
  return (
      <div >
          <Box mt={'2%'}>
              <Box display={{base:"none",md:"block"}} p ="1rem 2rem">
                  <Text fontSize="2xl">Filters</Text>
                  <Text>Category</Text>

                          <RadioGroup onChange={setSearchParams}  value={searchParams}   colorScheme="green">
                      <VStack alignItems={"baseline"}>
                              
                          <Radio value ="all">All</Radio>
                          <Radio value ="men's clothing">Men's Clothings</Radio>
                          <Radio value ="women's clothing">Women's Clothing</Radio>
                          <Radio value ="jewelery">Jewelery</Radio>
                          <Radio value ="electronics">Electronics</Radio>
                      </VStack>
                          </RadioGroup>

                   
              </Box>
              <Box display={{ base: 'block', md: "none" }} p="0rem 2rem"  left={'0'}>
                    <Menu closeOnSelect={false}>
                        <MenuButton as={Button} colorScheme='green'>
                            Filters
                      </MenuButton>
                      
                          
                      <Box overflow={'hidden'} marginLeft='-100px' _after={{
                          
                          marginBottom: '200px'
                      }
                      }
                      >
                          <MenuList minWidth='inherit' zIndex={"1000000"}>
                        
                              {/* <CheckboxGroup colorScheme="green" defaultValue={[]} onChange={categoryHandler} maxWidth='200px'> */}
                          <RadioGroup onChange={setSearchParams} value={searchParams} colorScheme="green"  defaultValue = '' >

                                  <Stack direction = 'column'  >      
                                     <Radio value ="all">All</Radio>
                                     <Radio value ="men's clothing">Men's Clothings</Radio>
                                     <Radio value ="women's clothing">Women's Clothing</Radio>
                                     <Radio value ="jewelery">Jewelery</Radio>
                                    <Radio value="electronics">Electronics</Radio>
                                      
                                  </Stack>


                          </RadioGroup>
                                  
                                  
                        <MenuDivider />
                        
                          </MenuList>
                        </Box>
                    </Menu>
              </Box>
          </Box>
    </div>
  )
}

export default FilterComponents