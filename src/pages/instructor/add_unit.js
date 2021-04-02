import {
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useParams } from 'react-router';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import Player from 'video-react/lib/components/Player';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function AddUnit() {
  //
  const {
    imgFile,
    uploading,
    handleVideoUpload,
    user,
    loading,
    handleAddUnit,
  } = CourseUtils();

  // State manager
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [video, setVideo] = useState('');

  const { id, moduleId } = useParams();

  //
  const data = {
    title: title,
    course: id,
    institute: user,
    video: imgFile || video,
    module: moduleId,
    desc: desc,
  };

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Stack spacing="6" p="20px" mb="50px">
          <Stack alignItems="flex-end">
            <Player src={imgFile || video}>
              <BigPlayButton position="center" />
            </Player>
            <Box
              d={['block', 'block', 'flex']}
              w="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Input
                value={video}
                onChange={e => setVideo(e.target.value)}
                placeholder="Enter video link"
                size="lg"
                maxW="300px"
              />
              <Text my={['20px', '20px', '0']}>OR</Text>
              <Stack alignItems={['flex-start', 'flex-start', 'flex-end']}>
                <Box pos="relative">
                  <SolidButton
                    icon={<BsUpload />}
                    size="sm"
                    title="Upload video"
                    loading={uploading}
                  />
                  <input
                    value=""
                    style={{
                      position: 'absolute',
                      top: 0,
                      height: '100%',
                      width: 100,
                      cursor: 'pointer',
                      opacity: 0,
                    }}
                    id="imageFile"
                    type="file"
                    onChange={handleVideoUpload}
                  />
                </Box>
                <FormLabel fontSize="xs">
                  JPG, GIF or PNG. Max size 800K
                </FormLabel>
              </Stack>
            </Box>
          </Stack>

          <FormControl id="title">
            <FormLabel>Module Title</FormLabel>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter course code"
              size="lg"
            />
          </FormControl>
          <FormControl id="title">
            <FormLabel>Description</FormLabel>
            <Textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              h="300px"
              placeholder="Here is a sample placeholder"
            />
          </FormControl>
          <Center h="100px">
            <HStack spacing="4">
              <SolidButton
                loading={loading}
                onClick={() => handleAddUnit(data)}
                size="lg"
                title="Create unit"
              />
            </HStack>
          </Center>
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
