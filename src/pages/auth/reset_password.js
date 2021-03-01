import React, { useState } from 'react';
import FormInput from '../../components/inputs/form.input';
import AuthLayout from '../../components/layouts/auth.layout';
import { BsLock } from 'react-icons/bs';
import PasswordInput from '../../components/inputs/password.input';
import SolidButton from '../../components/buttons/solid.button';
import AuthUtils from '../../utils/auth.utils';

export default function ResetPassword() {
  //

  const { handleResetPassword, loading } = AuthUtils();

  // The state managers
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    resetCode: parseFloat(code),
    password: password,
  };

  return (
    <AuthLayout
      title="Steechit | Reset password"
      page="Reset password"
      desc="Enter the code sent to your email address to continue"
    >
      <FormInput
        value={code}
        onChange={e => setCode(e.target.value)}
        title="Enter 4 digit code sent your email"
        icon={<BsLock />}
        type="number"
      />
      <PasswordInput
        value={password}
        title="New password"
        onChange={e => setPassword(e.target.value)}
      />
      <SolidButton
        loading={loading}
        onClick={() => handleResetPassword(data)}
        size="md"
        title="Reset password"
      />
    </AuthLayout>
  );
}
