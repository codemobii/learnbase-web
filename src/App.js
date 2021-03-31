import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Routes from './routes/routes';
import 'video-react/dist/video-react.css';
import './global.css';

// Version 2: Using functions
const theme = extendTheme({
  fonts: {
    heading: '"Jost", sans-serif',
    body: '"Jost", sans-serif',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
