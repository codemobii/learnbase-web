import { Box, Center, HStack, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z"
      fill="#200E32"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
      fill="#200E32"
    />
  </svg>
);

const Course = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="10.5992"
      cy="10.6532"
      rx="8.59922"
      ry="8.65324"
      fill="#200E32"
    />
    <path
      opacity="0.4"
      d="M20.6745 21.9553C20.3405 21.9444 20.0228 21.807 19.7853 21.5705L17.7488 19.1901C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3786 18.3624 17.3786C18.6228 17.3786 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6562 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z"
      fill="#200E32"
    />
  </svg>
);

const Profile = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9968 15.1746C7.68376 15.1746 3.99976 15.8546 3.99976 18.5746C3.99976 21.2956 7.66076 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z"
      fill="#200E32"
    />
    <path
      opacity="0.4"
      d="M11.9967 12.5837C14.9347 12.5837 17.2887 10.2287 17.2887 7.2917C17.2887 4.3547 14.9347 1.9997 11.9967 1.9997C9.05971 1.9997 6.70471 4.3547 6.70471 7.2917C6.70471 10.2287 9.05971 12.5837 11.9967 12.5837Z"
      fill="#200E32"
    />
  </svg>
);

export default function Tabs() {
  return (
    <HStack
      pos="fixed"
      left="0"
      bg="white"
      borderTop="1px"
      borderColor="gray.400"
      bottom="0"
      w="100%"
    >
      <Center w="33.3%">
        <Link to="/">
          <Box py="8px" textAlign="center">
            <Center>
              <Home />
            </Center>
            <Text fontWeight="bold" fontSize="md">
              Home
            </Text>
          </Box>
        </Link>
      </Center>

      <Center w="33.3%">
        <Link to="/start_course">
          <Box py="8px" textAlign="center">
            <Center>
              <Course />
            </Center>
            <Text fontWeight="bold" fontSize="md">
              Course
            </Text>
          </Box>
        </Link>
      </Center>

      <Center w="33.3%">
        <Link to="/profile">
          <Box py="8px" textAlign="center">
            <Center>
              <Profile />
            </Center>
            <Text fontWeight="bold" fontSize="md">
              Profile
            </Text>
          </Box>
        </Link>
      </Center>
    </HStack>
  );
}
