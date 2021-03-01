import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function ModuleHeader({ course = {} }) {
  return (
    <Flex
      d={['block', 'block', 'flex']}
      color="gray.50"
      align="center"
      textAlign={['center', 'center', 'left']}
    >
      <Avatar
        size="xl"
        name={course.title || 'Learn Base'}
        src={course.cover}
      />
      <Box>
        <Text fontSize="2xl" fontWeight="500">
          {course.title}
        </Text>
        <Text fontSize="sm" fontWeight="light">
          {course.desc}
        </Text>
      </Box>
    </Flex>
  );
}
