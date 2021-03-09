import { Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BoxCard from '../../components/cards/box.card';
import ModuleCard from '../../components/cards/module.card';
import ModuleHeader from '../../components/headers/module.header';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function InstructorCourse() {
  //
  const { loading, modules, course, handleGetCourse } = CourseUtils();

  const { id } = useParams();

  //
  useEffect(() => {
    handleGetCourse(id);
  }, []);

  return (
    <ProfileLayout module={<ModuleHeader course={course} />} isMain={false}>
      <BoxCard>
        <Stack spacing="6" mb="50px" p={['20px', '20px', '50px']}>
          {modules.map(m => (
            <ModuleCard key={m._id} module={m} />
          ))}
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
