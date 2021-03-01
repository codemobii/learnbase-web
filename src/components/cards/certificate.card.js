import { Avatar, Center } from '@chakra-ui/react';
import React from 'react';

export default function CertificateCard({ img = '', title = '' }) {
  return (
    <Center cursor="pointer" borderWidth="2px" rounded="md" p="10px">
      <Avatar size="lg" name={title} src={img} />
    </Center>
  );
}
