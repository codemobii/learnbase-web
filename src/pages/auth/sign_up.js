import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/inputs/form.input';
import AuthLayout from '../../components/layouts/auth.layout';
import { BsEnvelope, BsPerson, BsPhone } from 'react-icons/bs';
import PasswordInput from '../../components/inputs/password.input';
import SolidButton from '../../components/buttons/solid.button';
import { Flex, Text } from '@chakra-ui/react';
import TransparentButton from '../../components/buttons/transparent.button';
import AuthUtils from '../../utils/auth.utils';
import useQuery from '../../routes/usequery.routes';

export default function Signup() {
  //

  const { handleRegister, loading } = AuthUtils();

  // State managers
  // const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // Pass the data to the controller
  const data = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    role: useQuery().get('role') && 2,
  };

  return (
    <AuthLayout
      title="Steechit | Get started"
      page="Sign up"
      desc="Sign up to your account using email and password provided during registration."
    >
      <FormInput
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        title="First name"
        icon={<BsPerson />}
        type="text"
      />
      <FormInput
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        title="Last name"
        icon={<BsPerson />}
        type="text"
      />
      <FormInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        title="Email address"
        icon={<BsEnvelope />}
        type="email"
      />
      <FormInput
        value={phone}
        onChange={e => setPhone(e.target.value)}
        title="Phone number"
        icon={<BsPhone />}
        type="number"
      />
      <PasswordInput
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <SolidButton
        loading={loading}
        onClick={() => handleRegister(data)}
        size="md"
        title="Sign in"
      />

      <Flex justify="center" align="center">
        <Text mr="1">Don't have an account?</Text>
        <Link to="/auth/sign_in">
          <TransparentButton title="Sign in" />
        </Link>
      </Flex>
    </AuthLayout>
  );
}
