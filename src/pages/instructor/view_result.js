import { Avatar, Center, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BoxCard from '../../components/cards/box.card';
import ResultCard from '../../components/cards/result.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function ViewResult() {
  //
  const { result, score, userInfo, handleGetResult } = CourseUtils();
  const { resultId } = useParams();

  //
  useEffect(() => {
    handleGetResult(resultId);
  }, []);

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Center pt="30px" justify="center" align="center">
          <Avatar mr="30px" name="Christian Nwamba" src={userInfo.profilePic} />
          <Text textAlign="center" fontSize="2xl" fontWeight="bold">
            {userInfo.firstName} {userInfo.lastName}
          </Text>
        </Center>
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" pt="30px">
          {score} / {result.length}
        </Text>
        <Stack spacing="6" mb="50px" p={['20px', '20px', '50px']}>
          {result.map(r => (
            <ResultCard result={r} key={r} />
          ))}
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
