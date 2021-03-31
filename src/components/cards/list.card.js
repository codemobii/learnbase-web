import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import TransparentButton from '../buttons/transparent.button';

export default function ListCard({
  children,
  title = 'Card',
  onClick = null,
  button = 'Manage all',
  link = null,
}) {
  return (
    <Box
      overflowX="auto"
      shadow="base"
      w="100%"
      bg="white"
      rounded={['0', '0', 'md']}
      overflow
    >
      <Flex px="20px" align="center" h="60px" borderBottomWidth="1px">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Spacer />
        {onClick && <TransparentButton onClick={onClick} title={button} />}
        {link && (
          <Link to={link}>
            <TransparentButton title={button} />
          </Link>
        )}
      </Flex>
      <Box p="20px">{children}</Box>
    </Box>
  );
}
