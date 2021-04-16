import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import CourseUtils from '../../utils/course.utils';
import { Player, BigPlayButton } from 'video-react';
import ReadHeader from '../../components/headers/read.header';
import SolidButton from '../../components/buttons/solid.button';
import LoaderPart from '../../components/parts/loader.part';

export default function Read(props) {
  //
  const { id, moduleId } = useParams();

  //
  const { loading, units, module, handleGetUnits } = CourseUtils();

  //
  useEffect(() => {
    handleGetUnits(moduleId);
  }, []);

  // ******************* CUSTOMIZE THE CONTROL BUTTON ****************** //

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Button
        pos="fixed"
        right={['10px', '15%', '25%']}
        zIndex="100"
        bottom="30px"
        onClick={onClick}
      >
        Next Unit
      </Button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Button
        pos="fixed"
        left={['10px', '15%', '25%']}
        zIndex="100"
        bottom="30px"
        onClick={onClick}
      >
        Previous Unit
      </Button>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box w="100%" bg="gray.50" pos="relative" h="100vh">
      <ReadHeader title={module.title} />

      {loading ? (
        <LoaderPart />
      ) : (
        <Box pos="relative" py="120px" h="100vh" overflowX="hidden">
          <Stack maxW="container.sm" m="auto" spacing="8" p="20px">
            <Slider {...settings}>
              {units.map((u, i) => (
                <Stack spacing="20px" as="div">
                  <Box rounded="lg" w="100%" h="auto" bg="gray.700">
                    <Player src={u.video}>
                      <BigPlayButton position="center" />
                    </Player>
                  </Box>

                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      {u.title}
                    </Text>
                  </Box>

                  <Text>{u.desc}</Text>
                </Stack>
              ))}
              <Stack textAlign="center" spacing="20px" as="div">
                <Box>
                  <Text fontSize="2xl" fontWeight="bold">
                    Take module text
                  </Text>

                  <Text>Click on the button below</Text>
                </Box>
                <Center>
                  <Link to={`/courses/${id}/${moduleId}/exercise`}>
                    <SolidButton title="Take test" />
                  </Link>
                </Center>
              </Stack>
            </Slider>
          </Stack>
        </Box>
      )}

      {/*  */}

      <Box
        bg="gray.50"
        pos="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="100px"
        borderTop="1px"
        borderColor="gray.300"
        zIndex="80"
        px="20px"
      ></Box>
    </Box>
  );
}
