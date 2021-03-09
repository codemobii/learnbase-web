import { Box, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import InstructorCourseCard from '../../components/cards/instructor.course.card';
import ListCard from '../../components/cards/list.card';
import InstructorLayout from '../../components/layouts/instructor.layout';
import CourseUtils from '../../utils/course.utils';

export default function Profile() {
  //
  const { courses, handleGetCoursesInstructor } = CourseUtils();

  //
  useEffect(() => {
    handleGetCoursesInstructor();
  }, []);

  return (
    <InstructorLayout isMain={true}>
      <SimpleGrid mb="30px" columns={['1', '1', '1']} spacing="6">
        <ListCard
          title="Courses"
          button="Start a new course"
          link="/start_course"
        >
          <Stack spacing="4" w="100%">
            {courses.map(c => (
              <InstructorCourseCard
                key={c._id}
                title={c.title}
                img={c.cover.url}
                id={c._id}
                progress="50"
              />
            ))}
          </Stack>
        </ListCard>
      </SimpleGrid>
    </InstructorLayout>
  );
}
