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
import ModuleHeader from '../../components/headers/module.header';
import ProfileLayout from '../../components/layouts/profile.layout';
import ResultList from '../../components/modals/result_list.modal';
import CourseUtils from '../../utils/course.utils';

export default function InstructorCourse() {
  //
  const {
    loading,
    modules,
    course,
    results,
    handleGetCourseInstructor,
    handleGetResultForModule,
  } = CourseUtils();

  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //
  useEffect(() => {
    handleGetCourseInstructor(id);
  }, []);

  return (
    <ProfileLayout module={<ModuleHeader course={course} />} isMain={false}>
      <BoxCard>
        <Box mb="50px">
          <ListCard
            title="Courses"
            button="Create module"
            link={`/${id}/add_module`}
          >
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr rounded="md">
                  <Th>S/N</Th>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {modules.map((e, index) => (
                  <Tr rounded="md" key={e._id}>
                    <Td>{index + 1}</Td>
                    <Td>{e.title}</Td>
                    <Td>
                      {'From: ' +
                        new Date(e.startDate).toLocaleDateString() +
                        ' To: ' +
                        new Date(e.endDate).toLocaleDateString()}
                    </Td>
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
                          <Link to={`/courses/${id}/${e._id}/exercises`}>
                            <MenuItem>Exercises</MenuItem>
                          </Link>
                          <MenuItem
                            onClick={() => {
                              handleGetResultForModule(e._id).then(() => {
                                onOpen();
                              });
                            }}
                          >
                            Results
                          </MenuItem>
                          <Link to={`/courses/${id}/${e._id}`}>
                            <MenuItem>Details</MenuItem>
                          </Link>
                          <Link to={`/courses/${id}/${e._id}/edit`}>
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
      <ResultList isOpen={isOpen} results={results} onClose={onClose} />
    </ProfileLayout>
  );
}
