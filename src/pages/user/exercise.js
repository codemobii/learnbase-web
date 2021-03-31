import { Box, Center, HStack, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OutlinedButton from '../../components/buttons/outlined.button';
import SolidButton from '../../components/buttons/solid.button';
import BoxCard from '../../components/cards/box.card';
import ExerciseCard from '../../components/cards/exercise.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import CourseUtils from '../../utils/course.utils';

export default function Exercise() {
  // State managers
  const [score, setScore] = useState(0);
  const [result, setResult] = useState([]);

  //
  const {
    loading,
    loadingForm,
    handleProcessResult,
    user,
    exercises,
    handleGetExercises,
  } = CourseUtils();
  const { moduleId, id } = useParams();

  //
  useEffect(() => {
    handleGetExercises(moduleId);
  }, []);

  // Compute answer
  const computeAnswer = (answer, correctAns, question, answers) => {
    if (answer === correctAns) {
      setScore(score + 1);
    }
    let questions = {
      question: question,
      correct: correctAns,
      answers: answers,
      userAnswer: answer,
    };
    setResult([...result, questions]);
  };

  //
  const data = {
    user: user,
    module: moduleId,
    course: id,
    result: result,
    score: score,
  };

  return (
    <ProfileLayout loading={loading} isMain={false}>
      <BoxCard>
        <Stack spacing="6" mb="50px" p={['20px', '20px', '50px']}>
          {exercises.map(({ question, answers, correct, _id }) => (
            <ExerciseCard
              question={question}
              options={answers}
              key={_id}
              selected={answer =>
                computeAnswer(answer, correct, question, answers)
              }
            />
          ))}
          <Center h="100px">
            <HStack spacing="4">
              <OutlinedButton size="lg" title="Reset all" />
              <SolidButton
                loading={loadingForm}
                onClick={() => handleProcessResult(data)}
                size="lg"
                title="Submit Test"
              />
            </HStack>
          </Center>
        </Stack>
      </BoxCard>
    </ProfileLayout>
  );
}
