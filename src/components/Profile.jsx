import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList,Box } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom'

const Profile = () => {
    return (
      
        <Flex>
            <Menu>
  <MenuButton as={Button} rounded = 'full' variant = 'link' >
    {/* <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
    <Avatar name='Profile' src='https://i.postimg.cc/qRDrBCs9/dp.jpg' />
          </MenuButton>
          <Box zIndex={'10000'}>

  <MenuList  overflow='hidden'>
    {/* <MenuItem>Cart</MenuItem> */}
    <MenuItem>Login</MenuItem>
    <MenuItem>Logout</MenuItem>
    <Link to={'/orders'} >
      <MenuItem>Orders</MenuItem>
    </Link>
    
  </MenuList>
          </Box>
</Menu>

        </Flex>
  )
}

export default Profile