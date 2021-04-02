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
import { useParams } from 'react-router';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function AddModule() {
  //
  const {
    imgFile,
    uploading,
    handleVideoUpload,
    user,
    loading,
    handleAddModule,
  } = CourseUtils();

  // State manager
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [desc, setDesc] = useState('');
  const [video, setVideo] = useState('');

  const { id } = useParams();

  //
  const data = {
    title: title,
    course: id,
    institute: user,
    video: imgFile || video,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
  };

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Stack spacing="6" p="20px" mb="50px">
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
                loading={loading}
                onClick={() => handleAddModule(data)}
                size="lg"
                title="Create module"
              />
            </HStack>
          </Center>
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
