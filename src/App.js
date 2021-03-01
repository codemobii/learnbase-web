import React from 'react';
import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import Routes from './routes/routes';
import 'video-react/dist/video-react.css';

// Version 2: Using functions
const overrides = extendTheme({
  styles: {
    global: props => ({
      body: {
        fontFamily: "'Inter', sans-serif",
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={overrides}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
