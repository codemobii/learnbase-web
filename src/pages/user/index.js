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
      <BoxCard>
        <Box h="100px">
          <Image
            src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/03/Blog_Best-web-designer.jpg.webp"
            w="100%"
            h="100%"
            objectFit="cover"
            rounded="lg"
          />
        </Box>
      </BoxCard>
      <SimpleGrid py="30px" columns={['1', '1', '2']} spacing="6">
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
                progress="4"
              />
            ))}
          </Stack>
        </ListCard>
        <ListCard title="Certificates">
          <SimpleGrid columns="3" spacing="4">
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
          </SimpleGrid>
        </ListCard>
      </SimpleGrid>
    </ProfileLayout>
  );
}
