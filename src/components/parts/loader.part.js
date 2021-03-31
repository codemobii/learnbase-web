import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

export default function LoaderPart() {
  return (
    <Center w="100%" h="300px">
      <Spinner size="lg" />
    </Center>
  );
}
