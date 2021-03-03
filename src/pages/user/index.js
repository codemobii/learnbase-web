import { Box, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import BoxCard from '../../components/cards/box.card';
import CertificateCard from '../../components/cards/certificate.card';
import CourseProgressCard from '../../components/cards/course_progress.card';
import ListCard from '../../components/cards/list.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function Profile() {
  //
  const { courses, handleGetCoursesFew } = CourseUtils();

  //
  useEffect(() => {
    handleGetCoursesFew();
  }, []);

  return (
    <ProfileLayout isMain={true}>
      <SimpleGrid mb="30px" columns={['1', '1', '1']} spacing="6">
        <ListCard
          title="Courses progress"
          button="Register course"
          link="/start_course"
        >
          <Stack spacing="4" w="100%">
            {courses.map(c => (
              <CourseProgressCard
                key={c._id}
                title={c.title}
                img={c.cover.url}
                id={c.course}
                progress="50"
              />
            ))}
          </Stack>
        </ListCard>
        <ListCard onClick title="Certificates">
          <SimpleGrid columns={[3, 3, 6]} spacing="4">
            <CertificateCard
              title="Python Core"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1073.png"
            />
            <CertificateCard
              title="JavaScript"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1024.png"
            />
            <CertificateCard
              title="JavaScript"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1024.png"
            />
            <CertificateCard
              title="CSS"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1023.png"
            />
            <CertificateCard
              title="JavaScript"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1024.png"
            />
            <CertificateCard
              title="CSS"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1023.png"
            />
            <CertificateCard
              title="JavaScript"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1024.png"
            />
            <CertificateCard
              title="Python Core"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1073.png"
            />
            <CertificateCard
              title="JavaScript"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1024.png"
            />
            <CertificateCard
              title="CSS"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1023.png"
            />
            <CertificateCard
              title="JavaScript"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1024.png"
            />
            <CertificateCard
              title="Python Core"
              img="https://sololearnuploads.azureedge.net/uploads/courses/1073.png"
            />
          </SimpleGrid>
        </ListCard>
      </SimpleGrid>
    </ProfileLayout>
  );
}
