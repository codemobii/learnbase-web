import { IconButton } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/close-button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import React from 'react';
import { BsChatDots, BsChevronLeft } from 'react-icons/bs';
import TransparentButton from '../buttons/transparent.button';
import CommentDrawer from '../drawers/comments.drawer';

export default function ReadHeader({ title, progress = 0 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg="gray.50"
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        py="35px"
        borderColor="gray.400"
        zIndex="100"
        px="20px"
      >
        <Flex
          align="center"
          m="auto"
          justify="space-between"
          maxW="container.xl"
        >
          <Flex align="center">
            <CloseButton />
            <Heading d={['none', 'none', 'block']} ml="20px" fontSize="lg">
              {title}
            </Heading>
          </Flex>

          <Box textAlign="center">
            <Heading d={['block', 'block', 'none']} mb="5px" fontSize="lg">
              {title}
            </Heading>
            <Progress rounded="full" w={['180px', '250px']} value={50} />
          </Box>
          <Box d={['none', 'none', 'block']}>
            <TransparentButton
              onClick={onOpen}
              icon={<BsChevronLeft />}
              title="209 Comments"
            />
          </Box>
          <IconButton
            onClick={onOpen}
            d={['flex', 'flex', 'none']}
            icon={<BsChatDots />}
          />
        </Flex>
      </Box>
      <CommentDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}
