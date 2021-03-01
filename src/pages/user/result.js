import { Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BoxCard from '../../components/cards/box.card';
import ResultCard from '../../components/cards/result.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function Result() {
  //
  const { result, score, handleGetResult } = CourseUtils();
  const { resultId } = useParams();

  //
  useEffect(() => {
    handleGetResult(resultId);
  }, []);

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" pt="30px">
          You scored {score} / {result.length}
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
