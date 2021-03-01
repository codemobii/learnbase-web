import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function ModuleCard({ module }) {
  return (
    <Link to={`/courses/${module.course}/${module._id}`}>
      <Flex
        align="center"
        rounded="md"
        borderWidth="1px"
        borderColor="telegram.500"
        p="20px"
      >
        <Box>
          <Text fontWeight="bold">{module.title}</Text>
          <Text color="gray.400" fontSize="xs">
            {new Date(module.startDate).toDateString() +
              ' - ' +
              new Date(module.endDate).toDateString()}
          </Text>
        </Box>
        <Spacer />

        <AiFillPlayCircle color="gray" size="32px" />
      </Flex>
    </Link>
  );
}
