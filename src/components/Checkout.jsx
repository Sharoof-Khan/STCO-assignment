import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
    Button,
  Box,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Subtotal from './SubTotal'
export const Checkout = ({ cart, handleCheckout,totalPrice  }) => {
    // const nevigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
          {/* <Button onClick={onOpen}>Open Modal</Button> */}
          < Button
        rounded={'none'}
        w={'full'}
        mt={8}
        size={'lg'}
        py={'7'}
        bg={('black')}
        color={('white')}
        textTransform={'uppercase'}
        _hover={{
          transform: 'translateY(2px)',
          boxShadow: 'lg',
        }}
            //   onClick={addToCartHandler}
              onClick={onOpen}
          >
        CheckOut
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                      {/* <Lorem count={2} /> */}
                      <Box >
                      {cart && cart.map(item => {
                          return (
                              <Box key={item.id} mb='1rem' borderBottom={'1px solid gray'}>
                                  <Flex>
                                      <Box mb={'10px'} >
                                          <Image
                                              src={item.image}
                                              objectFit='contain'
                                              alt='Product img'
                                              boxSize={'100px'}
                                            //   border={'1px solid black'}
                                              rounded='lg'
                                          />
                                      </Box>
                                      <Box   margin='auto'>
                                          <Text overflow='hidden' textOverflow={'ellipsis'} width='200px' whiteSpace={'nowrap'}>{item.title}</Text>
                                          <Text textAlign={'center'}>${Math.ceil(item.price * item.quantity)},  Quantity : { item.quantity}</Text>
                                          
                                      </Box>
                                      
                                  </Flex>
                              </Box>
                          )
                          
                      })}
                          <Subtotal totalPrice={totalPrice} />
                        </Box>
                      
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCheckout} >
              Confirm
            
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}