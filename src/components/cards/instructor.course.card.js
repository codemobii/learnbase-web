import { Avatar, Box, Flex, Progress, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import React from 'react';

export default function InstructorCourseCard({
  title = '',
  img = '',
  progress = 10,
  id = '',
}) {
  return (
    <Link to={`courses/${id}`}>
      <Flex align="center" w="100%" h="80px">
        <Avatar size="lg" name={title} src={img} />
        <Flex w="100%" ml="20px" h="100%" align="center">
          <Text fontWeight="bold">{title}</Text>
          <Spacer />
          <BsChevronRight color="gray" size="24px" />
        </Flex>
      </Flex>
    </Link>
  );
}
