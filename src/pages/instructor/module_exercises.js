import {
  Box,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BoxCard from '../../components/cards/box.card';
import ListCard from '../../components/cards/list.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import AddExercise from '../../components/modals/add_exercise.modal';
import CourseUtils from '../../utils/course.utils';

export default function ModuleExercises() {
  //
  const {
    loading,
    exercises,
    handleGetExercises,
    handleAddQuestion,
    adding,
  } = CourseUtils();

  const { moduleId } = useParams();

  //
  useEffect(() => {
    handleGetExercises(moduleId);
  }, []);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Box mb="50px">
          <ListCard title="Exercises" button="Add Question" onClick={onOpen}>
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr rounded="md">
                  <Th>S/N</Th>
                  <Th>Questions</Th>
                  <Th>Options</Th>
                  <Th isNumeric>Answer</Th>
                </Tr>
              </Thead>
              <Tbody>
                {exercises.map((e, index) => (
                  <Tr rounded="md" key={e._id}>
                    <Td>{index + 1}</Td>
                    <Td>{e.question}</Td>
                    <Td isNumeric>
                      <Select placeholder="Answers" size="sm">
                        {e.answers.map(e => (
                          <option key={e} value="">
                            {e}
                          </option>
                        ))}
                      </Select>
                    </Td>
                    <Td>{e.correct}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ListCard>
        </Box>
      </BoxCard>
      <AddExercise
        isOpen={isOpen}
        loading={adding}
        handleAddQuestion={handleAddQuestion}
        onClose={onClose}
        module={moduleId}
      />
    </ProfileLayout>
  );
}
