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
import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function StartCourse() {
  //
  const {
    imgFile,
    uploading,
    handleImageUpload,
    user,
    loading,
    handleStartCourse,
  } = CourseUtils();

  // State manager
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [desc, setDesc] = useState('');

  //
  const data = {
    title: title,
    institute: user,
    instituteName: 'Jireh Computers',
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    cover: {
      url: imgFile,
      type: 'img',
    },
  };

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Stack spacing="6" p="20px" mb="50px">
          <HStack alignItems="flex-end">
            <Avatar
              size="xl"
              name=""
              src={
                imgFile ||
                'https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png'
              }
            />
            <Stack ml="20px">
              <HStack>
                <Box pos="relative">
                  <SolidButton
                    icon={<BsUpload />}
                    size="sm"
                    title="Upload cover image"
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
                    onChange={handleImageUpload}
                  />
                </Box>
              </HStack>
              <FormLabel fontSize="xs">
                JPG, GIF or PNG. Max size 800K
              </FormLabel>
            </Stack>
          </HStack>

          <FormControl id="title">
            <FormLabel>Course Title</FormLabel>
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
                onClick={() => handleStartCourse(data)}
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
