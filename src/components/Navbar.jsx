import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,

} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Profile from './Profile';

import {BsCart3} from 'react-icons/bs'
import CartCounter from './CartCounter';

import { Link as RouterLink } from 'react-router-dom';
// import { Link  } from 'react-router-dom';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Link  to = "/products" > */}
          <Link as={RouterLink}  to="/">
          <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              textDecoration="none"
              _focus={{ textDecoration: 'none' }}
              _hover={{ textDecoration: 'none' }}
             


              // a:hover={{textDecorationLine:"none"}}
            
            >
            STCO STORE
            </Text>
            

            </Link>
          {/* </RouterLink> */}

          <Link as={RouterLink} to='/about'>
          
          <Box display={{base:'none', md:'block'}} ml='3%' minWidth={'100px'}>
            <Text>About</Text>
            {/* <Text>About</Text> */}
          </Box>
          </Link>

          {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex> */}
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          
          {/* <BsCart3 /> */}
          <Link as={RouterLink} to ="/cart">

          {/* <RouterLink to="/cart"> */}
            
          <Box position='relative' padding='0 0.5rem 0 0' marginTop={'10px'}>
          <CartCounter/>
          <Icon as={BsCart3} boxSize = "2rem"   />
          </Box>
            </Link>
            {/* </RouterLink> */}
          
          <Profile/>
          
         
        </Stack>
          </Flex>
          
          <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      <Link as={RouterLink} to='/about'>
      <Text mr={'80%'}>About</Text>
      </Link>
    </Stack>
  );
};

