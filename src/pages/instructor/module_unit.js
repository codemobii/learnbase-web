import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import BoxCard from '../../components/cards/box.card';
import ListCard from '../../components/cards/list.card';
import ProfileLayout from '../../components/layouts/profile.layout';
import AddExercise from '../../components/modals/add_exercise.modal';
import CourseUtils from '../../utils/course.utils';

export default function ModuleUnits() {
  //
  const {
    loading,
    units,
    course,
    handleGetUnits,
    handleGetCourseInstructor,
  } = CourseUtils();

  const { moduleId, id } = useParams();

  //
  useEffect(() => {
    handleGetCourseInstructor(id);
    handleGetUnits(moduleId);
  }, []);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ProfileLayout isMain={false}>
      <BoxCard>
        <Box mb="50px">
          <ListCard
            title={`${course.courseCode} units`}
            button="Add unit"
            link={`/courses/${id}/${moduleId}/units/add`}
          >
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr rounded="md">
                  <Th>S/N</Th>
                  <Th>Title</Th>
                  <Th>Options</Th>
                </Tr>
              </Thead>
              <Tbody>
                {units.map((e, index) => (
                  <Tr rounded="md" key={e._id}>
                    <Td>{index + 1}</Td>
                    <Td>{e.title}</Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          aria-label="Options"
                          icon={<BsThreeDotsVertical />}
                          size="xs"
                          variant="outline"
                        />
                        <MenuList>
                          <Link
                            to={`/courses/${id}/${moduleId}/units/${e._id}`}
                          >
                            <MenuItem>Details</MenuItem>
                          </Link>
                          <Link
                            to={`/courses/${id}/${moduleId}/units/${e._id}/edit`}
                          >
                            <MenuItem>Edit</MenuItem>
                          </Link>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ListCard>
        </Box>
      </BoxCard>
    </ProfileLayout>
  );
}
