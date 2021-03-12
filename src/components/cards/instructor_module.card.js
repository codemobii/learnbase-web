import React from 'react';
import { Menu, MenuList, Portal, Td, Tr } from '@chakra-ui/react';

export default function InstructorModuleCard({ index, m }) {
  return (
    <Tr rounded="md" key={e._id}>
      <Td>{index + 1}</Td>
      <Td>millimetres (mm)</Td>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>
        <Menu>
          <MenuButton>Open menu</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>Menu 1</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Td>
    </Tr>
  );
}
