import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export default function StudentListModal({ onClose, isOpen, students }) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Students registed on this course</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowX="auto">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr rounded="md">
                <Th>S/N</Th>
                <Th>Name</Th>
                <Th>Contact</Th>
                <Th isNumeric>Reg Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((s, index) => (
                <Tr rounded="md" key={s._id}>
                  <Td>{index + 1}</Td>
                  <Td>{s.user.firstName + ' ' + s.user.lastName}</Td>
                  <Td>
                    {s.user.email}
                    <br />
                    +234{s.user.phone}
                  </Td>
                  <Td isNumeric>
                    {new Date(s.createdAt).toLocaleDateString()}
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
