import { Box, Center, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import OutlinedButton from '../../components/buttons/outlined.button';
import SolidButton from '../../components/buttons/solid.button';
import StepWizard from 'react-step-wizard';
import CourseUtils from '../../utils/course.utils';
import { Player, BigPlayButton } from 'video-react';
import ReadHeader from '../../components/headers/read.header';

export default function Read(props) {
  //
  const { moduleId } = useParams();

  //
  const { loading, module, handleGetModule } = CourseUtils();

  //
  useEffect(() => {
    handleGetModule(moduleId);
  }, []);

  return (
    <Box w="100%" bg="gray.50" pos="relative" h="100vh">
      <ReadHeader title={module.title} />

      <Box pos="relative" py="120px" h="100vh" overflowX="hidden">
        <StepWizard>
          <Stack maxW="container.sm" m="auto" spacing="8" p="20px">
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

          {/*  */}

          <Stack maxW="container.sm" m="auto" spacing="8" p="20px">
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
        </StepWizard>
      </Box>

      <Box
        bg="gray.50"
        pos="absolute"
        bottom="0"
        left="0"
        w="100%"
        py="25px"
        borderTop="1px"
        borderColor="gray.300"
        zIndex="100"
        px="20px"
      >
        <Center m="auto" justifyContent="space-between" maxW="md">
          <OutlinedButton size="lg" title="Back" />
          <SolidButton size="lg" title="Continue" onClick={e => e.nextStep()} />
        </Center>
      </Box>
    </Box>
  );
}
