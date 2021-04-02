import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CourseUtils from '../../utils/course.utils';

export default function CommentDrawer({ isOpen, onClose }) {
  const {
    user,
    loading,
    comments,
    handlePostComment,
    handleGetComments,
  } = CourseUtils();

  const [comment, setComment] = useState('');
  const { id, moduleId, unitId } = useParams();

  const data = {
    user: user,
    comment: comment,
    unit: unitId,
    module: moduleId,
    course: id,
  };

  //

  useEffect(() => {
    handleGetComments(moduleId);
  }, []);

  return (
    <Drawer size="sm" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Comments</DrawerHeader>

          <DrawerBody>
            <Stack>
              {comments.map(e => (
                <HStack align="flex-start">
                  <Avatar
                    size="sm"
                    name={e.user.firstName}
                    src={
                      e.user.profilePic ||
                      'https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png'
                    }
                  />
                  <Box rounded="lg" w="100%" bg="gray.100" p="10px">
                    <Text fontSize="xs" color="gray.400">
                      {e.user.firstName} -{' '}
                      {new Date(e.createdAt).toDateString()}{' '}
                    </Text>
                    <Text fontSize="xs">{e.comment}</Text>
                  </Box>
                </HStack>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter flexWrap="wrap">
            <Textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              mb="10px"
              w="100%"
              fontSize="xs"
              readOnly={loading}
            />
            <Button
              fontSize="sm"
              isLoading={loading}
              colorScheme="blue"
              onClick={() =>
                handlePostComment(data).then(() => {
                  setComment('');
                })
              }
            >
              Post comment
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
