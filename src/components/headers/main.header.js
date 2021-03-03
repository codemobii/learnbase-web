import {
  Box,
  Center,
  Collapse,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../buttons/nav.button';
import Cookies from 'js-cookie';
import logo from '../../logo.svg';

// Set the links in an array

const links = [
  { name: 'ABOUT', path: '/about' },
  { name: 'DISCUSS', path: '/discuss' },
  { name: 'FAQS', path: '/faqs' },
];
const user = Cookies.get('id');

export default function MainHeader() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w="100%" bg="#fff" px="20px">
      <Box maxW="container.lg" m="auto">
        <Flex
          borderTopWidth={isOpen && '1px'}
          h={['60px', '60px', '80px']}
          align="center"
          w="100%"
          bg="white"
        >
          <Link to="/">
            <Image src={logo} alt="LearnBase Logo" w="170px" />
          </Link>
          <Spacer />
          <HStack spacing="15px" d={['none', 'none', 'flex']}>
            {links.map((l, i) => (
              <NavButton key={i} title={l.name} />
            ))}
            {user ? (
              <Link to="/">
                <NavButton variant="solid" title="PROFILE" />
              </Link>
            ) : (
              <Link to="/auth/sign_in">
                <NavButton variant="solid" title="GET STARTED" />
              </Link>
            )}
          </HStack>
          <NavButton
            d={['block', 'block', 'none']}
            variant="solid"
            title="MENU"
            onClick={onToggle}
          />
        </Flex>
        <Box d={['block', 'block', 'none']}>
          <Collapse in={isOpen} animateOpacity>
            <Center bg="transparent" my="4">
              <Stack textAlign="center" spacing="24px">
                {links.map((l, i) => (
                  <Link key={i} to={l.path}>
                    <NavButton m="auto" title={l.name} />
                  </Link>
                ))}
                {user ? (
                  <Link to="/">
                    <NavButton variant="solid" title="PROFILE" />
                  </Link>
                ) : (
                  <Link to="/auth/sign_in">
                    <NavButton variant="solid" title="GET STARTED" />
                  </Link>
                )}
              </Stack>
            </Center>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}
