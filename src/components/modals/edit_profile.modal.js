import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import SolidButton from '../buttons/solid.button';

export default function EditProdileModal({ onClose, isOpen }) {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent
        bg="gray.100"
        rounded={['0', '0', 'lg']}
        h={['100%', '100%', 'auto']}
      >
        <Tabs orientation={['horizontal', 'horizontal', 'vertical']}>
          <TabList
            borderLeft="none"
            borderRightWidth={['0', '0', '1px']}
            w={['100%', '100%', '250px']}
            p="30px"
          >
            <Text
              d={['none', 'none', 'block']}
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
            >
              Edit profile
            </Text>
            <Tab textAlign="left" border="none">
              Information
            </Tab>
            <Tab isDisabled>Password</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="30px">
              <Flex alignItems="center">
                <Text textAlign="center" fontWeight="bold" fontSize="md">
                  Information
                </Text>
                <Spacer />
                <ModalCloseButton />
              </Flex>
              <ModalBody>
                <Stack mt="20px" spacing="4">
                  <HStack alignItems="flex-end">
                    <Avatar
                      size="lg"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Stack ml="20px">
                      <HStack>
                        <SolidButton size="sm" title="Change" />
                        <IconButton
                          variant="outline"
                          size="sm"
                          icon={<BsTrashFill />}
                        />
                      </HStack>
                      <FormLabel fontSize="xs">
                        JPG, GIF or PNG. Max size 800K
                      </FormLabel>
                    </Stack>
                  </HStack>
                  <Box>
                    <FormLabel fontSize="xs">Email address</FormLabel>
                    <Input
                      size="sm"
                      bg="white"
                      variant="outline"
                      placeholder="Outline"
                    />
                  </Box>
                  <Box>
                    <FormLabel fontSize="xs">Email address</FormLabel>
                    <Input
                      size="sm"
                      bg="white"
                      variant="outline"
                      placeholder="Outline"
                    />
                  </Box>
                  <Box>
                    <FormLabel fontSize="xs">Email address</FormLabel>
                    <Textarea
                      size="sm"
                      bg="white"
                      placeholder="Here is a sample placeholder"
                    />
                  </Box>
                  <SolidButton size="sm" title="Save Changes" />
                </Stack>
              </ModalBody>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalContent>
    </Modal>
  );
}
