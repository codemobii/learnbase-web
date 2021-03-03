import React from 'react';
import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../logo.svg';

export default function Footer() {
  return (
    <Box as="footer" bg="#fff" role="contentinfo" py="6">
      <Box maxW="container.lg" m="auto">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          w="100%"
          mx="auto"
          align="center"
        >
          <a
            aria-current="page"
            aria-label="Back to Home page"
            href="/"
            rel="home"
          >
            <Image src={logo} alt="LearnBase Logo" w="170px" />
          </a>
          <Stack
            my={{ base: '6', md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            marginStart={{ md: '8' }}
            fontSize="sm"
            spacing={{ base: '2', md: '8' }}
            textAlign={{ base: 'center', md: 'start' }}
          >
            <Text>&copy; {new Date().getFullYear()} Envelope Inc</Text>
            <Link>Privacy</Link>
            <Link>Terms and Conditions</Link>
          </Stack>
          <ButtonGroup
            marginStart={{ md: 'auto' }}
            color="gray.600"
            variant="ghost"
          >
            <IconButton
              as="a"
              href="www.google.com"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="www.google.com"
              aria-label="LinkedIn"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="www.google.com"
              aria-label="LinkedIn"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
}
