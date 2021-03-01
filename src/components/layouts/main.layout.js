import { Box } from '@chakra-ui/react';
import React from 'react';
import MainHeader from '../headers/main.header';
import Footer from './footer.layout';

export default function MainLayout({ children }) {
  return (
    <Box bg="gray.100" pos="relative">
      <MainHeader />
      {children}
      <Footer />
    </Box>
  );
}
