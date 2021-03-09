import { Avatar, Box, Flex, Progress, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiPlayCircle } from 'react-icons/bi';
import React from 'react';

export default function CourseProgressCard({
  title = '',
  img = '',
  progress = 10,
  id = '',
}) {
  return (
    <Link to={`/courses/${id}`}>
      <Flex align="center" w="100%" h="80px">
        <Avatar size="lg" name={title} src={img} />
        <Flex w="100%" ml="20px" h="100%" align="center">
          <Box w="100%" mr="4">
            <Flex>
              <Text mb="1" fontWeight="bold">
                {title}
              </Text>
              <Spacer />
              <Text mb="1" color="gray.400" fontWeight="bold">
                {progress}%
              </Text>
            </Flex>
            <Progress rounded="full" value={progress} />
          </Box>
          <BiPlayCircle color="gray" size="32px" />
        </Flex>
      </Flex>
    </Link>
  );
}
