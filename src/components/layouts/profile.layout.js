import { Box } from '@chakra-ui/react';
import React from 'react';
import ProfileHeader from '../headers/profile.header';
import PageWrapper from '../parts/wrapper.part';

export default function ProfileLayout({
  children,
  title,
  isMain = false,
  loading = false,
  module = false,
}) {
  return (
    <Box w="100%">
      <ProfileHeader module={module} isMain={isMain} />
      <PageWrapper loading={loading}>{children}</PageWrapper>
    </Box>
  );
}
