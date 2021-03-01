import { Flex, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import OutlinedButton from '../buttons/outlined.button';

export default function ExerciseCard({ question, options, selected }) {
  const [answer, setAnswer] = useState(options);
  return (
    <Stack
      rounded="md"
      borderWidth="1px"
      borderColor="telegram.500"
      p="20px"
      spacing="6"
    >
      <Text fontWeight="bold" fontSize="lg">
        {question}
      </Text>
      <Flex flexFlow="wrap">
        {answer.map((text, index) => (
          <OutlinedButton
            m="0 10px 10px 0"
            key={index}
            onClick={() => {
              setAnswer([text]);
              selected(text);
            }}
            title={text}
          />
        ))}
      </Flex>
    </Stack>
  );
}
