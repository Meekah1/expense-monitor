import React from 'react'
import { Heading, Text, Flex, Box } from '@chakra-ui/react';

const Expense = () => {
  return (
    <div>
      <Flex
        width='200px'
        height='50'
        justify='space-around'
        align='center'
        bg='white'
        border='1px solid'
      >
        <Box>
          <Heading bg='white' fontSize='11' color='black' textAlign='center'>
            INCOME
            <Text bg='white' fontSize='14' color='#2ecc71'>
              $500.00
            </Text>
          </Heading>
        </Box>
        <Box border='1px solid black'></Box>
        <Box>
          <Heading bg='white' fontSize='11' color='black' textAlign='center'>
            EXPENSE
            <Text bg='white' fontSize='14' color='#c0392b'>
              $240.00
            </Text>
          </Heading>
        </Box>
      </Flex>
    </div>
  );
}

export default Expense;
