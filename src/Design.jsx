import { Flex, Button, Box, Spacer, Card,select,Input,Heading,Text,Container,Select } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react';

const Design = () => {

  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('Value will appear here after delay');


  useEffect(() => {
    let typingTimer;

    if (inputValue > 0) {
    //   clearTimeout(typingTimer); // Clear previous timer
      typingTimer = setTimeout(() => {
        // Display the input value after the delay
        setDisplayedValue(inputValue);
      }, 1000); // 1.5 seconds delay
    } else {
      // Reset the displayed value if the input is not greater than 0
      setDisplayedValue('');
    }

    return () => clearTimeout(typingTimer);
  }, [inputValue]);


  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setInputValue(value);
    } else {
      setInputValue('');
    }
  };


  return (

    
    <Flex minH={'100vh'}>
      <Flex width={'100%'} display={'flex'} justifyContent={'center'} >
        <Flex  width={'80%'} display={'flex'} justifyContent={'space-between'}>
        <Flex
            borderRadius={'1rem'}
            backgroundColor={'rgb(7,7,7)'}
            width={'49%'}
            border={'1px solid grey'}
            h={'72vh'}
            alignItems={'center'}
            flexDir={'column'}
            justifyContent={'center'}
          >
            <Flex display={'flex'} flexDir={'column'} width={'80%'} m={5}>
              <Text fontWeight={'500'} color={'white'} mb={2}>Select Assest</Text>
              <select
              style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '0.5rem', 
                fontSize: '1rem', 
                padding: '0.5rem', 
                border:'1px solid white'
              }}
            >
              <option value="ETH">ETH</option>
            </select>
            </Flex>
            <Flex display={'flex'} flexDir={'column'} width={'80%'}>
              <Flex mb={2} display={'flex'} justifyContent={'space-between'}>
              <Text fontWeight={'500'} color={'white'}>Borrow Amount</Text>
              <Button color={'white'} size={'sm'} backgroundColor={'gray.900'} border={'1px solid purple'}>Max Held Amount: 200</Button>
              </Flex>
              <Input color={'white'}
              id="amount"
              type='number'
              step="0.01"
              placeholder="Enter supply Amount"
              value={inputValue}
              onChange={handleInputChange}
             />
            </Flex>
            <Flex m = {4} height={'15vh'} width={'80%'} backgroundColor={'black'}>

            </Flex>
            <Flex m={4} width={'80%'} display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
              <Button size={'sm'} p={4}>Execute</Button>
            </Flex>
          </Flex>
          <Flex backgroundColor={'rgb(7,7,7)'} width={'49%'} h={'72vh'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDir={'column'} >
            <Flex justifyContent = {'center'} alignItems={'center'} color={'white'} borderRadius={'1rem'} width={'100%'} border={'1px solid grey'} h={'37vh'} >{displayedValue}</Flex>
            <Flex justifyContent = {'center'} alignItems={'center'} color={'white'} borderRadius={'1rem'} width={'100%'} border={'1px solid grey'} h={'32vh'} >{displayedValue}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Design;
