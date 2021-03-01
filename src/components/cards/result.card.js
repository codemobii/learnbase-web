import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsCheck, BsX } from 'react-icons/bs';
import OutlinedButton from '../buttons/outlined.button';

export default function ResultCard({ result }) {
  return (
    <Stack
      rounded="md"
      borderWidth="1px"
      borderColor="telegram.500"
      p="20px"
      spacing="6"
    >
      <Text fontWeight="bold" fontSize="lg">
        {result.question}
      </Text>
      <Flex flexFlow="wrap">
        <OutlinedButton
          color={result.correct === result.userAnswer ? 'green' : 'red'}
          m="0 10px 10px 0"
          title={result.userAnswer}
          icon={result.correct === result.userAnswer ? <BsCheck /> : <BsX />}
        />
        {result.correct !== result.userAnswer && (
          <OutlinedButton
            color="green"
            m="0 10px 10px 0"
            title={result.correct}
            icon={<BsCheck />}
          />
        )}
        {result.answers.map(
          a =>
            a !== result.userAnswer &&
            a !== result.correct && (
              <OutlinedButton color="telegram" m="0 10px 10px 0" title={a} />
            )
        )}
      </Flex>
    </Stack>
  );
}
