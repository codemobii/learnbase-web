import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import SolidButton from '../components/buttons/solid.button';

export default function Auth() {
  return (
    <Box w="100%" py="150px">
      <Box maxW="sm" m="auto" px="20px">
        <Text textAlign="center" fontWeight="bold" fontSize="2xl">
          Get started
        </Text>
        <Text my="30px" textAlign="center">
          Sign in with your google or facebook account
        </Text>
        <Stack spacing="4">
          <SolidButton
            color="red"
            icon={<FaGoogle />}
            title="Continue with Google"
            size="lg"
          />
          <SolidButton
            color="facebook"
            icon={<FaFacebook />}
            title="Continue with Facebook"
            size="lg"
          />
        </Stack>
      </Box>
    </Box>
  );
}
