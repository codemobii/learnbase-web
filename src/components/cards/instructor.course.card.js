import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React from 'react';
import StudentListModal from '../modals/students_list.modal';
import CourseUtils from '../../utils/course.utils';

export default function InstructorCourseCard({
  title = '',
  img = '',
  progress = 10,
  id = '',
}) {
  //
  const {
    students,
    isOpen,
    handleCose,
    getting,
    handleGetStudents,
  } = CourseUtils();
  return (
    <>
      <Flex align="center" w="100%" h="80px">
        <Avatar size="lg" name={title} src={img} />
        <Flex w="100%" ml="20px" h="100%" align="center">
          <Link to={`courses/${id}`}>
            <Text fontWeight="bold">{title}</Text>
          </Link>
          <Spacer />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BsThreeDotsVertical />}
              size="xs"
              variant="outline"
              _loading={getting}
            />
            <MenuList>
              <MenuItem onClick={() => handleGetStudents(id)}>
                Students
              </MenuItem>
              <Link to={`/${id}/edit`}>
                <MenuItem>Edit</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <StudentListModal
        students={students}
        isOpen={isOpen}
        onClose={handleCose}
      />
    </>
  );
}
