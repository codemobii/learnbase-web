import {
  Avatar,
  Box,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsTrashFill, BsUpload } from 'react-icons/bs';
import SolidButton from '../buttons/solid.button';

export default function EditProdileModal({
  onClose,
  isOpen,
  handleProfilePicUpdate,
  handleUpdateUser,
  uploading,
  loading,
  userInfo,
  fName = '',
  lName = '',
  fullname = '',
  uBio = '',
}) {
  // State managers
  const [firstName, setFirstName] = useState(fName);
  const [lastName, setLastName] = useState(lName);
  const [_fullname, set_fullname] = useState(fullname);
  const [bio, setBio] = useState(uBio);

  const data = {
    firstName: firstName,
    lastName: lastName,
    bio: bio,
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="md"
    >
      <ModalOverlay />
      <ModalContent bg="gray.100" rounded={['0', '0', 'lg']}>
        <ModalHeader>Edit profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack mt="20px" spacing="4">
            <HStack alignItems="flex-end">
              <Avatar
                size="xl"
                name={userInfo.firstName + ' ' + userInfo.lastName}
                src={
                  userInfo.profilePic ||
                  'https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png'
                }
              />
              <Stack ml="20px">
                <HStack>
                  <Box pos="relative">
                    <SolidButton
                      loading={uploading}
                      icon={<BsUpload />}
                      size="sm"
                      title="Change"
                    />
                    <input
                      value=""
                      style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        width: 100,
                        cursor: 'pointer',
                        opacity: 0,
                      }}
                      id="imageFile"
                      type="file"
                      onChange={handleProfilePicUpdate}
                    />
                  </Box>
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
            {userInfo.role === 2 ? (
              <Box>
                <FormLabel fontSize="xs">School namee</FormLabel>
                <Input
                  size="sm"
                  bg="white"
                  variant="outline"
                  placeholder="Fullname"
                  rounded="lg"
                  value={_fullname}
                  onChange={e => set_fullname(e.target.value)}
                />
              </Box>
            ) : (
              <>
                <Box>
                  <FormLabel fontSize="xs">First name</FormLabel>
                  <Input
                    bg="white"
                    variant="outline"
                    placeholder="First name"
                    rounded="lg"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    size="sm"
                  />
                </Box>
                <Box>
                  <FormLabel fontSize="xs">Last name</FormLabel>
                  <Input
                    size="sm"
                    bg="white"
                    variant="outline"
                    placeholder="Last name"
                    rounded="lg"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </Box>
              </>
            )}
            <Box>
              <FormLabel fontSize="xs">Email address</FormLabel>
              <Input
                bg="white"
                variant="outline"
                placeholder="Email address"
                rounded="lg"
                value={userInfo.email}
                disabled
                size="sm"
              />
            </Box>
            <Box>
              <FormLabel fontSize="xs">Phone number</FormLabel>
              <Input
                bg="white"
                variant="outline"
                placeholder="Phone number"
                value={'+234' + userInfo.phone}
                rounded="lg"
                disabled
                size="sm"
              />
            </Box>
            <Box>
              <FormLabel fontSize="xs">Bio</FormLabel>
              <Textarea
                size="sm"
                bg="white"
                placeholder="Your description"
                rounded="lg"
                value={bio}
                onChange={e => setBio(e.target.value)}
              />
            </Box>
            <SolidButton
              loading={loading}
              onClick={() => handleUpdateUser(data)}
              size="md"
              title="Save Changes"
            />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
