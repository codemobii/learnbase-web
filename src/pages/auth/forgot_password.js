import React, { useState } from 'react';
import FormInput from '../../components/inputs/form.input';
import AuthLayout from '../../components/layouts/auth.layout';
import { BsEnvelope } from 'react-icons/bs';
import SolidButton from '../../components/buttons/solid.button';
import AuthUtils from '../../utils/auth.utils';

export default function ForgotPassword() {
  //

  const { handleForgotPassword, loading } = AuthUtils();

  // The state managers
  const [email, setEmail] = useState('');

  const data = {
    email: email,
  };

  return (
    <AuthLayout
      title="Steechit | Forgot password"
      page="Forgot password"
      desc="Enter your email address to reset your password. A password reset code will be send to you."
    >
      <FormInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        title="Email address"
        icon={<BsEnvelope />}
        type="email"
      />
      <SolidButton
        loading={loading}
        onClick={() => handleForgotPassword(data)}
        size="md"
        title="Sign in"
      />
    </AuthLayout>
  );
}
