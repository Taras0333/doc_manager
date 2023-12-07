import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import FilesPage from './pages/FilesPage';
import { Provider } from 'react-redux';
import store from './state/store';
import { YELLOW } from './styles/colors/consts';
import './styles/general.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Flex h="100vh" p="30px" bg={YELLOW}>
          <FilesPage />
        </Flex>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
