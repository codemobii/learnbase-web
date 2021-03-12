import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TransparentButton from '../buttons/transparent.button';

export default function ResultList({ onClose, isOpen, results = [] }) {
  const { id, moduleId } = useParams();

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Students exercise result for this module</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowX="auto">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr rounded="md">
                <Th>S/N</Th>
                <Th>Student</Th>
                <Th>Score</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {results.map((s, index) => (
                <Tr rounded="md" key={s._id}>
                  <Td>{index + 1}</Td>
                  <Td>{s.user.firstName + ' ' + s.user.lastName}</Td>
                  <Td>
                    {s.score} /{s.result.length}
                  </Td>
                  <Td isNumeric>
                    <Flex justify="flex-end">
                      <Link
                        to={`/courses/${id}/${moduleId}/exercise/result/${s._id}`}
                      >
                        <TransparentButton title="View result" />
                      </Link>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
