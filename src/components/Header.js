import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

function Header() {

  return (
    <Box
      mt='16'
      bg='white'
      width='100%'
      fontWeight='400'
      textAlign='center'
    >
      <Heading fontSize='18' color='black'>
        Expense Tracker
      </Heading>
    </Box>
  );
}

export default Header;