import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useHistory } from 'react-router';
import NavButton from '../buttons/nav.button';
import ProfileInfoHeader from './profile.info.header';

export default function ProfileHeader({
  children,
  isMain = false,
  module = false,
  title = false,
  noHeading = false,
}) {
  let history = useHistory();
  return (
    <Box
      w="100%"
      px="20px"
      bgImage="url('https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      color="gray.50"
      pos="relative"
    >
      <Box
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(23, 25, 35,0.8)"
      />
      {isMain === false && (
        <Flex pos="relative" maxW="container.lg" py="20px" m="auto">
          <NavButton
            onClick={() => history.goBack()}
            color="whiteAlpha"
            title="Back"
            icon={<BsChevronLeft />}
          />
        </Flex>
      )}
      <Box
        pos="relative"
        py={(isMain || module) && '50px'}
        pb={noHeading ? '0px' : '100px'}
        m="auto"
        maxW="container.md"
      >
        <Box w="100%">
          {isMain && <ProfileInfoHeader />}
          {module}
        </Box>
      </Box>
    </Box>
  );
}
