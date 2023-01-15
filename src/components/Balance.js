import React from 'react'
import { VStack, Box, Heading } from '@chakra-ui/react';

function Balance () {
  return (
    <>
      <VStack spacing='16px'>
        <Box>
          <Heading fontSize='12' color='black' textAlign='left' margin='auto'>
            YOUR BALANCE
          </Heading>
          <Heading fontSize='20' id='balance' color='black'>
            $0.00
          </Heading>
        </Box>
      </VStack>
    </>
  );
}

export default Balance;