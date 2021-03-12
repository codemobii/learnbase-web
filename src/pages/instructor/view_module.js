import { Box, Center, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import OutlinedButton from '../../components/buttons/outlined.button';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';
import { Player, BigPlayButton } from 'video-react';

export default function ViewModule() {
  //
  const { moduleId } = useParams();

  //
  const { loading, module, handleGetModule } = CourseUtils();

  //
  useEffect(() => {
    handleGetModule(moduleId);
  }, []);

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Stack spacing="8" p="20px" mb="50px">
          <Box rounded="lg" w="100%" h="auto" bg="gray.700">
            <Player src={module.video}>
              <BigPlayButton position="center" />
            </Player>
          </Box>

          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              {module.title}
            </Text>
            <Text color="gray.400" fontSize="sm">
              {new Date(module.startDate).toDateString() +
                ' - ' +
                new Date(module.endDate).toDateString()}
            </Text>
          </Box>

          <Text>{module.desc}</Text>
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
