import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
// import MainHeader from '../headers/main.header';
// import Footer from './footer.layout';
import Tabs from './tabs.layout';

export default function MainLayout({ children }) {
  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }, []);

  return (
    <Box pb="30px" onContextMenu={false} bg="gray.100" pos="relative">
      {children}
      <Tabs />
    </Box>
  );
}
