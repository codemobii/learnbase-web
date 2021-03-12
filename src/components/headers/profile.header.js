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
}) {
  let history = useHistory();
  return (
    <Box w="100%" px="20px" bg="gray.700" color="gray.50">
      {isMain === false && (
        <Flex maxW="container.lg" py="20px" m="auto">
          <NavButton
            onClick={() => history.goBack()}
            color="whiteAlpha"
            title="Back"
            icon={<BsChevronLeft />}
          />
        </Flex>
      )}
      <Box
        py={(isMain || module) && '50px'}
        pb="100px"
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
