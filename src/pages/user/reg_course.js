import { Box, Center, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import OutlinedButton from '../../components/buttons/outlined.button';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function RegCourse() {
  //
  const { user, loading, handleStartCourseUser } = CourseUtils();

  // State manager
  const [courseCode, setCourseCode] = useState('');

  //
  const data = {
    course: courseCode,
    user: user,
  };

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Box p="20px" mb="50px">
          <Input
            value={courseCode}
            onChange={e => setCourseCode(e.target.value)}
            placeholder="Enter course code"
            size="lg"
          />
          <Center pt="20px" h="100px">
            <HStack spacing="4">
              <OutlinedButton size="lg" title="FAQS" />
              <SolidButton
                loading={loading}
                onClick={() => handleStartCourseUser(data)}
                size="lg"
                title="Register course"
              />
            </HStack>
          </Center>
        </Box>
      </BoxCard>
    </ProfileLayout>
  );
}
