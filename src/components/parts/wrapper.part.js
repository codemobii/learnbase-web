import { Box } from '@chakra-ui/react';
import React from 'react';

export default function PageWrapper({ children, loading = false }) {
  return (
    <Box m="auto" mt="-56px" maxW="container.md">
      {children}
    </Box>
  );
}
