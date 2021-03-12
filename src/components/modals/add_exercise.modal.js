import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import SolidButton from '../buttons/solid.button';

export default function AddExercise({
  onClose,
  isOpen,
  module,
  loading,
  handleAddQuestion,
}) {
  const [selected, setSelected] = useState([]);
  const [question, setQuestion] = useState('');
  const [correct, setCorrect] = useState('');

  const data = {
    question: question,
    answers: selected,
    correct: correct,
    module: module,
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add question</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="30px">
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Question</FormLabel>
              <Textarea
                type="Question . . ."
                value={question}
                onChange={e => setQuestion(e.target.value)}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Answers</FormLabel>
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="answers"
                placeHolder="enter answer"
              />
              <FormHelperText>
                press enter or comma to add new answer.
              </FormHelperText>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Select correct answer</FormLabel>
              <Select
                value={correct}
                onChange={e => setCorrect(e.target.value)}
                placeholder="Answers"
              >
                {selected.map(e => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </Select>
            </FormControl>
            <SolidButton
              loading={loading}
              onClick={() => {
                handleAddQuestion(data).then(() => {
                  onClose();
                });
              }}
              size="md"
              title="Add question"
            />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
