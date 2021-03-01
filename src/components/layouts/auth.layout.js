import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function AuthLayout({
  children,
  title = 'Steechit | Sign in',
  page = 'Sign in',
  desc = 'Something',
}) {
  return (
    <Box bg="white" py={['30px', '30px', '100px']}>
      <Box mx="auto" maxW="sm" p={['20px', '20px', '0']} rounded="md" bg="#fff">
        <Text fontSize="3xl">{page}</Text>
        <Text fontSize="sm" w={['auto', 'sm']} mt="3">
          {desc}
        </Text>
        <Stack spacing="5" mt="5">
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
