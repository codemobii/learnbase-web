import { Box } from '@chakra-ui/react';
import React from 'react';

export default function BoxCard({ children }) {
  return (
    <Box shadow="base" w="100%" bg="white" rounded={['0', '0', 'lg']} overflow>
      {children}
    </Box>
  );
}
