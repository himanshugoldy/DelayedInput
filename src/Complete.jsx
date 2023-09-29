import React from 'react'
import Design from './Design'
import { Flex, Button, Box, Spacer, Card,Container,Divider } from '@chakra-ui/react';
import Btns from './Btns';


const Complete = () => {
  return (
    <Container maxW={'100%'} backgroundColor={'black'}>
        <Btns />
        <Divider m={'10'} borderColor="white" width={'90%'}/>
        <Design/>
    </Container>
  )
}

export default Complete
