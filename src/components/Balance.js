import React from 'react'
import { VStack, Box, Heading } from '@chakra-ui/react';

function Balance () {
  return (
    <>
      <VStack>
        <Box>
          <Heading fontSize='12' color='black' >
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