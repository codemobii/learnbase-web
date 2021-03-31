import { Box } from '@chakra-ui/react';
import React from 'react';
import ProfileHeader from '../headers/profile.header';
import LoaderPart from '../parts/loader.part';
import PageWrapper from '../parts/wrapper.part';
import MainLayout from './main.layout';

export default function ProfileLayout({
  children,
  title = '',
  isMain = false,
  loading = false,
  module = false,
  isHeader = true,
}) {
  return (
    <MainLayout>
      <Box w="100%">
        {loading ? (
          <LoaderPart />
        ) : (
          <>
            {isHeader && <ProfileHeader module={module} isMain={isMain} />}
            <Box mt={!isHeader && '100px'}>
              <PageWrapper loading={loading}>{children}</PageWrapper>
            </Box>
          </>
        )}
      </Box>
    </MainLayout>
  );
}
