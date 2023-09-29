import React from 'react'
import { Flex, Button, Box, Spacer, Card,Select,Input,Heading,Text,Container } from '@chakra-ui/react';


const Btns = () => {
  return (
      <Flex paddingLeft={10} paddingTop={10} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
        <Button
          color={'white'}
          backgroundColor={'rgb(10,10,10)'}
          _hover={{ bg: 'white', color: 'black', borderRadius: '20px' }}
          width="200px"
          borderRadius="20px 0px 0px 20px"
        >
          Open
        </Button>
        <Button
          color={'white'}
          backgroundColor={'rgb(10,10,10)'}
          _hover={{ bg: 'white', color: 'black', borderRadius: '20px' }}
          width="200px"
          borderRadius="0px 0px 0px 0px"
        >
          Close
        </Button>
        <Button
          color={'white'}
          backgroundColor={'rgb(10,10,10)'}
          _hover={{ bg: 'white', color: 'black', borderRadius: '20px' }}
          width="200px"
          borderRadius="0px 20px 20px 0px"
        >
          Boost
        </Button>

        </Flex>
  )
}

export default Btns
