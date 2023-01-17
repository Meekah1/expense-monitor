import Header from './components/Header';
import Balance from './components/Balance';
import Expense from './components/Expense';
import './App.css';
import { VStack, Box } from '@chakra-ui/react';

function App() {
  return (
    <div className='app'>
      <VStack spacing='24px'>
        <Box>
          <Header />
        </Box>
        <Box>
          <Balance />
        </Box>
        <Expense />
      </VStack>
    </div>
  );
}

export default App;
