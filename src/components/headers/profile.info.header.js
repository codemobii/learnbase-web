import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AuthUtils from '../../utils/auth.utils';
import ProfileUtils from '../../utils/profile.utils';
import OutlinedButton from '../buttons/outlined.button';
import TransparentButton from '../buttons/transparent.button';
import EditProdileModal from '../modals/edit_profile.modal';
import LoaderPart from '../parts/loader.part';

export default function ProfileInfoHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logging, handleLogout } = AuthUtils();

  //
  const {
    userInfo,
    updating,
    uploading,
    loading,
    handleProfilePicUpdate,
    handleGetUser,
    handleUpdateUser,
  } = ProfileUtils();

  //
  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Box d={['block', 'block', 'flex']} color="gray.50" align="center">
      {loading ? (
        <LoaderPart />
      ) : (
        <>
          <Avatar
            size="2xl"
            name={userInfo.firstName + ' ' + userInfo.lastName}
            src={
              userInfo.profilePic ||
              'https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png'
            }
          />
          <Flex
            align="center"
            d={['block', 'block', 'flex']}
            ml={['0px', '0px', '20px']}
            textAlign={['center', 'center', 'left']}
          >
            <Box my={['20px', '20px', '0']}>
              <Text fontSize="2xl" fontWeight="500">
                {userInfo
                  ? userInfo.fullname ||
                    userInfo.firstName + ' ' + userInfo.lastName
                  : null}
              </Text>
              <Text fontSize="sm" fontWeight="light">
                {userInfo.email}
              </Text>
            </Box>
            <HStack
              spacing="4"
              justify="center"
              align="flex-start"
              ml={['0px', '0px', '20px']}
            >
              <OutlinedButton
                onClick={onOpen}
                title="Edit profile"
                size="sm"
                color="whiteAlpha"
              />
              <TransparentButton
                loading={logging}
                onClick={handleLogout}
                title="Logout"
                size="sm"
                color="whiteAlpha"
              />
            </HStack>
          </Flex>
        </>
      )}

      {/* The Edit Profile Modal */}
      <EditProdileModal
        isOpen={isOpen}
        handleProfilePicUpdate={handleProfilePicUpdate}
        uploading={uploading}
        onClose={onClose}
        userInfo={userInfo}
        fName={userInfo.firstName}
        lName={userInfo.lastName}
        uBio={userInfo.bio}
        handleUpdateUser={handleUpdateUser}
        loading={updating}
        fullname={userInfo.fullname}
      />
    </Box>
  );
}
