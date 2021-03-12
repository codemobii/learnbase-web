import {
  Avatar,
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useParams } from 'react-router';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import Player from 'video-react/lib/components/Player';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function EditModule() {
  //
  const {
    imgFile,
    uploading,
    handleVideoUpload,
    module,
    loading,
    editing,
    handleEditModule,
    handleGetModule,
  } = CourseUtils();

  // State manager
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [desc, setDesc] = useState('');

  const { moduleId } = useParams();

  //
  const data = {
    title: title,
    video: imgFile || module.video,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    id: moduleId,
  };

  //
  useEffect(() => {
    handleGetModule(moduleId).then(() => {
      setTitle(module.title);
      setStartDate(module.startDate);
      setEndDate(module.endDate);
      setDesc(module.desc);
    });
  }, [module.desc, module.endDate, module.startDate, module.title, moduleId]);

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Stack spacing="6" p="20px" mb="50px">
          <Stack alignItems="flex-end">
            <Player src={imgFile || module.video}>
              <BigPlayButton position="center" />
            </Player>
            <Stack alignItems="flex-end" ml="20px">
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
            <FormLabel>Start Date</FormLabel>
            <Input
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              placeholder="Enter course code"
              size="lg"
              type="date"
            />
          </FormControl>
          <FormControl id="title">
            <FormLabel>End Date</FormLabel>
            <Input
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              placeholder="Enter course code"
              size="lg"
              type="date"
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
                loading={editing}
                onClick={() => handleEditModule(data)}
                size="lg"
                title="Create course"
              />
            </HStack>
          </Center>
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
