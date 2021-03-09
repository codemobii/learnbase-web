import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/inputs/form.input';
import AuthLayout from '../../components/layouts/auth.layout';
import { BsEnvelopeFill } from 'react-icons/bs';
import PasswordInput from '../../components/inputs/password.input';
import SolidButton from '../../components/buttons/solid.button';
import { Checkbox, Flex, Text } from '@chakra-ui/react';
import TransparentButton from '../../components/buttons/transparent.button';
import AuthUtils from '../../utils/auth.utils';

export default function Signin() {
  // State managers
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //
  const { handleLogin, loading } = AuthUtils();

  const data = {
    email: email,
    password: password,
  };

  return (
    <AuthLayout
      title="Steechit | Sign in"
      page="Sign in"
      desc="Sign in to your account using email and password provided during registration."
    >
      <FormInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        title="Email address"
        icon={<BsEnvelopeFill />}
        type="email"
      />
      <PasswordInput
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Flex justify="space-between">
        <Checkbox defaultIsChecked>Stay signed in</Checkbox>
        <Link to="/auth/forgot_password">
          <TransparentButton title="Forgot password?" />
        </Link>
      </Flex>
      <SolidButton
        loading={loading}
        onClick={() => handleLogin(data)}
        size="md"
        title="Sign in"
      />

      <Flex justify="center" align="center">
        <Text mr="1">Already have an account?</Text>
        <Link to="/auth/sign_up">
          <TransparentButton title="Get started" />
        </Link>
      </Flex>
    </AuthLayout>
  );
}
